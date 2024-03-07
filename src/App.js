import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import MainLayout from './components/User/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/User/AboutUs';
import Hotels from './components/User/Hotels';
import Header from './components/User/Header';
import Navbar from './components/User/Navbar';
import BookHotel from './components/User/BookHotel';
import BookedHotelCard from './components/User/BookedHotelCard';
import MyTrips from './components/User/MyTrips';

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <div className='slidder-section container position-fixed  '>
         <Header />
         <Navbar />
      </div>
        <Routes>
          <Route path='/' element={<MainLayout/>}/>
          <Route path='/about-us' element={<AboutUs />}/>
          <Route path='/hotel' element={<Hotels />}/>
          <Route path='mytrip' element={<MyTrips />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
