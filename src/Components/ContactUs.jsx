import React from 'react'
import EnvelopeIcon from '../assets/icons/closed-blue-envelope.png'

const ContactUs = () => {
  return (
    <div id='contact-section' className='flex flex-col gap-[var(--custom-gap)] w-[100%] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)] bg-[#F3F4FF] sm:flex-row sm:flex-wrap sm:gap-0 '>
      <div className='w-[100%] sm:w-[50%]'>
        <h1 className='text-[var(--primary-color)] text-[4rem] leading-[4.8rem] font-bold'>Contact <br/><span className='text-[var(--secondary-color)]'>Us</span></h1>
        <p className='text-[var(--sub-headline-color)] text-[1.25rem] leading-[1.5rem]'>Get in touch with us. Feel free to help us with suggestions on how to improve this product.</p>
      </div>
      <form name='Contact Form' className='flex flex-col gap-[var(--custom-gap)] w-[100%] bg-[var(--white-background)] p-[var(--card-padding)] px-[4.75rem] rounded-[var(--custom-radius)] sm:w-[50%]'>
        <div className='flex flex-col w-[100%]'>
          <label for='email' className='text-[var(--primary-color)] text-[1rem] leading-[2.4rem] font-semibold w-[100%]'>Email</label>
            <div className='flex flex-row items-center gap-[0.25rem] w-[100%] bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] px-[1.1rem] pe-0'>
              <img src={EnvelopeIcon}/>
              <input id='email' type='email' tabIndex={0} placeholder='Enter your email address' className='w-[100%] p-[var(--button-padding)] bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] text-[#908E8E]'></input>
            </div>
          </div>
        <div className='flex flex-col'>
          <label for='email' className='text-[var(--primary-color)] text-[1rem] leading-[2.4rem] font-semibold'>Description</label>
          <textarea id='email' type='email' tabIndex={0} placeholder='' className='bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] p-[var(--button-padding)] h-[7rem] text-[1rem] leading-[2.4rem] text-[#908E8E]'></textarea>
        </div>
        <button tabIndex={0} className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold sm:p-[var(--button-padding)] shadow-[var(--button-shadow)]'>Submit</button>
      </form>
    </div>
  )
}

export default ContactUs
