import React from 'react'
import { Link } from 'react-router-dom'

const ContributeMenu = () => {
  return (
    <div className='block absolute p-[var(--card-padding)] bg-[var(--white-background)] shadow-[var(--action-card-shadow)] rounded-[var(--custom-radius)]'>
      <ul className='gap-[var(--custom-gap)]'>
        <li>
          <Link to='/record-video'>Record Video</Link>
        </li>
        <hr></hr>
        <li>
          <Link to='/translate-text'>Translate Text</Link>
        </li>
        <hr></hr>
        <li>
          <Link to='/validate-entry'>Validate Entry</Link>
        </li>
      </ul>
    </div>
  )
}

export default ContributeMenu
