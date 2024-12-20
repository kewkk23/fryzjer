'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    alert('Wiadomość została wysłana!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id='kontakt' className='w-full mt-4 h-auto flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] h-full'>
                <h2 className='text-4xl font-bold'>Kontakt</h2>
                <form ref={form} onSubmit={sendEmail} className='w-full md:w-1/2 mt-3 flex flex-col gap-3'>
                    <label htmlFor="nameIn">
                        Imie
                    </label>
                    <Input required className='text-black' name="user_name" id='nameIn' type='text' />
                    <label htmlFor="emaill">
                        Email
                    </label>
                    <Input required className='text-black' name="user_email" id='emaill' type='email' />
                    <label htmlFor="message">
                        Wiadomość
                    </label>
                    <Textarea required name="message" className='text-black' id='message' />
                    <Button className='w-full' type='submit'>Wyślij!</Button>
                </form>
            </div>
        </section>
    )
}

export default Contact