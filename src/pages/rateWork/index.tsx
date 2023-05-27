import React from 'react'
//import styles
import s from './rateWork.module.scss';
//Link
import Link from 'next/link';
//Image
import Image from 'next/image';
//import components
import Container from '@/components/container';
//img
import rightArrow from '../../assets/img/rateWorkPage/rightArrow.png';

const rateWork = () => {
    return (
        <>
            <div className={s.rateWork}>
                <Container>
                    <div className={s.rateWork__navBar}>
                        <div className={s.rateWork__navBar_title}>
                            <h1 className={s.rateWork__navBar_title_text}>
                                Нам важлива Ваша думка
                            </h1>
                        </div>

                        <Link className={s.rateWork__navBar_link} href='#'>
                            <div className={s.rateWork__navBar_link_info}>
                                <p className={s.rateWork__navBar_link_info_text}>
                                    Оцініть Ваш візит в нашу лікарню
                                </p>

                                <div className={s.rateWork__navBar_link_info_img}>
                                    <Image
                                        src={rightArrow}
                                        width={42}
                                        height={42}
                                        alt="Продовжити"
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link className={s.rateWork__navBar_link} href='#'>
                            <div className={s.rateWork__navBar_link_info}>
                                <p className={s.rateWork__navBar_link_info_text}>
                                    Як Ви оцінюєте чистоту в нашому закладі?
                                </p>

                                <div className={s.rateWork__navBar_link_info_img}>
                                    <Image
                                        src={rightArrow}
                                        width={42}
                                        height={42}
                                        alt="Продовжити"
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link className={s.rateWork__navBar_link} href='#'>
                            <div className={s.rateWork__navBar_link_info}>
                                <p className={s.rateWork__navBar_link_info_text}>
                                    Оцініть Ваш візит в нашу лікарню
                                </p>

                                <div className={s.rateWork__navBar_link_info_img}>
                                    <Image
                                        src={rightArrow}
                                        width={42}
                                        height={42}
                                        alt="Продовжити"
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link className={s.rateWork__navBar_link} href='#'>
                            <div className={s.rateWork__navBar_link_info}>
                                <p className={s.rateWork__navBar_link_info_text}>
                                    Чи був ввічливим з Вами персонал?
                                </p>

                                <div className={s.rateWork__navBar_link_info_img}>
                                    <Image
                                        src={rightArrow}
                                        width={42}
                                        height={42}
                                        alt="Продовжити"
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default rateWork;
