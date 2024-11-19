import React from 'react'

function PaymentSummery() {
  return (
    <section className='payment-summery'>
      <h1 className='font-bold mb-[15px]'>Payment Summery</h1>
      <div className='flex justify-between'>
        <p>Item total</p>
        <p>$2754</p>
      </div>
      <div className='flex justify-between'>
        <p>Item discount</p>
        <p>-$234</p>
      </div>
      <div className='flex justify-between'>
        <p>Taxes & Fee</p>
        <p>$54</p>
      </div>
      <div className='dashed-border my-[15px]'></div>
      <div className='flex justify-between'>
        <p className='font-bold'>Total</p>
        <p>$2609</p>
      </div>
    </section>
  )
}

export default PaymentSummery