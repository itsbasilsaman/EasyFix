import React from 'react'
import Logo from '../assets/Images/Logo.png'

function Loader() {
  return ( 
    <div className='w-100 h-screen loader'> 
        <div className='flex flex-col justify-center items-center pt-[200px] '>
         <div className='flex justify-center items-center w-[300px] pr-[30px]'>
            <img src={Logo} alt="" className='w-[100px] pt-[15px]' />
            <h1 className='text-[24px] font-bold'>Easy Fix</h1>
         </div>
         <div className="loading-container flex justify-center items-center">
          <div className="loading-line"></div>
        </div>
        </div>
        
        
    </div>
  )
}

export default Loader