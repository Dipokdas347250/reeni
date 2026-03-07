import React from 'react'
import logo from "../assets/logo.png"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import footer from "../assets/footer.png"
import { LuMail } from "react-icons/lu";






const Footer = () => {
    return (
        <>
            <footer className='lg:pt-22.5 pt-15 bg-[#f4f4f4] dark:bg-primary  relative'>
                <img className=' absolute top-15 left-25 hidden lg:block' src={footer} alt="" />
                <div className="container">
                    <div className=" lg:flex justify-between items-start">
                        <div className="lg:w-1/2 w-full">
                            <img className='w-30' src={logo} alt="" />
                            <h2 className='text-[50px] text-primary dark:text-white  font-bold font-rajdhani leading-15 lg:w-[50%] w-full mt-5.5'>Get Ready <span className='font-normal'>To Create Great</span></h2>

                           <div className="relative">
                             <input className='  z-20 outline-none border-b border-[#D9DDE0] pb-2.5 w-1/2 mt-10 text-tertiary dark:text-white' type="email" placeholder='Email Adress' />
                             <LuMail className=' absolute bottom-4 right-1/2'/>

                           </div>

                        </div>
                        <div className="lg:w-1/2 w-full lg:mt-0 mt-7.5">
                            <div className="lg:flex md:flex justify-between items-start">
                                <div className="lg:w-1/2 md:w-1/2 w-full">
                                    <div className="">
                                        <h2 className='text-[24px] text-primary dark:text-white  font-bold font-rajdhani leading-7.5 '>Quick Link</h2>
                                        <ul className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-7.5 space-y-2 mt-10 cursor-pointer  '>
                                            <li>About Me</li>
                                            <li>Service</li>
                                            <li>Contact Us</li>
                                            <li>Blog Post</li>
                                            <li>Pricing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-7.5">
                                    <div className="">
                                        <h2 className='text-[24px] text-primary dark:text-white  font-bold font-rajdhani leading-7.5 '>Contact</h2>
                                        <div className=" space-y-3.75 mt-10">
                                            <div className="flex  items-center gap-2.5">
                                                <div className="p-2.5 text-primary dark:text-white border-2 border-[#D9DDE0] rounded-full">
                                                    <MdEmail />
                                                </div>
                                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-7.5'>nafiz125@gmail.com</p>
                                            </div>
                                            <div className="flex  items-center gap-2.5">
                                                <div className="p-2.5 text-primary dark:text-white border-2 border-[#D9DDE0] rounded-full">
                                                    <FaLocationDot />
                                                </div>
                                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-7.5'>3891 Ranchview Dr. Richardson</p>
                                            </div>
                                            <div className="flex  items-center gap-2.5">
                                                <div className="p-2.5 text-primary dark:text-white border-2 border-[#D9DDE0] rounded-full">
                                                    <IoCall />
                                                </div>
                                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-7.5'>01245789321</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-7.5">
                                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  cursor-pointer ">
                                                <FaInstagram />
                                            </div>
                                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  cursor-pointer ">
                                                <FaLinkedinIn />
                                            </div>
                                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  cursor-pointer ">
                                                <FaTwitter />
                                            </div>
                                            <div className="p-3.25 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  cursor-pointer ">
                                                <FaFacebookF />
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=" lg:flex md:flex justify-between items-center py-7 border-t border-[#D9DDE0] lg:mt-31.75 mt-15">
                        <p className='text-[14px] text-tertiary dark:text-white font-normal font-rubik leading-7.5 lg:text-start md:text-start text-center '>© InversWeb 2026 | All Rights Reserved</p>
                        <p className='text-[14px] text-primary dark:text-white font-normal font-rubik leading-7.5 lg:text-start md:text-start text-center '>Trams & Condition Privacy Policy Contact Us</p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer