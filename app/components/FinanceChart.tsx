"use client"
import React from 'react'
import Image from 'next/image'
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, createHorizontalChart } from 'recharts';
import { generateMockData, MockDataType, RechartsDevtools } from '@recharts/devtools';
type Financedata = {
  name: string,
  income: number,
  expense: 2400
}
// const data: Array<MockDataType> = generateMockData(6, 26213);

const Typed = createHorizontalChart<Financedata, string, number>()({ XAxis, YAxis, Tooltip, Line });
const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
      <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col">
          {/* TITRE */}
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Finance</h1>
            <Image src="/moreDark.png" width={20} height={20} alt=''/>
          </div>
          <Typed.LineChart
      style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid  strokeDasharray="3 3"/>
      <Typed.XAxis 
      dataKey="name"
      tick={{fill: '#d1d5db'}}
      tickLine={false}
      tickMargin={20}
      />
      <Typed.YAxis width="auto" tick={{fill: "#d1d5db"}} tickLine={false}/>
      <Tooltip />
      <Legend
      align='left'
      verticalAlign='top'
      wrapperStyle={{paddingTop: '10px',paddingBottom: '30px'}}
      />
     <Typed.Line
  type="monotone"
  dataKey="income"
  stroke="#C3EBFA"
  strokeWidth={5}
  activeDot={{ r: 8 }}
/>
<Typed.Line
  type="monotone"
  dataKey="expense"
  stroke="#CFCEFF"
  strokeWidth={5}
/>
    </Typed.LineChart>
        </div>
  )
}

export default FinanceChart