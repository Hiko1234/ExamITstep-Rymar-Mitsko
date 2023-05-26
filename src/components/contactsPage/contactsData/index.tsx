import React from 'react'
// import styles
import s from "./ContactsData.module.scss"
// import link
import Link from 'next/link'

const ContactsData = () => {
  return (
    <>
        <div className={s.contactsData}>
            <div className={s.contactsData__info}>
                <h4 className={s.contactsData__info_title}>Графік роботи:</h4>
                <p className={s.contactsData__info_subtext}>Понеділок-П'ятниця</p>
                <p className={s.contactsData__info_subtext}>8:00-16:00</p>
            </div>
            <div className={s.contactsData__info}>
                <h4 className={s.contactsData__info_title}>Контакти:</h4>
                <Link className={s.contactsData__info_link} href="tel: (03245) 7-09-14">(03245) 7-09-14</Link>
                <Link className={s.contactsData__info_link} href="tel: (03245) 7-08-67">(03245) 7-08-67</Link>
                <p className={s.contactsData__info_subtext}>stryi@ukr.net</p>
            </div>
            <div className={s.contactsData__info}>
                <h4 className={s.contactsData__info_title}>Адреса:</h4>
                <p className={s.contactsData__info_subtext}>82400, Львівська обл.,</p>
                <p className={s.contactsData__info_subtext}>м. Стрий, вул. Ольги</p>
                <p className={s.contactsData__info_subtext}>Басараб, буд. 15</p>
            </div>
            <div className={s.contactsData__info}>
                <h4 className={s.contactsData__info_title}>Керівник:</h4>
                <p className={s.contactsData__info_subtext}>Ігнатов Олексій Іларіонович</p>
                <Link className={s.contactsData__info_link} href="tel: (03245) 7-08-67">(03245) 7-08-67</Link>
            </div>
        </div>
    </>
  )
}

export default ContactsData