import React from 'react'
import VideoRecorder from '../Features/VideoRecorder'

const ContributeVideo = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[var(--custom-gap)] bg-[var(--tertiary-background)] w-[100%] md:h-[calc(100vh-97.19px)] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)]'>
      <div className='flex flex-col text-center'>
        <h1 className='font-bold text-[2rem]'>Contribute Video</h1>
        <p className='text-[1rem] text-[var(--input-color)]'>Capture your sign language translation for a given text</p>
      </div>
      <div className='flex flex-col items-center gap-[2.5rem] w-[100%]'>
        <VideoRecorder textId={""} currentText={""} />
      </div>
    </div>
  )
}

export default ContributeVideo
