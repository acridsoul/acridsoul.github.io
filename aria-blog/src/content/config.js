import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string(),  // Add the date field here
		dateFormatted: z.string(),
	}),
});

export const collections = {
	post: postCollection,
};
