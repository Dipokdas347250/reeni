import React from 'react'
import web from "../assets/web.svg"
import webr from "../assets/webR.svg"
import ui from "../assets/ui.svg"
import mark from "../assets/mark.svg"

const Experience = () => {
  return (
   <>
   <section className='pt-22.5 bg-white dark:bg-primary'>
    <div className="container">
        <div className="flex justify-between items-center gap-7.5">
            <div className="w-[25%]">
                <div className="py-10.25 border border-secondary/15 rounded-[10px]">
                    <div className="flex justify-center">
                        <img src={web} alt="" />
                    </div>
                    <div className="">
                        <h3 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-8.5 text-center mt-7.5 '>Web Design</h3>
                        <h4 className='text-[16px] text-tertiary  font-normal font-rubik leading-6.5 text-center mt-2.5 '>120 Projects</h4>
                    </div>
                </div>
            </div>
            <div className="w-[25%]">
                <div className="py-10.25 border border-secondary/15 rounded-[10px]">
                    <div className="flex justify-center">
                        <img src={ui} alt="" />
                    </div>
                    <div className="">
                        <h3 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-8.5 text-center mt-7.5 '>Ui/Ux Design</h3>
                        <h4 className='text-[16px] text-tertiary  font-normal font-rubik leading-6.5 text-center mt-2.5 '>241 Projects</h4>
                    </div>
                </div>
            </div>
            <div className="w-[25%]">
                <div className="py-10.25 border border-secondary/15 rounded-[10px]">
                    <div className="flex justify-center">
                        <img src={webr} alt="" />
                    </div>
                    <div className="">
                        <h3 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-8.5 text-center mt-7.5 '>Web Research</h3>
                        <h4 className='text-[16px] text-tertiary  font-normal font-rubik leading-6.5 text-center mt-2.5 '>240 Projects</h4>
                    </div>
                </div>
            </div>
            <div className="w-[25%]">
                <div className="py-10.25 border border-secondary/15 rounded-[10px]">
                    <div className="flex justify-center">
                        <img src={mark} alt="" />
                    </div>
                    <div className="">
                        <h3 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-8.5 text-center mt-7.5 '>Marketing</h3>
                        <h4 className='text-[16px] text-tertiary  font-normal font-rubik leading-6.5 text-center mt-2.5 '>331 Projects</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Experience