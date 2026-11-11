"use client"
import React from 'react'
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import Image from 'next/image';
const data = [
     {
     name: 'Total',
    count: 106,
    fill: '#8884d8',
 },
  {
     name: 'Girls',
    count: 53,
    fill: '#8884d8',
 },
  { 
    name: 'Boys',
    count: 47, 
    fill: '#82ca9d' 
},
];

// const CountChart = () => {
// return (
//     <div className='bg-white rounded-xl h-full p-4 w-full'>
//         {/* {Titre} */}
//         <div className='flex justify-between items-center'>
//             <h1 className='text-lg font-semibold'>Students</h1>
//             <Image src="/moreDark.png" alt="User" width={20} height={20} />
//         </div>
//         {/* CHART */}
//         <div className="relative w-full h-[75%]">
//             <RadialBarChart
//       style={{ width: '150%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 1.618 , }}
//       responsive
//       cx="30%"
//       cy="50%"
//       barSize={32}
//       data={data}
//       innerRadius="40%"
//       outerRadius="100%"
      
//     >
//       <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="count" />
//       {/* <Legend iconSize={10} position="right" /> */}
//       <Tooltip />
//       <RechartsDevtools />

//     </RadialBarChart>
//     <Image src="/maleFemale.png" alt="User" width={20} height={20} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>

//         </div>
//         {/* BOTTOM */}
//         {/* <div className=""></div> */}

//         <div className="flex justify-center gap-16">
//           <div className="flex flex-col gap-1">
//             <div className="w-5 h-5 bg-lamaSky rounded-full" />
//             <h1 className="font-bold">1,234</h1>
//             <h2 className="text-xs text-gray-300">Boys (55%)</h2>
//           </div>

//           <div className="flex flex-col gap-1">
//             <div className="w-5 h-5 bg-LamaYellow rounded-full" />
//             <h1 className="font-bold">1,234</h1>
//             <h2 className="text-xs text-gray-300">Girl (45%)</h2>
//           </div>
//         </div>
//     </div>
//     )
// }

// export default CountChart

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col">
      {/* TITRE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="relative w-full flex-1 min-h-[200px]">
        <RadialBarChart
          style={{ width: '100%', height: '100%' }}
          responsive
          cx="50%"
          cy="50%"
          barSize={32}
          data={data}
          innerRadius="40%"
          outerRadius="100%"
        >
          <RadialBar background dataKey="count" />
          <Tooltip />
          <RechartsDevtools />
        </RadialBarChart>

        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-8 sm:gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart