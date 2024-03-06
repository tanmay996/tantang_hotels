import React, { useState } from 'react'
import About from './About'
import hotel1 from '../images/hotel1.jpeg'
import hotel2 from '../images/hotel2.jpeg'
import hotel3 from '../images/hotel3.jpeg'
import hotel4 from '../images/hotel4.jpeg'
import HotelsCard from './HotelsCard'

function Hotels() {
  const [selectCity , setSelectCity] = useState("N/A")
  const cityEvent = (e) => {
      setSelectCity(e.target.value)
  }
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
    //  var htl_name = "Hotel flair In"
    //  var price ="5000"
    

    

  return (
    <div>
         
        <About
         word="Hotel "
         word2="List"
         aboutpara="Sewa Apartemen Impian Anda. Ruang Nyaman, Hidup Bahagia. Temukan Apartemen Terbaik di Indonesia Bersama Kami!"
          />
          <div className='spun_cotton pt-3 d-flex justify-content-center align-items-center'>
            <span className='me-2'>Select City</span>
            <select id = "city-dropdown" onChange={cityEvent} className=''>
            <option value="N/A">N/A</option>
            <option value="goa">goa</option>
            <option value="mumbai">mumbai</option>
            </select>
          </div>
         
        {
          
          hotel_data
          .filter((item) =>selectCity == "N/A" || item.city === selectCity)
          .map((item) => (
            <HotelsCard 
              key={item.id} 
              id={item.id} 
              name={item.htl_name} 
              city={item.city} 
              detail={item.detail} 
              star={item.star} 
              image={item.image} 
              rooms={item.rooms}
              price={item.price} />
          ))
         
         
        }
        
    </div>
  )
}

export default Hotels