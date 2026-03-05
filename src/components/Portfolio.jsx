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
            <section className='py-25 bg-[#F4F4F4] dark:bg-primary'>
                <div className="container">
                    <div className="">
                        <h4 className='text-[16px] text-secondary font-medium  font-rubik  text-center uppercase'>Latest Portfolio</h4>
                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani text-center leading-15'>Transforming Ideas into Exceptional</h2>
                        <p className='text-[16px] text-tertiary font-normal font-rubik text-center w-156.75 mx-auto '>Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational</p>
                    </div>

                    <div className="mt-15 flex justify-between ">
                        <div className="w-1/2">
                        <div className="px-6 ">
                            <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                            <img src={port01} alt="" />
                        </div>
                        <div className=" flex justify-between items-center mt-8.25">
                            <div className="">
                                <h2 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-7.5'>My Journey as a Creator</h2>
                                <p className='text-[16px] text-tertiary font-normal font-rubik mt-2.5'>Development Coaches</p>
                            </div>
                            <div className=" p-3 border border-[#D9DDE0] rounded-[10px] text-primary dark:text-white">
                                <FiArrowUpRight/>
                            </div>
                        </div>
                        <div className="">

                        </div>
                        </div>
                        <div className="px-6 mt-35 ">
                            <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                            <img src={port02} alt="" />
                        </div>
                        <div className=" flex justify-between items-center mt-8.25">
                            <div className="">
                                <h2 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-7.5'>My Portfolio of Innovation</h2>
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
                        <div className="w-1/2  mt-25">
                        <div className="px-6 ">
                            <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                            <img src={port03} alt="" />
                        </div>
                        <div className=" flex justify-between items-center mt-8.25">
                            <div className="">
                                <h2 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-7.5'>My Professional Portfolio</h2>
                                <p className='text-[16px] text-tertiary font-normal font-rubik mt-2.5'>Development Coaches</p>
                            </div>
                            <div className=" p-3 border border-[#D9DDE0] rounded-[10px] text-primary dark:text-white">
                                <FiArrowUpRight/>
                            </div>
                        </div>
                        <div className="">

                        </div>
                        </div>
                        <div className="px-6 mt-35 ">
                            <div className="p-5 border border-[#D9DDE0] rounded-[20px]">
                            <img src={port04} alt="" />
                        </div>
                        <div className=" flex justify-between items-center mt-8.25">
                            <div className="">
                                <h2 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-7.5'>A Portfolio of Creativity and Passion</h2>
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
                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani  leading-15 w-[50%]'>Elevated Designs Personalized the best Experiences</h2>
                       
                    </div>


                    <div className="mt-15">
                          <div className="pt-11  pb-8 duration-300 ease-in-out hover:bg-secondary px-5 border-t border-[#E3E3E3]">
                        <div className=" flex justify-between items-center">
                              <div className="w-[15%]">
                               <div className="p-4.5 border-2 border-primary dark:border-white dark:text-white  inline-block text-[30px] rounded-full">
                                <GiHomeGarage className=''/>
                               </div>
                            </div>
                            <div className="w-[25%]">
                                <h3 className='text-[32px] text-primary dark:text-white font-bold font-rajdhani  leading-10.5'>Ui/visual Design</h3>
                                <h4 className='text-[18px] text-primary dark:text-white font-normal font-rajdhani  leading-7'>21 Done</h4>

                            </div>
                            <div className="w-[45%]">
                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik  leading-8 w-[80%] ml-10'>My work is driven by the belief that thoughtful design and strategic planning can empower brands strategic planning can empower brands</p>
                            </div>
                            <div className="w-[15%] flex justify-end">
                                <button className='flex items-center text-[16px] text-primary dark:text-white font-bold font-rajdhani  leading-7 cursor-pointer'>Read More <MdOutlineKeyboardArrowRight/> </button>
                            </div>
                          </div>
                        </div>
                          <div className="pt-11  pb-8 duration-300 ease-in-out hover:bg-secondary px-5 border-t border-[#E3E3E3]">
                        <div className=" flex justify-between items-center">
                              <div className="w-[15%]">
                               <div className="p-4.5 border-2 border-primary dark:border-white dark:text-white  inline-block text-[30px] rounded-full">
                                <TfiBag className=''/>
                               </div>
                            </div>
                            <div className="w-[25%]">
                                <h3 className='text-[32px] text-primary dark:text-white font-bold font-rajdhani  leading-10.5'>Ui/visual Design</h3>
                                <h4 className='text-[18px] text-primary dark:text-white font-normal font-rajdhani  leading-7'>21 Done</h4>

                            </div>
                            <div className="w-[45%]">
                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik  leading-8 w-[80%] ml-10'>In this portfolio, you’ll find a curated selection of projects that highlight my skills in Main Areas, e.g., responsive web design</p>
                            </div>
                            <div className="w-[15%] flex justify-end">
                                <button className='flex items-center text-[16px] text-primary dark:text-white font-bold font-rajdhani  leading-7 cursor-pointer'>Read More <MdOutlineKeyboardArrowRight/> </button>
                            </div>
                          </div>
                        </div>
                          <div className="pt-11  pb-8 duration-300 ease-in-out hover:bg-secondary px-5 border-t border-[#E3E3E3]">
                        <div className=" flex justify-between items-center">
                              <div className="w-[15%]">
                               <div className="p-4.5 border-2 border-primary dark:border-white dark:text-white  inline-block text-[30px] rounded-full">
                                <LiaPenNibSolid className=''/>
                               </div>
                            </div>
                            <div className="w-[25%]">
                                <h3 className='text-[32px] text-primary dark:text-white font-bold font-rajdhani  leading-10.5'>Motion Design</h3>
                                <h4 className='text-[18px] text-primary dark:text-white font-normal font-rajdhani  leading-7'>21 Done</h4>

                            </div>
                            <div className="w-[45%]">
                                <p className='text-[16px] text-primary dark:text-white font-normal font-rubik  leading-8 w-[80%] ml-10'>Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs</p>
                            </div>
                            <div className="w-[15%] flex justify-end">
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