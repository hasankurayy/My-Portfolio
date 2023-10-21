import React, { useState } from 'react'

function Home() {

    const [jump, setJump] = useState(false)

    setTimeout(() => {
        setJump(!jump)
    },2000)

    return (
        <div className='h-[85vh] w-full bg-gradient-to-b from-black to-gray-800 text-white py-4 sm:flex justify-center gap-x-8 items-center px-5 sm:px-44'>

            <div>
                <h1 className='text-xl font-semibold mb-2 sm:text-4xl'>
                    I'm a Jr. Frontend Developer
                </h1>
                <p className='text-justify opacity-50 text-sm sm:text-base'>
                    My name is Hasan Kuray. I'm from Samsun, Turkey. I was born in 2000. I have been developing myself as a Front-End Developer in recent months,
                    you can review my projects and programming languages that I work.
                    I love to work on web application using technologies like Nodejs and React.
                </p>
            </div>

            <div className={`${jump ? "-translate-y-3" : "translate-y-3"} duration-1000 transition-all mt-8 sm:mt-0`}>
                <img src={require("../assets/ben.jpg")} className="rounded-full" alt="lan" />
            </div>
        </div>
    )
}

export default Home