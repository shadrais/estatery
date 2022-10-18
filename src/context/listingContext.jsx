import { useContext, createContext, useState } from 'react'
import data from '../data/MOCK_DATA.json'

export const ListingContext = createContext()

export const ContextProvider = ({ children }) => {
  const [listing, setListing] = useState(data)
  const [favourites, setFavourites] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState({})
  const [filterApplied, setFilterApplied] = useState(false)

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm)
    if (searchTerm === '' || searchTerm === null || searchTerm.length < 1) {
      !filterApplied ? setListing(data) : filteredTerms(filter)
    } else {
      const filtered = listing.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
      setListing(filtered)
    }
  }

  const locationFilter = (loc, item) => {
    if (loc === '' || loc === null || loc.length < 1) {
      return true
    }
    if (
      item.address.toLowerCase().includes(loc.toLowerCase()) ||
      item.country.toLowerCase().includes(loc.toLowerCase())
    ) {
      return true
    } else {
      return false
    }
  }

  const rangeFilter = (start, end, item) => {
    if (start === '' || start === null || start.length < 1) {
      return true
    }
    if (item.price >= start && item.price <= end) {
      return true
    } else {
      return false
    }
  }

  const typeFilter = (type, item) => {
    if (type === '' || type === null || type.length < 1) {
      return true
    }
    if (item.type.toLowerCase().includes(type.toLowerCase())) {
      return true
    } else {
      return false
    }
  }

  const handleSearchAndFilter = (searchTerm, item) => {
    if (searchTerm === '' || searchTerm === null || searchTerm.length < 1) {
      return true
    }
    if (
      Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    ) {
      return true
    } else {
      return false
    }
  }

  const filteredTerms = (filters) => {
    setFilter(filters)
    const { location, date, range, type } = filters
    if (!location && !date && !range && !type) {
      setFilterApplied(false)
    } else {
      setFilterApplied(true)
    }
    const [start, end] = range.split(',')
    const filtered = data.filter((item) => {
      return (
        locationFilter(location, item) &&
        rangeFilter(start, end, item) &&
        typeFilter(type, item) &&
        handleSearchAndFilter(search, item)
      )
    })
    setListing(!filtered ? data : filtered)
  }

  const handleFavourites = (id, status) => {
    const newListing = listing.map((item) => {
      if (item.id === id) {
        item.liked = status
      }
      return item
    })
    setListing(newListing)
    setFavourites(newListing.filter((item) => item.liked === true))
  }

  return (
    <ListingContext.Provider
      value={{
        listing,
        setListing,
        handleSearch,
        handleFavourites,
        favourites,
        filteredTerms,
      }}>
      {children}
    </ListingContext.Provider>
  )
}

const useListing = () => useContext(ListingContext)

export default useListing
