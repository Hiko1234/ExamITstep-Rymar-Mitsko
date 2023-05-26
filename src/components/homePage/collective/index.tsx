import React from 'react';
//import styles
import s from './Collective.module.scss';
//components
import Container from '@/components/container';

const Collective = () => {
    return (
        <>
            <div className={s.collective}>
                <Container>
                    <div className={s.collective__body}>
                        <div className={s.collective__body_info}>
                            <h1 className={s.collective__body_info_title}>
                                Колектив
                            </h1>

                            <p className={s.collective__body_info_text}>
                                Це команда висококваліфікованих<br />
                                професіоналів
                            </p>

                            <button className={s.collective__body_info_btn}>
                                <p className={s.collective__body_info_btn_text}>
                                    до списку лікарів
                                </p>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Collective;
