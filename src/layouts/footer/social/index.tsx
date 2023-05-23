import React from 'react'
// import styles
import s from "./Social.module.scss"
// import link
import Link from 'next/link'
// import img
import Image from 'next/image';
import facebook from '../../../assets/img/footer/facebook.png';
import telegram from '../../../assets/img/footer/telegram.png';

const socialLinks = [
    { text: "Facebook", image: facebook, path: "/" },
    { text: "Telegram", image: telegram, path: "/" },
]

const Social = () => {
    return (
        <>
            <div className={s.social}>
                <div className={s.social__title}><h4>Тримайте руку на пульсі</h4></div>
                <div className={s.social__subtext}><p>слідкуйте за оновленнями в соц. мережах</p></div>
                <div className={s.social__links}>
                    {socialLinks.map((link) => (
                        <Link className={s.social__links_link} href={link.path}>
                            <Image className={s.social__links_img} src={link.image} alt={link.text} width={32} height={32}/>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Social