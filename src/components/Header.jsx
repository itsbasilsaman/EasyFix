import React, { useState } from 'react'
import Logo from '../assets/Images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping, faHeart, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'




function Header() {

  const [show,setShow] = useState(false)
  const wishListArray = useSelector((state)=>state.Wishlist)
  const cartArray = useSelector((state)=>state.cartItem)


  return (

    <header className=''>
      
        <Link to={'/'}>
           <div className='Logo flex justify-center items-center'>
             <img src={Logo} alt="Logo" />
             <p>Easy Fix</p>
           </div>
        </Link>
 
        
        <div className='input-container flex'>
           <div className='flex header-input'>
             <input type="text" placeholder='Kochi Post Office,' />
             <FontAwesomeIcon icon={faLocationDot} className='faLocationDot' />
           </div>
           <div className='flex header-input'>
             <input type="text" placeholder='Search for Facial' />
             <FontAwesomeIcon icon={faMagnifyingGlass} className='faMagnifyingGlass' />
           </div>
        </div>
         <div className='flex  items-center logo-container'>
        {/* <Link to={'/wishlist'}> <FontAwesomeIcon icon={faHeart} className='header-icon' />
        </Link> */}
       <Link to={'/wishlist'}>
          <div className='header-icon' >
             <FontAwesomeIcon icon={faHeart} />
             <span className='cart-count'>{wishListArray?.length}</span>
          </div>
         
       </Link>
       <Link to={'/cart'}>
          <div className='header-icon' >
             <FontAwesomeIcon icon={faCartShopping} />
             <span className='cart-count'>{cartArray?.length}</span>
          </div>
         
       </Link>
         <FontAwesomeIcon icon={faUser} className='header-icon invisible' />
         </div>

         <div className='input-container responsive flex'>
           <div className='flex header-input'>
             <input type="text" placeholder='Kochi Post Office,' />
             <FontAwesomeIcon icon={faLocationDot} className='faLocationDot' />
           </div>
           <div className='flex header-input '>
             <input type="text" placeholder='Search for Facial' />
             <FontAwesomeIcon icon={faMagnifyingGlass} className='faMagnifyingGlass' />
           </div>
        </div>


      
    </header>
  )
}

export default Header