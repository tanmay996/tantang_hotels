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

function MyTrips({alltrips}) {
  const location = useLocation();
  // alert(location.state)
  // const  {hotelName}  = location.state

  // console.log(hotelName)
//  function findDetails(name){
//     return myData.find(obj=>obj.name)
//  }
console.log(alltrips,"trip")

  return (
    <div>
         <About
         word="My"
         word2="Trips"
         aboutpara="Sewa Apartemen Impian Anda. Ruang Nyaman, Hidup Bahagia. Temukan Apartemen Terbaik di Indonesia Bersama Kami!"
          />
     
      {      
          // alltrips.length > 0 ? 

          alltrips.map((items)=>
            hotel_data.filter(
              (item)=>item.htl_name===items
            )
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
        )
        
          // :
          // <h1>
          //   Your cart is empty
          // </h1>
        }
    </div>
  )
}

export default MyTrips