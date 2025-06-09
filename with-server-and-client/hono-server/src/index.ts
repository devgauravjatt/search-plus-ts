import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import SearchPlusTs from 'search-plus-ts'
import posts from './data.js'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(cors())

app.get('/', (c) => {
	return c.json({ posts })
})

app.get('/search', (c) => {
	const search = c.req.query().q
	if (!search) {
		return c.json({ posts: [] })
	}

	const SearchPlus = new SearchPlusTs({
		data: posts,
		keys: ['title', 'categorie', 'date'],
	})

	const results = SearchPlus.search(search)

	return c.json({ results })
})

serve(
	{
		fetch: app.fetch,
		port: 3000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`)
	}
)
