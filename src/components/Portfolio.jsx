import React from 'react'
import port01 from "../assets/port01.png"
import port02 from "../assets/port02.png"
import port03 from "../assets/port03.png"
import port04 from "../assets/port04.png"
import border from "../assets/Border.svg"
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { GiHomeGarage } from "react-icons/gi";
import { LiaPenNibSolid } from "react-icons/lia";





const Portfolio = () => {
    return (
        <>
            <section className='lg:py-25 py-15 bg-[#F4F4F4] dark:bg-primary'>
                <div className="container">
                    <div className="">
                        <h4 className='text-[16px] text-secondary font-medium  font-rubik  text-center uppercase'>Latest Portfolio</h4>
                        <h2 className='lg:text-[48px] text-[22px] md:text-[32px] text-primary dark:text-white font-bold font-rajdhani text-center leading-15'>Transforming Ideas into Exceptional</h2>
                        <p className='text-[16px] text-tertiary font-normal font-rubik text-center lg:w-156.75 mx-auto '>Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational</p>
                    </div>

                    <div className="mt-15 lg:flex md:flex justify-between ">
                        <div className="lg:w-1/2 md:w-1/2 w-full">
                        <div className="px-6 ">
                            <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                            <img src={port01} alt="" />
                        </div>
                        <div className=" flex justify-between items-center mt-8.25">
                            <div className="">
                                <h2 className='lg:text-[24px] text-[20px] text-primary dark:text-white font-bold font-rajdhani leading-7.5'>My Journey as a Creator</h2>
                                <p className='text-[16px] text-tertiary font-normal font-rubik mt-2.5'>Development Coaches</p>
                            </div>
                            <div className=" p-3 border border-[#D9DDE0] rounded-[10px] text-primary dark:text-white">
                                <FiArrowUpRight/>
                            </div>
                        </div>
                        <div className="">

                        </div>
                        </div>
                        <div className="px-6 lg:mt-35 md:mt-25 mt-15 ">
                            <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                            <img src={port02} alt="" />
                        </div>
                        <div className=" flex justify-between items-center mt-8.25">
                            <div className="">
                                <h2 className='lg:text-[24px] text-[20px] text-primary dark:text-white font-bold font-rajdhani leading-7.5'>My Portfolio of Innovation</h2>
                                <p className='text-[16px] text-tertiary font-normal font-rubik mt-2.5'>App Development</p>
                            </div>
                            <div className=" p-3 border border-[#D9DDE0] rounded-[10px] text-primary dark:text-white">
                                <FiArrowUpRight/>
                            </div>
                        </div>
                        <div className="">

                        </div>
                        </div>

                        </div>
                        <div className="lg:w-1/2 md:w-1/2 w-full  lg:mt-25 md:mt-20 mt-15">
                        <div className="px-6 ">
                            <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                            <img src={port03} alt="" />
                        </div>
                        <div className=" flex justify-between items-center mt-8.25">
                            <div className="">
                                <h2 className='lg:text-[24px] text-[20px] text-primary dark:text-white font-bold font-rajdhani leading-7.5'>My Professional Portfolio</h2>
                                <p className='text-[16px] text-tertiary font-normal font-rubik mt-2.5'>Development Coaches</p>
                            </div>
                            <div className=" p-3 border border-[#D9DDE0] rounded-[10px] text-primary dark:text-white">
                                <FiArrowUpRight/>
                            </div>
                        </div>
                        <div className="">

                        </div>
                        </div>
                        <div className="px-6 lg:mt-35 md:mt-25 mt-15 ">
                            <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                            <img src={port04} alt="" />
                        </div>
                        <div className=" flex justify-between items-center mt-8.25">
                            <div className="">
                                <h2 className='lg:text-[24px] text-[20px] text-primary dark:text-white font-bold font-rajdhani leading-7.5'>A Portfolio of Creativity and Passion</h2>
                                <p className='text-[16px] text-tertiary font-normal font-rubik mt-2.5'>Business Development</p>
                            </div>
                            <div className=" p-3 border border-[#D9DDE0] rounded-[10px] text-primary dark:text-white">
                                <FiArrowUpRight/>
                            </div>
                        </div>
                        <div className="">

                        </div>
                        </div>

                        </div>
                    </div>

                     <div className="mt-30">
                        <h4 className='text-[16px] text-secondary font-medium  font-rubik  uppercase'>My Skill</h4>
                        <h2 className='lg:text-[48px] md:text-[32px] text-[22px] text-primary dark:text-white font-bold font-rajdhani  lg:leading-15 lg:w-[50%]'>Elevated Designs Personalized the best Experiences</h2>
                       
                    </div>


                    <div className="lg:mt-15 mt-7.5">
                          <div className="pt-11  pb-8 duration-300 ease-in-out hover:bg-secondary px-5 border-t border-[#E3E3E3]">
                        <div className=" lg:flex md:flex justify-between items-center">
                              <div className="lg:w-[15%] md:w-[15%] w-full">
                               <div className="p-4.5 border-2 border-primary dark:border-white dark:text-white  inline-block ml-[50%] lg:ml-0  -translate-x-[50%] 
                               lg:translate-x-0 md:ml-0 md:translate-x-0  text-[30px] rounded-full">
                                <GiHomeGarage className=''/>
                               </div>
                            </div>
                            <div className="lg:w-[25%] md:w-[25%] w-full">
                                <h3 className='text-[32px] text-primary dark:text-white font-bold font-rajdhani  leading-10.5 text-center lg:text-start md:text-start'>Ui/visual Design</h3>
                                <h4 className='text-[18px] text-primary dark:text-white font-normal font-rajdhani  leading-7 text-center lg:text-start md:text-start'>21 Done</h4>

                            </div>
                            <div className="lg:w-[45%] md:w-[45%] w-full">
                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik  leading-8 lg:w-[80%] md:w-[80%] w-full  lg:ml-10 ml-0 text-center lg:text-start md:text-start'>My work is driven by the belief that thoughtful design and strategic planning can empower brands strategic planning can empower brands</p>
                            </div>
                            <div className="lg:w-[15%] md:w-[15%] w-full flex lg:justify-end md:justify-end justify-center ">
                                <button className='flex items-center text-[16px] text-primary dark:text-white font-bold font-rajdhani  leading-7 cursor-pointer'>Read More <MdOutlineKeyboardArrowRight/> </button>
                            </div>
                          </div>
                        </div>
                          <div className="pt-11  pb-8 duration-300 ease-in-out hover:bg-secondary px-5 border-t border-[#E3E3E3]">
                        <div className=" lg:flex md:flex justify-between items-center">
                              <div className="lg:w-[15%] md:w-[15%] w-full">
                               <div className="p-4.5 border-2 border-primary dark:border-white dark:text-white  inline-block ml-[50%] lg:ml-0  -translate-x-[50%] 
                               lg:translate-x-0 md:ml-0 md:translate-x-0  text-[30px] rounded-full">
                                <TfiBag className=''/>
                               </div>
                            </div>
                            <div className="lg:w-[25%] md:w-[25%] w-full">
                                <h3 className='text-[32px] text-primary dark:text-white font-bold font-rajdhani  leading-10.5 text-center lg:text-start md:text-start'>Ui/visual Design</h3>
                                <h4 className='text-[18px] text-primary dark:text-white font-normal font-rajdhani  leading-7 text-center lg:text-start md:text-start'>21 Done</h4>

                            </div>
                            <div className="lg:w-[45%] md:w-[45%] w-full">
                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik  leading-8 lg:w-[80%] md:w-[80%] w-full  lg:ml-10 ml-0 text-center lg:text-start md:text-start'>In this portfolio, you’ll find a curated selection of projects that highlight my skills in Main Areas, e.g., responsive web design</p>
                            </div>
                            <div className="lg:w-[15%] md:w-[15%] w-full flex lg:justify-end md:justify-end justify-center ">
                                <button className='flex items-center text-[16px] text-primary dark:text-white font-bold font-rajdhani  leading-7 cursor-pointer'>Read More <MdOutlineKeyboardArrowRight/> </button>
                            </div>
                          </div>
                        </div>
                          <div className="pt-11  pb-8 duration-300 ease-in-out hover:bg-secondary px-5 border-t border-[#E3E3E3]">
                        <div className=" lg:flex md:flex justify-between items-center">
                              <div className="lg:w-[15%] md:w-[15%] w-full">
                               <div className="p-4.5 border-2 border-primary dark:border-white dark:text-white  inline-block ml-[50%] lg:ml-0  -translate-x-[50%] 
                               lg:translate-x-0 md:ml-0 md:translate-x-0  text-[30px] rounded-full">
                                <LiaPenNibSolid className=''/>
                               </div>
                            </div>
                            <div className="lg:w-[25%] md:w-[25%] w-full">
                                <h3 className='text-[32px] text-primary dark:text-white font-bold font-rajdhani  leading-10.5 text-center lg:text-start md:text-start'>Motion Design</h3>
                                <h4 className='text-[18px] text-primary dark:text-white font-normal font-rajdhani  leading-7 text-center lg:text-start md:text-start'>21 Done</h4>

                            </div>
                            <div className="lg:w-[45%] md:w-[45%] w-full">
                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik  leading-8 lg:w-[80%] md:w-[80%] w-full  lg:ml-10 ml-0 text-center lg:text-start md:text-start'>Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs</p>
                            </div>
                            <div className="lg:w-[15%] md:w-[15%] w-full flex lg:justify-end md:justify-end justify-center ">
                                <button className='flex items-center text-[16px] text-primary dark:text-white font-bold font-rajdhani  leading-7 cursor-pointer'>Read More <MdOutlineKeyboardArrowRight/> </button>
                            </div>
                          </div>
                        </div>
                        
                         
                    </div>

                </div>
            </section>
        </>
    )
}

export default Portfolio