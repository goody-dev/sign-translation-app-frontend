import React from 'react'
import LoadingIcon from '../assets/icons/loading-circle.svg'

const ProcessingLoader = () => {
  return (
    <>
      <img className='processing-animation' src={LoadingIcon} alt="processing" aria-label='processing' />
    </>
  )
}

export default ProcessingLoader
