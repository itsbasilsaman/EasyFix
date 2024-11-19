import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function StarReview() {
  return (
    <div className='star-review-container flex   items-center mt-[3px] gap-[6px]'> 
        <button className='head-button text-[12px]     '><FontAwesomeIcon icon={faStar} className='text-[10px] ' /></button>
        <p className='text-[11px] border-b border-dashed border-gray-500'>4.83  (1.6M Reviews)</p>
    </div>
  )
}

export default StarReview