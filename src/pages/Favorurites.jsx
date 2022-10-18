import React from 'react'
import Card from '../components/Card'
import useListing from '../context/listingContext'

const Favorurites = () => {
  const { favourites } = useListing()
  console.log(favourites)
  return (
    <div className={`${favourites.length && 'listings'}`}>
      {favourites.length ? (
        favourites?.map((data) => {
          return <Card key={data.id} data={data} />
        })
      ) : (
        <h1 className='fav'>No Favourites</h1>
      )}
    </div>
  )
}

export default Favorurites
