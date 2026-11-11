"use client"
import React from 'react'
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,Rectangle} from 'recharts';
import Image from 'next/image';
// const data = generateMockData(6,823)
import { ResponsiveContainer } from 'recharts';
const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];
const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className="">
            <h1>Attendance</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20}/>
        </div>
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
    //   style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
    //   responsive
      data={data}
     width={500}
     height={300}
     barSize={20}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
      <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false}/>
      <YAxis axisLine={false} />
      <Tooltip />
      <Legend position='left' verticalAlign='top' wrapperStyle={{paddingTop: "20px",paddingBottom:"40px"}}/>
      <Bar 
      dataKey="present" 
      fill="#FAE27C" 
      legendType='circle'
      radius={[10,10,0,0]}
    //   activeBar={<Rectangle fill="pink" stroke='blue'/>} 
      />
      <Bar dataKey="absent" 
      fill='#C3EBFA'
      legendType='circle'
      radius={[10,10,0,0]}

      />
      <RechartsDevtools />
    </BarChart>
    </ResponsiveContainer>

    </div>
  )
}

export default AttendanceChart