import React from 'react'
// import styles
import s from "./Nav.module.scss"
// import link
import Link from 'next/link';

const firstLinks = [
    { text: 'Підрозділи', path: '/' },
    { text: 'Графіки роботи', path: '/' },
    { text: 'Декларація з лікарем', path: '/' },
    { text: 'Доступні ліки', path: '/' },
    { text: 'Про поліклініку', path: '/' },
];

const secondLinks = [
    { text: 'Публічні закупівлі', path: '/' },
    { text: 'Профспілка медичних працівників', path: '/' },
    { text: 'Міські цільові соціальні програми', path: '/' },
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