import { highlightWordsTag } from 'search-plus-ts'
import quotes from './data'
import useSearchPlusTs from './hook/useSearchPlusTs'

const App: React.FC = () => {
	// * this is hook using search-plus-ts
	const { query, setQuery, results } = useSearchPlusTs(
		quotes,
		['quote', 'author'],
		0.3
	)

	return (
		<div className='max-w-3xl mx-auto p-6'>
			<input
				type='search'
				value={query}
				// * this is custom search input
				onChange={(e) => setQuery(e.target.value)}
				placeholder='Search quotes...'
				className='w-full p-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6 shadow-sm transition-all'
			/>

			{results.length === 0 ? (
				<p className='text-center text-stone-500 mt-10'>No results found.</p>
			) : (
				results.map((quote) => (
					<div
						key={quote.id}
						className='mb-6 p-6 bg-white hover:bg-stone-50 transition-colors duration-200 border border-stone-200 rounded-2xl shadow-sm'
					>
						<div className='text-xl font-bold text-stone-800 mb-2'>
							<span className='text-orange-600'>Quote:</span>{' '}
							<span
								dangerouslySetInnerHTML={{
									__html: highlightWordsTag(quote.quote, query, 'search-match'),
								}}
							/>
						</div>

						<div className='text-sm text-stone-600'>
							<span className='font-semibold text-orange-500'>Author:</span>{' '}
							<span
								dangerouslySetInnerHTML={{
									__html: highlightWordsTag(
										quote.author,
										query,
										'search-match'
									),
								}}
							/>
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default App
