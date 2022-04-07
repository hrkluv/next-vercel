import {useState, ReactNode} from 'react'

function Search(
  {
    value,
    onChange,
    children
  }:{
    value: string
    onChange: (e:any) => void
    children: ReactNode
  }
) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

function TestApp() {
  const [search, setSearch] = useState('')

  function handleChange(e: any) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Search value={search} onChange={handleChange}>Search:</Search>
      <p>Searchs for {search ? search : '...'}</p>
      <img src="/vercel.svg" width="100" alt="vercel img" />
    </div>
  )
}

export default TestApp