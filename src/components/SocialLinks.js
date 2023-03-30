import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

function SocialLinks() {
        return (
            <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
                <ul>
                    <li className='rounded-tr-md flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                        <a href="https://www.linkedin.com/in/hasan-kuray-2318ab266/" target="_blank" className='flex justify-between items-center w-full text-white'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                        <a href="https://github.com/hasankurayy" target="_blank" className='flex justify-between items-center w-full text-white'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                        <a href="mailto:hasankryy@gmail.com" className='flex justify-between items-center w-full text-white'>
                            Gmail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='rounded-br-md flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                        <a href={require("../assets/resume.pdf")} target="_blank" className='flex justify-between items-center w-full text-white'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

export default SocialLinks