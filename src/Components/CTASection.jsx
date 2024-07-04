import React from 'react'
import ArrowRight from '../assets/icons/filled-arrow-right.png'
const CTASection = () => {
  return (
    <div className='flex flex-col p-[4rem] w-[100%] max-w-[100vw] gap-[var(--custom-gap)] sm:flex-row sm:justify-around sm:gap-0'>
      <div className='flex flex-col items-center gap-[var(--custom-gap)] text-center border-2 p-[var(--custom-padding)] rounded-[0.5rem] sm:w-[40%]'>
        <h2 className='text-[var(--secondary-color)] text-[2rem] font-semibold'>Transcribe ASL <br/>to Text</h2>
        <button tabIndex={0} className='flex flex-row items-center gap-[0.25rem] bg-[var(--blue-background)] py-[0.25rem] px-[0.75rem] rounded-[0.25rem] text-[var(--tertiary-color)] font-medium sm:w-[max-content]'>Contribute <img src={ArrowRight} /></button>
      </div>
      <div className='flex flex-col items-center gap-[var(--custom-gap)] text-center border-2 p-[var(--custom-padding)] rounded-[0.5rem] sm:w-[40%]'>
        <h2 className='text-[var(--secondary-color)] text-[2rem] font-semibold'>Transcribe Text <br/>to ASL</h2>
        <button tabIndex={0} className='flex flex-row items-center gap-[0.25rem] bg-[var(--blue-background)] py-[0.25rem] px-[0.75rem] rounded-[0.25rem] text-[var(--tertiary-color)] font-medium sm:w-[max-content]'>Contribute <img src={ArrowRight} /></button>
      </div>
    </div>
  )
}

export default CTASection
