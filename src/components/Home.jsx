import React from 'react'
import pic from "../../public/photo.avif";

import Navbar from './Navbar'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped} from "react-typed";

function Home() {
  return (
   <> 
     <div name="Home"
      className="max-w-screeen-2xl container mx-auto px-4 md:px-20 my-20">
       <div className="flex flex-col md:flex-row">
         <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
           <span className="text-xl">Welcome in my Feed</span>
           <div className="flex space-x-1 md:text-4xl">
            <h1>Hello, I'm a  </h1>
           {/* <span className="text-red-700 font-bold">Developer</span> */}
            <ReactTyped
          className="text-red-700 font-bold"
          strings={["Developer", "Programmer", "Coder", "Designer"]}
          typeSpeed={40}
          backSpeed={50}
            loop={true}
        />
           </div>
           <br/>
           <p className="text-sm md:text-md text-justify">I’m a <span className="font-bold">Web developer</span> who loves turning ideas into clean, responsive websites. Always focused on intuitive, user‑first experiences. My portfolio blends standout design with functionality: check out real-world projects where I solve problems with elegant, efficient code.</p>
           <br/>
           {/*social media icons */}
           <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 ">
              <div className=" space-y-2">
            <h1 className="font-bold text-cetnter">Available on </h1> 
             <ul className="flex space-x-5"> 
               <li> 
                <a href="https://www.facebook.com/sachin.ch.77964/"target="blank">  
                <FaFacebook className="text-2xl cursor-pointer" /></a>
                </li>
               <li> 
                <a href="https://www.linkedin.com/in/sachin-cdy-07a8092b7/" target="blank">
                <FaLinkedin className="text-2xl cursor-pointer" /></a>
                </li>
               <li>
                <a href="https://www.instagram.com/sachin_cdy/" target="blank">
                <FaSquareInstagram className="text-2xl cursor-pointer" />
                </a>
               </li>
               <li>
                <a href="mailto:scdy955@gmail.com" target="blank">
                <MdEmail className="text-2xl cursor-pointer" /></a>
               </li>
             </ul>
           </div>
           <div>
               <h1 className="font-bold"> Currently Working on </h1>
               <div className="flex space-x-5">
                <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-color-black[2px]"/>
                <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-color-black[2px]"/>
                <FaReact   className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-color-black[2px]"/>
                <FaNodeJs  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-color-black[2px]"/>
               </div>

           </div>
           </div>

         </div>
         <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
         <img src={pic} className="rounded-full w-[450px] h-[450px]" alt="" />
         </div>
       </div>
     </div>
     
     <hr />
   
   </>
  )
}
 
export default Home;