import React from 'react'
import margin from "../assets/Margin.png"
import container from "../assets/Container.png"
import lin from "../assets/lin.svg"
import fra from "../assets/fra.svg"
import not from "../assets/not.svg"
import sla from "../assets/sla.svg"
import med from "../assets/med.svg"
import upw from "../assets/upw.svg"
import ama from "../assets/ama.svg"
import asa from "../assets/asa.svg"


const Service = () => {
    return (
        <>
            <section className='py-30 bg-white dark:bg-primary'>
                <div className="container">
                    <div className="">
                        <h4 className='text-[16px] text-secondary font-medium  font-rubik  text-center uppercase'>Latest Service</h4>
                        <h2 className='text-[48px] text-primary dark:text-white font-bold font-rajdhani text-center leading-15'>Inspiring The World One Project</h2>
                        <p className='text-[16px] text-tertiary font-normal font-rubik text-center w-156.75 mx-auto '>Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational</p>
                    </div>

                    <div className=" flex justify-between items-center mt-15">
                        <div className="w-1/2">
                            <div className="">
                                <div className="py-8.5 px-9.5 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary  ">
                                    <h2 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-15 '>01. A Portfolio of Creativity</h2>
                                    <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-1 '>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency</p>

                                </div>
                            </div>
                            <div className="">
                                <div className="py-8.5 px-9.5 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary mt-5 ">
                                    <h2 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-15 '>02. My Portfolio of Innovation</h2>
                                    <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-1 '>My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses</p>

                                </div>
                            </div>
                            <div className="">
                                <div className="py-8.5 px-9.5 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary mt-5 ">
                                    <h2 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-15 '>03. A Showcase of My Projects</h2>
                                    <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-1 '>In this portfolio, you’ll find a curated selection of projects that highlight my skills in Main Areas, e.g., responsive web design</p>

                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                        <div className="">
                            <img src={margin} alt="" />
                        </div>
                        </div>
                    </div>


                    <div className=" flex justify-between items-center mt-22.5 gap-8">
                        <div className="w-1/2">
                        <div className="">
                            <h2 className='text-[32px] text-primary dark:text-white font-bold font-rajdhani leading-10.5'>Design Skill </h2>
                            <div className="mt-7.5">
                                <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-primary dark:text-white font-normal font-rubik'>PHOTOSHOT</h3>
                                <h4 className='text-[14px] text-primary dark:text-white font-normal font-rubik'>100%</h4>
                                </div>
                                <div className="h-2.5 w-full bg-secondary rounded-[10px] mt-4"></div>
                            </div>
                            <div className="mt-7.5">
                                <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-primary dark:text-white font-normal font-rubik'>FIGMA</h3>
                                <h4 className='text-[14px] text-primary dark:text-white font-normal font-rubik mr-5'>95%</h4>
                                </div>
                                <div className="h-2.5 w-full bg-[#F4F4F4] dark:bg-[#2b2a2a] rounded-[10px] mt-4 relative after:absolute 
                            after:h-full after:w-[95%] after:top-0 after:left-0 after:bg-secondary  after:rounded-[10px] "></div>
                            </div>
                            <div className="mt-7.5">
                                <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-primary dark:text-white font-normal font-rubik'>ADOBE XD</h3>
                                <h4 className='text-[14px] text-primary dark:text-white font-normal font-rubik mr-61'>60%</h4>
                                </div>
                                <div className="h-2.5 w-full bg-[#F4F4F4] dark:bg-[#2b2a2a] rounded-[10px] mt-4 relative after:absolute 
                            after:h-full after:w-[60%] after:top-0 after:left-0 after:bg-secondary  after:rounded-[10px] "></div>
                            </div>
                            <div className="mt-7.5">
                                <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-primary dark:text-white font-normal font-rubik'>ADOBE ILLUSTRATOR</h3>
                                <h4 className='text-[14px] text-primary dark:text-white font-normal font-rubik mr-46'>70%</h4>
                                </div>
                                <div className="h-2.5 w-full bg-[#F4F4F4] dark:bg-[#2b2a2a] rounded-[10px] mt-4 relative after:absolute 
                            after:h-full after:w-[70%] after:top-0 after:left-0 after:bg-secondary  after:rounded-[10px] "></div>
                            </div>
                        </div>
                        </div>
                        <div className="w-1/2">
                        <div className="">
                            <h2 className='text-[32px] text-primary dark:text-white font-bold font-rajdhani leading-10.5'>Development Skill  </h2>
                            <div className="mt-7.5">
                                <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-primary dark:text-white font-normal font-rubik'>PHOTOSHOT</h3>
                                <h4 className='text-[14px] text-primary dark:text-white font-normal font-rubik'>100%</h4>
                                </div>
                                <div className="h-2.5 w-full bg-secondary rounded-[10px] mt-4"></div>
                            </div>
                            <div className="mt-7.5">
                                <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-primary dark:text-white font-normal font-rubik'>FIGMA</h3>
                                <h4 className='text-[14px] text-primary dark:text-white font-normal font-rubik mr-5'>95%</h4>
                                </div>
                                <div className="h-2.5 w-full bg-[#F4F4F4] dark:bg-[#2b2a2a] rounded-[10px] mt-4 relative after:absolute 
                            after:h-full after:w-[95%] after:top-0 after:left-0 after:bg-secondary  after:rounded-[10px] "></div>
                            </div>
                            <div className="mt-7.5">
                                <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-primary dark:text-white font-normal font-rubik'>ADOBE XD</h3>
                                <h4 className='text-[14px] text-primary dark:text-white font-normal font-rubik mr-61'>60%</h4>
                                </div>
                                <div className="h-2.5 w-full bg-[#F4F4F4] dark:bg-[#2b2a2a] rounded-[10px] mt-4 relative after:absolute 
                            after:h-full after:w-[60%] after:top-0 after:left-0 after:bg-secondary  after:rounded-[10px] "></div>
                            </div>
                            <div className="mt-7.5">
                                <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-primary dark:text-white font-normal font-rubik'>ADOBE ILLUSTRATOR</h3>
                                <h4 className='text-[14px] text-primary dark:text-white font-normal font-rubik mr-46'>70%</h4>
                                </div>
                                <div className="h-2.5 w-full bg-[#F4F4F4] dark:bg-[#2b2a2a] rounded-[10px] mt-4 relative after:absolute 
                            after:h-full after:w-[70%] after:top-0 after:left-0 after:bg-secondary  after:rounded-[10px] "></div>
                            </div>
                        </div>
                        </div>
                        
                    </div>

                   <div className="mt-22.5">
                    <h2 className='text-[32px] text-primary dark:text-white font-bold font-rajdhani leading-10.5'>Education </h2>
                     <div className=" flex justify-between items-center mt-8 gap-8">
                        <div className="w-1/2">
                            <div className="">
                                <div className="py-12 px-9.5 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary  ">
                                    <h4 className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-6.5'>Trainer Marketing</h4>
                                    <h2 className='text-[18px] text-primary dark:text-white font-bold font-rajdhani leading-7 '>2005-2009</h2>
                                    <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-4 '>A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.</p>

                                </div>
                            </div>
                            <div className="">
                                <div className="py-12 px-9.5 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary mt-8 ">
                                    <h4 className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-6.5'>Design Assistant</h4>
                                    <h2 className='text-[18px] text-primary dark:text-white font-bold font-rajdhani leading-7 '>2008-2012</h2>
                                    <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-4 '>I’ve had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.</p>

                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="">
                                <div className="py-12 px-9.5 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary  ">
                                    <h4 className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-6.5'>Assistant Director</h4>
                                    <h2 className='text-[18px] text-primary dark:text-white font-bold font-rajdhani leading-7 '>2010-2014</h2>
                                    <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-4 '>Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs.</p>

                                </div>
                            </div>
                            <div className="">
                                <div className="py-12 px-9.5 bg-[#f4f4f4] dark:bg-[#1e1e1e] rounded-[20px] border-b border-r border-secondary mt-8 ">
                                    <h4 className='text-[16px] text-primary dark:text-white font-normal font-rubik leading-6.5'>Design Assistant</h4>
                                    <h2 className='text-[18px] text-primary dark:text-white font-bold font-rajdhani leading-7 '>2008-2012</h2>
                                    <p className='text-[16px] text-tertiary font-normal font-rubik leading-6.5 mt-4 '>Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs a personal.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                   </div>

                   <div className="flex justify-between items-center gap-17.5 mt-18.75">
                    <div className="w-1/2">
                        <img src={container} alt="" />
                    </div>
                    <div className="w-1/2">
                        <div className="">
                            <h2 className='text-[32px] text-primary dark:text-white font-bold font-rajdhani leading-10.5'>Experiences </h2>
                                <div className="mt-8">
                                    <h3 className='text-[16px] text-secondary font-medium  font-rubik '>experience</h3>
                                    <h4 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-7.5'>Fatima Asrafy</h4>
                                    <h5 className='text-[18px] text-primary dark:text-white font-medium font-rajdhani leading-7'>UI/UX Designer</h5>
                                    <p className='text-[16px] text-tertiary font-normal font-rubik leading-7.5 mt-4 w-111'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum desi dolore eu fugiat nulla pariatu Duis aute irure</p>
                                </div>
                                <div className="mt-12.5">
                                    <h3 className='text-[16px] text-secondary font-medium  font-rubik '>experience</h3>
                                    <h4 className='text-[24px] text-primary dark:text-white font-bold font-rajdhani leading-7.5'>Fatima Asrafy</h4>
                                    <h5 className='text-[18px] text-primary dark:text-white font-medium font-rajdhani leading-7'>UI/UX Designer</h5>
                                    <p className='text-[16px] text-tertiary font-normal font-rubik leading-7.5 mt-4 w-111'>Interested in working together? Let’s bring your ideas to life! Contact me, and let’s start building something.</p>
                                </div>
                            
                        </div>
                    </div>
                   </div>


                   <div className="border border-[#9F9F9F] w-321.5 mx-auto mt-30.5">
                    <div className="flex">
                        <img className='border border-[#9F9F9F]' src={lin} alt="" />
                        <img className='border border-[#9F9F9F]' src={fra} alt="" />
                        <img className='border border-[#9F9F9F]' src={not} alt="" />
                        <img className='border border-[#9F9F9F]' src={sla} alt="" />
                    </div>
                    <div className="flex">
                        <img className='border border-[#9F9F9F]' src={med} alt="" />
                        <img className='border border-[#9F9F9F]' src={upw} alt="" />
                        <img className='border border-[#9F9F9F]' src={ama} alt="" />
                        <img className='border border-[#9F9F9F]' src={asa} alt="" />

                    </div>
                   </div>

                </div>
            </section>
        </>
    )
}

export default Service
