import React from 'react'
// import styles
import s from "./DepartmentWorkScheduleHeader.module.scss"

const DepartmentWorkScheduleHeader = () => {
    return (
        <>
            <div className={s.departmentWorkScheduleHeader}>
                <div className={s.departmentWorkScheduleHeader__office}>Кабінет</div>
                <div className={s.departmentWorkScheduleHeader__specialty}>Спеціальність лікаря</div>
                <div className={s.departmentWorkScheduleHeader__name}>П.І.П. лікаря</div>
                <div className={s.departmentWorkScheduleHeader__workSchedule}>
                    <div className={s.departmentWorkScheduleHeader__workSchedule_title}>Графіки роботи</div>
                    <div className={s.departmentWorkScheduleHeader__workSchedule_days}>
                        <div className={s.departmentWorkScheduleHeader__workSchedule_day}>Понеділок</div>
                        <div className={s.departmentWorkScheduleHeader__workSchedule_day}>Вівторок</div>
                        <div className={s.departmentWorkScheduleHeader__workSchedule_day}>Середа</div>
                        <div className={s.departmentWorkScheduleHeader__workSchedule_day}>Четверг</div>
                        <div className={s.departmentWorkScheduleHeader__workSchedule_day}>П'ятниця</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepartmentWorkScheduleHeader