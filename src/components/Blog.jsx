import React from 'react'
import blog01 from "../assets/blog01.png"
import blog02 from "../assets/blog02.png"
import blog03 from "../assets/blog03.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Blog = () => {
    return (
        <>
            <section className='lg:py-30 py-15 bg-white dark:bg-[#1e1e1e]'>
                <div className="container">
                    <div className="">
                        <h4 className='text-[16px] text-secondary font-medium  font-rubik  text-center uppercase'>Blog and news</h4>
                        <h2 className='lg:text-[48px] md:text-[32px] text-[22px] text-primary dark:text-white font-bold font-rajdhani text-center lg:leading-15 lg:w-159 w-full mx-auto'>Elevating Personal Branding the through Powerful Portfolios</h2>

                    </div>
                    <div className=" lg:flex justify-between items-center gap-7.5 lg:mt-13 mt-7.5">
                         <div className="lg:w-[33%] w-full lg:mt-0 mt-7.5">
                            <div className="pb-7.75 border border-[#5D6570] rounded-[22px]">
                                <img className='w-full' src={blog01} alt="" />
                               <h2 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani mt-7.5 ml-7.5 w-[80%] '>Let’s bring your ideas to life! Contact me, and let’s</h2>
                                <button className='flex items-center text-[13px] text-tertiary font-normal font-rubik  leading-7 cursor-pointer ml-7.5 mt-4'>Read More <MdOutlineKeyboardArrowRight/> </button>


                            </div>
                        </div>
                        <div className="lg:w-[33%] w-full lg:mt-0 mt-7.5">
                            <div className="pb-7.75 border border-[#5D6570] rounded-[22px]">
                                <img className='w-full' src={blog02} alt="" />
                               <h2 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani mt-7.5 ml-7.5 w-[90%] '>Inspiring the World, One Project at a Time for the man</h2>
                                <button className='flex items-center text-[13px] text-tertiary font-normal font-rubik  leading-7 cursor-pointer ml-7.5 mt-4'>Read More <MdOutlineKeyboardArrowRight/> </button>


                            </div>
                        </div>
                       
                        <div className="lg:w-[33%] w-full lg:mt-0 mt-7.5">
                            <div className="pb-7.75 border border-[#5D6570] rounded-[22px]">
                                <img className='w-full' src={blog03} alt="" />
                               <h2 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani mt-7.5 ml-7.5 w-[90%] '>Each one showcases my approach and dedication man</h2>
                                <button className='flex items-center text-[13px] text-tertiary font-normal font-rubik  leading-7 cursor-pointer ml-7.5 mt-4'>Read More <MdOutlineKeyboardArrowRight/> </button>


                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Blog
