import { useContext, createContext, useState } from 'react'
import data from '../data/MOCK_DATA.json'

export const ListingContext = createContext()

export const ContextProvider = ({ children }) => {
  const [listing, setListing] = useState(data)
  const [search, setSearch] = useState('')

  const handleSearch = (searchTerm) => {
    if (searchTerm === '' || searchTerm === null || searchTerm.length < 1) {
      console.log('no search term')
      setListing(data)
    }
    const filtered = data.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
    setListing(!filtered ? data : filtered)
  }

  return (
    <ListingContext.Provider value={{ listing, setListing, handleSearch }}>
      {children}
    </ListingContext.Provider>
  )
}

const useListing = () => useContext(ListingContext)

export default useListing
