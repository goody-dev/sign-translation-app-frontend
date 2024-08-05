import React, { useEffect, useRef, useState } from 'react'
import PlayIcon from '../assets/icons/play-circle.svg'
import StopIcon from '../assets/icons/stop-circle.svg'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'
import ArrowDown from '../assets/icons/filled-arrow-down.png'
import ThumbsUp from '../assets/icons/like-icon.png'
import ThumbsDown from '../assets/icons/dislike-icon.svg'
import axios from 'axios'

const ValidateEntry = () => {

  const [signVideos, setSignVideos] = useState([]);
  const [playing, setPlaying] = useState([false]);

  const playerRef = useRef();

  const fetchVideos = async()=> {
    await axios.get('https://signs-5n09.onrender.com/sign/all')
    .then(res => {
      console.log(res.data);
      setSignVideos(res.data.data);
    });
  }

  useEffect(()=> {
    fetchVideos();
  }, [])

  useEffect(() => {
    if(signVideos.length) {
      playerRef.current.src = signVideos[1].videoUrl;
    }
  }, [signVideos])

  const handlePlay = () => {
    playerRef.current.play();
    setPlaying(true);
  }
  const handlePause = () => {
    playerRef.current.pause();
    setPlaying(false);
  }

  return (
    <div className='flex flex-col justify-center gap-[var(--custom-gap)] bg-[var(--tertiary-background)] w-[100%] md:h-[calc(100vh-97.19px)] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)]'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-[1.5rem]'>Validate Translation</h1>
        <p className='text-[1rem] text-[var(--input-color)]'>Confirm if the text translation corresponds with the given video</p>
      </div>
      <div className='flex flex-col gap-[2.5rem] w-[100%] md:flex-row'>
        <div className='flex flex-col justify-end items-end h-[50vh] w-[100%] sm:w-[100%] bg-[var(--black-background)]'>
          <div className='absolute z-50 self-end mb-[50vh] mr-[60px]'>
            <div className='absolute flex flex-row items-center justify-center bg-[var(--white-background)] p-[var(--button-padding)]'> 
            <p>ASL</p>
            <img src={ArrowDown}/>
            </div>
          </div>
          <video ref={playerRef} className='h-[100%] w-[100%]'>
          </video>
          <div className='absolute flex flex-row self-center gap-[var(--custom-gap)] mb-[calc(2*var(--custom-gap))]'>
            <button onClick={handlePlay}>
              <img src={PlayIcon} className='cursor-pointer'/>
            </button>
            <button onClick={handlePause}>
              <img src={StopIcon} className='cursor-pointer'/>
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center p-[var(--button-padding)] bg-[var(--white-background)] h-[50vh] w-[100%] sm:w-[100%]'>
          <p className='text-center text-[20px] font-semibold text-wrap'>Increased popularity has given rise to problems of congestion and erosion</p>
        </div>
      </div>
      <div className='flex flex-col items-center w-[100%] gap-[calc(var(custom-gap)/2)]'>
        <div className='flex flex-row justify-between items-center w-[100%]'>
          <button className='text-[1rem] bg-[var(--blue-background)] opacity-[0.3] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-bold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'><img className='rotate-180 h-[var(vh-icon)]' src={ArrowIcon}/>Previous</button>
          <div className='flex flex-row flex-wrap font-semibold items-center gap-[calc(var(--inline-gap)/2)]'>
              <button className='cursor-pointer h-[2.8125rem] w-[2.8125rem] text-[1.25rem] bg-[var(--white-background)] rounded-[50%] text-center leading-[1.5rem]'>1</button>
              <button className='cursor-pointer h-[2.8125rem] w-[2.8125rem] text-[1.25rem] bg-[var(--white-background)] rounded-[50%] text-center leading-[1.5rem]'>2</button>
              <button className='cursor-pointer h-[2.8125rem] w-[2.8125rem] text-[1.25rem] bg-[var(--white-background)] rounded-[50%] text-center leading-[1.5rem]'>3</button>
              <button className='cursor-pointer h-[2.8125rem] w-[2.8125rem] text-[1.25rem] bg-[var(--white-background)] rounded-[50%] text-center leading-[1.5rem]'>4</button>
              <button className='cursor-pointer h-[2.8125rem] w-[2.8125rem] text-[1.25rem] bg-[var(--white-background)] rounded-[50%] text-center leading-[1.5rem]'>5</button>
          </div>
          <button className='text-[1rem] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'>Submit <img className='h-[var(vh-icon)]' src={ArrowIcon}/></button>
        </div>
        <p className='text-[var(--feedback-text)] text-[19px] font-normal self-center'>Send us a feedback by selecting a rating above</p>
      </div>
    </div>
  )
}

export default ValidateEntry
