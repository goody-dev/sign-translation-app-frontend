import React, { useRef, useState } from 'react'
import UploadIcon from '../assets/icons/send-square.svg'
import PlayIcon from '../assets/icons/play-circle.svg'
import StopIcon from '../assets/icons/stop-circle.svg'
import RecordIcon from '../assets/icons/record-circle.svg'
import axios from 'axios'

const VideoRecorder = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  
  const [video, setVideo] = useState(null);

  const playerRef = useRef();
  const uploadRef = useRef();

  const [recording, setRecording] = useState(false);
  const [promptedStopRecording, setPromptedStopRecording] = useState(false)
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  // const [stoppedPlaying, setStoppedPlaying] = useState(false)
  const [stoppedRecording, setStoppedRecording] = useState(false)

  const startRecording = () => {
    var handleSuccess = (stream) => {
      playerRef.current.srcObject = stream;
      playerRef.current.play();
      setRecording(true);

      const options = {mimeType: 'video/webm'};
      const recordedChunks = [];
      const mediaRecorder = new MediaRecorder(stream, options);

      mediaRecorder.addEventListener('dataavailable', ({data})=> {
        if (data.size > 0) {
          recordedChunks.push(data);
          console.log("recordedChunk:", data);
        }

        if (promptedStopRecording && !recording) {
          mediaRecorder.stop();
        }
      });

      mediaRecorder.addEventListener('stop', () => {
        const videoBlob = new Blob(recordedChunks, { type:"video/webm" });
        const url = URL.createObjectURL(videoBlob);
        playerRef.current.src = url;
        // const a = document.createElement("a");
        // a.style = "display: none"
        // a.href =  url;
        // a.download = "record.webm";
        // a.click();
        //console.log(videoBlob);
        setVideo(videoBlob);
      });

      mediaRecorder.start();
    }

    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    }).then(handleSuccess)
    .catch(err => {
      alert("Unable to access camera, pls try again!");
      console.log(err);
    })
  }

  const playRecord = () => {
    playerRef.current.play();
    setPlaying(true);
  }

  const stopRecording = () => {
    setPromptedStopRecording(true);
    const stream = playerRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    })

    playerRef.current.srcObject = null;
    playerRef.current.pause();
    setRecording(false);
  }

  const stopRecord = () => {
    if(!recording) {
      playerRef.current.pause();
      setPlaying(false);
    }
  }

  const uploadRecord = async () => {
    if(!recording && video) {
      console.log(video);

      const data = new FormData();
      data.append('text', 'Increased popularity has given rise to promblems of congestion and erosion');
      data.append('video', video, 'record.webm');

      console.log(data);

      await axios.post('https://signs-5n09.onrender.com/sign', data)
        .then(res => {
          if(res.data.status === true) {
            setStatus("success");
            setMessage(res.data.message);
            alert(res.data.message);
          } else if(res.data.status === false) {
            setStatus("failed");
            setMessage(res.data.message);
            alert(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
          setMessage("Something went wrong, pls try again");
          alert("Something went wrong, pls try again");
        })
    }
  }

  return (
    <div className='flex flex-col gap-[var(--custom-gap)] w-[100%] md:w-[50%]'>
      <div className='flex flex-row items-end justify-center h-[50vh] w-[100%] sm:w-[100%] bg-[var(--black-background)]'>
        <video ref={playerRef} className='h-[100%] w-[100%]'>
          <source src="" />
        </video>
        <div className='absolute flex flex-row gap-[var(--custom-gap)] mb-[calc(2*var(--custom-gap))]'>
          <button onClick={playRecord}>
            <img className='cursor-pointer' src={PlayIcon}/>
          </button>
          <button onClick={startRecording}>
            <img className='cursor-pointer' src={RecordIcon}/>
          </button>
          <button onClick={recording? stopRecording: stopRecord}>
            <img className='cursor-pointer' src={StopIcon}/>
          </button>
        </div>
      </div>
      <div className='flex flex-row justify-between'>
      <select tabIndex={0} className='p-[var(--button-padding)] rounded-[0.5rem] text-[var(--input-color)] sm:w-[50%]'>
          <option value="" className='p-[var(--button-padding)] rounded-[0.5rem] text-[var(--input-color)] sm:w-[50%]'>Select Sign Language</option>
      </select>
      <button onClick={uploadRecord} tabIndex={0} className='bg-[var(--blue-background)] p-[var(--button-padding)] rounded-[0.5rem] text-[var(--tertiary-color)] font-semibold sm:p-[var(--button-padding)] shadow-[var(--button-shadow)] gap-[var(--inline-gap)]'>Upload <img className='h-[var(vh-icon)]' src={UploadIcon}></img></button>
      </div>
    </div>
  )
}

export default VideoRecorder
