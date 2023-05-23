import React, { useState, useEffect } from 'react'
// import styles
import s from "./Doctors.module.scss"
// import components
import Container from '@/components/container'
import dataDoctors from "@/components/data/doctors"
import CardDoctors from '@/components/card/cardDoctors'

const Doctors = () => {
  const [data, setData] = useState(dataDoctors);

  return (
    <>
      <div className={s.doctors}>
        <Container>
          <h1 className={s.doctors__title}>Наші лікарі</h1>
          <div className={s.doctors__cards}>
            {data.map((data) => (
              <>
                <CardDoctors data={data} />
              </>
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Doctors