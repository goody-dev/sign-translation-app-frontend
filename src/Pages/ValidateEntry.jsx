import React, { useEffect, useRef, useState } from 'react'
import PlayIcon from '../assets/icons/icons8-play-button.png'
import StopIcon from '../assets/icons/icons8-pause-button.png'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'
import ArrowDown from '../assets/icons/filled-arrow-down.png'
import axios from 'axios'
import { useAuth } from '../provider/authProvider'
import StatusPopUp from '../Components/StatusPopUp'
import ProcessingLoader from '../Components/ProcessingLoader'
import VideoPlayer from '../Features/VideoPlayer'

const ValidateEntry = () => {
  const { token } = useAuth();

  let config = {
    headers: {
      'authorization': `Bearer ${token?.value && token.value}`
    }
  }
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [submitStatusPopup, setSubmitStatusPopup] = useState(false);

  const handleSubmitStatusPopup = () => {
    setSubmitStatusPopup(true);
  }

  useEffect(()=> {
    if(status === "success" || status ==="failed" || status ==="info") { 
      handleSubmitStatusPopup();
      setTimeout(() => {
        setSubmitStatusPopup(false);
        setStatus(null);
        setMessage('');
      }, 5000);
    }
  }, [status])

  const fetchVideos = async()=> {
    await axios.get('https://signs-5n09.onrender.com/sign/all', config)
    .then(res => {
      setSignTranslations(res.data.data.filter(sign => sign.videoUrls?.length > 0));
      setTranslationIndex(0);
      setVideoIndex(0);
    }).catch(err => {
      console.log(err);
    })
  }


  useEffect(()=> {
    fetchVideos();
  }, [])

  const [signTranslations, setSignTranslations] = useState([]);
  const [translationIndex, setTranslationIndex] = useState(0);
  const [onLastTranslation, setOnLastTranslation] = useState(false);
  const [onFirstTranslation, setOnFirstTranslation] = useState(true);

  // const [playing, setPlaying] = useState(false);

  const [videoIndex, setVideoIndex] = useState(0);
  const [onLastVideo, setOnLastVideo] = useState(false);
  const [onFirstVideo, setOnFirstVideo] = useState(true);
  
  const [rating, setRating] = useState(null);
  // const playerRef = useRef();

  const signVideos = signTranslations.length? signTranslations[translationIndex]?.videoUrls: [];
  const maxTranslationIndex = signTranslations.length - 1;
  const maxVideoIndex = signVideos.length? signVideos.length - 1: null;
  const textId = signTranslations.length? signTranslations[translationIndex]?.id: null;
  const videoId = signVideos.length? signVideos[videoIndex]?.id: null;

  useEffect(()=> {
    setOnFirstVideo(videoIndex === 0);
    setOnLastVideo(videoIndex === maxVideoIndex);
  }, [videoIndex, maxVideoIndex])

  useEffect(()=> {
    setOnFirstTranslation(translationIndex === 0);
    setOnLastTranslation(translationIndex === maxTranslationIndex);
  }, [translationIndex, maxTranslationIndex])

  const showNextTranslation = () => {
    if(!onLastVideo) {
      setVideoIndex(videoIndex + 1);
    } else if (!onLastTranslation)  {
      setTranslationIndex(translationIndex + 1);
      setVideoIndex(0);
    }
  }

  const showPrevTranslation = () => {
    if(!onFirstVideo) {
      setVideoIndex(videoIndex - 1);
    } else if(!onFirstTranslation && videoIndex === 0) {
      setTranslationIndex(translationIndex - 1);
      setVideoIndex(maxVideoIndex);
    }
  }

  // useEffect(() => {
  //   if(signTranslations.length && signVideos.length) {
  //     playerRef.current.src = signVideos[videoIndex]?.videoUrl;
  //   }
  // }, [videoIndex, translationIndex, signTranslations, signVideos])

  // const handlePlay = () => {
  //   playerRef.current.play();
  //   setPlaying(true);
  // }
  // const handlePause = () => {
  //   playerRef.current.pause();
  //   setPlaying(false);
  // }

  const handleRating = (rate) => {
    setRating(rate);
  }

  const handleSubmit = async() => {
    const data = {
      "textId": textId.toString(),
      "videoId": videoId.toString(),
      "ratingNo": rating,
    }
    //console.log(data);
    if(token && token !== "initial") {
      if(rating && textId && videoId) {
        setStatus("pending");
        try {
          await axios.post('https://signs-5n09.onrender.com/rate', data, config)
          .then(res => {
            if(res.data.status === true) {
              setStatus("success");
              setMessage(res.data.message);     
              showNextTranslation();
              setRating(null);
            } else if(res.data.status === false) {
              setStatus("failed");
              setMessage(res.data.message);
            }
          })
        } catch (err) {
          console.log(err);
          setStatus("failed");
          setMessage("Something went wrong, pls try again");
        }
      } else {
        setStatus("info");
        setMessage("Rate a translation");
      }
    } else {
      setStatus("info");
      setMessage("Login to contribute!");
    }

  }

  return (
    <div className='flex flex-col justify-center gap-[var(--custom-gap)] bg-[var(--tertiary-background)] w-[100%] md:h-[calc(100vh-97.19px)] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)]'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-[1.5rem]'>Validate Translation</h1>
        <p className='text-[1rem] text-[var(--input-color)]'>Confirm if the text translation corresponds with the given video</p>
      </div>
      <div className='flex flex-col gap-[2.5rem] w-[100%] md:flex-row'>
        <VideoPlayer videoUrl={signVideos[videoIndex]?.videoUrl} />
        <div className='flex flex-col items-center justify-center p-[var(--button-padding)] bg-[var(--white-background)] h-[50vh] w-[100%] sm:w-[100%]'>
          <p className='text-center text-[20px] font-semibold text-wrap'>{signTranslations.length? signTranslations[translationIndex].text: "Loading..."}</p>
        </div>
      </div>
      <div className='flex flex-col items-center w-[100%] gap-[calc(var(custom-gap)/2)]'>
        <div className='flex flex-col gap-[calc(var(--custom-gap))] sm:flex-row justify-between items-center w-[100%]'>
          <button onClick={showPrevTranslation} className={((onFirstTranslation && onFirstVideo) && 'opacity-[0.3]') + ' text-[1rem] bg-[var(--blue-background)]  p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-bold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'}><img className='rotate-180 h-[var(vh-icon)]' src={ArrowIcon}/>Previous</button>
          <div className='flex flex-row flex-wrap font-semibold justify-center items-center gap-[calc(var(--inline-gap)/2)]'>
              <button onClick={()=>handleRating(1)} className={(rating === 1? 'bg-[var(--blue-background)] text-white':'bg-[var(--white-background)]') + ' cursor-pointer h-[2.8125rem] w-[2.8125rem] text-[1.25rem] rounded-[50%] text-center leading-[1.5rem]'}>1</button>
              <button onClick={()=>handleRating(2)} className={(rating === 2? 'bg-[var(--blue-background)] text-white':'bg-[var(--white-background)]') + ' cursor-pointer h-[2.8125rem] w-[2.8125rem] text-[1.25rem] rounded-[50%] text-center leading-[1.5rem]'}>2</button>
              <button onClick={()=>handleRating(3)} className={(rating === 3? 'bg-[var(--blue-background)] text-white':'bg-[var(--white-background)]') + ' cursor-pointer h-[2.8125rem] w-[2.8125rem] text-[1.25rem] rounded-[50%] text-center leading-[1.5rem]'}>3</button>
              <button onClick={()=>handleRating(4)} className={(rating === 4? 'bg-[var(--blue-background)] text-white':'bg-[var(--white-background)]') + ' cursor-pointer h-[2.8125rem] w-[2.8125rem] text-[1.25rem] rounded-[50%] text-center leading-[1.5rem]'}>4</button>
              <button onClick={()=>handleRating(5)} className={(rating === 5? 'bg-[var(--blue-background)] text-white':'bg-[var(--white-background)]') + ' cursor-pointer h-[2.8125rem] w-[2.8125rem] text-[1.25rem] rounded-[50%] text-center leading-[1.5rem]'}>5</button>
          </div>
          <div className='flex flex-row gap-[var(--custom-gap)] items-center'>
            <button onClick={showNextTranslation} className={((onLastTranslation && onLastVideo)  && 'text-opacity-[0.3]') + ' underline'}>Skip</button>
            <button onClick={handleSubmit} className={'bg-[var(--blue-background)] text-[1rem] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'}>{status==="pending"? <ProcessingLoader/>: <>Submit<img className='h-[var(vh-icon)]' src={ArrowIcon}/></>}</button>
          </div>
        </div>
        <p className='text-[var(--feedback-text)] text-[19px] font-normal self-center text-center'>Send us a feedback by selecting a rating above</p>
      </div>
      {submitStatusPopup && <StatusPopUp status={status} message={message} />}
    </div>
  )
}

export default ValidateEntry
