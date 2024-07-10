import React from 'react'
import PlayIcon from '../assets/icons/play-circle.svg'
import StopIcon from '../assets/icons/stop-circle.svg'
import ArrowIcon from '../assets/icons/filled-arrow-right.png'
import ArrowDown from '../assets/icons/filled-arrow-down.png'

const TranslateText = () => {
  return (
    <div className='bg-black'>
      <div>
        <h1>Translate Video</h1>
        <p>Type in the text translation for the given video</p>
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
          <p>Enter text here</p>
        </div>
      </div>
      <div>
        <button><img className='rotate-180' src={ArrowIcon}/> Previous</button>
        <button>Submit <img src={ArrowIcon}/></button>
      </div>
    </div>
  )
}

export default TranslateText
