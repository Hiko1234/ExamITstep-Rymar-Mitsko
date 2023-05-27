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

const links = [
    { text: "Оцініть Ваш візит в нашу лікарню", path: "/ocinit-vash-visit", },
    { text: "Як Ви оцінюєте чистоту в нашому закладі?", path: "/ocinit-vash-visit", },
    { text: "Чи був ввічливим з Вами персонал?", path: "/ocinit-vash-visit", },
];

const rateWork = () => {
    return (
        <>
            <div className={s.rateWork}>
                <div className={s.rateWork__wrapper}>
                    <Container>
                        <div className={s.rateWork__navBar}>
                            <div className={s.rateWork__navBar_title}>
                                <h1 className={s.rateWork__navBar_title_text}>
                                    Нам важлива Ваша думка
                                </h1>
                            </div>
                            {links.map((link) => (
                                <Link className={s.rateWork__navBar_link} href={link.path}>
                                    <div className={s.rateWork__navBar_link_info}>
                                        <p className={s.rateWork__navBar_link_info_text}>
                                            {link.text}
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
                            ))}
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default rateWork;
