import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { Link } from 'react-router-dom'
function Cart() {
  return (
    <div className='cart-container'>
        <div className='flex justify-start items-center text-[25px] gap-[10px]' >
        <FontAwesomeIcon icon={faCartShopping} />
          <h1>Your Cart</h1>
        </div>
        <div className='cart-border'></div>
       
         <div className='cart-box-container'>
            <div className='cart-box'>
             <div className='cart-content'>
                <img src="https://cdn2.vectorstock.com/i/1000x1000/20/41/cleaning-service-concept-cheerful-cartoon-vector-25532041.jpg" alt="" className='cart-logo' />
               <div className='flex flex-col justify-between py-[6px] px-[15px]'>
                  <h1 className='text-[22px]'>AC Service & Repair</h1>
                  <div className='flex gap-[25px]'>
                      <p>2 Services</p>
                      <p>$3499</p>
                  </div>
               </div>
             </div>
              <div className='cart-dashed-border'></div>
             <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
             </ul>
             <div className='flex justify-between my-[15px]'>
                <button className='cart-button'>Add Service</button>
             <Link to={'/checkout'}>   <button className='cart-button'>CheckOut</button></Link>
             </div>
            </div>
            <div className='cart-box'>
             <div className='cart-content'>
                <img src="https://cdn2.vectorstock.com/i/1000x1000/20/41/cleaning-service-concept-cheerful-cartoon-vector-25532041.jpg" alt="" className='cart-logo' />
               <div className='flex flex-col justify-between py-[6px] px-[15px]'>
                  <h1 className='text-[22px]'>AC Service & Repair</h1>
                  <div className='flex gap-[25px]'>
                      <p>2 Services</p>
                      <p>$3499</p>
                  </div>
               </div>
             </div>
              <div className='cart-dashed-border'></div>
             <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
             </ul>
             <div className='flex justify-between my-[15px]'>
                <button className='cart-button'>Add Service</button>
                <button className='cart-button'>CheckOut</button>
             </div>
            </div>
            <div className='cart-box'>
             <div className='cart-content'>
                <img src="https://cdn2.vectorstock.com/i/1000x1000/20/41/cleaning-service-concept-cheerful-cartoon-vector-25532041.jpg" alt="" className='cart-logo' />
               <div className='flex flex-col justify-between py-[6px] px-[15px]'>
                  <h1 className='text-[22px]'>AC Service & Repair</h1>
                  <div className='flex gap-[25px]'>
                      <p>2 Services</p>
                      <p>$3499</p>
                  </div>
               </div>
             </div>
              <div className='cart-dashed-border'></div>
             <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
             </ul>
             <div className='flex justify-between my-[15px]'>
                <button className='cart-button'>Add Service</button>
                <button className='cart-button'>CheckOut</button>
             </div>
            </div>
            <div className='cart-box'>
             <div className='cart-content'>
                <img src="https://cdn2.vectorstock.com/i/1000x1000/20/41/cleaning-service-concept-cheerful-cartoon-vector-25532041.jpg" alt="" className='cart-logo' />
               <div className='flex flex-col justify-between py-[6px] px-[15px]'>
                  <h1 className='text-[22px]'>AC Service & Repair</h1>
                  <div className='flex gap-[25px]'>
                      <p>2 Services</p>
                      <p>$3499</p>
                  </div>
               </div>
             </div>
              <div className='cart-dashed-border'></div>
             <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
             </ul>
             <div className='flex justify-between my-[15px]'>
                <button className='cart-button'>Add Service</button>
                <button className='cart-button'>CheckOut</button>
             </div>
            </div>
         </div>
        </div>
  )
}

export default Cart