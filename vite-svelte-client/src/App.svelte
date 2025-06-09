<script lang="ts">
	import { highlightWordsTag } from 'search-plus-ts'
	import { useSearchPlusTs } from './lib/useSearchPlusTs.svelte'
	import data from './lib/data'

	// Use the composable
	const search = useSearchPlusTs(data, ['quote', 'author'], 0.3)

	console.log('🚀 results :- ', search.results)
</script>

<div class="max-w-3xl mx-auto p-6">
	<input
		type="search"
		bind:value={search.query}
		placeholder="Search quotes..."
		class="w-full p-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6 shadow-sm transition-all"
	/>
	{#if search.results.length === 0}
		<p class="text-center text-stone-500 mt-10">No results found.</p>
	{:else}
		{#each search.results as item}
			<div
				class="mb-6 p-6 bg-white hover:bg-stone-50 transition-colors duration-200 border border-stone-200 rounded-2xl shadow-sm"
			>
				<div class="text-xl font-bold text-stone-800 mb-2">
					<span class="text-orange-600">Quote:</span>{' '}
					{@html highlightWordsTag(item.quote, search.query, 'search-match')}
				</div>

				<div class="text-sm text-stone-600">
					<span class="font-semibold text-orange-500">Author:</span>{' '}
					{@html highlightWordsTag(item.author, search.query, 'search-match')}
				</div>
			</div>
		{/each}
	{/if}
</div>
