import { useEffect, useState } from 'react'
import { highlightWordsTag } from 'search-plus-ts'

const App: React.FC = () => {
	const [query, setQuery] = useState('')
	const [posts, setPosts] = useState<
		{
			title: string
			categorie: string
			date: string
		}[]
	>([])

	useEffect(() => {
		if (query.trim() !== '') {
			fetch('http://localhost:3000/search?q=' + query).then((res) =>
				res.json().then((data) => setPosts(data.results))
			)
		} else {
			fetch('http://localhost:3000').then((res) =>
				res.json().then((data) => setPosts(data.posts))
			)
		}
	}, [query])

	return (
		<div className='max-w-3xl mx-auto p-6'>
			<input
				type='search'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder='Search quotes...'
				className='w-full p-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6 shadow-sm transition-all'
			/>

			{posts.length === 0 ? (
				<p className='text-center text-stone-500 mt-10'>No results found.</p>
			) : (
				posts.map((post, id) => (
					<div
						key={id}
						className='mb-6 p-6 bg-white hover:bg-stone-50 transition-colors duration-200 border border-stone-200 rounded-2xl shadow-sm'
					>
						<div className='text-xl font-bold text-stone-800 mb-2'>
							<span className='text-orange-600'>Quote:</span>{' '}
							<span
								dangerouslySetInnerHTML={{
									__html: highlightWordsTag(post.title, query, 'search-match'),
								}}
							/>
						</div>

						<div className='flex justify-between items-center'>
							<div className='text-sm text-stone-600'>
								<span className='font-semibold text-orange-500'>Author:</span>{' '}
								<span
									dangerouslySetInnerHTML={{
										__html: highlightWordsTag(
											post.categorie,
											query,
											'search-match'
										),
									}}
								/>
							</div>
							<div className='text-sm text-stone-600'>
								<span className='font-semibold text-orange-500'>
									{' '}
									Publish Time:
								</span>{' '}
								<span
									dangerouslySetInnerHTML={{
										__html: highlightWordsTag(post.date, query, 'search-match'),
									}}
								/>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default App
