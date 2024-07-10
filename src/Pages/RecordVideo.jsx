import React from 'react'
import UploadIcon from '../assets/icons/send-square.svg'
import PlayIcon from '../assets/icons/play-circle.svg'
import StopIcon from '../assets/icons/stop-circle.svg'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'



const RecordVideo = () => {
  return (
    <div className='bg-black'>
      <div>
        <h1>Record Translation</h1>
        <p>Capture your sign language translation for a given text</p>
      </div>
      <div>
        <div>
          <div>
            <div>
              <img src={PlayIcon}/>
              <img src={StopIcon}/>
              <img src=""/>
            </div>
          </div>
          <div>
            <select placeholder="Select Sign Language">
              <option>ASL</option>
            </select>
            <button>Upload <img src={UploadIcon}></img></button>
          </div>
        </div>
        <div>
          <div>
            <input type='slide'/>
            <p>Increased popularity has given rise to problems of congestion and erosion</p>
          </div>
          <div>
            <button><img className='rotate-180' src={ArrowIcon}/>Previous</button>
            <button>Next <img src={ArrowIcon} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecordVideo
