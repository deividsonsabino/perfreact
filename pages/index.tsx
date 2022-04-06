import type { NextPage } from 'next'
import { FormEvent, useCallback, useState } from 'react'
import { SearchResults } from '../components/SearchResults'


const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json();
    setResults(data)
  }

  const addToWishList = useCallback(() => {
    async (id: number) => {

    }
  }, [])

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results} onAddWichList={addToWishList} />
    </div>
  )
}

export default Home
