import React, { useEffect, useState } from 'react'

import ArrowIcon from '../assets/icons/filled-arrow-right.png'
import VideoRecorder from '../Features/VideoRecorder'



const RecordVideo = () => {
  const [givenTexts, setGivenTexts] = useState(["Increased popularity has given rise to problems of congestion and erosion", "Increased popularity has given rise to problems of social vices", "Technology has given rise to problems of social vices"]);
  const maxTextIndex = givenTexts.length-1;
  const [textIndex, setTextIndex] = useState(0);
  const [onLastText, setOnLastText] = useState(false);
  const [onFirstText, setOnFirstText] = useState(true);

  useEffect(()=> {
    textIndex === 0? setOnFirstText(true): setOnFirstText(false);
    textIndex === maxTextIndex? setOnLastText(true): setOnLastText(false);
  }, [textIndex])

  const showNextText = () => {
    !onLastText && setTextIndex(textIndex + 1);
  }

  const showPrevText = () => {
    !onFirstText && setTextIndex(textIndex - 1);
  }

  return (
    <div className='flex flex-col justify-center gap-[var(--custom-gap)] bg-[var(--tertiary-background)] w-[100%] md:h-[calc(100vh-97.19px)] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)]'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-[2rem]'>Record Translation</h1>
        <p className='text-[1rem] text-[var(--input-color)]'>Capture your sign language translation for a given text</p>
      </div>
      <div className='flex flex-col gap-[2.5rem] w-[100%] md:flex-row'>
        <VideoRecorder/>
        <div className='flex flex-col gap-[var(--custom-gap)] w-[100%] md:w-[50%]'>
          <div className='flex flex-col items-center justify-center p-[var(--button-padding)] bg-[var(--white-background)] h-[50vh] w-[100%] sm:w-[100%]'>
            <p className='text-center text-[20px] font-semibold text-wrap'>{givenTexts[textIndex]}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <button onClick={showPrevText} className={'bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]' + (onFirstText && " opacity-[0.3]")}><img className='rotate-180 h-[var(vh-icon)]' src={ArrowIcon}/>Previous</button>
            <button onClick={showNextText} className={'underline' + (onLastText && ' opacity-[0.3]')}>Skip</button>
            <button className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'>End <img className='h-[var(vh-icon)]' src={ArrowIcon} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecordVideo
