import React, { useState } from 'react'
import { MdArrowForward } from "react-icons/md";
import banner from "../assets/banner.png"
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import logo from "../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import link from "../assets/Link.png"
import { MdEmail } from "react-icons/md";
import { IoMdLocate } from "react-icons/io";

import { IoCall } from "react-icons/io5";
import right from "../assets/right.svg"






const Banner = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <section className='lg:pb-22.5 pb-7.5 bg-white  dark:bg-[#1e1e1e]'>
              
                <div className="container ">
                    <div className=" ">
                        <div className=" lg:flex justify-between items-start  relative bg-white dark:bg-[#1e1e1e] ">
                            <img className='  lg:w-159.25 w-90 lg:h-201.25 h-113.75 md:w-120 md:h-140 left-1/2 lg:top-0 -top-125 md:-top-150  -translate-x-1/2 absolute z-10' src={banner} alt="" />
                            <div className="lg:w-[25%] w-full lg:mt-52.75 mt-125 md:mt-150 ">
                                <h2 className='lg:text-[28px] text-[20px] md:text-[28px] text-primary dark:text-white font-bold font-rajdhani uppercase leading-9.5'>Hello i’m</h2>
                                <h1 className='lg:text-[90px] text-[38px] md:text-[70px] text-primary dark:text-white font-bold font-rajdhani  lg:leading-26 md:leading-26  leading-12'>Brooklyn Simmons</h1>
                                <button className='px-7  bg-secondary flex items-center gap-1 rounded-full text-[16px] text-white font-medium font-rubik leading-15 mt-5 cursor-pointer'>View Portfolio <MdArrowForward /></button>
                            </div>           
                            <div className="lg:w-[25%] w-full lg:mt-52.75 mt-7.5 ">
                                <h3 className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-7.5'>About Me</h3>
                                <p className='text-[16px] text-tertiary font-normal font-rubik leading-7.5 lg:mt-5 mt-2'>A personal <span className=' text-secondary'>portfolio</span> is a collection of to
                                    your work, that is achievements, and a
                                    skills that <span className=' text-secondary'>web design</span> highlights in your</p>
                                <div className="mt-10 ">
                                    <h4 className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-7.5'>Find me on</h4>
                                    <div className="flex items-center gap-2 mt-2.5">
                                        <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white cursor-pointer  ">
                                            <FaInstagram />
                                        </div>
                                        <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white cursor-pointer  ">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white cursor-pointer  ">
                                            <FaTwitter />
                                        </div>
                                        <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white cursor-pointer  ">
                                            <FaFacebookF />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=" relative">
                          <h2 className=" text-center mt-11 ml-10 text-[213px] font-bold font-rajdhani leading-61 text-transparent [--stroke-color:var(--color-primary)] dark:[--stroke-color:var(--color-white)]  [-webkit-text-stroke:1px_var(--stroke-color)] hidden lg:block ">
                    WEB DESIGN
                </h2>
                <h3 className="  absolute left-63 -bottom-12 text-[150px] font-bold font-rajdhani leading-43 text-transparent [--stroke-color:var(--color-secondary)] [-webkit-text-stroke:1px_var(--stroke-color)] z-40 hidden lg:block">
                    WEB DESIGN
                </h3>
                    </div>
                </div>


                <div className="flex rotate-90 fixed lg:top-88 top-95 -right-23 z-30">
                    <div className="lg:py-2.5 py-2 px-6 bg-[#1F242E] ">
                        <h3 className='text-[16px] text-white font-medium font-rajdhani leading-5 uppercase rotate-180'>48 Pre-built sites</h3>

                    </div>
                    <div className="lg:py-2.5 py-2 px-3.75 bg-[#48A133]">
                        <img className=' rotate-275' src={right} alt="" />
                    </div>
                </div>


            </section>

            <div className="fixed lg:bottom-42.5 bottom-10 right-5 z-40">
                <div
                    onClick={() => setOpen(true)}
                    className="p-3  text-[26px] text-white rounded-full duration-300 ease-in-out bg-secondary  inline-block cursor-pointer"
                >
                    <FaFacebookMessenger />
                </div>

            </div>
            <div className={`fixed top-0 right-0 h-screen lg:w-100 bg-white shadow-lg duration-500 transform overflow-y-scroll z-50 
    ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="py-2.5 px-5 bg-[#EDEDED] dark:bg-primary flex justify-between items-center">
                    <img className='w-28' src={logo} alt="" />
                    <div
                        onClick={() => setOpen(false)}
                        className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white inline-block cursor-pointer"
                    >
                        <RxCross2 />
                    </div>



                </div>
                <div className="p-7.5 bg-[#0A0A0A]/6 dark:bg-primary">
                    <img className='w-full' src={link} alt="" />
                    <h3 className='text-[20px] text-primary dark:text-white font-bold font-rubik leading-7 mt-7.5'>Freelancer delivering <br /> exceptional Webflow, and Next.js solutions.</h3>
                    <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-5'> I am a skilled freelancer specializing in Webflow development, Figma design, and Next.js projects. I deliver creative, dynamic, and user-centric web solutions.</p>


                    <div className=" space-y-5 mt-9.5 ">
                        <div className="flex  items-center gap-5">
                            <div className="p-2.5 text-primary dark:text-white border-2 border-[#D9DDE0] rounded-[10px]">
                                <IoCall />
                            </div>
                            <div className="">
                                <h3 className='text-[15px] text-secondary font-semibold font-rajdhani uppercase'>Call Now</h3>
                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik '>01245789321</p>
                            </div>
                        </div>
                        <div className="flex  items-center gap-5">
                            <div className="p-2.5 text-primary dark:text-white border-2 border-[#D9DDE0] rounded-[10px]">
                                <MdEmail />
                            </div>
                            <div className="">
                                <h3 className='text-[15px] text-secondary font-semibold font-rajdhani uppercase'>Mail Us</h3>
                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik '>example@info.com</p>
                            </div>
                        </div>
                        <div className="flex  items-center gap-5">
                            <div className="p-2.5 text-primary dark:text-white border-2 border-[#D9DDE0] rounded-[10px]">
                                <IoMdLocate />
                            </div>
                            <div className="">
                                <h3 className='text-[15px] text-secondary font-semibold font-rajdhani uppercase'>My Address</h3>
                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik '>66 Broklyant, New York 3269</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-5.5">
                        <h4 className='text-[16px] text-primary dark:text-white font-normal font-rubik uppercase leading-7.5'>find with me</h4>
                        <div className="flex items-center gap-2 mt-2.5">
                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white cursor-pointer  ">
                                <FaInstagram />
                            </div>
                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white cursor-pointer  ">
                                <FaLinkedinIn />
                            </div>
                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white cursor-pointer  ">
                                <FaTwitter />
                            </div>
                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white cursor-pointer  ">
                                <FaFacebookF />
                            </div>

                        </div>
                    </div>





                </div>
            </div>
        </>
    )
}

export default Banner
