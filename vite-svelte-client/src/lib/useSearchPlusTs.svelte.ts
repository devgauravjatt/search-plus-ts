/*
! This code not change and only copy paste and use in your project
* this code for reuse and for svelte 5 composable
*/

import SearchPlusTs from 'search-plus-ts'

export function useSearchPlusTs<T>(
	data: T[],
	keys: (keyof T)[],
	threshold = 0.5
) {
	let query = $state('')

	const searcher = $derived(
		new SearchPlusTs<T>({
			data,
			keys,
			threshold,
		})
	)

	const results = $derived(query.trim() ? searcher.search(query) : data)

	return {
		get query() {
			return query
		},
		set query(value: string) {
			query = value
		},
		get results() {
			return results
		},
	}
}
