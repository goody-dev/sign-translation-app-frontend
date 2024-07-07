import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/icons/LOGO.png'
import ArrowDown from '../assets/icons/arrow-down.png'
import UKLogo from '../assets/icons/united-kingdom-icon.svg'


const Header = () => {
  return (
    <header className='flex flex-row max-w-[100vw] justify-between p-[1.5rem] items-center bg-[var(--white-background)] sm:p-[var(--custom-padding)] sm:py-[1.5rem] sm:gap-[var(--custom-gap)]'>
      <Link to="/" className='block' aria-label='Go to Home Page'>
        <img src={Logo} alt="Logo" />
      </Link>
      <div className='flex items-center sm:flex-row sm:gap-[1.5rem]'>
        <nav className='hidden sm:block'>
          <ul className='flex flex-col text-[1.25rem] sm:flex-row sm:gap-[1.5rem] sm:items-center'>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button className='flex flex-row items-center gap-[0.25rem]'>Contribute<img src={ArrowDown} alt='arrow down icon'/></button>
            </li>
            <li>
              <Link to="/signin">Login</Link>
            </li>
            <li>
              <Link to="/signup"><button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)]'>Register</button></Link>
            </li>
          </ul>
        </nav>
        <button aria-label='Select language' className='hidden flex-row items-center gap-[0.25rem] md:flex md:justify-self-end'>
          <img src={UKLogo} alt="language-icon" />
          <img src={ArrowDown} alt='arrow down icon'/>
        </button>
        <button className='md:hidden'>Menu</button>
      </div>
    </header>
  )
}

export default Header;