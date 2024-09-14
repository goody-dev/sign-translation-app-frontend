import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts'
import { ResponsiveContainer } from 'recharts'
import React from 'react'

const AreaChartCard = ({title, figure, data}) => {
  return (
    <div className="flex flex-col bg-[var(--white-background)] h-[100%] w-[100%] p-[var(--tile-padding)] rounded-[1rem]">
      <p className='text-[14px] text-[var(--subtext-color)] font-[500]'>{title}</p>
      <p className='font-bold text-[1.5rem]'>{figure}</p>
      <ResponsiveContainer height={48} width="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor='#2E42A5' stopOpacity={0.5} />
              <stop offset="100%" stopColor='#2E42A5' stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="rating" stroke='#2E42A5' strokeWidth={2} fillOpacity={1} fill='url(#colorRating)' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaChartCard
