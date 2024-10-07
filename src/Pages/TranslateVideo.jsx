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

const TranslateVideo = () => {
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
        setMessage('');
        setStatus(null);
      }, 5000);
    }
  }, [status])

  const [inputText, setInputText] = useState("");
  const [signVideos, setSignVideos] = useState([]);

  const maxVideoIndex = signVideos.length-1;
  const [videoIndex, setVideoIndex] = useState(0);
  const [onLastVideo, setOnLastVideo] = useState(false);
  const [onFirstVideo, setOnFirstVideo] = useState(true);

  useEffect(()=> {
    videoIndex === 0? setOnFirstVideo(true): setOnFirstVideo(false);
    videoIndex === maxVideoIndex? setOnLastVideo(true): setOnLastVideo(false);
  }, [videoIndex])

  const showNextVideo = () => {
    if(signVideos.length) {
      !onLastVideo && setVideoIndex(videoIndex + 1);
    }
  }

  const showPrevVideo = () => {
    if(signVideos.length) {
      !onFirstVideo && setVideoIndex(videoIndex - 1);
    }
  }

  const fetchVideos = async()=> {
    await axios.get('https://signs-5n09.onrender.com/video/all', config)
    .then(res => {
      //console.log(res.data.data);
      setSignVideos(res.data.data);
    }).catch(err => console.log(err));
  }

  useEffect(()=> {
    fetchVideos();
  }, [])


  const handleInputText = (event) => {
    setInputText(event.target.value);
  }

  const handleSubmit = async () => {
    if(inputText.length) {
      if(token && token !== "initial") {
        setStatus("pending");
        try {
          await axios.post('https://signs-5n09.onrender.com/text', {
            videoId: signVideos[videoIndex].id,
            text: inputText
          }, config)
          .then(res => {
            if(res.data.status === true) {
              setStatus("success");
              setMessage(res.data.message);
              //alert(res.data.message);
              setInputText("");
            } else if(res.data.status === false) {
              setStatus("failed");
              setMessage(res.data.message);
              //alert(res.data.message);
            }
          })
        } catch (err) {
          console.log(err);
          setStatus("failed");
          setMessage("Something went wrong, pls try again");
          //alert("Something went wrong, pls try again");
        }
      } else {
        setStatus("failed");
        setMessage("Login to contribute!");
      }
    } else {
      setStatus("info");
      setMessage("Enter translation!");
    }
  }


  return (
    <div className='flex flex-col justify-center gap-[var(--custom-gap)] bg-[var(--tertiary-background)] w-[100%] max-w-[100vw] py-[3rem] px-[1.5rem] sm:p-[var(--custom-padding)] md:h-[calc(100vh-97.19px)]'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-[2rem]'>Translate Video</h1>
        <p className='text-[1rem] text-[var(--input-color)]'>Type in the text translation for the given video</p>
      </div>
      <div className='flex flex-col gap-[2.5rem] w-[100%] md:flex-row'>
        <div className='flex flex-col gap-[var(--custom-gap)] w-[100%] md:w-[50%]'>
          <VideoPlayer videoUrl={signVideos[videoIndex]?.videoUrl} />
          <div className='flex flex-row justify-between'>
            <button onClick={showPrevVideo} className={(onFirstVideo && 'opacity-[0.3] ') + 'text-[1rem] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'}><img className='rotate-180 h-[var(vh-icon)]' src={ArrowIcon}/>Previous</button>
            <button onClick={showNextVideo} className={(onLastVideo && 'opacity-[0.3] ') + 'text-[1rem] bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'}>Next <img className='h-[var(vh-icon)]' src={ArrowIcon} /></button>
          </div>
        </div>
        <div className='flex flex-col gap-[var(--custom-gap)] w-[100%] md:w-[50%]'>
          <div className='flex flex-col items-center justify-center p-[var(--button-padding)] bg-[var(--white-background)] h-[50vh] w-[100%] sm:w-[100%]'>
            <textarea onChange={(event) => handleInputText(event)} value={inputText} className='text-center align-middle outline-none text-[2rem] text-[var(--input-color)] font-semibold text-wrap w-[100%] h-auto' placeholder='Enter text here...'></textarea>
          </div>
          <div className='flex flex-row justify-end'>
            <button onClick={handleSubmit} className={'bg-[var(--blue-background)]' + ' text-[1rem] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold shadow-[var(--button-shadow)] gap-[var(--inline-gap)] sm:p-[var(--button-padding)]'}>{status === 'pending'? <ProcessingLoader />: <>Submit<img className='h-[var(vh-icon)]' src={ArrowIcon} /></>}</button>
          </div>
        </div>
      </div>
      {submitStatusPopup && <StatusPopUp status={status} message={message} />}
    </div>
  )
}

export default TranslateVideo
