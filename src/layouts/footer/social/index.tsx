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
    { text: "Facebook", image: facebook, path: "https://www.facebook.com/p/%D0%9A%D0%9D%D0%9F-%D0%A1%D1%82%D1%80%D0%B8%D0%B9%D1%81%D1%8C%D0%BA%D0%B0-%D0%A6%D0%A0%D0%9B-100057353443150/?paipv=0&eav=AfaiNbrSerao9ROB1DwnWiRbZSK_CGW4-jbNkBijuFspuo8c6drk078zRLUJwwBKL80&_rdr" },
    { text: "Telegram", image: telegram, path: "https://t.me/strij_central_regional_hospital" },
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