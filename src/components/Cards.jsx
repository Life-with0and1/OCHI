import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-[#F1F1F1] px-20 items-center flex gap-5'>
        <div className='w-1/2 h-[50vh]'>
            <div className='relative w-full h-full rounded-xl bg-[#004D43]'>
            <img className='absolute top-1/2 left-1/2 -translate-x-[50%] 
            -translate-y-[50%] ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt=''></img>
            <button className='absoulte px-4 py-1 rounded-full border-2 text-sm ml-[4vh] border-[#BFDF65]
            text-[#BFDF65] mt-[19vw]'>&copy; 2023-2024</button>

            </div>
           
</div>
<div className='w-1/2 h-[50vh]'>
<div className='w-full h-full flex gap-5'>
<div className='w-1/2 h-full  rounded-xl relative bg-[#212121]'>
<img className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '
 src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' alt=''></img>
  <button className='absoulte px-4 py-1 rounded-full border-2 text-sm ml-[3.5vh] border-[#BFDF65]
            text-[#BFDF65] mt-[20vw]'>RATING 5.0 ON CLUTH</button>
</div>
<div className='relative w-1/2 h-full rounded-xl  bg-[#212121]'>
<img className='absolute top-1/2 left-1/2 -translate-x-[50%] w-[18vh]
            -translate-y-[50%] ' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt=''></img>
 <button className='absoulte px-4 py-1 rounded-full border-2 text-sm ml-[3.5vh] border-[#BFDF65]
            text-[#BFDF65] mt-[20vw]'>BUSINESS BOOTCAMP ALUMINI</button>
</div>
</div>
        </div>
        
    </div>
  )
}

export default Cards

