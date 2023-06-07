import React from 'react'
// import styles
import s from "./Nav.module.scss"
// import link
import Link from 'next/link';

const firstLinks = [
    { text: 'Підрозділи', path: '/department' },
    { text: 'Графіки роботи', path: '/workSchedule' },
    { text: 'Благодійність', path: '/charity' },
    { text: 'Доступні ліки', path: 'https://moz.gov.ua/dostupni-liki' },
    { text: 'Контакти', path: '/contacts' },
];

const secondLinks = [
    { text: 'Публічні закупівлі', path: '/paid' },
    { text: 'Анонімне звернення', path: '/request' },
    { text: 'Новини', path: '/news' },
]

const Nav = () => {
    return (
        <>
            <div className={s.footerListWrapper}>
                <ul className={s.footerList}>
                    {firstLinks.map((link) => (
                        <li className={s.footerList__li}>
                            <Link className={s.footerList__li_link} href={link.path}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
                <ul className={s.footerList}>
                    {secondLinks.map((link) => (
                        <li className={s.footerList__li}>
                            <Link className={s.footerList__li_link} href={link.path}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Nav