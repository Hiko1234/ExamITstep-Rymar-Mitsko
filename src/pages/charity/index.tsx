import React from 'react';
//import styles
import s from './Charity.module.scss';
//import components
import Container from '@/components/container';

const Charity = () => {
    return (
        <>
            <div className={s.charity}>
                <Container>
                    <div className={s.charity__wrapper}>
                        <div className={s.charity__title}>
                            <h1 className={s.charity__title_text}>
                                Благодійний рахунок КНП “Стрийська ЦРЛ”
                            </h1>
                        </div>

                        <div className={s.charity__details}>
                            <div className={s.charity__details_title}>
                                Реквізити  для  перерахунку  коштів на  благодійність:
                            </div>

                            <div className={s.charity__details_info}>
                                <div className={s.charity__details_info_title}>
                                    У  гривнях:
                                </div>

                                <p className={s.charity__details_info_text}>
                                    ЗГРУ АТ КБ “ПРИВАТБАНК”<br />
                                    р/р UА 193052990000026008011000748<br />
                                    ЄДРПОУ 13802089
                                </p>

                                <div className={s.charity__details_info_title}>
                                    У доларах:
                                </div>

                                <p className={s.charity__details_info_text}>
                                    АТ КБ “ПРИВАТБАНК”<br/>
                                    р/р UA443052990000026003031022529<br/>
                                    ЄДРПОУ 14360570<br/>
                                    код  банку 305299
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Charity;
