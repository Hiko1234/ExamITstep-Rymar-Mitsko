import React from 'react';
//import styles
import s from './workSchedule.module.scss';
//import components
import Container from '@/components/container';
import CardDepartmentSmall from '@/components/card/cardDepartmentSmall';

const workSchedule = () => {
    return (
        <>
            <div className={s.workSchedule}>
                <Container>
                    <div className={s.workSchedule__wrapper}>
                        <div className={s.workSchedule__title}>
                            <h1 className={s.workSchedule__title_text}>
                                Графік роботи
                            </h1>

                            <h2 className={s.workSchedule__title_subTitle}>
                                Графік прийому громадян адміністрацією КНП Стрийська ЦРП
                            </h2>
                        </div>

                        <div className={s.workSchedule__info}>
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            Кабінет
                                        </td>

                                        <td>
                                            Займана посада
                                        </td>

                                        <td>
                                            П.І.П
                                        </td>

                                        <td>
                                            Дата прийому
                                        </td>

                                        <td>
                                            Години Прийому
                                        </td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            120
                                        </td>

                                        <td>
                                            директор
                                        </td>

                                        <td>
                                            Ігнатов О.І
                                        </td>

                                        <td>
                                            Понеділок<br />
                                            Четвер
                                        </td>

                                        <td>
                                            13:00-14:00
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            401
                                        </td>

                                        <td>
                                            нарколог
                                        </td>

                                        <td>
                                            Лучків Б.Д
                                        </td>

                                        <td>
                                            3-я і 4-а середа місяця
                                        </td>

                                        <td>
                                            10:00-14:00
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            401
                                        </td>

                                        <td>
                                            нарколог
                                        </td>

                                        <td>
                                            Стасів Н.Б
                                        </td>

                                        <td>
                                            2-й і 4-й четвер місяця
                                        </td>

                                        <td>
                                            10:00-14:00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={s.workSchedule__otherDepartment}>
                            <h4 className={s.workSchedule__otherDepartment_title}>Графік прийому інших відділень:</h4>
                            <div className={s.workSchedule__otherDepartment_cards}>
                                <CardDepartmentSmall />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default workSchedule;
