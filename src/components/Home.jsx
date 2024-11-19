import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import HomeImage from '../assets/Images/landing-bg1.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className='w-full   home relative'>
      <div className='home-left-section'>
      <h1 className='home-head'>Online booking system <br /> for all service based industries</h1>
        <p className='home-title'>EasyFix offers reliable service bookings for appliance repair, electricians, wall painting, cleaning, pet control, and home security across homes, hospitals, flats, and more.</p>
     <Link to={'/services'}>   <button className='home-btn'>Book Now</button></Link>
        <div className='flex icons  '>
              <div className='rating flex  justify-center items-center'>
              <FontAwesomeIcon icon={faStar} className='home-icon' />
              <p>4.8 <br /><span className='icon-title'> Service Rating</span></p>
              </div>
              <div className='flex customer-card   justify-center items-center'>
              <FontAwesomeIcon icon={faUser} className='home-icon' />
              <p>12 M+ <br /> <span className='icon-title'>Customers Globally</span></p>
              </div>
      </div>
      </div>
      <div className='home-right-section'>
            <img src={HomeImage} alt="" />
          </div>
     
    </main>
  )
}

export default Home