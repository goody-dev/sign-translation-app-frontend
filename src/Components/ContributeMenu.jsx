import React from 'react'
import { Link } from 'react-router-dom'

const ContributeMenu = () => {
  return (
    <div className='CTM block mt-[calc(var(--custom-gap)/2)] absolute p-[var(--card-padding)] bg-[var(--white-background)] rounded-[var(--custom-radius)]'>
      <ul className='flex flex-col gap-[calc(var(--custom-gap)/2)]'>
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
