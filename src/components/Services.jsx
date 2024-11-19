import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ServiceBox from './ServiceBox'
import ServiceItems from './ServiceItems'
import CartTotal from './CartTotal'

function Services() {
  return (
    <main className='service-container w-100'> 
        <section className='first-section'>
       <aside className='head'>
            <h1>Bathroom & <br /> Kitchen Cleaning</h1>
           <div className='flex mt-[3px] gap-[16px]'>
              <button className='head-button text-[12px] flex items-center gap-[3px]  px-[9px] py-[4px]'><FontAwesomeIcon icon={faStar} className='text-[10px] ' />4.81</button>
              <p className='text-[14px] border-b border-dashed border-gray-500'>1.6M Reviews</p>
           </div>
       </aside>
       <ServiceBox/>
      
        </section>
        <section>
          <ServiceItems/>
        </section>
        <section className=''>
          <CartTotal/>
        </section>
    </main>
  )
}

export default Services