import React from 'react'
// import styles
import s from "./Department.module.scss"
// import components
import Container from '@/components/container'
import CardDepartment from '@/components/card/cardDepartment'

const Department = () => {
  return (
    <>
      <div className={s.department}>
        <div className={s.department__wrapper}>
          <Container>
            <h1 className={s.department__title}>Відділення</h1>
            <div className={s.department__links}>
              <CardDepartment />
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default Department