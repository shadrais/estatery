import React from 'react'
import Card from './Card'
import useListing from '../context/listingContext'

const Listings = () => {
  const { listing } = useListing()
  return (
    <div className='listings'>
      {listing.map((data) => {
        return <Card key={data.id} data={data} />
      })}
    </div>
  )
}

export default Listings
