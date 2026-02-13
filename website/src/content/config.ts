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
		hosts: z.array(z.string()).default(["Michael Heide", "Levin Keller"]),
	}),
});

export const collections = { episodes };
