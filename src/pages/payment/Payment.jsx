import React from 'react'

const Payment = () => {

  return (

    <div className='flex justify-center items-center mt-5 lg:mt-10'>
      <div className='flex flex-col justify-center items-center rounded-3xl p-5 bg-white border-2 border-slate-300 border-opacity-30 lg:w-4/12 space-y-5'>
        <h1 className='text-xl font-semibold uppercase mb-4'>Pay Now</h1>

        <div className='flex justify-between items-center  p-4 rounded-xl w-full border-2 border-slate-300 border-opacity-30'>
          <h1 className='text-lg font-medium text-slate-500'>Sub Total</h1>
          <p className='text-lg font-normal text-slate-500'>4000 INR</p>
        </div>

        <div className='flex flex-col p-4 rounded-xl w-full  relative border-2 border-slate-300 border-opacity-30'>
          <div className='flex justify-between items-center mb-5'>
            <h1 className='text-lg font-medium text-slate-500'>Early Customer Discount</h1>
            <p className='text-lg font-semibold text-success'>5 %</p>
          </div>
          <h2 className='absolute bottom-0 right-0 px-5 text-sm mb-2 text-red-600'>Only valid till 14/07/2025</h2>
        </div>


        <h1 className='text-lg font-medium text-black text-start self-start'>Discount Coupon</h1>
        <div className='flex justify-between items-center p-4 rounded-xl w-full border-2 border-slate-300 border-opacity-30'>

          <input
            type='text'
            className='text-lg font-semibold text-success bg-slate-100 border-none focus:outline-none py-2 px-5 rounded-xl'
            placeholder='Enter coupon code'
          />
          <button className='bg-blue-600 rounded-xl text-white p-2 px-4'>Check</button>
        </div>

        <div className='flex flex-col p-4 rounded-xl w-full  relative border-2 border-slate-300 border-opacity-30'>
          <div className='flex justify-between items-center'>
            <h1 className='text-lg font-medium text-black'>Total</h1>
            <p className='text-lg font-semibold text-success'>3600 INR</p>
          </div>
        </div>

        <div className='w-full text-center mt-10'>
          <button className='bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300'>Proceed to Payment</button>
        </div>
      </div>
    </div>



  )
}

export default Payment