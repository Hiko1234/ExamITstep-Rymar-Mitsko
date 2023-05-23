import React from 'react'
// import styles
import s from "./CardDoctors.module.scss"
// import link
import Link from 'next/link'
// import img
import Image from 'next/image'

const CardDoctors = (props: any) => {
    const { data } = props;
    const { id, name, lastName, image, specialty } = data;

    return (
        <>
            <div className={s.cardDoctors}>
                <Link className={s.cardDoctors__link} href={`/doctors/${id}`}>
                    <div className={s.cardDoctors__imgWrapper}>
                        <Image className={s.cardDoctors__img} src={image} alt={lastName} width={286} height={267} />
                        <div className={s.cardDoctors__hover}></div>
                    </div>
                    <div className={s.cardDoctors__data}>
                        <p className={s.cardDoctors__data_name}>{`${lastName} ${name}`}</p>
                        <p className={s.cardDoctors__data_specialty}>{specialty}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardDoctors