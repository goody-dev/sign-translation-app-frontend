import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/icons/LOGO.png'
import ArrowDown from '../assets/icons/arrow-down.png'
import UKLogo from '../assets/icons/united-kingdom-icon.png'


const Header = () => {
  return (
    <header className='flex flex-row max-w-[100vw] justify-between py-[1rem] px-[2rem] items-center'>
      <Link to="/" className='block sm:self-start' aria-label='Go to Home Page'>
        <img src={Logo} alt="Logo" />
      </Link>
      <div className='flex items-center sm:flex-row sm:gap-[1.5rem]'>
        <nav className='hidden sm:block'>
          <ul className='flex flex-col sm:flex-row sm:gap-[1.5rem] sm:items-center'>
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
              <Link to="/signup"><button className='bg-[var(--blue-background)] py-[0.25rem] px-[0.75rem] rounded-[0.5rem] text-[var(--tertiary-color)]'>Register</button></Link>
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