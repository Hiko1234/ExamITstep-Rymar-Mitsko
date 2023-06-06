import React from 'react'
// import styles
import s from "./DepartmentInfo.module.scss"
// import img
import Image from 'next/image';

const DepartmentInfo = (props: any) => {
    const { information } = props;
    const { image, name, manager, specialty, info } = information;
    return (
        <>
            <div className={s.departmentInfo}>
                <div className={s.departmentInfo__personManager}>
                    <Image className={s.departmentInfo__img} src={image} alt={name} width={174} height={167} />
                    <div className={s.departmentInfo__data}>
                        <h4 className={s.departmentInfo__data_name}>{name}</h4>
                        <p className={s.departmentInfo__data_manager}>{manager}</p>
                        <p className={s.departmentInfo__data_specialty}>{specialty}</p>
                    </div>
                </div>
                <p className={s.departmentInfo__info}>{info}</p>
            </div>
        </>
    )
}

export default DepartmentInfo