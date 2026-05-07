import { defineCollection, z } from "astro:content";

const audioFile = z.object({
	url: z.string().url(),
	size: z.number().int().positive(),
});

const chapter = z.object({
	time: z.string().regex(/^\d{2}:\d{2}:\d{2}$/),
	title: z.string(),
	url: z.string().url().optional(),
});

const episodes = defineCollection({
	type: "content",
	schema: z.object({
		number: z.number().int().positive(),
		title: z.string(),
		date: z.coerce.date(),
		description: z.string(),
		duration: z.string().regex(/^\d{2}:\d{2}:\d{2}$/),
		audio: z.object({
			mp3: audioFile,
			m4a: audioFile,
			opus: audioFile,
		}),
		chapters: z.array(chapter).optional().default([]),
		tags: z.array(z.string()).optional().default([]),
		hosts: z.array(z.string()).default(["Michael Heide", "Levin Keller"]),
	}),
});

const DEFAULT_PITCHES_URL = "https://github.com/orgs/tinkerers-de/discussions/categories/pitches";

const chapters = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		location: z.string(),
		region: z.string().optional(),
		moderators: z.array(z.string()).default([]),
		pitchesUrl: z.string().url().default(DEFAULT_PITCHES_URL),
	}),
});

const eventLink = z.object({
	label: z.string(),
	url: z.string().url(),
});

const events = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		chapter: z.string(),
		location: z.string(),
		cancelled: z.boolean().default(false),
		links: z.array(eventLink).default([]),
	}),
});

export const collections = { episodes, chapters, events };
