import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
            <p className='text-sm md:text-base font-light'>IT'S TIME TO GET</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>WORKOUT <span className='text-white font-bold'> NAVIGATOR</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>
        I hereby acknowledgement and accept the journey towards 
        <span className='text-white font-bold'> incredible strength </span>
        and
        <span className='text-white font-bold'> fitness . </span>
         Embrace the challenge, transform your body, and unlock your 
        <span className='text-white font-bold'> true potential </span>
         with our expert guidance. Welcome to a community where limits are redefined and 
        <span className='text-white font-bold'> dreams become reality.</span>
        </p>
        <Button func={() =>{
          window.location.href = '#generate'
        }} text={"Accept & Begin"}></Button>
    </div>
  )
}
