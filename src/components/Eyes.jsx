import React,{useEffect,useState} from 'react'


function Eyes() {

  const [rotate, setrotate] = useState(0);

useEffect(()=>{
  window.addEventListener("mousemove",(e)=>{
    let mouseX=e.clientX;
    let mouseY=e.clientY;
    let deltaX=mouseX-window.innerWidth/2;
    let deltaY=mouseY-window.innerHeight/2;
    var angle=Math.atan2(deltaY,deltaX) *(180/Math.PI);
    setrotate(angle-180);
  })
})

  return (
    <div className='h-screen w-full overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
  <div className='absolute  top-1/2 left-1/2 justify-between flex gap-10 -translate-x-[50%] -translate-y-[50%] '>
    <div className='w-[15vw] h-[15vw] rounded-full  flex bg-[#F4F4F4] justify-center items-center '> 
    <div className='relative w-2/3 h-2/3 rounded-full bg-[#212121]  '>
    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}
    className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
    <div className='w-5 h-5 rounded-full bg-[#F4F4F4]'>
      </div>
    </div>
    </div>
    </div>
    <div className='w-[15vw] h-[15vw] rounded-full  flex bg-[#F4F4F4] justify-center items-center '> 
    <div className='relative w-2/3 h-2/3 rounded-full bg-[#212121]  '>
    <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}
    className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
    <div className=' w-5 h-5 rounded-full bg-[#F4F4F4]'>
      </div>
    </div>
    </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Eyes