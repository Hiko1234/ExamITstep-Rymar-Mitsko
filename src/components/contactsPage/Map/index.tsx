import React from 'react'
// import styles
import s from "./Map.module.scss"

const Map = () => {
    return (
        <>
            <div className={s.map}>
                <iframe className={s.map__iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20831.295245687495!2d23.838065617462405!3d49.25911563181014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a69925406697b%3A0x3d2fa2b0d4efe7c9!2z0KHRgtGA0LjQudGB0YzQutCwINGG0LXQvdGC0YDQsNC70YzQvdCwINGA0LDQudC-0L3QvdCwINC70ZbQutCw0YDQvdGP!5e0!3m2!1suk!2sua!4v1685115823556!5m2!1suk!2sua" loading="lazy"></iframe>
            </div>
        </>
    )
}

export default Map