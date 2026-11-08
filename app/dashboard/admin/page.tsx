import React from 'react'
import UserCard from '@/app/components/UserCard'
const Adminpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT SIDEBAR */}
      <div className="w-full lg:w-2/3">
      <div className="flex gap-4 justify-between flex-wrap">
      <UserCard type="students"/>
      <UserCard type="teacher"/>
      <UserCard type="parent"/>
      <UserCard type="staff"/>

      </div>
      </div>
      {/* USER CARDS */}
      
      <div className="w-full lg:w-1/3">r</div>
    </div>
  )
}

export default Adminpage