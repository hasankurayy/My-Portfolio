import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"

import { links } from "../datas"

function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <div className='h-[15vh] bg-black text-white flex items-center justify-between px-7 w-full border-b border-white'>

            {/* logo */}
            <div>
                <h1 className='font-signature text-5xl -rotate-12 hover:rotate-0 transition-all duration-500'>Hkry</h1>
            </div>

            {/* navlinks */}
            <div className='hidden md:flex'>
                {links.map(link => (
                    <NavLink key={link.id} to={link.link} className={({ isActive }) => isActive ? "active navlink" : "navlink"} >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            {/* menu button */}
            <div className="md:hidden cursor-pointer z-50 text-gray-500" onClick={() => setShowNavbar(!showNavbar)}>
                {showNavbar ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            {showNavbar && 
            <div className=' z-10 flex flex-col absolute justify-center items-center top-0 left-0 w-full h-screen text-black bg-gradient-to-b from-black to-gray-500 '>
                {links.map(link => (
                    <Link key={link.id} to={link.link} className="py-2 font-medium text-gray-400 text-lg cursor-pointer">
                        {link.name}
                    </Link>
                ))}
            </div>}

        </div>
    )
}

export default Navbar