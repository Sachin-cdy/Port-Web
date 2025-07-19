// import React from 'react'
import React, { useState } from 'react';
import pic from "../../public/mnop.jpg";
import { ReactTyped } from "react-typed";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = React.useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contact"
        }
    ]
    return (
        <>

            <div className=" max-w-screeen-2xl container mx-auto px-4 md:px-20 h-16 shadow-xl fixed top-0 left-0 right-0 z-50 bg-[#c1a5cf]">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-2 ">
                        <img src={pic} alt="Profile" className="h-12 w-12 rounded-full object-cover" />
                        <h1 className="font-semibold text-xl cursor-pointer">Sachi <span className="text-red-500 text-2xl">n</span>
                            <p className="text-sm">Web Developer</p>
                        </h1>

                    </div>
                    {/*Desktop navbar*/}
                    <div>
                        <ul className=' hidden md:flex space-x-8 '>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>

                                        <Link to={text}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            activeClass="active"
                                        >{text}</Link>

                                    </li>
                                ))
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className="md:hidden">
                            {menu ? (<MdClose size={24} />
                            ) : (< IoMenu size={24} />)}
                        </div>
                    </div>
                </div>
                {/*Mobile navbar*/}
                {
                    menu && (
                        <div className='bg-white'>
                            <ul className='md: hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                                {
                                    navItems.map(({ id, text }) => (
                                        <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}>
                                            <Link to={text}
                                                onClick={() => setMenu(!menu)}
                                                smooth={true}
                                                duration={500}
                                                offset={-70}
                                                activeClass="active"
                                            >{text}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    )
                }

            </div>
        </>
    )
}

export default Navbar   