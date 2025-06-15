import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className=' w-full h-screen pt-1'>
        <div className='mt-40 px-[4vw]'> 
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((items,index)=>{
                    return(
                        <div >
               <div className='w-fit flex items-center'>
                {index==1 &&
                <motion.div initial={{width:0}} animate={{width:"9vw"}}
                transition={{ease:[0.76,0,0.24,1],duration:1}}
                className='w-[9vw] h-[4.5vw]s'><img  className="rounded-lg h-[5.5vw]" src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg' alt='img'></img></motion.div>}
                <h1 className='   text-[6.5rem] font-bold  leading-[6.1vw]
                tracking-[-0.5vw] text-[#212121]'>{items}</h1>
                </div>
                
            </div>
            );
})}
            
           
        </div>
        <div className='border-t-[1px] border-[#B2B2B2] justify-between mt-28 flex px-10 py-3'>
            {["For public and private companies","From the first pitch to IPO",].map((item,index)=>(
                <p className='text-sm font-semibold text-[#5A5A5A] '>{item}</p>
            ))}
            <div className='flex gap-1 '>            
            <div className='py-1 px-3 bg-[#E4E4E4] border-[1px] text-sm font-semibold flex items-center
            hover:bg-[#212121] hover:text-[#F1F1F1] text-[#5A5A5A] border-[#212121] rounded-full'>START THE PROJECT</div>
        <div className='rounded-full w-8 h-8 justify-center border-[1px] border-[#212121] flex items-center'><MdArrowOutward /></div>
        </div></div>
        
    </div>
  )
}

export default LandingPage