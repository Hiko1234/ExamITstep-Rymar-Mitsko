import React, { useState } from 'react'
// import styles
import s from "../DepartmentPage.module.scss"
// import components
import Container from '@/components/container'
import DepartmentTitle from '@/components/departmentPageComponents/departmentTitle'
import DepartmentInfo from '@/components/departmentPageComponents/departmentInfo'
import DepartmentWorkSchedule from '@/components/departmentPageComponents/departmentWorkSchedule'
import DepartmentWorkScheduleHeader from '@/components/departmentPageComponents/departmentWorkScheduleHeader'
import CardDoctors from '@/components/card/cardDoctors'
// import data
import dataDoctors from '@/data/doctors'
// import img
import department2 from "../../../assets/img/departmentPage/department2.png"
import managerDepartment from "../../../data/doctors/dataImg/doctor3.jpg"

// title page 
const title = [
  { img: department2, title: "Кабінет Трансфузіології", number: "7-05-62" },
];

// tabs page
const tabs = [
  { text: "Інформація", toggle: 1 },
  { text: "Лікарі", toggle: 2 },
  { text: "Графік роботи", toggle: 3 },
];

// department info
const info = [
  {
    image: managerDepartment,
    name: "Лудин Василь Іванович",
    manager: "завідувач",
    specialty: "Лікар - хірург (вища категорія)",
    info: "Поліклінічне  відділення  КНП  «Стрийська  ЦРЛ»  надає  амбулаторну  спеціалізовану  медичну  допомогу  дорослому  населенню  Стрийської  ОТГ  м.Стрий,  сільське  населення,     Моршинської  ОТГ,  Грабовецько - Дулібської  ОТГ, сусідніх  об’єднаних  територіальних  громад  населення,  а  також  кожному    громадянину  України  що звернеться  за  медичною  допомогою.   У  2020 році  КНП  «Стрийська  ЦРЛ»,  отримала  статус  лікарні  інтенсивного  лікування,    тому  територія  та  чисельність  населення  значно  збільшилась.  Потужність  поліклінічного  відділення  КНП  «Стрийська  ЦРЛ»  становить  600  відвідувань у  зміну.   Поліклінічне  відділення  працює у  дві  зміни.Приміщення  розташоване  на  четвертому  поверсі  поліклінічного  корпусу.Поліклінічне  відділення  КНП  «Стрийська  ЦРЛ»  надає  такі  медичні  послуги: Консультація  пацієнтів; Проведення  діагностики  захворювань; Амбулаторне  лікування  пацієнтів; Спостереження  за  пацієнтами  в  динаміці; Визначення  показань  та  направлення  пацієнтів  на  стаціонарне  лікування; Лікувально- профілактична  робота.",
  },
];

const KabinetTransfuziologiyi = () => {
  const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState(dataDoctors);
  const [doctorsDepartment, setDoctorsDepartment] = useState(getDoctorsByDepartment(data));

  function getDoctorsByDepartment(data: any) {
    const targetDoctors = data.filter((el: any) => {
      if (el.department == "Кабінет Трансфузіології") {
        return el
      }
    })
    return targetDoctors
  }

  return (
    <>
      <div className={s.departmentPage}>
        <div className={s.departmentPage__wrapper}>
          <Container>
            {title.map((title) => (
              <DepartmentTitle titlePage={title} />
            ))}
            <div className={s.departmentPage__tabs}>
              {tabs.map((tab) => (
                <button className={toggleState === tab.toggle ? `${s.departmentTab} ${s.departmentTabActive}` : `${s.departmentTab}`} onClick={() => {
                  setToggleState(tab.toggle);
                }}>{tab.text}</button>
              ))}
            </div>
            <div className={toggleState === 1 ? `${s.dBlock}` : `${s.dNone}`}>{info.map((info) => (
              <DepartmentInfo information={info} />)
            )}</div>
            <div className={toggleState === 2 ? `${s.dBlock}` : `${s.dNone}`}>
              {doctorsDepartment.length > 0 ? (
                <div className={s.departmentPage__doctorsCards}>
                  {doctorsDepartment.map((doctor: any) => (
                    <CardDoctors data={doctor} />
                  ))}
                </div>
              ) : <p className={s.departmentPage__doctorsError}>Лікарів не знайдено</p>}
            </div>
            <div className={toggleState === 3 ? `${s.dBlock}` : `${s.dNone}`}>
              <div className={s.departmentPage__workSchedule}>
                <DepartmentWorkScheduleHeader />
                {doctorsDepartment.length > 0 ? (
                  <>
                    {doctorsDepartment.map((doctor: any) => (
                      <DepartmentWorkSchedule work={doctor} />
                    ))}
                  </>
                ) : <p className={s.departmentPage__doctorsError}>Графік лікарів не знайдено</p>}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default KabinetTransfuziologiyi