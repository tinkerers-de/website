interface Env {
	B2_BUCKET: string;
	B2_REGION: string;
}

const CACHE_TTL = 60 * 60 * 24 * 30; // 30 days

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const path = url.pathname.slice(1); // remove leading /

		if (!path) {
			return new Response("Not Found", { status: 404 });
		}

		const b2Url = `https://${env.B2_BUCKET}.s3.${env.B2_REGION}.backblazeb2.com/${path}`;

		const cacheKey = new Request(b2Url, request);
		const cache = caches.default;

		let response = await cache.match(cacheKey);
		if (response) {
			return response;
		}

		const b2Response = await fetch(b2Url, {
			headers: {
				"Accept-Encoding": request.headers.get("Accept-Encoding") ?? "",
			},
		});

		if (!b2Response.ok) {
			return new Response("Not Found", { status: 404 });
		}

		const contentType = b2Response.headers.get("Content-Type") ?? "application/octet-stream";
		const contentLength = b2Response.headers.get("Content-Length");

		const headers = new Headers({
			"Content-Type": contentType,
			"Cache-Control": `public, max-age=${CACHE_TTL}`,
			"Access-Control-Allow-Origin": "*",
		});

		if (contentLength) {
			headers.set("Content-Length", contentLength);
		}

		response = new Response(b2Response.body, {
			status: 200,
			headers,
		});

		// Cache the response
		await cache.put(cacheKey, response.clone());

		return response;
	},
} satisfies ExportedHandler<Env>;
