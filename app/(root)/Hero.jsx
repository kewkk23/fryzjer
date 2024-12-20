import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section id='hero' className='hero w-full h-screen lg:h-[80vh]'>
            <div className='shadoww flex justify-center items-center'>
                <div className='w-full lg:w-11/12 xl:w-[60%] h-full flex flex-col gap-2 justify-center'>
                    <h1 className='text-5xl text-center md:text-left font-bold'>Najlepszy fryzjer w mieście!</h1>
                    <p className=' tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id laboriosam sed.</p>
                    <Link className='mt-4 w-full md:w-[25rem]' href={'/#blog'}><Button className='w-full font-bold uppercase'>Zapoznaj się z naszym blogiem</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default Hero