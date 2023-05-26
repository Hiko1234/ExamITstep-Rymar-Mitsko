import React from 'react';
// import styles
import s from './Collective.module.scss';
// import link
import Link from 'next/link';
// import img
import Image from 'next/image';
import doctor1 from "../../data/doctors/dataImg/doctor1.jpg"
import doctor2 from "../../data/doctors/dataImg/doctor2.jpg"
import doctor3 from "../../data/doctors/dataImg/doctor3.jpg"

const Collective = () => {
    return (
        <>
            <div className={s.collective}>
                <div className={s.collective__data}>
                    <h4 className={s.collective__data_title}>Колектив</h4>
                    <p className={s.collective__data_subtext}>Це команда висококваліфікованих професіоналів</p>
                    <Link className={s.collective__data_link} href="/doctors">До списку лікарів</Link>
                </div>
                <div className={s.collective__doctorsImg}>
                    <div className={s.collective__doctorsImg_box}>
                        <Image className={s.collective__doctorsImg_img} src={doctor1} alt="Doctor" width={126} height={126}/>
                        <Image className={s.collective__doctorsImg_img} src={doctor2} alt="Doctor" width={126} height={126}/>
                        <Image className={s.collective__doctorsImg_img} src={doctor3} alt="Doctor" width={126} height={126}/>
                    </div>
                    <div className={s.collective__doctorsImg_box}>
                        <Image className={s.collective__doctorsImg_img} src={doctor1} alt="Doctor" width={126} height={126}/>
                        <Image className={s.collective__doctorsImg_img} src={doctor2} alt="Doctor" width={126} height={126}/>
                        <Image className={s.collective__doctorsImg_img} src={doctor3} alt="Doctor" width={126} height={126}/>
                    </div>
                    <div className={s.collective__doctorsImg_box}>
                        <Image className={s.collective__doctorsImg_img} src={doctor1} alt="Doctor" width={126} height={126}/>
                        <Image className={s.collective__doctorsImg_img} src={doctor2} alt="Doctor" width={126} height={126}/>
                        <Image className={s.collective__doctorsImg_img} src={doctor3} alt="Doctor" width={126} height={126}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collective;
