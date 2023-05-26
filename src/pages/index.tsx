import React, { useState } from "react";
// import styles
import s from "@/styles/Home.module.scss";
// import components
import Container from "@/components/container";
import Partnership from "@/components/homePage/partnership";
import Collective from "@/components/homePage/collective";
import HomeNav from "@/components/homePage/navigation";
import Slider from "@/components/homePage/slider";
import dataDoctors from "@/components/data/doctors";

import Image from "next/image";

export default function Home() {
  const [data, setData] = useState(dataDoctors);

  return (
    <>
      <div className={s.home}>
        <div className={s.home__navInfo}>
          <Container>
            <div className={s.home__navInfo_inner}>
              <HomeNav />
              <Slider />
            </div>
          </Container>
        </div>
        <Container>
          <div className={s.home__collective}>
            <Collective />
          </div>
          <div className={s.home__partnership}>
            <Partnership />
          </div>
        </Container>
      </div>
    </>
  );
}
