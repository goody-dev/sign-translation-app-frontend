import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/icons/LOGO.png'
import ArrowDown from '../assets/icons/arrow-down.png'
import UKLogo from '../assets/icons/united-kingdom-icon.png'


const Header = () => {
  return (
    <div className='flex flex-row w-[100vw]'>
      <Link to="/" className='' aria-label='Go to Home Page'>
        <img src={Logo} alt="Logo" />
      </Link>
      <button role='button' className='visible md:invisible'>Menu</button>
      <nav className='flex flex-col invisible md:flex-row md:visible'>
        <ul className='flex flex-row'>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button>Contribute<img src={ArrowDown} alt='arrow down icon'/></button>
          </li>
          <li>
            <Link to="/signin">Login</Link>
          </li>
          <li>
            <Link to="/signup"><button>Register</button></Link>
          </li>
        </ul>
      </nav>
      <div className='invisible flex flex-col md:flex-row md:visible'>
        <img src={UKLogo} alt="language-icon" />
        <img src={ArrowDown} alt='arrow down icon'/>
      </div>
    </div>
  )
}

export default Header;