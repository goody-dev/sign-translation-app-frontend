import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-start p-[2rem] sm:flex-row'>
      <div className='flex flex-col sm:w-[50vw] gap-[1.5rem]'>
        <h1 className='text-[3rem] font-semibold'>Unlock the World of <br/>Communication</h1>
        <p className='text-[var(--sub-headline-color)] font-normal'>Discover our innovative platform that transforms sign language into text and text into sign language, fostering seamless communication for everyone. Join us in making interactions more inclusive and accessible.</p>
        <button tabIndex={0} className='text-[1.1rem] bg-[var(--blue-background)] py-[0.25rem] px-[0.75rem] rounded-[0.5rem] text-[var(--tertiary-color)] font-medium sm:w-[max-content]'>Get Started</button>
      </div>
      <div className=''>
        <img src='#' alt='hero-img'/>
      </div>
    </div>
  )
}

export default Hero
