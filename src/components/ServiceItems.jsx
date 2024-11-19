import React from 'react'
import StarReview from './StarReview'

function ServiceItems() {
  return (
    <>
      <div className='service-items'>
        <section>
          <h1>Combo</h1>
          <div className='item-box'>
            <div>
              <h2 className='text-[15px] font-bold'>Classic cleaning (2 bathrooms)</h2>
                <StarReview/>
              <p className='amount'>$728  <span>2hrs</span></p>
              <p className='text-[14px] text-green-900'>View details</p>
            </div>
            <div className='box-right'>
              <img src="https://www.nobroker.in/blog/wp-content/uploads/2022/09/Home-Cleaning-Service-in-HSR-Layout-Bangalore-.jpg" alt="" />
              <button className='item-count'>-  <span className='item'>1</span>  +</button>
            </div>
            <button className='service-button'>Add Cart</button>
   
          </div>
        </section>
      </div>
      <div className='service-items'>
      <section>
        <h1>Combo</h1>
        <div className='item-box'>
          <div>
            <h2 className='text-[15px] font-bold'>Classic cleaning (2 bathrooms)</h2>
              <StarReview/>
            <p className='amount'>$728  <span>2hrs</span></p>
            <p className='text-[14px] text-green-900'>View details</p>
          </div>
          
          <div className='box-right'>
            <img src="https://www.nobroker.in/blog/wp-content/uploads/2022/09/Home-Cleaning-Service-in-HSR-Layout-Bangalore-.jpg" alt="" />
            <button className='item-count'>-  <span className='item'>1</span>  +</button>
          </div>
          <button className='service-button'>Add Cart</button>
 
        </div>
      </section>
    </div>
    <div className='service-items'>
      <section>
        <h1>Combo</h1>
        <div className='item-box'>
          <div>
            <h2 className='text-[15px] font-bold'>Classic cleaning (2 bathrooms)</h2>
              <StarReview/>
            <p className='amount'>$728  <span>2hrs</span></p>
            <p className='text-[14px] text-green-900'>View details</p>
          </div>
          <div className='box-right'>
            <img src="https://www.nobroker.in/blog/wp-content/uploads/2022/09/Home-Cleaning-Service-in-HSR-Layout-Bangalore-.jpg" alt="" />
            <button className='item-count'>-  <span className='item'>1</span>  +</button>
          </div>
          <button className='service-button'>Add Cart</button>
 
        </div>
      </section>
    </div>
    </>
  )
}

export default ServiceItems