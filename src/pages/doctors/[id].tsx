import React, { useState, useEffect } from 'react'
// import styles
import s from "./Doctors.module.scss"
// import img
import Image from 'next/image';
// import components
import Container from '@/components/container';
import dataDoctors from "@/data/doctors"
import CardDoctors from '@/components/card/cardDoctors'
// import router
import { useRouter } from "next/router";
// import link
import Link from 'next/link';

const SingleDoctors = () => {
  // Отримання id з router.query
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(dataDoctors);
  const [dataSpecialty, setDataSpecialty] = useState(dataDoctors)
  const [doctor, setDoctor] = useState(getObjectById(id));
  const [doctorSpecialty, setDoctorSpecialty] = useState(getDoctorBySpecialty(doctor));

  // Функція для отримання об'єкта за ідентифікатором
  function getObjectById(id: any) {
    const targetDoctor = data.filter((el) => {
      if (el.id == id) {
        return el
      }
    })
    return targetDoctor[0]
  }
  // Функція для отримання лікарів певної спеціальності
  function getDoctorBySpecialty(doctor: any) {
    const targetDoctors = dataSpecialty.filter((el) => {
      if (el.specialty == doctor.specialty) {
        return el
      }
    })
    return targetDoctors
  }

  useEffect(() => {
    getObjectById(id);
    getDoctorBySpecialty(doctor);
  }, []);

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
              <Link className={s.singleDoctor__dataDepartament} href={`/department${doctor?.pathDepartment}`}>
                  <div className={s.singleDoctor__dataDepartament_imgWrapper}>
                    <Image className={s.singleDoctor__dataDepartament_img} src={doctor?.departamentImg} alt={doctor?.department} width={32} height={32} />
                  </div>
                  <p className={s.singleDoctor__dataDepartament_name}>{doctor?.department}</p>
                </Link>
                <div className={s.singleDoctor__card_info}><span className={s.singleDoctor__card_infoTitle}>Кабінет: </span><span className={s.singleDoctor__card_infoData}>{doctor?.office}</span></div>
                <div className={s.singleDoctor__card_info}><span className={s.singleDoctor__card_infoTitle}>Категорія: </span><span className={s.singleDoctor__card_infoData}>{doctor?.category}</span></div>
                <div className={s.singleDoctor__card_info}><span className={s.singleDoctor__card_infoTitle}>Освіта: </span><span className={s.singleDoctor__card_infoData}>{doctor?.education}</span></div>
                <div className={s.singleDoctor__card_info}><span className={s.singleDoctor__card_infoTitle}>Стаж: </span><span className={s.singleDoctor__card_infoData}>{doctor?.experience}</span></div>
              </div>
            </div>
            <h4 className={s.singleDoctor__specialtyTitle}>Лікарі цієї ж спеціалізації</h4>
            <div className={s.doctors__cards}>
              {doctorSpecialty.map((data) => (
                <>
                  <CardDoctors data={data} />
                </>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default SingleDoctors