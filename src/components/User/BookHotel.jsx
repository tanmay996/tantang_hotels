import React from 'react'
import { useParams } from 'react-router-dom'
import About from './About'
import BookedHotelCard from './BookedHotelCard'
import hotel_data from '../../ hotel_data.json'

function BookHotel(props) {
  const { hotelName } = useParams();
  return (
    <div>
      <About
         word={hotelName}
         aboutpara="Sewa Apartemen Impian Anda. Ruang Nyaman, Hidup Bahagia. Temukan Apartemen Terbaik di Indonesia Bersama Kami!"
          />
     
      {
          
          hotel_data
          .filter((item) =>hotelName == item.htl_name)
          .map((item) => (
           
              <BookedHotelCard 
              key={item.id} 
              id={item.id} 
              name={item.htl_name} 
              city={item.city} 
              detail={item.detail} 
              star={item.star} 
              image={item.image} 
              rooms={item.rooms}
              price={item.price}
              property1={item.prope1}
              property2={item.prope2}
              property3={item.prope3}
              property4={item.prope4}
              />
          ))
         
         
        }
    </div>
  )
}

export default BookHotel