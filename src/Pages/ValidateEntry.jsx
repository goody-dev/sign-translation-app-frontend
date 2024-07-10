import React from 'react'
import PlayIcon from '../assets/icons/play-circle.svg'
import StopIcon from '../assets/icons/stop-circle.svg'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'
import ArrowDown from '../assets/icons/filled-arrow-down.png'
import ThumbsUp from '../assets/icons/like-icon.png'
import ThumbsDown from '../assets/icons/dislike-icon.svg'

const ValidateEntry = () => {
  return (
    <div className='bg-black'>
      <div>
        <h1>Validate Translation</h1>
        <p>Confirm if the text translation corresponds with the given video</p>
      </div>
      <div>
        <div>
          <div>
            <p>ASL</p>
            <img src={ArrowDown}/>
          </div>
          <div>
            <img src={PlayIcon}/>
            <img src={StopIcon}/>
          </div>
        </div>
        <div>
          <input type='slide' />
          <p>Increased</p>
        </div>
      </div>
      <div>
        <button><img className='rotate-180' src={ArrowIcon}/> Previous</button>
        <div>
          <img src={ThumbsUp} />
          <img src={ThumbsDown} />
        </div>
        <button>Submit <img src={ArrowIcon}/></button>
      </div>
    </div>
  )
}

export default ValidateEntry
