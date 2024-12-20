'use client'
import GlobalApi from '@/services/GlobalApi'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const getAllBlogs = async () => {
        const resp = await GlobalApi.getAllBlogs()
        setBlogs(resp.blogs);
    }
    useEffect(() => {
        getAllBlogs()
    }, [])
    return (
        <section id='blog' className='w-full h-auto mt-4 flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] h-full'>
                <h2 className='text-4xl font-bold'>Blogi</h2>
                <div className='grid grid-cols-1 my-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {blogs.map((item, index) => (
                        <Link href={`/blog/${item.slug}`} className='border h-[25rem]  rounded-lg hover:bg-white hover:text-black transition-all ease-in-out' key={index}>
                            <div className=' relative w-full h-[65%]'>
                                <img className=' absolute w-full h-full object-cover rounded-lg' src={item.image.url} alt={item.title} />
                            </div>
                            <div className='px-2 flex flex-col gap-2'>
                                <h4 className='font-bold'>{item.title}</h4>
                                <p className='text-xs tracking-wider '>{item.shortDesc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog