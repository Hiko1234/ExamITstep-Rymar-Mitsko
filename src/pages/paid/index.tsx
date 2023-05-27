import React from 'react';
//import styles
import s from './Paid.module.scss';
//import components
import Container from '@/components/container';

const data = [
    {text: 'Масаж', price: 100},
    {text: 'Фізіотерапевтичні процедури', price: 300}
];

const Paid = () => {
    return (
        <>
            <div className={s.paid}>
                <Container>
                    <div className={s.paid__info}>
                        <h1 className={s.paid__info_title}>
                            Платні послуги
                        </h1>

                        <p className={s.paid__info_subTitle}>
                            В нашій лікарні ви можете отримати платні послуги,<br />
                            які ви можете перегоянути нижче
                        </p>

                        <div className={s.paid__info_table}>
                            <div className={s.paid__info_table_title}>
                                <p style={{
                                    margin: '0',
                                    padding: '20px'
                                }}>
                                    Оздоровчі масажі та фізіотерапевтичні процедури
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
                                                Масаж
                                            </td>
                                            <td>
                                                100
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{
                                                borderLeft: '0px'
                                            }}>
                                                Фізіотерапевтичні процедури
                                            </td>
                                            <td>
                                                300
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Paid;
