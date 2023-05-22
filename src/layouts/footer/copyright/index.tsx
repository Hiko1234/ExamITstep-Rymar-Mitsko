import React from 'react'
// import styles
import s from "./Copyright.module.scss"

const Copyright = () => {
    return (
        <>
            <div className={s.copyright}>
                <p className={s.copyright__text}>
                    © {new Date().getFullYear()} комунального некомерційного підприємства Стрийської міської ради<br />
                    Використання матеріалів сайту дозволяється лише з посиланням на джерело
                </p>
            </div>
        </>
    )
}

export default Copyright