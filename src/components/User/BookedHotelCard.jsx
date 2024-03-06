import React from 'react'
import { Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import About from './About'
import hotel1 from '../images/hotel1.jpeg'
import hotel2 from '../images/hotel2.jpeg'
import hotel3 from '../images/hotel3.jpeg'
import hotel4 from '../images/hotel4.jpeg'
function BookedHotelCard(props) {
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
         <div className='hotel-list spun_cotton p-3 p-md-5'>
            <div className='container'>
                <div className='hotel-list-layout p-3 p-md-5'>
                  <div className='hotel-img'>
                    <div className='row row-gap-4'>
                      <div className='col-md-6 '>
                        <img alt="hotel1" height="300" width="500" src={props.image} className=' rounded-4'/>
                      </div>
                      <div className='col-md-6'>
                        <div className=' h-100 d-flex flex-column justify-content-between'>
                            <div>
                            <div className='hotel-name  d-flex align-items-center justify-content-between'>
                              <span className=' text-capitalize text-lime_green fs-33 fw-semibold'>{props.name}</span>
                              <span className='p-1 px-2 bg-dark-blue rounded-2 text-white'>{props.star} <i className="bi bi-star-fill"></i></span>
                            </div>
                            <div className='text-lime_green'>
                            <span className=' text-capitalize'>{props.city}</span> 
                            <span> | {props.detail}</span>
                            </div>
                            
                            </div>
                            <div className='bg_glade_green p-2 '>
                              <span className='d-block text-capitalize fs-22'>Property highlights</span>
                              
                            </div>
                            <div className='d-flex justify-content-around  justify-content-md-between align-items-md-end'>
                              <div>
                                <span className="text-danger fw-bold">Only {props.rooms} room left at this price on our site</span>
                              </div>
                            <div className=' text-end'>
                             <del className='me-3 fs-15 text-danger'>&#8377;{props.price}</del>
                             <span>&#8377;{props.price}</span>
                            <button className='btn btn-primary d-block avail-btn'>Continuee<i className="bi bi-calendar2-check ms-2"></i></button>
                            </div>
                            </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookedHotelCard