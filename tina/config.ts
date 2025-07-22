import { defineConfig } from 'tinacms'

const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	'main'

export default defineConfig({
	branch,
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: 'admin',
		publicFolder: 'static'
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'static'
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'content/posts',
				defaultItem: () => ({
					date: new Date().toISOString()
				}),
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'datetime',
						name: 'date',
						label: 'Publish Date',
						required: true
					},
					{
						type: 'string',
						list: true,
						name: 'tags',
						label: 'Tags'
					},
					{
						type: 'string',
						list: true,
						name: 'categories',
						label: 'Categories'
					},
					{
						type: 'string',
						list: true,
						name: 'teams',
						label: 'Teams'
					},
					{
						type: 'image',
						name: 'image',
						label: 'Featured Image'
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true
					}
				]
			}
		]
	}
})
