import React, { useEffect } from 'react'
import { use } from 'react';
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';
import locationIcon from '../assets/locationIcon.svg'





const RoomDetails = () => {
    const { id } = useParams();
    const [ room, setRoom ] = React.useState(null);
    const [mainImage, setMainImage] = React.useState(null);

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room);
        room && setMainImage(room.images[0]);
    }, [id])

  return room &&(
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3x1 md:text-4xl font-playfair'>{room.hotel.name} 
                <span className='font-inter text-sm'>({room.roomType})</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full '>20% OFF</p>
        </div>
        <div className='flex items-center gap-1 mt-2'>
            <StarRating />
            <p className='ml-2'>200+ reviews</p>
        </div>
        {/*room address*/}
        <div className='flex items-center gap-1 mt-2'>
            <img src={locationIcon} alt="location-icon" />
            <span>{room.hotel.address}</span>
        </div>

        {/*room images*/}
        <div className='flex flex-col lg:flex-row   mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover'/>

            </div>
        </div>
    </div>
  )
}

export default RoomDetails