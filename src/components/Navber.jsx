// import React, { useState } from 'react'
// import logo from '../../assets/logo.png'
// import { FaInstagram ,FaLinkedinIn,FaTwitter,FaFacebookF} from "react-icons/fa";
// import { MdDarkMode } from "react-icons/md";
// import { FaBarsStaggered } from "react-icons/fa6";
// import { GiTireIronCross } from "react-icons/gi";







// const Navber = () => {
//     let item = useState([

//     ])

    

//   return (
//     <>
//     <nav className='py-8.5 bg-[#f4f4f4] shadow-xl'>
//         <div className="container">
//             <div className=" flex justify-between items-center ">
//                 <div className="w-30">
//                     <img src={logo} alt="" />
//                 </div>
//                 <div className=" ">
//                     <ul className='flex justify-center items-center gap-8 text-[16px] text-primary font-bold font-rajdhani cursor-pointer'>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Services</li>
//                         <li>Blog</li>
//                         <li>Projucts</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//                 <div className=" ">
//                     <div className="flex items-center gap-2">
//                         <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
//                             <FaInstagram  />
//                         </div>
//                         <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
//                             <FaLinkedinIn  />
//                         </div>
//                         <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
//                             <FaTwitter  />
//                         </div>
//                         <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
//                             <FaFacebookF  />
//                         </div>
//                         <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
//                             <MdDarkMode  />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="">
//                  <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
//                             <FaBarsStaggered  />
//                         </div>
//                          <div className="p-3.25 bg-[#e6e6e6] text-primary rounded-full duration-300 ease-in-out hover:bg-secondary hover:text-white  ">
//                             <GiTireIronCross  />
//                         </div>
//             </div>
//         </div>
//     </nav>
//     </>
//   )
// }

// export default Navber


import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png"
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiTireIronCross } from "react-icons/gi";
import DarkMode from "../toggle/DarkMode";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   function toggleDark() {
    document.documentElement.classList.toggle("dark");
  }

  // 🔒 Body Scroll Lock + ESC Close
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);
  

  return (
    <nav className="py-2.5 bg-[#f4f4f4] dark:bg-primary shadow-xl relative z-30">
      <div className="container mx-auto px-4">
     

        {/* Top Row */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="w-28">
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 text-[16px] text-primary dark:text-white font-bold font-rajdhani cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>

          {/* Desktop Social */}
          <div className="hidden lg:flex items-center gap-2">
            {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF,].map((Icon, i) => (
              <div
                key={i}
                className="p-3 bg-[#e6e6e6] dark:bg-[#232323] text-primary dark:text-white rounded-full duration-300 hover:bg-secondary hover:text-white  cursor-pointer"
              >
                <Icon />
              </div>
            ))}
            <DarkMode/>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="lg:hidden p-3 bg-[#e6e6e6] dark:bg-[#232323] text-primary rounded-full cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FaBarsStaggered />
          </div>
        </div>
      </div>

      {/* 🔹 Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* 🔹 Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <div
            className="p-2 bg-[#e6e6e6] rounded-full cursor-pointer hover:bg-secondary hover:text-white duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <GiTireIronCross />
          </div>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-center gap-8 mt-10 text-primary dark:text-white font-bold font-rajdhani text-lg">
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>About</li>
          <li onClick={() => setMenuOpen(false)}>Services</li>
          <li onClick={() => setMenuOpen(false)}>Blog</li>
          <li onClick={() => setMenuOpen(false)}>Projects</li>
          <li onClick={() => setMenuOpen(false)}>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-12">
          {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map((Icon, i) => (
            <div
              key={i}
              className="p-3 bg-[#e6e6e6] dark:bg-[#232323] text-primary rounded-full duration-300 hover:bg-secondary hover:text-white cursor-pointer"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    
    </nav>
  );
};

export default Navber;
