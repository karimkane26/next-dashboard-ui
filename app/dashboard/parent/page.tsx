import React from 'react'
import BigCalendar from '@/app/components/BigCalendar'
import Announcements from '@/app/components/Announcements'
const ParentPage = () => {
   return (
    <div  className='px-4 flex gap-4 flex-col md:flex-row xl:flex-row'>
      {/* {LEFT} */}
      <div className="w-full xl:w-2/3">
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className='font-semibold'>Schedule (Jhon Doe)</h1>
        <BigCalendar />
      </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <Announcements />
      </div>
    </div>
  )
}

export default ParentPage