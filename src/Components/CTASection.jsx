import React from 'react'
import ArrowRight from '../assets/icons/filled-arrow-right.png'
const CTASection = () => {
  return (
    <div className=''>
      <div className=''>
        <h2>Transcribe ASL <br/>to Text</h2>
        <button tabIndex={0} >Contribute <img src={ArrowRight} /></button>
      </div>
      <div>
        <h2>Transcribe Text <br/>to ASL</h2>
        <button tabIndex={0} >Contribute <img src={ArrowRight} /></button>
      </div>
    </div>
  )
}

export default CTASection
