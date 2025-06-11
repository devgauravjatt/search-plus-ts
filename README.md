# 🔍 Search-Plus-Ts

### Search always with machs and highlights.

`search-plus-ts` is server and client side searching library. and with text highlighting and marking.

![GitHub License](https://img.shields.io/github/license/devgauravjatt/search-plus-ts?logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/devgauravjatt/search-plus-ts?logo=git)
![NPM Downloads](https://img.shields.io/npm/dw/search-plus-ts?logo=npm&color=%23f75352)
![NPM Version](https://img.shields.io/npm/v/search-plus-ts?logo=npm&color=%23f75352)

---

# 📚 Documentation

Full Guide and Examples With server and client react - [👩‍💻 With sever and react client ](https://github.com/devgauravjatt/search-plus-ts/tree/examples/with-server-and-client)

Full Guide and Examples With client react hook - [👩‍💻 Vite react client](https://github.com/devgauravjatt/search-plus-ts/tree/examples/vite-react-client)

🧨 More examples - [👩‍💻 More Examples ](https://github.com/devgauravjatt/search-plus-ts/tree/examples)

## 🚀 Features

- Search always with machs
- Highlighting and Marking
- Work with any framework
- Server and Client side searching
- Easy to use

## ✨ Quick Start Code

```ts
// npm install search-plus-ts is required

import searchPlusTs from 'search-plus-ts'

const quotes = [
  {
    id: 1,
    quote:
      'Your heart is the size of an ocean. Go find yourself in its hidden depths.',
    author: 'Rumi',
  },
  {
    id: 2,
    quote:
      'The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.',
    author: 'Abdul Kalam',
  },
  {
    id: 3,
    quote:
      'Thinking is the capital, Enterprise is the way, Hard Work is the solution.',
    author: 'Abdul Kalam',
  },
  {
    id: 4,
    quote: "If You Can'T Make It Good, At Least Make It Look Good.",
    author: 'Bill Gates',
  },
  {
    id: 5,
    quote:
      "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
    author: 'Rumi',
  },
]

const SearchPlus = new searchPlusTs({
  data: quotes,
  keys: ['quote', 'author'],
})

const results = SearchPlus.search('heart yourself rumi')

console.log('🚀 results :-', results)
🚀 results :-  [
  {
    id: 1,
    quote: "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    author: "Rumi",
  }
]
```
