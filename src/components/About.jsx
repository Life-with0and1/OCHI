import React from 'react'

function About() {
  return (
    <div className='w-full bg-[#CDEA68] p-[4vw] rounded-t-3xl  '>
        <h1 className='tracking-tight leading-[4.5vw] text-[5vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
    <div className=' w-full  mt-[5vw] border-b-[1px] border-[#B2B2B2] ' > </div>
    <div className='flex gap-5 '>
         <div className='w-1/2 pt-8 '>
            <h1 className='text-5xl'>Our Approach:</h1>
            <button className=' px-7 py-4 mt-10 bg-zinc-900 text-white rounded-full flex items-center gap-10' >Read More 
            <div className='w-2 h-2 rounded-full bg-white '></div>
            </button>
       
    </div>
    <div className='w-1/2 mt-8 mb-10  rounded-xl bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg")] h-[60vh] '>
           
    </div>
    </div>
       
    </div>
  )
}

export default About