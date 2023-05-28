import React from 'react';
// import styles
import s from "./HomeNav.module.scss";
// import link
import Link from 'next/link';
// import Image
import Image from 'next/image'
//img
// import icon1 from "../../../assets/img/homePage/nav/calendar.png";
// import icon4 from "../../../assets/img/homePage/nav/purchases.png";
// import icon5 from "../../../assets/img/homePage/nav/declaration.png";
import icon2 from "../../../assets/img/homePage/nav/star.png";
import icon3 from "../../../assets/img/homePage/nav/medicine.png";
import icon6 from "../../../assets/img/homePage/nav/workschedule.png";
import icon7 from "../../../assets/img/homePage/nav/charity.png";

const links = [
    // { text: "Запис на прийом", img: icon1, path: "/" },
    // { text: "Публічні закупівлі", img: icon4, path: "/" },
    // { text: "Декларація з лікарем", img: icon5, path: "/" },
    { text: "Оцінити якість наданих послуг", img: icon2, path: "/rateWork" },
    { text: "Доступні ліки", img: icon3, path: "/" },
    { text: "Благодійність", img: icon7, path: "/"},
    { text: "Графік роботи поліклініки", img: icon6, path: "/" },
]

const HomeNav = () => {
    return (
        <>
            <div className={s.homeNav}>
                {links.map((link) => (
                    <Link className={s.homeNav__link} href={link.path}>
                        <Image className={s.homeNav__link_img} src={link.img} alt={link.text} width={35} height={35} />
                        <span className={s.homeNav__link_text}>{link.text}</span>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default HomeNav