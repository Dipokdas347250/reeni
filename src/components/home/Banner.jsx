import React from 'react'
import { MdArrowForward } from "react-icons/md";
import banner from "../../assets/banner.png"
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";



const Banner = () => {
    return (
        <>
            <section className='pb-22.5 bg-white relative'>
                <h2 className="absolute bottom-10 left-[22.5%] text-[213px] font-bold font-rajdhani leading-61 text-transparent [--stroke-color:var(--color-primary)] [-webkit-text-stroke:1px_var(--stroke-color)] ">
                            WEB DESIGN
                        </h2>
                <h3 className="absolute bottom-0 left-1/2  -translate-x-1/2 text-[150px] font-bold font-rajdhani leading-43 text-transparent [--stroke-color:var(--color-secondary)] [-webkit-text-stroke:1px_var(--stroke-color)] z-50">
                            WEB DESIGN
                        </h3>
                <div className="container ">
                    <div className=" ">
                        <div className=" flex justify-between items-start">
                            <div className="w-[25%] mt-52.75 ">
                                <h2 className='text-[28px] text-primary font-bold font-rajdhani uppercase leading-9.5'>Hello i’m</h2>
                                <h1 className='text-[90px] text-primary font-bold font-rajdhani  leading-26'>Brooklyn Simmons</h1>
                                <button className='px-7  bg-secondary flex items-center gap-1 rounded-full text-[16px] text-white font-medium font-rubik leading-15 mt-5'>View Portfolio <MdArrowForward /></button>
                            </div>
                            <div className="w-[45%]">
                                <img className='w-full relative z-10' src={banner} alt="" />

                            </div>
                            <div className="w-[25%] mt-52.75 ">
                                <h3 className='text-[16px] text-primary font-normal font-rubik leading-7.5'>About Me</h3>
                                <p className='text-[16px] text-tertiary font-normal font-rubik leading-7.5 mt-5'>A personal <span className=' text-secondary'>portfolio</span> is a collection of to
                                    your work, that is achievements, and a
                                    skills that <span className=' text-secondary'>web design</span> highlights in your</p>
                                <div className="mt-10">
                                    <h4 className='text-[16px] text-primary font-normal font-rubik leading-7.5'>Find me on</h4>
                                    <div className="flex items-center gap-2 mt-2.5">
                                        <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                            <FaInstagram />
                                        </div>
                                        <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                            <FaTwitter />
                                        </div>
                                        <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
                                            <FaFacebookF />
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

export default Banner
