import React from 'react'
// import styles
import s from "./Nav.module.scss"
// import link
import Link from 'next/link'

const links = [
    { text: 'Платні послуги', path: '/paid' },
    { text: 'Анонімне звернення', path: '/request' },
    { text: 'Лікарі', path: '/doctors' },
    { text: 'Відділення', path: '/department' },
    { text: 'Контакти', path: '/contacts' },
]

const Nav = () => {
    return (
        <>
            <nav className={s.nav}>
                <ul className={s.nav__list}>
                    {links.map((link) => (
                        <li className={s.nav__list_li}>
                            <Link href={link.path} className={s.nav__list_link}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Nav