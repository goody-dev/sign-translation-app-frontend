import React from 'react'
import ArrowRight from '../assets/icons/filled-arrow-right.png'
const CTASection = () => {
  return (
    <div className='flex flex-col py-[3rem] px-[1.5rem] w-[100%] max-w-[100vw] gap-[var(--custom-gap)] bg-[var(--faint-blue-background)] sm:flex-row sm:justify-around sm:gap-0 sm:px-[4rem] sm:py-[3rem]'>
      <div className='flex flex-col items-center gap-[var(--custom-gap)] text-center border-2 p-[1.5rem] rounded-[0.5rem] sm:w-[40%] sm:p-[var(--custom-padding)]'>
        <h2 className='text-[var(--secondary-color)] text-[2.5rem] font-semibold leading-[3rem]'>Transcribe ASL <br/>to Text</h2>
        <button tabIndex={0} className='flex flex-row items-center gap-[0.25rem] border-[0.16rem] border-solid border-[var(--secondary-color)] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.25rem] text-[var(--tertiary-color)] text-[1rem] font-normal sm:w-[max-content]'>Contribute <img src={ArrowRight} className='h-[0.8rem]'/></button>
      </div>
      <div className='flex flex-col items-center gap-[var(--custom-gap)] text-center border-2 p-[1.5rem] rounded-[0.5rem] sm:w-[40%] sm:p-[var(--custom-padding)]'>
        <h2 className='text-[var(--secondary-color)] text-[2.5rem] font-semibold leading-[3rem]'>Transcribe Text <br/>to ASL</h2>
        <button tabIndex={0} className='flex flex-row items-center gap-[0.25rem] border-[0.16rem] border-solid border-[var(--secondary-color)] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.25rem] text-[var(--tertiary-color)] text-[1rem] font-normal sm:w-[max-content]'>Contribute <img src={ArrowRight} className='h-[0.8rem]'/></button>
      </div>
    </div>
  )
}

export default CTASection
