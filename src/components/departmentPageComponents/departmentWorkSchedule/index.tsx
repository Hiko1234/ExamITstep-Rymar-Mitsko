import React from 'react'
// import styles
import s from "./DepartmentWorkSchedule.module.scss"
// import components
import CardDoctors from '@/components/card/cardDoctors'
// import img
import Image from 'next/image'
import hover from "../../../assets/img/departmentPage/department1.png"

const DepartmentWorkSchedule = (props: any) => {
    const { work } = props;
    const { image, name, lastName, fatherName, specialty, workSchedule, office } = work;

    return (
        <>
            <div className={s.departmentWork}>
                <div className={s.departmentWork__office}>{office}</div>
                <div className={s.departmentWork__specialty}>{specialty}</div>
                <div className={s.departmentWork__name}>
                    <Image className={s.departmentWork__name_img} src={hover} alt={lastName} width={14} height={14} />
                    <span>{lastName} {name[0]}. {fatherName[0]}.</span>
                    <div className={s.departmentWork__name_hover}>
                        <CardDoctors data={work} />
                    </div>
                </div>
                <div className={s.departmentWork__schedule}>{workSchedule.monday}</div>
                <div className={s.departmentWork__schedule}>{workSchedule.tuesday}</div>
                <div className={s.departmentWork__schedule}>{workSchedule.wednesday}</div>
                <div className={s.departmentWork__schedule}>{workSchedule.thursday}</div>
                <div className={s.departmentWork__schedule}>{workSchedule.friday}</div>
            </div>
        </>
    )
}

export default DepartmentWorkSchedule