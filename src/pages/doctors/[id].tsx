import React, { useState, useEffect } from 'react'
// import styles
import s from "./Doctors.module.scss"
// import img
import Image from 'next/image';
// import components
import Container from '@/components/container';
import dataDoctors from "@/components/data/doctors"
import CardDoctors from '@/components/card/cardDoctors'
// import router
import { useRouter } from "next/router";

const SingleDoctors = () => {
  // Отримання id з router.query
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(dataDoctors);
  const [doctor, setDoctor] = useState(getObjectById(id));

  // Функція для отримання об'єкта за ідентифікатором
  function getObjectById(id: any) {
    const targetDoctor = data.filter((el) => {
      if (el.id == id) {
        return el
      }
    })
    return targetDoctor[0]
  }

  useEffect(() => {
    getObjectById(id)
  }, [])

  return (
    <>
      <div className={s.singleDoctor}>
        <div className={s.singleDoctor__wrapper}>
          <Container>
            <div className={s.singleDoctor__card}>
              <Image className={s.singleDoctor__card_img} src={doctor?.image} alt={doctor?.lastName} width={354} height={375} />
              <div className={s.singleDoctor__card_data}>
                <h4 className={s.singleDoctor__card_dataName}>{doctor?.lastName} {doctor?.name} {doctor?.fatherName}</h4>
                <p className={s.singleDoctor__card_dataSpecialty}>{doctor?.specialty}</p>
                <div className={s.singleDoctor__dataDepartament}>
                  <div className={s.singleDoctor__dataDepartament_imgWrapper}>
                    <Image className={s.singleDoctor__dataDepartament_img} src={doctor?.departamentImg} alt={doctor?.department} width={32} height={32} />
                  </div>
                  <p className={s.singleDoctor__dataDepartament_name}>{doctor?.department}</p>
                </div>
                <div className={s.singleDoctor__card_info}><span className={s.singleDoctor__card_infoTitle}>Кабінет: </span><span className={s.singleDoctor__card_infoData}>{doctor?.office}</span></div>
                <div className={s.singleDoctor__card_info}><span className={s.singleDoctor__card_infoTitle}>Категорія: </span><span className={s.singleDoctor__card_infoData}>{doctor?.category}</span></div>
                <div className={s.singleDoctor__card_info}><span className={s.singleDoctor__card_infoTitle}>Освіта: </span><span className={s.singleDoctor__card_infoData}>{doctor?.education}</span></div>
                <div className={s.singleDoctor__card_info}><span className={s.singleDoctor__card_infoTitle}>Стаж: </span><span className={s.singleDoctor__card_infoData}>{doctor?.experience}</span></div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default SingleDoctors