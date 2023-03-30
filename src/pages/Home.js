import React, { useState } from 'react'

function Home() {

    const [jump, setJump] = useState(false)

    setTimeout(() => {
        setJump(!jump)
    },2000)

    return (
        <div className='h-[85vh] w-full bg-gradient-to-b from-black to-gray-800 text-white flex justify-center gap-x-8 items-center px-44'>

            <div>
                <h1 className='text-4xl font-semibold mb-2'>
                    I'm a Jr. Frontend Developer
                </h1>
                <p className='text-justify opacity-50'>
                    My name is Hasan Kuray. I'm from Samsun, Turkey. I was born in 2000. I have been developing myself as a Front-End Developer in recent months,
                    you can review my projects and programming languages ​​that I work.
                    I love to work on web application using technologies like React, Tailwind and Next JS.
                </p>
            </div>

            <div className={`${jump ? "-translate-y-3" : "translate-y-3"} duration-1000 transition-all`}>
                <img src={require("../assets/ben.jpg")} className="rounded-full" alt="lan" />
            </div>
        </div>
    )
}

export default Home