import { useAnimation, motion } from 'framer-motion'
import React, { useState } from 'react';


function Featured() {
   
    const cards=[useAnimation(),useAnimation()];
    const handleHover=(index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd=(index)=>{
        cards[index].start({y:"100%"})
    }
  return (
    
    <div className=' bg-[#F1F1F1] w-full py-20'>
        <div className='w-full px-16 border-b-[1px] pb-10 border-[#B2B2B2]'>
            <h1 className='text-5xl tracking-tight text-[#212121]'>Featured projects</h1>
        </div>
       <div className=' px-20 '>
       <div className='w-full flex gap-6 mt-10'>
                <motion.div onHoverStart={()=> handleHover(0)}
                onHoverEnd={()=>handleHoverEnd(0)}
                className='w-1/2 relative  h-[75vh] '>
                    <h1 className='absolute overflow-hidden flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-bold tracking-tight text-[#CDEA68] z-[9]'>
                    {"FYDE".split('').map((item,index)=><motion.span initial={{y:"100%"}}
                    animate={cards[0]} transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                    className='inline-block'
                    >{item}</motion.span>)}
                    </h1>
                    <div className="w-full h-full overflow-hidden">
                        <img className='w-full rounded-xl h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt=''></img>
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=> handleHover(1)}
                onHoverEnd={()=>handleHoverEnd(1)} className='w-1/2 relative h-[75vh] '>
                <h1 className='absolute left-right -translate-x-1/2 top-1/2 overflow-hidden -translate-y-1/2 text-8xl font-bold tracking-tight text-[#CDEA68] z-[9]'>
                  {"VISE".split('').map((item,index)=><motion.span initial={{y:"100%"}}
                    animate={cards[1]} transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                    className='inline-block'
                    >{item}</motion.span>)}
                    </h1>  
                <div className="w-full h-full overflow-hidden">
    
                        <img className='w-full rounded-xl h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' alt=''></img>
                    </div>
                </motion.div>
            </div>
       </div>
    </div>
  )
}

export default Featured