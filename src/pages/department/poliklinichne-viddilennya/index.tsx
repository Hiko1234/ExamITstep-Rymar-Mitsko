import React from 'react'
// import styles
import s from "../DepartmentPage.module.scss"
// import components
import Container from '@/components/container'
// import img
import Image from 'next/image'
import phone from "../../../assets/img/departmentPage/phone.png"
import department11 from "../../../assets/img/departmentPage/department11.png"

const poliklinichneViddilennya = () => {
  return (
    <>
      <div className={s.departmentPage}>
        <div className={s.departmentPage__wrapper}>
          <Container>
            <div className={s.departmentPage__titleWrapper}>
              <div className={s.departmentPage__imgWrapper}>
                <Image className={s.departmentPage__img} src={department11} alt="Поліклінічне відділення" width={71} height={74} />
              </div>
              <div className={s.departmentPage__data}>
                <h1 className={s.departmentPage__data_title}>Поліклінічне відділення</h1>
                <div className={s.departmentPage__data_contacts}><Image className={s.cardDepartment__data_contactsImg} src={phone} alt="Phone number" width={16} height={16} /><span className={s.cardDepartment__data_contactsNumber}>7-05-62</span></div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default poliklinichneViddilennya