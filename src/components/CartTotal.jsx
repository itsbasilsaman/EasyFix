import React from 'react'

function CartTotal() {
  return (
    <aside className='cart-items flex flex-col gap-[15px]'>
       <div className='flex justify-between'>
        <p>Classic Cleaning 2 bathroom pack</p>
        <button>-  2  +</button>
        <p>$1570</p>
       </div>
       <div className='flex justify-between'>
        <p>Classic Cleaning 2 bathroom pack</p>
        <button>-  2  +</button>
        <p>$1570</p>
       </div>
       <div className='dashed-border'></div>
       <div className='flex gap-[12px]'>
         <input type="checkbox" id="myCheckbox" />
         <label htmlFor="myCheckbox">Avoid calling before reaching the location</label>
       </div>
    </aside>
  )
}

export default CartTotal