import React from 'react';
//import styles
import s from './Paid.module.scss';
//import components
import Container from '@/components/container';

const data = [
    { title: "Оздоровчі масажі та фізіотерапевтичні процедури", text1: 'Масаж', price1: 100, text2: 'Фізіотерапевтичні процедури', price2: 300 },
    { title: "Медичні огляди та видача бланків особистої медичної книжки", text1: 'Масаж', price1: 100, text2: 'Фізіотерапевтичні процедури', price2: 300 },
    { title: "Рентгенологія та комп’ютерна томографія ", text1: 'Масаж', price1: 100, text2: 'Фізіотерапевтичні процедури', price2: 300 },
    { title: "Функціональна діагностика та УЗД", text1: 'Масаж', price1: 100, text2: 'Фізіотерапевтичні процедури', price2: 300 },
];

const Paid = () => {
    return (
        <>
            <div className={s.paid}>
                <div className={s.paid__wrapper}>
                    <Container>
                        <h1 className={s.paid__title}>
                            Платні послуги
                        </h1>
                        <p className={s.paid__subTitle}>
                            В нашій лікарні ви можете отримати платні послуги,
                            які ви можете перегоянути нижче
                        </p>
                        {data.map((data) => (
                            <div className={s.paid__info}>

                                <div className={s.paid__info_table}>
                                    <div className={s.paid__info_table_title}>
                                        <p style={{
                                            margin: '0',
                                            padding: '20px'
                                        }}>
                                            {data.title}
                                        </p>
                                    </div>

                                    <div className={s.paid__info_table_info}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td style={{
                                                        color: '#007E60',
                                                        borderLeft: '0px'
                                                    }}>
                                                        Назва послуги
                                                    </td>
                                                    <td style={{
                                                        color: '#007E60'
                                                    }}>
                                                        Ціна, грн
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{
                                                        borderLeft: '0px'
                                                    }}>
                                                        {data.text1}
                                                    </td>
                                                    <td>
                                                        {data.price1}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{
                                                        borderLeft: '0px'
                                                    }}>
                                                        {data.text2}
                                                    </td>
                                                    <td>
                                                        {data.price2}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Paid;
