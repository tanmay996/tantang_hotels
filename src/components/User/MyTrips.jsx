import React from 'react'
import { useParams } from 'react-router-dom'
import About from './About'
import hotel1 from '../images/hotel1.jpeg'
import hotel2 from '../images/hotel2.jpeg'
import hotel3 from '../images/hotel3.jpeg'
import hotel4 from '../images/hotel4.jpeg'
import BookedHotelCard from './BookedHotelCard'

function MyTrips() {
    const { hotelName } = useParams();
  const hotel_data = [
    {
      id:1,
      htl_name:"Hotel flair Inn",
      price :"3990",
      rooms:4,
      city:"goa",
      star:4.1,
      detail:"2.2 km from Baga Beach",
      image:hotel1
    },
    {
      id:2,
      htl_name:"Forest Haven Resort",
      price :"4999",
      rooms:4,
      city:"mumbai",
      detail:" 4-5 minutes walk from Candolim Beach",
      star:3.6,
      image:hotel2
    },
    {
      id:3,
      htl_name:"iStayHotels",
      price :"6999",
      rooms:4,
      city:"mumbai",
      detail:"2-3 minutes walk from Candolim Beach",
      star:4.6,
      image:hotel3
    },{
      id:4,
      htl_name:"Arena Beach Hotel",
      city:"goa",
      price :"2999",
      detail:"4-5 minutes walk from Mandrem Beach",
      rooms:4,
      star:4.1,
      image:hotel4
    }

  ]
  return (
    <div>
         <About
         word="Book"
         word2="Your Hotel"
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
              />
          ))
         
         
        }
    </div>
  )
}

export default MyTrips