import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
    <hr />
   <footer className='py-12'>
    <div className="max-w-screeen-2xl container mx-auto px-4 md:px-20">
        <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
                <FaFacebook size={24} />
                <FaLinkedin size={24} />
                <FaSquareInstagram size={24} />
                <MdEmail size={24} />
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                <p className='text-sm'>
                    &copy; © 2025 Sachin Tharu – Kathmandu, Nepal  
                       Privacy Policy | Terms of Use
                       
                </p>
                <p className='text-sm'>Supportive ❤️</p>
            </div>
        </div>

    </div>
   </footer>
    </>
  )
}

export default Footer