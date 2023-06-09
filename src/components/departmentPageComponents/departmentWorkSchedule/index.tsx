import React, { useState } from 'react'
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
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div className={s.departmentWork}>
                <div className={s.departmentWork__office}>{office}</div>
                <div className={s.departmentWork__specialty}>{specialty}</div>
                <div className={s.departmentWork__name}>
                    <div
                        className={s.hoverBtn}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image className={s.hoverBtn__image} src={hover} alt={lastName} width={14} height={14} />
                    </div>
                    <span className={s.departmentWork__text}>{lastName} {name[0]}. {fatherName[0]}.</span>
                    {isHovered && (
                        <div className={s.hoverEffect}>
                            <CardDoctors data={work} />
                        </div>
                    )}
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