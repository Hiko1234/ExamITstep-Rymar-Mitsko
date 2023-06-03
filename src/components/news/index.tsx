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
import puls from '../../assets/img/homePage/news/puls.png';

const NewsComponent = () => {
    return (
        <>
            <div className={s.news}>
                <div className={s.news__title}>
                    <h2 className={s.news__title_text}>
                        ОСТАННІ НОВИНИ
                    </h2>

                    <div className={s.news__title_decor}>
                        <Image
                            src={puls}
                            alt="декор пульс"
                        />
                    </div>
                </div>

                <div className={s.news__posts}>
                    <div className={s.news__posts_info}>
                        <Image
                            src={news1}
                            width={248}
                            height={215}
                            alt="декор пульс"
                        />

                        <div className={s.news__posts_info_text}>
                            <p style={{
                                color: '#35C493',
                                fontWeight: '700',
                                fontSize: '22px',
                                lineHeight: '25px'
                            }}>
                                9 лютого
                            </p>

                            <p style={{
                                fontWeight: '700',
                                fontSize: '22px',
                                lineHeight: '25px'
                            }}>
                                9 лютого - Міжнародний<br />
                                день стоматолога
                            </p>
                        </div>
                    </div>

                    <div className={s.news__posts_info}>
                        <Image
                            src={news2}
                            width={248}
                            height={215}
                            alt="декор пульс"
                        />

                        <div className={s.news__posts_info_text}>
                            <p style={{
                                color: '#35C493',
                                fontWeight: '700',
                                fontSize: '22px',
                                lineHeight: '25px'
                            }}>
                                8 лютого
                            </p>

                            <p style={{
                                fontWeight: '700',
                                fontSize: '22px',
                                lineHeight: '25px'
                            }}>
                                COVID-сертифікат для<br/> 
                                щеплених бустерною<br/> 
                                дозою тепер у Дія
                            </p>
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
