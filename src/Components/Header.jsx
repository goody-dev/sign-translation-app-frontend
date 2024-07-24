import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/icons/LOGO.png'
import ArrowDown from '../assets/icons/arrow-down.png'
import UKLogo from '../assets/icons/united-kingdom-icon.svg'
import ContributeMenu from './ContributeMenu.jsx'


const Header = () => {
  const [showContrMenu, setShowContrMenu] = useState(false);
  const handleContrClick = () => {
    setShowContrMenu(!showContrMenu);
  }
  const url = useLocation();
  const currentPath = url.pathname;

  useEffect(()=>{
    setShowContrMenu(false);
  }, [currentPath])

  return (
    <header className='flex flex-row max-w-[100vw] justify-between p-[1.5rem] items-center bg-[var(--white-background)] sm:p-[var(--custom-padding)] sm:py-[1.5rem] sm:gap-[var(--custom-gap)]'>
      <Link to="/" className='block' aria-label='Go to Home Page'>
        <img className="w-[10vw] min-w-[4rem] max-w-[6rem]" src={Logo} alt="Logo" />
      </Link>
      <div className='flex items-center gap-[var(--custom-gap)] sm:flex-row sm:gap-[1.5rem]'>
        <nav className='hidden md:block'>
          <ul className='flex flex-col text-[1.25rem] sm:flex-row sm:gap-[1.5rem] sm:items-center'>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button onClick={handleContrClick} className='flex flex-row items-center gap-[calc(var(--inline-gap)/2)] leading-[1rem]'>Contribute<img src={ArrowDown} className={'w-[var(--vh-icon)] ' + (showContrMenu && 'rotate-[180deg]')} alt='arrow down icon'/></button>
              {showContrMenu && <ContributeMenu />}
            </li>
            <li>
              <Link to="/signin">Login</Link>
            </li>
            <li>
              <Link to="/signup"><button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)]'>Register</button></Link>
            </li>
          </ul>
        </nav>
        <button aria-label='Select language' className='hidden flex-row items-center gap-[calc(var(--inline-gap)/2)] sm:flex sm:justify-self-end'>
          <img src={UKLogo} alt="language-icon" />
          <img src={ArrowDown} className='w-[var(--vh-icon)]' alt='arrow down icon'/>
        </button>
        <Link className='md:hidden' to="/signup"><button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)]'>Register</button></Link>
        <button className='md:hidden'>Menu</button>
      </div>
    </header>
  )
}

export default Header;