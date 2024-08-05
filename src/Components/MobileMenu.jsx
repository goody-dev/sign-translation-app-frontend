import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../provider/authProvider.jsx'
import ArrowDown from '../assets/icons/arrow-down.png'
import ContributeMenu from './ContributeMenu.jsx'


const MobileMenu = () => {
  const { token, handleToken } = useAuth();
  const [showContrMenu, setShowContrMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleContrClick = () => {
      setShowContrMenu(!showContrMenu);
  }

  const url = useLocation();
  const currentPath = url.pathname;

  useEffect(()=>{
      setShowContrMenu(false);
  }, [currentPath])

  const logout = () => {
      handleToken();
  }

  return (
    <div className='block absolute w-[100%] max-w-[100vw] left-0 top-[72px] right-0 p-[1.5rem] bg-[var(--white-background)] sm:top-[91.19px] sm:p-[var(--custom-padding)] sm:py-[1.5rem]  md:hidden'>
      <nav className='flex flex-row justify-center w-[100%]'>
          <ul className='flex flex-col text-[1.25rem] items-end w-[100%] gap-[calc(var(--custom-gap)/2)]'>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button onClick={handleContrClick} className='flex flex-row items-center gap-[calc(var(--inline-gap)/2)] leading-[1rem]'>Contribute<img src={ArrowDown} className={'w-[var(--vh-icon)] ' + (showContrMenu && 'rotate-[180deg]')} alt='arrow down icon'/></button>
              {showContrMenu && <ContributeMenu />}
            </li>
            <li>
              {token?<button onClick={logout}>Logout</button>:<Link to="/signin">Login</Link>}
            </li>
            <li className='sm:hidden'>
              <Link to="/signup"><button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)]'>Register</button></Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default MobileMenu
