import type { APIContext } from "astro";
import { getCollection } from "astro:content";

function escapeXml(str: string): string {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function toRfc2822(date: Date): string {
	return date.toUTCString();
}

export async function GET({ site }: APIContext) {
	const siteUrl = site?.toString() ?? "https://tinkerers.de";
	const episodes = (await getCollection("episodes")).sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);

	const items = episodes
		.map((episode) => {
			const { title, date, description, duration, audio, chapters, hosts } =
				episode.data;
			const slug = episode.id.replace(/\.mdx?$/, "");
			const episodeUrl = `${siteUrl}/podcast/${slug}`;

			const chaptersXml =
				chapters.length > 0
					? `<podcast:chapters type="application/json" url="${episodeUrl}/chapters.json" />
			${chapters.map((ch) => `<psc:chapter start="${ch.time}" title="${escapeXml(ch.title)}"${ch.url ? ` href="${escapeXml(ch.url)}"` : ""} />`).join("\n\t\t\t")}`
					: "";

			return `
		<item>
			<title>${escapeXml(title)}</title>
			<link>${episodeUrl}</link>
			<guid isPermaLink="true">${episodeUrl}</guid>
			<pubDate>${toRfc2822(date)}</pubDate>
			<description>${escapeXml(description)}</description>
			<enclosure url="${audio.mp3.url}" length="${audio.mp3.size}" type="audio/mpeg" />
			<itunes:title>${escapeXml(title)}</itunes:title>
			<itunes:summary>${escapeXml(description)}</itunes:summary>
			<itunes:duration>${duration}</itunes:duration>
			<itunes:episode>${episode.data.number}</itunes:episode>
			<itunes:author>${hosts.join(", ")}</itunes:author>
			<podcast:alternateEnclosure type="audio/ogg; codecs=opus" length="${audio.opus.size}" default="false" title="Opus">
				<podcast:source uri="${audio.opus.url}" />
			</podcast:alternateEnclosure>
			<podcast:alternateEnclosure type="audio/mp4" length="${audio.m4a.size}" default="false" title="AAC">
				<podcast:source uri="${audio.m4a.url}" />
			</podcast:alternateEnclosure>
			${chaptersXml}
		</item>`;
		})
		.join("\n");

	const lastBuildDate =
		episodes.length > 0 ? toRfc2822(episodes[0].data.date) : toRfc2822(new Date());

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
	xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
	xmlns:podcast="https://podcastindex.org/namespace/1.0"
	xmlns:psc="http://podlove.org/simple-chapters"
	xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Tinkerers Podcast</title>
		<link>${siteUrl}</link>
		<description>Zwei Softwareentwickler, Michael Heide und Levin Keller, reden übers Tinkern mit AI.</description>
		<language>de</language>
		<lastBuildDate>${lastBuildDate}</lastBuildDate>
		<atom:link href="${siteUrl}/podcast/feed.xml" rel="self" type="application/rss+xml" />

		<itunes:author>Michael Heide, Levin Keller</itunes:author>
		<itunes:owner>
			<itunes:name>Tinkerers</itunes:name>
			<itunes:email>podcast@tinkerers.de</itunes:email>
		</itunes:owner>
		<itunes:category text="Technology" />
		<itunes:explicit>false</itunes:explicit>
		<itunes:type>episodic</itunes:type>

		<podcast:locked>no</podcast:locked>
		<podcast:guid>tinkerers-podcast-de</podcast:guid>
${items}
	</channel>
</rss>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
		},
	});
};
