import React from 'react'
import { useParams,Link } from 'react-router-dom'
import About from './About'
import BookedHotelCard from './BookedHotelCard'
import hotel_data from '../../ hotel_data.json'

function BookHotel(props) {
  const { hotelName } = useParams();
  const handleAddToCart = () =>{
   props.addtotrip(hotelName)
   
  }
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
           <>
           <div key={item.id} className=''>
              <BookedHotelCard   
              
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
              <div className='spun_cotton text-center'>
              <Link to="/mytrip " className=''><button className='btn btn-primary  avail-btn' onClick={()=> handleAddToCart(hotelName)}>Continuee<i className="bi bi-calendar2-check ms-2"></i></button></Link>
              </div>
              </div>
              </>
          ))
         
         
        }
    </div>
  )
}

export default BookHotel