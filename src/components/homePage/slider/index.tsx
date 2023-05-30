import React, { useState } from 'react'
// import styles
import s from "./Slider.module.scss"
// import img
import Image from 'next/image';
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import link
import Link from 'next/link';
// import data
import dataNews from "@/data/news"

const Slider = () => {
    const [data, setData] = useState(dataNews);

    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                navigation
                pagination={{ clickable: true }}
                className={s.slider}
            >
                {data.map((slide) => (
                    <SwiperSlide className={s.slide}>
                        <div className={s.slide__wrapper}>
                            <Link className={s.slide__link} href="#">
                                <Image className={s.slide__img} src={slide.image} alt={slide.title} />
                                <div className={s.slide__info}>
                                    <div className={s.slide__info_date}><span>{slide.date}</span></div>
                                    <div className={s.slide__info_title}>{slide.title.length > 60 ? slide.title.slice(0, 60) + "..." : slide.title}</div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Slider