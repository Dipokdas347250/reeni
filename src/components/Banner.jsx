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






const Banner = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <section className='pb-22.5 bg-white relative dark:bg-[#1e1e1e]'>
                <h2 className="absolute bottom-10 left-[22.5%] text-[213px] font-bold font-rajdhani leading-61 text-transparent [--stroke-color:var(--color-primary)] dark:[--stroke-color:var(--color-white)]  [-webkit-text-stroke:1px_var(--stroke-color)] ">
                    WEB DESIGN
                </h2>
                <h3 className="absolute bottom-0 left-1/2  -translate-x-1/2 text-[150px] font-bold font-rajdhani leading-43 text-transparent [--stroke-color:var(--color-secondary)] [-webkit-text-stroke:1px_var(--stroke-color)] z-40">
                    WEB DESIGN
                </h3>
                <div className="container ">
                    <div className=" ">
                        <div className=" flex justify-between items-start">
                            <div className="w-[25%] mt-52.75 ">
                                <h2 className='text-[28px] text-primary dark:text-white font-bold font-rajdhani uppercase leading-9.5'>Hello i’m</h2>
                                <h1 className='text-[90px] text-primary dark:text-white font-bold font-rajdhani  leading-26'>Brooklyn Simmons</h1>
                                <button className='px-7  bg-secondary flex items-center gap-1 rounded-full text-[16px] text-white font-medium font-rubik leading-15 mt-5'>View Portfolio <MdArrowForward /></button>
                            </div>
                            <div className="w-[45%]">
                                <img className='w-full relative z-10' src={banner} alt="" />

                            </div>
                            <div className="w-[25%] mt-52.75 ">
                                <h3 className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-7.5'>About Me</h3>
                                <p className='text-[16px] text-tertiary font-normal font-rubik leading-7.5 mt-5'>A personal <span className=' text-secondary'>portfolio</span> is a collection of to
                                    your work, that is achievements, and a
                                    skills that <span className=' text-secondary'>web design</span> highlights in your</p>
                                <div className="mt-10">
                                    <h4 className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-7.5'>Find me on</h4>
                                    <div className="flex items-center gap-2 mt-2.5">
                                        <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                            <FaInstagram />
                                        </div>
                                        <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                            <FaTwitter />
                                        </div>
                                        <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                            <FaFacebookF />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="fixed lg:bottom-42.5 bottom-10 right-5 z-40">
                <div
                    onClick={() => setOpen(true)}
                    className="p-4 bg-[#e6e6e6] dark:bg-[#232323] text-[30px] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white inline-block cursor-pointer"
                >
                    <FaFacebookMessenger />
                </div>

            </div>
            <div className={`fixed top-0 right-0 h-screen w-100 bg-white shadow-lg duration-500 transform z-50 
    ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="py-4 px-5 bg-[#EDEDED] dark:bg-primary flex justify-between items-center">
                    <img className='w-30' src={logo} alt="" />
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
                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                <FaInstagram />
                            </div>
                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                <FaLinkedinIn />
                            </div>
                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                <FaTwitter />
                            </div>
                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
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
