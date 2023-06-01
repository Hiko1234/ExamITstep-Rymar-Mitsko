import React from 'react'
// import styles
import s from "../../request/Request.module.scss"
// import components
import Container from '@/components/container'
import RequestItem from '@/components/request'

const rateWorkChistotu = () => {
    return (
        <>
            <div className={s.request}>
                <div className={s.request__wrapper}>
                    <Container>
                        <h1 className={s.request__title}>Як Ви оцінюєте чистоту в нашому закладі?</h1>
                        <div className={s.request__form}>
                            <RequestItem />
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default rateWorkChistotu 