'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [appointment, setAppointment] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setAppointment(null);

        try {
            const res = await fetch('/api/appointments/check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const data = await res.json();
                setAppointment(data.appointment);
            } else {
                const errorData = await res.json();
                setError(errorData.message || 'Nie znaleziono');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <section className='w-full mt-5 h-auto flex justify-center items-center'>
            <div className='w-full lg:w-11/12 xl:w-[60%] h-full'>
                <div className='flex flex-col gap-2 md:flex-row md:justify-between'>
                    <form className='w-full md:w-1/2 flex flex-col gap-3' onSubmit={handleSubmit}>
                        <label htmlFor="name">Imię</label>
                        <Input
                            className='text-black'
                            id='name'
                            type='text'
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        <Input
                            className='text-black'
                            id='email'
                            type='email'
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <Button type='submit'>Sprawdź</Button>
                    </form>
                    <div className='w-full md:w-1/2 mt-5 md:mt-0'>
                        {appointment && (
                            <div className='p-4 border border-green-500 rounded-md'>
                                <h3 className='text-lg font-bold'>Szczegóły wizyty:</h3>
                                <p><strong>Imię:</strong> {appointment.name}</p>
                                <p><strong>Email:</strong> {appointment.email}</p>
                                <p><strong>Data:</strong> {appointment.date}</p>
                                <p><strong>Usługa:</strong> {appointment.service}</p>
                            </div>
                        )}
                        {error && (
                            <div className='p-4 border border-red-500 rounded-md'>
                                <p className='text-red-500'>{error}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
