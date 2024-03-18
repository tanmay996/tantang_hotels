import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import About from './About'
import hotel1 from '../images/hotel1.jpeg'
import hotel2 from '../images/hotel2.jpeg'
import hotel3 from '../images/hotel3.jpeg'
import hotel4 from '../images/hotel4.jpeg'
import BookedHotelCard from './BookedHotelCard'
import { useLocation } from 'react-router-dom';
import MyTripCard from './MyTripCard'
import hotel_data from '../../ hotel_data.json'

function MyTrips() {
  const location = useLocation();
  alert(location.state)
  const  {hotelName}  = location.state

  // console.log(hotelName)
//  function findDetails(name){
//     return myData.find(obj=>obj.name)
//  }
  return (
    <div>
         <About
         word="Book"
         word2="Your Hotel"
         aboutpara="Sewa Apartemen Impian Anda. Ruang Nyaman, Hidup Bahagia. Temukan Apartemen Terbaik di Indonesia Bersama Kami!"
          />
     
      {
          
          hotel_data
          .filter((item) =>location.state == item.htl_name )
          .map((item) => (
           
              <MyTripCard 
              key={item.id} 
              id={item.id} 
              name={item.htl_name} 
              city={item.city} 
              detail={item.detail} 
              star={item.star} 
              image={item.image} 
              rooms={item.rooms}
              price={item.price}
              />
          )
          )
         
         
        }
    </div>
  )
}

export default MyTrips