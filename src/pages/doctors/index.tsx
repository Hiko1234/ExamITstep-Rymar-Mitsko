import React, { useState, useMemo } from 'react'
// import styles
import s from "./Doctors.module.scss"
// import components
import Container from '@/components/container'
import dataDoctors from "@/components/data/doctors"
import CardDoctors from '@/components/card/cardDoctors'
// import img
import Image from 'next/image'
import searchImg from "../../assets/img/doctorsPage/search.png"
import notFoundImg from "../../assets/img/doctorsPage/notFound.svg"

const departments = [
  { text: "Відділення  невідкладної  (екстреної)  медичної  допомоги", department: "Відділення  невідкладної  (екстреної)  медичної  допомоги" },
  { text: "Поліклінічне відділення", department: "Поліклінічне відділення" },
]

const Doctors = () => {
  const [data, setData] = useState(dataDoctors);
  const [initialData, setInitialData] = useState(dataDoctors);
  const [search, setSearch] = useState("");

  // set actual departament
  function setActualData(department: any) {
    if (department == "Всі") {
      setData(dataDoctors);
    } else {
      const result = initialData.filter((curData) => curData.department === department);
      setData(result);
    }
  }

  // input search
  const searchDoctors = useMemo(() => {
    return data.filter((doctor) => {
      const fullName = `${doctor.lastName} ${doctor.name} ${doctor.specialty}`.toLowerCase()
      return fullName.includes(search.toLowerCase());
    });
  }, [search, data]);

  return (
    <>
      <div className={s.doctors}>
        <Container>
          <h1 className={s.doctors__title}>Наші лікарі</h1>
          <div className={s.doctors__search}>
            <fieldset className={s.doctors__fieldset}>
              <select className={s.doctors__fieldset_select} onChange={(e) => {
                setActualData(e.target.value);
              }}>
                <option className={s.doctors__fieldset_option} value={"Всі"}>
                  Оберіть відділення
                </option>
                {departments.map((department) => (
                  <option className={s.doctors__fieldset_option} value={department.department}>
                    {department.text}
                  </option>
                ))}
              </select>
            </fieldset>
            <form className={s.doctors__form}>
              <div className={s.doctors__form_img}><Image className={s.doctors__form_imgSearch} src={searchImg} alt="Search" width={25} height={25} /></div>
              <input className={s.doctors__form_input} type="text" placeholder="Пошук за іменем, прізвищем чи спеціальністю" onChange={(e) => {
                setSearch(e.target.value);
              }} />
            </form>
          </div>
          <div className={s.doctors__declaration}>
            <div className={s.doctors__declaration_active}><span></span></div>
            <p className={s.doctors__declaration_text}>Всі</p>
          </div>
          <div className={s.doctors__cards}>
            {searchDoctors.length > 0 ? (
              <>
                {searchDoctors.map((data) => (
                  <>
                    <CardDoctors data={data} />
                  </>
                ))}
              </>
            ) : (
              <div className={s.doctors__notFound}>
                <p className={s.doctors__notFound_text}>За обраними критеріями нікого не знайдено.</p>
                <p className={s.doctors__notFound_text}>Спробуйте іншу комбінацію пошуку</p>
                <Image className={s.doctors__notFound_img} src={notFoundImg} alt="Not found" width={300} height={162}/>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Doctors