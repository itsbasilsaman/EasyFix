import React from 'react'
import { Link } from 'react-router-dom'
function Category() {
   
  return (
    <main className='category'>
      <div className='relative category-head'>
        <h1 className='  text-center'>One step Solution for service <br /> business</h1>
        <Link to={'/services'}><p className='absolute view-all'>See All</p></Link>
      </div>
     <Link to={'/services'}>
        <div className='category-items'>
            <div className='content one' >
              <p className='content-name'>Appliance Repire & Service</p>
            </div>
            <div className=' content two'>
               
            <p className='content-name'>Electricians & Carpenters</p>
            </div>
            <div className=' content three'>
            <p className='content-name'>Rooms & Wall Painting</p>
            </div>
            <div className='bg-yellow-200 content four'>
            <p className='content-name'>Cleaning & Pets Control</p>
            </div>
            <div className='content five'>
            <p className='content-name'>Flooring & Tiling Services</p>
            </div>
            <div className='content six'>
            <p className='content-name'>Home Security & Automation</p>
            </div>
        </div>
     </Link>
    </main>
  )
}

export default Category