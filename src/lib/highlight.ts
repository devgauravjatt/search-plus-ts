function highlightWordsTag(
  text: string,
  search: string,
  className: string,
  tagName: string = 'span',
): string {
  if (search.trim() === '') {
    return text
  }
  const words = search.toLowerCase().trim().split(/\s+/)
  const pattern = new RegExp(`\\b(${words.join('|')})\\b`, 'gi')
  return text.replace(
    pattern,
    (match) => `<${tagName} class="${className}">${match}</${tagName}>`,
  )
}

function highlightWordsSymbols(
  text: string,
  search: string,
  symbol: string = '🔍',
): string {
  if (search.trim() === '') {
    return text
  }
  const words = search.toLowerCase().trim().split(/\s+/)
  const pattern = new RegExp(`\\b(${words.join('|')})\\b`, 'gi')
  return text.replace(pattern, (match) => `${symbol} ${match}`)
}

export { highlightWordsSymbols, highlightWordsTag }
