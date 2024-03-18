import React, { useState } from 'react'
import About from './About'
import hotel1 from '../images/hotel1.jpeg'
import hotel2 from '../images/hotel2.jpeg'
import hotel3 from '../images/hotel3.jpeg'
import hotel4 from '../images/hotel4.jpeg'
import HotelsCard from './HotelsCard'
import hotel_data from '../../ hotel_data.json'
function Hotels() {
  const [selectCity , setSelectCity] = useState("N/A")
  const cityEvent = (e) => {
      setSelectCity(e.target.value)
  }
  console.log(hotel_data[0].image)
  // const hotel_data = [
  //   {
  //     id:1,
  //     htl_name:"Hotel flair Inn",
  //     price :"3990",
  //     rooms:4,
  //     city:"goa",
  //     star:4.1,
  //     detail:"2.2 km from Baga Beach",
  //     image:hotel1,
  //     prope1:"Couple Friendly",
  //     prope2:"Beach club",
  //     prope3:"Restaurant",
  //      prope4:"24-hour Room Service"
  //   },
  //   {
  //     id:2,
  //     htl_name:"Forest Haven Resort",
  //     price :"4999",
  //     rooms:4,
  //     city:"mumbai",
  //     detail:" 4-5 minutes walk from Candolim Beach",
  //     star:3.6,
  //     image:hotel2,
  //     prope1:"Couple Friendly",
  //     prope2:"Beach club",
  //     prope3:"Restaurant",
  //      prope4:"24-hour Room Service"
  //   },
  //   {
  //     id:3,
  //     htl_name:"iStayHotels",
  //     price :"6999",
  //     rooms:4,
  //     city:"mumbai",
  //     detail:"2-3 minutes walk from Candolim Beach",
  //     star:4.6,
  //     image:hotel3,
  //     prope1:"Couple Friendly",
  //     prope2:"Beach club",
  //     prope3:"Restaurant",
  //      prope4:"24-hour Room Service"
  //   },{
  //     id:4,
  //     htl_name:"Arena Beach Hotel",
  //     city:"goa",
  //     price :"2999",
  //     detail:"4-5 minutes walk from Mandrem Beach",
  //     rooms:4,
  //     star:4.1,
  //     image:hotel4,
  //     prope1:"Couple Friendly",
  //     prope2:"Beach club",
  //     prope3:"Restaurant",
  //      prope4:"24-hour Room Service"
  //   }

  // ]
  

    

  return (
    <div>
         
        <About
         word="Hotel "
         word2="List"
         aboutpara="Sewa Apartemen Impian Anda. Ruang Nyaman, Hidup Bahagia. Temukan Apartemen Terbaik di Indonesia Bersama Kami!"
          />
          <div className='spun_cotton pt-3 d-flex justify-content-center align-items-center'>
            <span className='me-2'>Select City</span><i className="bi bi-house-down pe-3"></i>
            <select id = "city-dropdown" onChange={cityEvent}>
            <option value="N/A">Where...</option>
            <option value="goa">Goa</option>
            <option value="mumbai">Mumbai</option>
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

export default Hotels