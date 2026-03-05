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

                    <div className="mt-30 flex justify-between items-center gap-8">
                        <div className="w-1/2">
                            <div className=" px-13 pt-9 pb-13 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] overflow-hidden relative after:absolute 
                            after:h-full after:w-full after:top-50 after:left-100 dark:after:bg-secondary after:blur-[90px]  ">
                                <div className=" flex gap-11 items-center">
                                    <h3 className='text-[267px] text-secondary font-bold font-rajdhani leading-45.75'>25</h3>
                                    <h2 className=' text-[48px] text-primary dark:text-white font-bold font-rajdhani leading-15.5 relative z-10'>Years Of experience</h2>
                                </div>
                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-6.5 mt-10 relative z-10'>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
                            </div>
                        </div>
                        <div className="w-1/2">
                           <div className="">
                             <div className="flex justify-between items-center gap-8">
                                <div className="w-1/2 ">
                                    <div className="py-9 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary  ">
                                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani leading-15.5 text-center'>20k+</h2>
                                        <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-1 text-center'>Our Project Complete</p>

                                    </div>
                                </div>
                                <div className="w-1/2 ">
                                    <div className="py-9 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary  ">
                                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani leading-15.5 text-center'>20k+</h2>
                                        <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-1 text-center'>Our Project Complete</p>

                                    </div>
                                </div>

                            </div>
                           </div>
                            <div className="">
                                 <div className="flex justify-between items-center gap-8 mt-8">
                                <div className="w-1/2 ">
                                    <div className="py-9 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary  ">
                                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani leading-15.5 text-center'>20k+</h2>
                                        <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-1 text-center'>Our Project Complete</p>

                                    </div>
                                </div>
                                <div className="w-1/2 ">
                                    <div className="py-9 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary  ">
                                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani leading-15.5 text-center'>20k+</h2>
                                        <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-1 text-center'>Our Project Complete</p>

                                    </div>
                                </div>

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