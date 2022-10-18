import React from 'react'
import Card from './Card'
import useListing from '../context/listingContext'
import { useEffect } from 'react'

const Listings = () => {
  const { listing, reset } = useListing()
  useEffect(() => {
    reset()
  }, [])
  return (
    <div className={`${listing.length && 'listings'}`}>
      {listing.length > 0 ? (
        listing.map((data) => {
          return <Card key={data.id} data={data} />
        })
      ) : (
        <h1 className='fav'>No Listings</h1>
      )}
    </div>
  )
}

export default Listings
