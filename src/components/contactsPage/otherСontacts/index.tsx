import React from 'react'
// import styles
import s from "./OtherContacts.module.scss"
// import link
import Link from 'next/link'

const block1 = [
    { title: "Приймальня директора", text: "діловод Семетківська Ірина Ярославівна", office: 120, number: "7-09-14" },
    { title: "Інформаційно - аналітичний відділ", text: "завідувач Самокішин Руслана Романівна", office: 112, number: "7-10-39" },
    { title: "Відділ кадрів", text: "завідувач Гавриляк Олександра Василівна", office: 106, number: "7-02-10" },
];

const block2 = [
    { title: "Юрисконсульт", text: "Попович Євгенія Володимирівна", office: "каб. 111,", number: "" },
    { title: "Бухгалтерія", text: "головний бухгалтер Скаб’як Стефанія Микитівна", office: "каб. 111,", number: "7-13-32" },
    { title: "Реєстратура поліклінічного відділення", text: "", office: "", number: "7-08-67" },
];

const block3 = [
    { title: "Реєстратура дитячої консультації", number: "7-03-02" },
    { title: "Реєстратура стоматологічного відділення", number: "7-03-02" },
    { title: "Приймальне відділення", number: "7-05-62" },
];

const OtherContacts = () => {
    return (
        <>
            <div className={s.otherContacts}>
                <h4 className={s.otherContacts__title}>Інші контакти</h4>
                <div className={s.otherContacts__body}>
                    <div className={s.otherContacts__info}>
                        {block1.map((block) => (
                            <div className={s.otherContacts__block}>
                                <h6 className={s.otherContacts__block_title}>{block.title}</h6>
                                <p className={s.otherContacts__block_subtext}>{block.text}</p>
                                <p className={s.otherContacts__block_subtext}>(каб. №{block.office}, тел. <Link className={s.otherContacts__block_link} href={`tel: ${block.number}`}>{block.number}</Link>)</p>
                            </div>
                        ))}
                    </div>
                    <div className={s.otherContacts__info}>
                        {block2.map((block) => (
                            <div className={s.otherContacts__block}>
                                <h6 className={s.otherContacts__block_title}>{block.title}</h6>
                                <p className={s.otherContacts__block_subtext}>{block.text}</p>
                                <p className={s.otherContacts__block_subtext}>({block.office} <Link className={s.otherContacts__block_link} href={`tel: ${block.number}`}>{block.number}</Link>)</p>
                            </div>
                        ))}
                    </div>
                    <div className={s.otherContacts__info}>
                        {block3.map((block) => (
                            <div className={s.otherContacts__block}>
                                <h6 className={s.otherContacts__block_title}>{block.title}</h6>
                                <Link className={s.otherContacts__block_link} href={`tel: ${block.number}`}>тел. {block.number}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherContacts