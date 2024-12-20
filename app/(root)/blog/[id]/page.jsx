'use client';
import GlobalApi from '@/services/GlobalApi';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [blog, setBlog] = useState(null);
    const location = usePathname().split('/blog/')[1];

    const getBlog = async () => {
        const result = await GlobalApi.getOneBlog(location);
        setBlog(result.blogs[0]);
    };

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <section className='w-full h-auto flex justify-center items-center'>
            <div className='w-full my-20 lg:w-11/12 xl:w-[60%] h-full'>
                {blog ? (
                    <div>
                        <div className=' relative w-full h-[30vh]'>
                            <img className='rounded-lg w-full h-full absolute object-cover' src={blog.image.url} alt={blog.title} />
                        </div>
                        <h2 className='text-4xl font-bold mt-3'>{blog.title}</h2>
                        <div className='mt-3' dangerouslySetInnerHTML={{ __html: blog.desc.html }} />
                    </div>
                ) : (
                    <p>Ładowanie</p>
                )}
            </div>
        </section>
    );
};

export default Page;
