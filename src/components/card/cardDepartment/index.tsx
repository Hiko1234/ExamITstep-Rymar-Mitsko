import React from 'react'
// import styles
import s from "./CardDepartment.module.scss"
// import link
import Link from 'next/link' 
// import img 
import Image from 'next/image'
import phone from "../../../assets/img/departmentPage/phone.png"
import department1 from "../../../assets/img/departmentPage/department1.png"
import department2 from "../../../assets/img/departmentPage/department2.png"
import department3 from "../../../assets/img/departmentPage/department3.png"
import department4 from "../../../assets/img/departmentPage/department4.png"
import department5 from "../../../assets/img/departmentPage/department5.png"
import department6 from "../../../assets/img/departmentPage/department6.png"
import department7 from "../../../assets/img/departmentPage/department7.png"
import department8 from "../../../assets/img/departmentPage/department8.png"
import department9 from "../../../assets/img/departmentPage/department9.png"
import department10 from "../../../assets/img/departmentPage/department10.png"
import department11 from "../../../assets/img/departmentPage/department11.png"
import department12 from "../../../assets/img/departmentPage/department12.png"
import department13 from "../../../assets/img/departmentPage/department13.png"
import department14 from "../../../assets/img/departmentPage/department14.png"
import department15 from "../../../assets/img/departmentPage/department15.png"
import department16 from "../../../assets/img/departmentPage/department16.png"
import department17 from "../../../assets/img/departmentPage/department17.png"
import department18 from "../../../assets/img/departmentPage/department18.png"
import department19 from "../../../assets/img/departmentPage/department19.png"
import department20 from "../../../assets/img/departmentPage/department20.png"

const dataDepartment = [
    { text: "Інформаційно – аналітичний відділ", image: department1, number: "7-05-62", path: "/informaczijno-analitychnyj-viddil"},
    { text: "Кабінет Трансфузіології", image: department2, number: "7-05-62", path: "/kabinet-transfuziologiyi" },
    { text: "Реабілітаційне відділення", image: department3, number: "7-05-62", path: "/reabilitaczijne" },
    { text: "Педіатричне відділення", image: department4, number: "7-05-62", path: "/pediatrychne" },
    { text: "Діагностичне відділення", image: department5, number: "7-05-62", path: "/diagnostychne" },
    { text: "Стрийська АЗПСМ", image: department6, number: "7-05-62", path: "/" },
    { text: "Клініко-діагностична  лабораторія", image: department7, number: "7-05-62", path: "/kliniko-diagnostychna-laboratoriya" },
    { text: "Стоматологічне  відділення", image: department8, number: "7-05-62", path: "/stomatologichne-viddilennya" },
    { text: "Дитяча  консультація з денним  стаціонаром", image: department9, number: "7-05-62", path: "/dytyacha-konsultacziya-z-dennym-staczionarom" },
    { text: "Відділення  медичних  оглядів", image: department10, number: "7-05-62", path: "/viddilennya-medychnyh-oglyadiv" },
    { text: "Відділення  невідкладної  (екстреної)  медичної  допомоги", image: department11, number: "7-05-62", path: "/viddilennya-nevidkladnoyi-ekstrenoyi-medychnoyi-dopomogy" },
    { text: "Поліклінічне  відділення", image: department12, number: "7-05-62", path: "/poliklinichne-viddilennya" },
    { text: "Травматологічне  відділення", image: department13, number: "7-05-62", path: "/travmatologichne-viddilennya" },
    { text: "Урологічне  відділення", image: department14, number: "7-05-62", path: "/urologichne-viddilennya" },
    { text: "Терапевтичне  відділення", image: department15, number: "7-05-62", path: "/terapevtychne-viddilennya" },
    { text: "Неврологічне  відділення з  інсультним блоком", image: department16, number: "7-05-62", path: "/nevrologichne-viddilennya" },
    { text: "Педіатричне відділення", image: department17, number: "7-05-62", path: "/dytyache-viddilennya" },
    { text: "Хірургічне  відділення з  операційним  блоком", image: department18, number: "7-05-62", path: "/hirurgichne-viddilennya-z-operaczijnym-blokom" },
    { text: "Відділення  анестезіології  та  інтенсивної терапії", image: department19, number: "7-05-62", path: "/anesteziologichne-viddilennya-z-lizhkamy-dlya-intensyvnoyi-terapiyi" },
    { text: "Відділення  невідкладної  (екстреної)  медичної  допомоги", image: department20, number: "7-05-62", path: "/viddilennya-nevidkladnoyi-ekstrenoyi-medychnoyi-dopomogy" },
];

const CardDepartment = () => {
  return (
    <>
        {dataDepartment.map((card)=>(
            <Link className={s.cardDepartment} href={`/department${card.path}`}>
                <div className={s.cardDepartment__imgWrapper}>
                    <Image className={s.cardDepartment__img} src={card.image} alt={card.text} width={100} height={100}/>
                </div>
                <div className={s.cardDepartment__data}>
                    <div className={s.cardDepartment__data_title}>{card.text}</div>
                    <div className={s.cardDepartment__data_contacts}><Image className={s.cardDepartment__data_contactsImg} src={phone} alt="Phone number" width={16} height={16}/><span className={s.cardDepartment__data_contactsNumber}>{card.number}</span></div>
                </div>
            </Link>
        ))}
    </>
  )
}

export default CardDepartment