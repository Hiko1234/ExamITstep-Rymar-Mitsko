import React from 'react'
// import styles
import s from "./Request.module.scss"
// import components
import Container from '@/components/container'

const Request = () => {
    return (
        <>
            <div className={s.request}>
                <Container>
                    <h1>Request</h1>
                </Container>
            </div>
        </>
    )
}

export default Request