import React from 'react'
import Logo from '../assets/Images/Logo.png'
import LoginBox from './LoginBox'
import CartTotal from './CartTotal'
import OfferCoupons from './OfferCoupons'
import PaymentSummery from './PaymentSummery'

function Checkout() {
  return (
    <div className='checkout-container'>
      <header className='checkout-header flex items-center '>
      <img src={Logo} alt="Logo" />
      <p className='checkout-head'>Checkout</p>
      </header>
      <section className='checkout-main'>
        <div className='checkout-main-left'>
          <div className='total-section flex items-center pl-[15px] text-[14px]'> You're saving totla $243 on this order!</div>
          <LoginBox/>
        </div>
        <div className='checkout-main-right'>
             <CartTotal/>
             <OfferCoupons/>
             <PaymentSummery/>
        </div>
      </section>
    </div>
  )
}

export default Checkout