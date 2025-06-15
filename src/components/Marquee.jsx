import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full pt-[40px] pb-[20px] rounded-t-3xl bg-[#004D43]'>
        <div className=' mt-10  border-t-[1px] border-b-[1px] border-[#B2B2B2] flex overflow-hidden whitespace-nowrap pr-20'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[17vw] font-bold text-white leading-none'>WE ARE OCHI</motion.h1>
            <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[17vw] font-bold text-white leading-none'>WE ARE OCHI</motion.h1>
           
</div>
    </div>
    
  )
}

export default Marquee