import React from 'react'
import offerImage from '../assets/Images/coupon.png'

function OfferCoupons() {
  return (
    <section className='offer-coupon flex  items-center px-[10px] gap-[15px]'>
      <img src={offerImage} alt="" />
      <div className=''>
        <h1 className='font-bold text-[17px]'>Coupons and offers</h1>
        <p className='text-[14px]'>Login/Signup to view offers</p>
      </div>
    </section>
  )
}

export default OfferCoupons