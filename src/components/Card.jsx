import React from 'react'

const dummyData = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1000,
    name: 'Palm Harbour',
    address: '2699, Green Valley, Highland',
    bed: 3,
    barhroom: 2,
    height: 5,
    width: 7,
  },
]

const Card = () => {
  return (
    <div className='card'>
      <div>
        <img
          src={dummyData[0].img}
          alt={dummyData[0].name}
          className='card-img'
          height='200'
          width='300'
        />
      </div>
      <div className='prices'>
        <div>
          <span className='price-bold'>${dummyData[0].price}</span>
          <span className='price'>/month</span>
        </div>
        <span>Like</span>
      </div>
      <div>
        <div className='  name '>
          <h3>{dummyData[0].name}</h3>
        </div>
      </div>
      <div className='address'>
        <p>{dummyData[0].address}</p>
      </div>
      <div>
        <hr />
      </div>
      <div className='room-desc'>
        <div className='room-data'>
          <span className='font-sm'>bed</span>
          <p className='font-sm'>{dummyData[0].bed} beds</p>
        </div>
        <div className='room-data'>
          <span className='font-sm'>bath</span>
          <span className='font-sm'>{dummyData[0].barhroom} beds</span>
        </div>
        <div className='room-data'>
          <span className='font-sm'>Size</span>
          <span className='font-sm'>
            {dummyData[0].height}X{dummyData[0].width} m<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
