import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

import React from 'react'

const BarChartCard = ({title, data}) => {
  return (
    <div id="activity" className="flex flex-col justify-between items-start w-[calc(50%-1rem)] h-[auto] bg-[var(--white-background)] shadow-lg shadow-[var(--tile-shadow)] p-[var(--tile-padding)] rounded-[1rem]">
      <p  className='text-[14px] text-[var(--subtext-color)] font-[500]'>{title}</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart width="100%" data={data} barSize={10}>
          <XAxis scale="auto" dataKey='month' axisLine={false} padding={{ left:10, right:10, top: 20 }} />
          <YAxis axisLine={false}/>
          <Bar dataKey="users" fill="#2E42A5" background={{ fill: "#EEE" }} radius={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartCard
