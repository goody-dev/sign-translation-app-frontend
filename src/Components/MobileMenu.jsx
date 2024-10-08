import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../provider/authProvider.jsx'
import ArrowDown from '../assets/icons/arrow-down.png'
import ContributeMenu from './ContributeMenu.jsx'
import SubMenu from './SubMenu.jsx'


const MobileMenu = () => {
  const translateMenu = [
    {
      text: "Video",
      link: "/user/translate-video"
    },
    {
      text: "Text",
      link: "/user/translate-text"
    }
  ];

  const contributeMenu = [
    {
      text: "Video",
      link: "/user/contribute-video"
    },
    {
      text: "Text",
      link: "/user/contribute-text"
    },
    // {
    //   text: "Video and Text",
    //   link: "/contribute-video-text"
    // }
  ]

  const { token, handleToken } = useAuth();
  const [showContrMenu, setShowContrMenu] = useState(false);
  const [showTranslateMenu, setShowTranslateMenu] = useState(false);

  const handleContrClick = () => {
    setShowContrMenu(!showContrMenu);
    setShowTranslateMenu(false);
  }

  const handleTranslateClick = () => {
    setShowTranslateMenu(!showTranslateMenu);
    setShowContrMenu(false);
  }

  const url = useLocation();
  const currentPath = url.pathname;

  useEffect(()=>{
      setShowContrMenu(false);
  }, [currentPath])

  const logout = () => {
      handleToken();
  }

  const authenticatedUrls = ["/user", "/user/translate-video", "/user/contribute-video", "/user/translate-text", "/user/translate-video", "/user/contribute-text"]
  const nonAuthenticatedUrls = ["/", "/about", "/signup", "/signin", "/signup-admin"]

  return (
    <div className='block absolute z-50 w-[100%] max-w-[100vw] left-0 top-[72px] right-0 p-[1.5rem] bg-[var(--white-background)] sm:top-[91.19px] sm:p-[var(--custom-padding)] sm:py-[1.5rem]  md:hidden'>
      <nav className='flex flex-row justify-center w-[100%]'>
          <ul className='flex flex-col text-[1.25rem] items-end w-[100%] gap-[calc(var(--custom-gap)/2)]'>
            {nonAuthenticatedUrls.includes(currentPath) && <li>
              <Link to="/about">About</Link>
            </li>}
            {(token?.userRole && token.userRole === "ADMIN" && authenticatedUrls.includes(currentPath)) &&
              <li>
                <Link to="/dashboard/reports">Dashboard</Link>
              </li>
            }
            <li>
              <button onClick={handleContrClick} className='flex flex-row items-center gap-[calc(var(--inline-gap)/2)] leading-[1rem]'>Contribute<img src={ArrowDown} className={'w-[var(--vh-icon)] ' + (showContrMenu && 'rotate-[180deg]')} alt='arrow down icon'/></button>
              {showContrMenu && <SubMenu menu={contributeMenu} />}
            </li>
            {authenticatedUrls.includes(currentPath)?
              <>
                <li>
                  <button onClick={handleTranslateClick} className='flex flex-row items-center gap-[calc(var(--inline-gap)/2)] leading-[1rem]'>Translate<img src={ArrowDown} className={'w-[var(--vh-icon)] ' + (showTranslateMenu && 'rotate-[180deg]')} alt='arrow down icon'/></button>
                  {showTranslateMenu && <SubMenu menu={translateMenu} />}
                </li>
                <li>
                  <Link to="/user/validate-entry">Validate</Link>
                </li>
              </>
            :null}
            {<>
              <li>
              {(token && token !== "initial") && !nonAuthenticatedUrls.includes(currentPath)?<button onClick={logout}>Logout</button>:<Link to="/signin">Login</Link>}
              </li>
              {(nonAuthenticatedUrls.includes(currentPath)) && <li className='sm:hidden'>
                <Link to="/signup"><button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)]'>Register</button></Link>
              </li>}
            </>}
          </ul>
        </nav>
    </div>
  )
}

export default MobileMenu
