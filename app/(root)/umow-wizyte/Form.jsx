'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        date: '',
        service: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleServiceChange = (value) => {
        setFormData({ ...formData, service: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert('Wizyta utworzona poprawnie!');
                setFormData({
                    name: '',
                    surname: '',
                    email: '',
                    date: '',
                    service: '',
                });
            } else {
                const errorData = await res.json();
                alert(`Coś poszło nie tak: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Coś poszło nie tak!');
        }
    };

    return (
        <section className='mt-4 flex justify-center items-center w-full h-auto'>
            <div className='w-full lg:w-11/12 xl:w-[60%] h-full'>
                <form className='text-black w-full md:w-1/2 flex flex-col gap-3' onSubmit={handleSubmit}>
                    <label className='text-white' htmlFor="name">Imię</label>
                    <Input required id='name' type='text' value={formData.name} onChange={handleChange} />

                    <label className='text-white' htmlFor="surname">Nazwisko</label>
                    <Input required id='surname' type='text' value={formData.surname} onChange={handleChange} />

                    <label className='text-white' htmlFor="email">Email</label>
                    <Input required id='email' type='email' value={formData.email} onChange={handleChange} />

                    <label className='text-white' htmlFor="date">Data</label>
                    <Input required id='date' type='date' value={formData.date} onChange={handleChange} />

                    <label className='text-white' htmlFor="service">Wybierz usługę</label>
                    <Select required id='service' onValueChange={handleServiceChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Usługa" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="strzyzenie">Strzyżenie</SelectItem>
                            <SelectItem value="farbowanie">Farbowanie</SelectItem>
                            <SelectItem value="golenie">Golenie</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button type='submit'>Wyślij!</Button>
                </form>
                <div className='mt-4'>
                    <span>Chcesz sprawdzić swoją wizytę <Link className='text-primary' href={'/sprawdz-wizyte'}>Kliknij tutaj</Link></span>
                </div>
            </div>
        </section>
    );
};

export default Form;
