interface Env {
	B2_BUCKET: string;
	B2_REGION: string;
}

const CACHE_TTL = 60 * 60 * 24 * 30; // 30 days
const CORS_HEADERS = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
	"Access-Control-Allow-Headers": "Range",
	"Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges",
};

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		if (request.method === "OPTIONS") {
			return new Response(null, { status: 204, headers: CORS_HEADERS });
		}

		if (request.method !== "GET" && request.method !== "HEAD") {
			return new Response("Method Not Allowed", { status: 405 });
		}

		const url = new URL(request.url);
		const path = url.pathname.slice(1);

		if (!path) {
			return new Response("Not Found", { status: 404 });
		}

		const isHead = request.method === "HEAD";
		const b2Url = `https://${env.B2_BUCKET}.s3.${env.B2_REGION}.backblazeb2.com/${path}`;

		// Always use GET for cache key so HEAD requests hit the same cache
		const cacheKey = new Request(b2Url);
		const cache = caches.default;

		const cached = await cache.match(cacheKey);
		if (cached) {
			if (isHead) {
				return new Response(null, { status: cached.status, headers: cached.headers });
			}
			return cached;
		}

		// Forward Range header for audio seeking
		const fetchHeaders: Record<string, string> = {};
		const rangeHeader = request.headers.get("Range");
		if (rangeHeader) {
			fetchHeaders["Range"] = rangeHeader;
		}

		const b2Response = await fetch(b2Url, { headers: fetchHeaders });

		if (!b2Response.ok && b2Response.status !== 206) {
			return new Response("Not Found", { status: 404 });
		}

		const headers = new Headers(CORS_HEADERS);
		headers.set("Cache-Control", `public, max-age=${CACHE_TTL}`);
		headers.set("Accept-Ranges", "bytes");

		// Forward relevant headers from B2
		for (const key of ["Content-Type", "Content-Length", "Content-Range", "ETag"]) {
			const value = b2Response.headers.get(key);
			if (value) {
				headers.set(key, value);
			}
		}

		const response = new Response(b2Response.body, {
			status: b2Response.status,
			headers,
		});

		// Only cache full responses (not partial/206)
		if (b2Response.status === 200) {
			await cache.put(cacheKey, response.clone());
		}

		if (isHead) {
			return new Response(null, { status: response.status, headers: response.headers });
		}

		return response;
	},
} satisfies ExportedHandler<Env>;
