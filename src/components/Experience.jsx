import React from 'react'
import web from "../assets/web.svg"
import webr from "../assets/webR.svg"
import ui from "../assets/ui.svg"
import mark from "../assets/mark.svg"

const Experience = () => {
    return (
        <>
            <section className='lg:pt-22.5 bg-white dark:bg-[#1e1e1e]'>
                <div className="container">
                    <div className="lg:flex  justify-between items-center gap-7.5">
                        <div className="lg:w-[25%] w-full lg:mt-0 mt-7.5">
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
                        <div className="lg:w-[25%] w-full lg:mt-0 mt-7.5">
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
                        <div className="lg:w-[25%] w-full lg:mt-0 mt-7.5">
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
                        <div className="lg:w-[25%] w-full lg:mt-0 mt-7.5">
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

                    <div className="mt-30 lg:flex  justify-between items-center gap-8">
                        <div className="lg:w-1/2 w-full">
                            <div className=" lg:px-13 px-5 lg:pt-9 pt-7.5 lg:pb-13 pb-7.5 bg-[#f4f4f4] dark:bg-primary rounded-[20px] overflow-hidden relative after:absolute 
                            after:h-full after:w-full after:top-50 after:left-100 dark:after:bg-secondary after:blur-[90px]  ">
                                <div className=" lg:flex gap-11 items-center">
                                    <h3 className='lg:text-[267px] text-[100px] text-secondary font-bold font-rajdhani lg:leading-45.75 leading-25 '>25</h3>
                                    <h2 className=' lg:text-[48px] text-[26px] text-primary dark:text-white font-bold font-rajdhani lg:leading-15.5 leading-9'>Years Of experience</h2>
                                </div>
                                <p className='lg:text-[16px] text-[14px]  text-primary dark:text-white font-normal font-rubik leading-6.5 lg:mt-10 mt-3 '>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                           <div className="">
                             <div className="lg:flex md:flex justify-between items-center gap-8">
                                <div className="lg:w-1/2 w-full lg:mt-0 mt-8 ">
                                    <div className="py-9 bg-[#f4f4f4] dark:bg-primary rounded-[20px] border-b-3 border-r-3 border-secondary  ">
                                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani leading-15.5 text-center'>20k+</h2>
                                        <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-1 text-center'>Our Project Complete</p>

                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full lg:mt-0 mt-8 ">
                                    <div className="py-9 bg-[#f4f4f4] dark:bg-primary rounded-[20px] border-b-3 border-r-3 border-secondary  ">
                                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani leading-15.5 text-center'>20k+</h2>
                                        <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-1 text-center'>Our Project Complete</p>

                                    </div>
                                </div>

                            </div>
                           </div>
                            <div className="">
                                 <div className="lg:flex md:flex justify-between items-center gap-8 mt-8">
                                <div className="lg:w-1/2 w-full lg:mt-0 mt-8 ">
                                    <div className="py-9 bg-[#f4f4f4] dark:bg-primary rounded-[20px] border-b-3 border-r-3 border-secondary  ">
                                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani leading-15.5 text-center'>20k+</h2>
                                        <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-1 text-center'>Our Project Complete</p>

                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full lg:mt-0 mt-8 ">
                                    <div className="py-9 bg-[#f4f4f4] dark:bg-primary rounded-[20px] border-b-3 border-r-3 border-secondary  ">
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