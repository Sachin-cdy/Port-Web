import React from 'react';
import css from "../../public/css.jpg"
import html from "../../public/html.png"
import javascript from "../../public/javascript.png"


function Experience() {
    const cardItems = [
        {
            id: 1,
            logo: css,
            name: "CSS",

        },
        {
            id: 2,
            logo: html,
            name: "HTML",

        },
        {
            id: 3,
            logo: javascript,
            name: "JavaScript",
        },

    ]
    return (
        <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
            <div>
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <p >I've more than 1 year of experience in below technologies </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-7 my-3">

                    {
                        cardItems.map(({ id, logo, name }) => (
                            <div className="flex flex-col items-center justify-center border-color-black[2px] rounded-full md:w-[200px] h-[200px]  p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                                <img src={logo} className="w-[150px]   rounded-full " alt="" />
                                <div>
                                    <div className=''>{name}</div>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )

}
export default Experience