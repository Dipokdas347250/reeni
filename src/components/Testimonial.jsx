import React from 'react'
import test from "../assets/test.svg"

const Testimonial = () => {
    return (
        <>
            <section className='pt-30 bg-white dark:bg-[#1e1e1e]'>
                <div className="container">
                    <div className="">
                        <h4 className='text-[16px] text-secondary font-medium  font-rubik  text-center uppercase'>Our Testimonial</h4>
                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani text-center leading-15 w-121 mx-auto'>Enhancing Collaboration between Remote</h2>

                    </div>
                    <div className="flex justify-between items-center gap-8 mt-13">
                        <div className="w-1/2">
                        <div className="p-9.5 bg-[#F4F4F4] dark:bg-primary border-b border-r border-secondary rounded-[20px]">
                            <img src={test} alt="" />
                            <p className='text-[18px] text-tertiary font-normal font-rubik leading-7.5 mt-10.5'> A personal portfolio is a curated collection of an individual's professional work, showcasing their skilA personal portfolio is a curated collection of an individual's professional work, showcasing their skills,</p>
                            <h3 className='text-[18px] text-primary dark:text-white  font-bold font-rajdhani leading-7.5 mt-9'>Cameron Williamson</h3>
                            <h4 className='text-[14px] text-tertiary font-normal font-rubik leading-7.5'>Ui/Ux Designer</h4>


                        </div>

                        </div>
                        <div className="w-1/2">
                        <div className="p-9.5 bg-[#F4F4F4] dark:bg-primary border-b border-r border-secondary rounded-[20px]">
                            <img src={test} alt="" />
                            <p className='text-[18px] text-tertiary font-normal font-rubik leading-7.5 mt-10.5'> A personal portfolio is a curated collection of an individual's professional work, showcasing their skilA personal portfolio is a curated collection of an individual's professional work, showcasing their skills,</p>
                            <h3 className='text-[18px] text-primary dark:text-white  font-bold font-rajdhani leading-7.5 mt-9'>Cameron Williamson</h3>
                            <h4 className='text-[14px] text-tertiary font-normal font-rubik leading-7.5'>Ui/Ux Designer</h4>


                        </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Testimonial