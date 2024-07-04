import React from 'react'
import EnvelopeIcon from '../assets/icons/closed-blue-envelope.png'

const ContactUs = () => {
  return (
    <div className='flex flex-col gap-[var(--custom-gap)] w-[100%] max-w-[100vw] p-[var(--custom-padding)]  sm:flex-row sm:gap-0 '>
      <div className='w-[100%] sm:w-[50%]'>
        <h1 className='text-[var(--primary-color)] text-[2rem] font-bold'>Contact <br/><span className='text-[var(--secondary-color)]'>Us</span></h1>
        <p className='text-[var(--sub-headline-color)]'>Get in touch with us. Feel free to help us with suggestions on how to improve this product.</p>
      </div>
      <form name='Contact Form' className='flex flex-col gap-[var(--custom-gap)] w-[100%] bg-[var(--secondary-background)] p-[var(--card-padding)] rounded-[var(--custom-radius)] sm:w-[50%]'>
        <div className='flex flex-col'>
          <label for='email' className='text-[var(--primary-color)] font-semibold'>Email</label>
          <input id='email' type='email' tabIndex={0} placeholder='Enter your email address' className='bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] p-[var(--button-padding)]'></input>
        </div>
        <div className='flex flex-col'>
          <label for='email' className='text-[var(--primary-color)] font-semibold'>Description</label>
          <textarea id='email' type='email' tabIndex={0} placeholder='' className='bg-[var(--tertiary-background)] rounded-[var(--custom-radius)] p-[var(--button-padding)]'></textarea>
        </div>
        <button tabIndex={0} className='bg-[var(--blue-background)] py-[0.25rem] px-[0.75rem] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold'>Submit</button>
      </form>
      
    </div>
  )
}

export default ContactUs
