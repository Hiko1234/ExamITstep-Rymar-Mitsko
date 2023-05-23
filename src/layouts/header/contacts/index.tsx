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
                    <Link href="#" className={s.contacts__address_link}>
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