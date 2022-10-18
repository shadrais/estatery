import React from 'react'
import { BiBed } from 'react-icons/bi'
import { FaBath } from 'react-icons/fa'
import { TbDimensions } from 'react-icons/tb'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useState } from 'react'

const Card = ({ data }) => {
  const [liked, setLiked] = useState(false)

  const handleLikes = () => {
    setLiked(!liked)
  }

  return (
    <div className='card'>
      <div>
        <img
          src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt={data.name}
          className='card-img'
          height='200'
          width='300'
        />
      </div>
      <div className='prices'>
        <div>
          <span className='price-bold'>${data.price}</span>
          <span className='price'>/month</span>
        </div>
        {liked ? (
          <BsHeartFill className='icon' onClick={handleLikes} />
        ) : (
          <BsHeart className='icon' onClick={handleLikes} />
        )}
        {/* // <BsHeart className='icon' /> */}
      </div>
      <div>
        <div className='  name '>
          <h3>{data.name}</h3>
        </div>
      </div>
      <div className='address'>
        <p>
          {data.address},{data.country}
        </p>
      </div>
      <div>
        <hr />
      </div>
      <div className='room-desc'>
        <div className='room-data'>
          <span className='font-sm'>
            <BiBed className='icon-sm' />
          </span>
          <p className='font-sm'>{data.bed} beds</p>
        </div>
        <div className='room-data'>
          <span className='font-sm'>
            <FaBath className='icon-sm' />
          </span>
          <span className='font-sm'>{data.bathroom} bathrooms</span>
        </div>
        <div className='room-data'>
          <span className='font-sm'>
            <TbDimensions className='icon-sm' />
          </span>
          <span className='font-sm'>
            {data.height}X{data.width} m<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
