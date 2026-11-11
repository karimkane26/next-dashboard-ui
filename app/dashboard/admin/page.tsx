import React from 'react'
import UserCard from '@/app/components/UserCard'
import CountChart from '@/app/components/CountChart'
const Adminpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT SIDEBAR */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      <div className="flex gap-4 justify-between flex-wrap">
      <UserCard type="students"/>
      <UserCard type="teacher"/>
      <UserCard type="parent"/>
      <UserCard type="staff"/>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row ">
        {/* COUNT CHART */}
        <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart />
        </div>
        {/* ATTENDANCE CHART */}
        <div className='w-full lg:w-2/3 h-[450px]'></div>
      </div>
      {/* BOTTOM CHART */}
        

        
      </div>
      {/* RIGHT SIDEBAR */}
      
      <div className="w-full lg:w-1/3">r</div>
    </div>
  )
}

export default Adminpage