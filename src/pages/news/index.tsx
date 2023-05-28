import React from 'react'
// import styles
import s from "./News.module.scss"
// import img
import Image from 'next/image'
import error from "../../assets/img/newsPage/404-error.png"
// import link
import Link from 'next/link'

const News = () => {
  return (
    <>
        <div className={s.news}>
            <div className={s.news__wrapper}>
                <Image className={s.news__img} src={error} alt='Error' width={450} height={250}/>
                <h1 className={s.news__errorTitle}>Ооой! Цю сторінку не знайдено!</h1>
                <Link className={s.news__link} href="/">Головна сторінка</Link>
            </div>
        </div>
    </>
  )
}

export default News