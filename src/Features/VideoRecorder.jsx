import React from 'react'
import UploadIcon from '../assets/icons/send-square.svg'
import PlayIcon from '../assets/icons/play-circle.svg'
import StopIcon from '../assets/icons/stop-circle.svg'
import RecordIcon from '../assets/icons/record-circle.svg'

const VideoRecorder = () => {

  const startRecording = () => {

  }

  const playRecord = () => {

  }

  const stopRecording = () => {

  }

  const stopRecord = () => {

  }

  return (
    <div className='flex flex-col gap-[var(--custom-gap)] w-[100%] md:w-[50%]'>
      <div className='flex flex-row items-end justify-center h-[50vh] w-[100%] sm:w-[100%] bg-[var(--black-background)]'>
        <div className='absolute flex flex-row gap-[var(--custom-gap)] mb-[calc(2*var(--custom-gap))]'>
          <button onClick={playRecord}>
            <img className='cursor-pointer' src={PlayIcon}/>
          </button>
          <button onClick={startRecording}>
            <img className='cursor-pointer' src={RecordIcon}/>
          </button>
          <button onClick={stopRecording}>
            <img className='cursor-pointer' src={StopIcon}/>
          </button>
        </div>
      </div>
      <div className='flex flex-row justify-between'>
      <select tabIndex={0} className='p-[var(--button-padding)] rounded-[0.5rem] text-[var(--input-color)] sm:w-[50%]'>
          <option value="" className='p-[var(--button-padding)] rounded-[0.5rem] text-[var(--input-color)] sm:w-[50%]'>Select Sign Language</option>
      </select>
      <button tabIndex={0} className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold sm:p-[var(--button-padding)] shadow-[var(--button-shadow)] gap-[var(--inline-gap)]'>Upload <img className='h-[var(vh-icon)]' src={UploadIcon}></img></button>
      </div>
    </div>
  )
}

export default VideoRecorder
