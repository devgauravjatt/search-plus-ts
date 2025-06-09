import Fuse, { type IFuseOptions } from 'fuse.js'

interface getOptions<T> {
  data: T[]
  keys: (keyof T)[]
  threshold?: number
}

export class SearchPlusTs<T> {
  private fuse: Fuse<T>
  private fuseOptions: IFuseOptions<T>

  constructor(getOptions: getOptions<T>) {
    this.fuseOptions = {
      keys: getOptions.keys as string[],
      threshold: getOptions.threshold || 0.5,
      useExtendedSearch: true,
    }
    this.fuse = new Fuse(getOptions.data, this.fuseOptions)
  }

  search(search: string): T[] {
    if (!search || typeof search !== 'string') return []

    const terms = search.toLowerCase().trim().split(/\s+/)
    const andOrConditions = terms.map((t) => ({
      $or: (this.fuseOptions.keys as string[]).map((key) => ({
        [key]: `'${t}`,
      })),
    }))

    return this.fuse
      .search({ $and: andOrConditions })
      .map((result) => result.item)
  }
}

export default SearchPlusTs
