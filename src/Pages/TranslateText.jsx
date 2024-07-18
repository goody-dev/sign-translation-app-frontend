import React from 'react'
import PlayIcon from '../assets/icons/play-circle.svg'
import StopIcon from '../assets/icons/stop-circle.svg'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'
import ArrowDown from '../assets/icons/filled-arrow-down.png'

const TranslateText = () => {
  return (
    <div className='flex flex-col justify-center gap-[var(--custom-gap)] bg-[var(--tertiary-background)] w-[100%] sm:h-[calc(100vh-97.19px)] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)]'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-[2rem]'>Translate Video</h1>
        <p className='text-[1rem] text-[var(--input-color)]'>Type in the text translation for the given video</p>
      </div>
      <div className='flex flex-row gap-[2.5rem] w-[100%]'>
        <div className='flex flex-col gap-[var(--custom-gap)] w-[100%] sm:w-[50%]'>
          <div className='flex flex-col justify-end items-end h-[50vh] w-[100%] sm:w-[100%] bg-[var(--black-background)]'>
            {/* <div className='block absolute mb-[50vh] mr-[4.5%]'>
              <div className='flex flex-row absolute items-center justify-center bg-[var(--white-background)] p-[var(--button-padding)] mt-0'>
                <p>ASL</p>
                <img src={ArrowDown}/>
              </div>
            </div> */}
            <div className='flex flex-row self-center gap-[var(--custom-gap)] mb-[calc(2*var(--custom-gap))]'>
              <img src={PlayIcon} className='cursor-pointer'/>
              <img src={StopIcon} className='cursor-pointer'/>
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <button className='text-[1rem] bg-[var(--blue-background)] opacity-[0.3] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'><img className='rotate-180 h-[var(vh-icon)]' src={ArrowIcon}/>Previous</button>
            <button className='text-[1rem] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'>Next <img className='h-[var(vh-icon)]' src={ArrowIcon} /></button>
          </div>
        </div>
        <div className='flex flex-col gap-[var(--custom-gap)] w-[100%] sm:w-[50%]'>
          <div className='flex flex-col items-center justify-center p-[var(--button-padding)] bg-[var(--white-background)] h-[50vh] w-[100%] sm:w-[100%]'>
            <textarea className='text-center align-middle text-[2rem] text-[var(--input-color)] font-semibold text-wrap w-[100%] h-auto'>Enter text here...</textarea>
          </div>
          <div className='flex flex-row justify-end'>
            <button className='text-[1rem] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'>Submit<img className='h-[var(vh-icon)]' src={ArrowIcon} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TranslateText
