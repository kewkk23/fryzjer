'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    const [isDown, setIsDown] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                setIsDown(true)
            } else {
                setIsDown(false)
            }
        })
    }, [])
    return (
        <header className={`w-full fixed z-40 flex justify-center items-center transition-all ease-in-out  shadow-zinc-800 ${isDown ? 'shadow-md h-[4rem] bg-[#151515]' : 'h-[5rem]'}`}>
            <nav className='w-full lg:w-11/12 xl:w-[60%] h-full flex justify-between items-center'>
                <div>
                    <Link href={'/'}><img src="/logo.svg" alt="logo" /></Link>
                </div>
                <div className=' hidden md:flex items-center gap-3'>
                    <Link className='link' href={'/#hero'}>Home</Link>
                    <Link className='link' href={'/#about'}>O nas</Link>
                    <Link className='link' href={'/#blog'}>Blog</Link>
                    <Link className='link' href={'/#kontakt'}>Kontakt</Link>
                    <Link className='w-[12rem]' href={'/umow-wizyte'}><Button className='w-full font-bold uppercase'>Umów wizytę</Button></Link>
                </div>
                <div className='block md:hidden'>
                    <Sheet>
                        <SheetTrigger><img src="/burger.svg" alt="burgerIcon" /></SheetTrigger>
                        <SheetContent className='bg-black'>
                            <SheetHeader className='bg-black'>
                                <SheetTitle></SheetTitle>
                                <SheetDescription className='flex flex-col text-white items-center justify-evenly text-3xl w-full h-screen'>
                                    <Link className='link' href={'/#hero'}>Home</Link>
                                    <Link className='link' href={'/#about'}>O nas</Link>
                                    <Link className='link' href={'/#blog'}>Blog</Link>
                                    <Link className='link' href={'/#kontakt'}>Kontakt</Link>
                                    <Link className='w-full h-[3rem]' href={'/umow-wizyte'}><Button className='w-full font-bold uppercase h-full'>Umów wizytę</Button></Link>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
            </nav>
        </header>
    )
}

export default Navbar