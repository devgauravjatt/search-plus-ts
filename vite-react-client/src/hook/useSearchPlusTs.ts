/*
! This code not change and only copy paste and use in your project
* this code for reuse and for react hook
*/

import { useState, useMemo } from 'react'
import SearchPlusTs from 'search-plus-ts'

export function useSearchPlusTs<T>(
	data: T[],
	keys: (keyof T)[],
	threshold = 0.5
): {
	query: string
	setQuery: React.Dispatch<React.SetStateAction<string>>
	results: T[]
} {
	const [query, setQuery] = useState('')

	const searcher = useMemo(
		() =>
			new SearchPlusTs<T>({
				data,
				keys,
				threshold,
			}),
		[data, keys, threshold]
	)

	const results = useMemo(
		() => (query.trim() ? searcher.search(query) : data),
		[query, data, searcher]
	)

	return { query, setQuery, results }
}

export default useSearchPlusTs
