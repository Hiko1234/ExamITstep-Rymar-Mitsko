import React, { useState } from 'react'
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
  const [data, setData] = useState(dataDoctors);

  // Отримання id з router.query
  const router = useRouter();
  const { id } = router.query;

  // Функція для отримання об'єкта за ідентифікатором
  function getObjectById(id: any) {
    return data.find(obj => obj.id === parseInt(id, 10));
  }

  const object = getObjectById(id);
  console.log(object?.image);

  return (
    <>
      <div className={s.singleDoctor}>
        <Container>
          <div className={s.singleDoctor__card}>
            <Image className={s.singleDoctor__card_img} src={`/${object?.image}`} alt={`${object?.lastName}`} width={354} height={375}/>

          </div>
        </Container>
      </div>
    </>
  )
}

export default SingleDoctors