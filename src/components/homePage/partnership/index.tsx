import React from 'react';
// import styles
import s from './Partnership.module.scss';
// import link
import Link from 'next/link';
// import img
import Image from 'next/image';
import eLiku from '../../../assets/img/partnership/eLiku.png';
import askep from '../../../assets/img/partnership/askep.png';
import nszu from '../../../assets/img/partnership/nszu.png';
import moz from '../../../assets/img/partnership/moz.png';

const Partnership = () => {
    return (
        <>
            <div className={s.partnershipBlock}>
                <div className={s.partnershipBlock__title}>
                    <h4>
                        В ПАРТНЕРСТВІ З
                    </h4>
                </div>

                <div className={s.partnershipBlock__partners}>
                    <Link href='https://eliky.in.ua/' target="_blank">
                        <Image
                            src={eLiku}
                            width={125}
                            height={45}
                            alt="eЛіки"
                        />
                    </Link>

                    <Link href='https://askep.net/' target="_blank">
                        <Image
                            src={askep}
                            width={100}
                            height={40}
                            alt="Askep"
                        />
                    </Link>

                    <Link href='https://nszu.gov.ua/' target="_blank">
                        <Image
                            src={nszu}
                            width={208}
                            height={41}
                            alt="Askep"
                        />
                    </Link>

                    <Link href='https://moz.gov.ua/' target="_blank">
                        <Image
                            src={moz}
                            width={70}
                            height={43}
                            alt="Askep"
                        />
                    </Link>

                    <Link target="_blank" style={{
                        textDecoration: 'none',
                        color: '#000'
                    }}
                        href='https://loda.gov.ua/structural-unit/17099?categoryId=9607'>
                        <p style={{
                            margin: '0',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '11px',
                        }}>
                            ДЕПАРТАМЕНТ ОХОРОНИ ЗДОРОВ'Я<br />
                            ЛЬВІВСЬКОЇ ОБЛАСНОЇ ДЕРЖАВНОЇ<br />
                            АДМІНІСТРАЦІЇ
                        </p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Partnership;
