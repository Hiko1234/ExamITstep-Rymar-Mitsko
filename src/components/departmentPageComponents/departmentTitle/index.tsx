import React from 'react'
// import styles
import s from "./DepartmentTitle.module.scss"
// import img
import Image from 'next/image';
import phone from "../../../assets/img/departmentPage/phone.png"
//import Link
import Link from 'next/link';

const DepartmentTitle = (props: any) => {
    const { titlePage } = props;
    const { img, title, number } = titlePage;

    return (
        <>
            <div className={s.departmentPage__titleWrapper}>
                <div className={s.departmentPage__imgWrapper}>
                    <Image className={s.departmentPage__img} src={img} alt={title} width={71} height={74} />
                </div>
                <div className={s.departmentPage__data}>
                    <h1 className={s.departmentPage__data_title}>{title}</h1>
                    <Link className={s.departmentPage__data_link} href='tel:7-05-65'>
                    <div className={s.departmentPage__data_contacts}><Image className={s.cardDepartment__data_contactsImg} src={phone} alt="Phone number" width={16} height={16} /><span className={s.cardDepartment__data_contactsNumber}>{number}</span></div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DepartmentTitle