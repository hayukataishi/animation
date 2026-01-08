import { defineCollection, z } from 'astro:content';

const gimmicks = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()),
		order: z.number().default(0),
        // 対応コンポーネント名を指定（オプション、あるいはslugで解決）
        componentName: z.string().optional(),
	}),
});

export const collections = { gimmicks };
