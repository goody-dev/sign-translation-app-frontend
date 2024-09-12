import React from 'react'
import TransIcon from '../assets/icons/trans-vector.svg'
import Thumbnail from '../assets/icons/nigeria-icon.svg'

const Report = () => {
  return (
    <div className="flex flex-col gap-[var(--custom-gap)] h-[100%] w-[85%]">
      <div id="filter">
        <select className='p-[var(--button-padding)] rounded-[1.25rem] w-[20rem] text-[1rem] text-[var(--subtext-color)] font-normal'>
          <option className=''>Timeframe: <span className='font-semibold text-black'>All-time</span></option>
        </select>
      </div>
      <div className="flex flex-row flex-wrap w-[100%] gap-[1.5rem] shadow-lg shadow-[var(--tile-shadow)]">
        <div id="figures" className="flex flex-col w-[calc(50%-1rem)] h-[auto] gap-[1rem]">
            <div className="flex flex-row gap-[1rem] h-max">
              <div className="flex flex-col bg-[var(--white-background)] w-[calc((1/3)*100%)] h-[100%] p-[var(--tile-padding)] rounded-[1rem] shadow-[var(--tile-shadow)] gap-[var(--custom-gap)]">
                  <p className='text-[0.875rem] text-[var(--subtext-color)] font-[500]'>Active Users</p>
                  <p className='font-bold text-[1.5rem]'>47<span className='text-[1rem] text-[var(--xsubtext-color)]'>/95</span></p>
              </div>
              <div className="flex flex-col gap-[1rem] w-[70%]">
                <div className="flex flex-col bg-[var(--white-background)] w-[100%] p-[var(--tile-padding)] rounded-[1rem]">
                    <p className='text-[14px] text-[var(--subtext-color)] font-[500]'>Total Video Contributions</p>
                    <p className='font-bold text-[1.5rem]'>3,298</p>
                </div>
                <div className="flex flex-col bg-[var(--white-background)] w-[100%] p-[var(--tile-padding)] rounded-[1rem]">
                    <p className='text-[14px] text-[var(--subtext-color)] font-[500]'>Total Text Contributions</p>
                    <p className='font-bold text-[1.5rem]'>3,298</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[1rem] w-[100%] h-max">
                <div className="flex flex-col bg-[var(--white-background)] h-[100%] w-[100%] p-[var(--tile-padding)] rounded-[1rem]">
                    <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>Top Text Rating</p>
                    <p className='font-bold text-[1.5rem]'>64%</p>
                </div>
                <div className="flex flex-col bg-[var(--white-background)] h-[100%] w-[100%] p-[var(--tile-padding)] rounded-[1rem]">
                    <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>Top Video Rating</p>
                    <p className='font-bold text-[1.5rem]'>86%</p>
                </div>
                <div className="flex flex-col bg-[var(--white-background)] h-[100%] w-[100%] p-[var(--tile-padding)] rounded-[1rem]">
                    <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>Contributions</p>
                    <p className='font-bold text-[1.5rem]'>+34%</p>
                </div>
            </div>
        </div>
        <div id="activity" className="w-[calc(50%-1rem)] h-[auto] bg-[var(--white-background)] shadow-lg shadow-[var(--tile-shadow)] p-[var(--tile-padding)] rounded-[1rem]">
            <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>Activity</p>
        </div>
        <div id="twvt" className="flex flex-col w-[calc(50%-1rem)] h-auto bg-[var(--white-background)] shadow-[var(--tile-shadow)] p-[var(--tile-padding)] rounded-[1rem] gap-[var(--tile-padding)]">
          <div className="flex flex-row w-[100%] justify-between">
            <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>Top Weekly Video Translation</p>
            <p>83%</p>
          </div>
          <div className="flex flex-row w-[100%] justify-between items-center">
            <img src={Thumbnail} className='w-[40%]'></img>
            <img src={TransIcon} />
            <div className='flex flex-row items-center w-[40%] h-[100%] bg-[var(--ash-background)] text-center'>
              <p className='text-wrap'>During birth, the mother goes through pain</p>
            </div> 
          </div>
        </div>
        <div id="twtt" className="flex flex-col w-[calc(50%-1rem)] h-auto bg-[var(--white-background)] shadow-[var(--tile-shadow)] p-[var(--tile-padding)] rounded-[1rem] gap-[var(--tile-padding)]">
          <div className="flex flex-row w-[100%] justify-between">
            <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>Top Weekly Text Translation</p>
            <p>83%</p>
          </div>
          <div className="flex flex-row w-[100%] justify-between items-center">
            <div className='flex flex-row items-center w-[40%] h-[100%] bg-[var(--ash-background)] text-center'>
              <p>During birth, the mother goes through pain</p>
            </div>
            <img src={TransIcon} />
            <img src={Thumbnail} className='w-[40%]'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
