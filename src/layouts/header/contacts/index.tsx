import React from 'react'
// import styles
import s from "./Contacts.module.scss";
// import link
import Link from 'next/link';
// import img 
import Image from 'next/image';
import pointer from "../../../assets/img/header/pointer.png"
import phone from "../../../assets/img/header/phone.png"


const Contacts = () => {
    return (
        <>
            <div className={s.contacts}>
                <div className={s.contacts__address}>
                    <Link href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9E%D0%BB%D1%8C%D0%B3%D0%B8+%D0%91%D0%B0%D1%81%D0%B0%D1%80%D0%B0%D0%B1,+15,+%D0%A1%D1%82%D1%80%D0%B8%D0%B9,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+82401/@49.2665923,23.87411,17z/data=!3m1!4b1!4m6!3m5!1s0x473a699251572083:0xba705f0698fdb950!8m2!3d49.2665923!4d23.87411!16s%2Fg%2F11c43_25x9?entry=ttu" className={s.contacts__address_link}>
                        <Image src={pointer} alt="Pointer" width={22} height={28} />
                    </Link>
                    <Image className={s.contacts__address_img} src={pointer} alt="Pointer" width={22} height={28} />
                    <div className={s.contacts__address_data}>
                        <p><span>82400, Львівська обл.,</span> м. Стрий,  вул. Ольги Басараб, буд. 15</p>
                        <Link className={s.contacts__address_dataLink} href="/workschedule">графік роботи</Link>
                    </div>
                </div>
                <Link href="tel:(03245) 7-03-02" className={s.contacts__numbers}>
                    <Image className={s.contacts__numbers_img} src={phone} alt="Phone number" width={32} height={32} />
                    <span className={s.contacts__numbers_number}>(03245) 7-03-02</span>
                </Link>
            </div>
        </>
    )
}

export default Contacts