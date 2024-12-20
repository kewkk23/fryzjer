import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const Slider = () => {
    return (
        <Swiper
            style={{
                "--swiper-pagination-color": "gray"
            }}
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            autoplay
            pagination={{ clickable: true }}
            className='rounded-lg'
        >
            <SwiperSlide><img src="/fryz1.jpg" alt="obrazek1" /></SwiperSlide>
            <SwiperSlide><img src="/fryz2.jpg" alt="obrazek2" /></SwiperSlide>
        </Swiper>
    )
}

export default Slider