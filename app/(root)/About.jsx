'use client'
import React from 'react'
import Slider from './_components/Slider'

const About = () => {
    return (
        <section id='about' className='w-full px-2 md:px-0  mt-4 h-auto flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] h-full flex flex-col md:flex-row md:justify-between items-center'>
                <div>
                    <h3 className='text-3xl font-bold'>O nas!</h3>
                    <p className='tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident ipsum saepe pariatur inventore, quam asperiores ex rem quos dolorum itaque vel, quisquam aspernatur ipsam ratione sunt tenetur officiis accusantium!</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <Slider />
                </div>
            </div>
        </section>
    )
}

export default About