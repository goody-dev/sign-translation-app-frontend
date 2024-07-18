import React from 'react'
import { Link } from 'react-router-dom'

const ContributeMenu = () => {
  return (
    <div className='p-[var(--card-padding) bg-[var(--white-background)] shadow-[var(--button-shadow)]'>
      <ul className='gap-[var(--custom-gap: 1.5rem;)]'>
        <li>
          <Link to='/record-video'>Record Video</Link>
        </li>
        <li>
          <Link to='/translate-text'>Translate Video</Link>
        </li>
        <li>
          <Link to='/validate-entry'>Validate Entry</Link>
        </li>
      </ul>
    </div>
  )
}

export default ContributeMenu
