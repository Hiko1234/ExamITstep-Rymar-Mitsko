import React from 'react'
// import styles
import s from "./Contacts.module.scss"
// import components
import Container from '@/components/container'
import ContactsData from '@/components/contactsPage/contactsData'
import Map from '@/components/contactsPage/map'
import OtherContacts from '@/components/contactsPage/otherСontacts'

const Contacts = () => {
  return (
    <>
        <div className={s.contacts}>
            <h1 className={s.contacts__title}>Контакти</h1>
            <Container>
                <div className={s.contacts__contactsData}><ContactsData /></div>
                <div className={s.contacts__map}><Map /></div>
            </Container>
            <div className={s.contacts__otherContacts}><Container><OtherContacts /></Container></div>
        </div>
    </>
  )
}

export default Contacts