import React from 'react'
import PlayIcon from '../assets/icons/play-circle.svg'
import StopIcon from '../assets/icons/stop-circle.svg'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'
import ArrowDown from '../assets/icons/filled-arrow-down.png'
import ThumbsUp from '../assets/icons/like-icon.png'
import ThumbsDown from '../assets/icons/dislike-icon.svg'

const ValidateEntry = () => {
  return (
    <div className='flex flex-col justify-center gap-[var(--custom-gap)] bg-[var(--tertiary-background)] w-[100%] sm:h-[calc(100vh-97.19px)] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)]'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-[2rem]'>Validate Translation</h1>
        <p className='text-[1rem] text-[var(--input-color)]'>Confirm if the text translation corresponds with the given video</p>
      </div>
      <div className='flex flex-row gap-[2.5rem] w-[100%]'>
        <div className='flex flex-row items-end justify-center h-[50vh] w-[100%] sm:w-[100%] bg-[var(--black-background)]'>
          {/* <div className='flex flex-row items-center absolute bg-[var(--white-background)] p-[var(--button-padding)] mt-0'>
            <p>ASL</p>
            <img src={ArrowDown}/>
          </div> */}
          <div className='flex flex-row gap-[var(--custom-gap)] mb-[calc(2*var(--custom-gap))]'>
            <img src={PlayIcon} className='cursor-pointer'/>
            <img src={StopIcon} className='cursor-pointer'/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center p-[var(--button-padding)] bg-[var(--white-background)] h-[50vh] w-[100%] sm:w-[100%]'>
          <p className='text-center text-[20px] font-semibold text-wrap'>Increased popularity has given rise to problems of congestion and erosion</p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <button className='bg-[var(--blue-background)] opacity-[0.3] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-bold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'><img className='rotate-180' src={ArrowIcon}/>Previous</button>
        <div className='flex flex-row font-semibold items-center gap-[calc(var(--inline-gap)/2)]'>
            <button className='cursor-pointer h-[2rem] w-[2rem] bg-[var(--white-background)] rounded-[50%] text-center leading-[2rem]'>1</button>
            <button className='cursor-pointer h-[2rem] w-[2rem] bg-[var(--white-background)] rounded-[50%] text-center leading-[2rem]'>2</button>
            <button className='cursor-pointer h-[2rem] w-[2rem] bg-[var(--white-background)] rounded-[50%] text-center leading-[2rem]'>3</button>
            <button className='cursor-pointer h-[2rem] w-[2rem] bg-[var(--white-background)] rounded-[50%] text-center leading-[2rem]'>4</button>
            <button className='cursor-pointer h-[2rem] w-[2rem] bg-[var(--white-background)] rounded-[50%] text-center leading-[2rem]'>5</button>
        </div>
        <button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'>Submit <img src={ArrowIcon}/></button>
      </div>
    </div>
  )
}

export default ValidateEntry
