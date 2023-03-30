import React from 'react'
import { projects } from '../datas'

function Projects() {
    return (
        <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-[85vh]'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {projects.map(project => (
                        <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-200'>
                            <div className='text-center py-2 text-xl opacity-90'>{project.title}</div>
                            <img className='rounded-md' src={project.src} alt="" />
                            <div className='flex items-center justify-center'>
                                <a href={project.display} target="_blank" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 opacity-60 hover:opacity-100'>Display</a>
                                <a href={project.code} target="_blank" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 opacity-60 hover:opacity-100'>Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Projects