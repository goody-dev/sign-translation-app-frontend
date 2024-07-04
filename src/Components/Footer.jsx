import React from 'react'
import Logo from '../assets/icons/LOGO.png'

const Footer = () => {
  return (
    <div className='flex flex-col w-[100%] max-w-[100vw] p-[var(--custom-padding)] justify-between sm:flex-row sm:items-center'>
      <div className='flex flex-col'>
        <img src={Logo} alt='Logo'/>
        <div className='flex flex-row'>
            <a href='#' aria-label='Follow us on Facebook'><img src="#" alt='Facebook logo'/></a>
            <a href='#' aria-label='Follow us on X, Formerly Twitter'><img src="#" alt='X logo'/></a>
            <a href='#' aria-label='Follow us on Instagram'><img src="#" alt='Instagram logo'/></a>
        </div>
      </div>
      <p className='hidden sm:block'>Copyright reserved 2024.</p>
      <div className='flex flex-row gap-[var(--custom-gap)] text-right text-nowrap'>
        <div className='flex flex-col gap-[var(--custom-gap)] '>
          <a className=''>About</a>
          <a className=''>Cookies</a>
        </div>
        <div className='flex flex-col gap-[var(--custom-gap)] '>
          <a className=''>Privacy Policy</a>
          <a className=''>Terms & Condition</a>
        </div>
      </div>
      <p className='sm:hidden'>Copyright reserved 2024.</p>
    </div>
  )
}

export default Footer
