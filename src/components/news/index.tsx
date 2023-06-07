import React from 'react';
//import styles
import s from './News.module.scss';
//import Image
import Image from 'next/image';
//import Link
import Link from 'next/link';
//import img
import news1 from '../../data/news/dataImg/news1.png';
import news2 from '../../data/news/dataImg/news2.png';

const NewsComponent = () => {
    return (
        <>
            <div className={s.news}>
                <div className={s.news__title}>
                    <h2 className={s.news__title_text}>
                        ОСТАННІ НОВИНИ
                    </h2>

                    <div className={s.news__title_decor}></div>
                </div>

                <div className={s.news__posts}>
                    <div className={s.news__posts_info}>
                        <Link href='/news'>
                            <Image className={s.news__posts_info_img}
                            src={news1}
                            width={248}
                            height={215}
                            alt="День стоматолога"
                            />
                        </Link>

                        <div className={s.news__posts_info_text}>
                            <p className={s.news__posts_info_text_title}>
                                9 лютого
                            </p>
                            <Link style={{
                                textDecoration: 'none',
                                color: '#000'
                            }} href='/news'>
                                <p className={s.news__posts_info_text_subtitle}>
                                    9 лютого - Міжнародний<br />
                                    день стоматолога
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className={s.news__posts_info}>
                        <Link href='/news'>
                            <Image className={s.news__posts_info_img}
                            src={news2}
                            width={248}
                            height={215}
                            alt="Ковід сертифікат"
                            />
                        </Link>

                        <div className={s.news__posts_info_text}>
                            <p className={s.news__posts_info_text_title}>
                                8 лютого
                            </p>

                            <Link style={{
                                textDecoration: 'none',
                                color: '#000'
                            }} href='/news'>
                                <p className={s.news__posts_info_text_subtitle}>
                                    COVID-сертифікат для<br />
                                    щеплених бустерною<br />
                                    дозою тепер у Дія
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={s.news__link}>
                    <Link className={s.news__link_info} href="/news">
                        Всі новини
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NewsComponent;
