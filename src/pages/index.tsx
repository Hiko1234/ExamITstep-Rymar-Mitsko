import React, { useState } from "react";
// import styles
import s from "@/styles/Home.module.scss";
// import components
import Container from "@/components/container";
import Partnership from "@/components/homePage/partnership";
import Collective from "@/components/homePage/collective";
import HomeNav from "@/components/homePage/navigation";
import Slider from "@/components/homePage/slider";
import NewsComponent from "@/components/news";

export default function Home() {

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

        <div className={s.home__news}>
          <Container>
            <NewsComponent />
          </Container>
        </div>

        <div className={s.home__collective}>
          <div className={s.home__collective_bg}></div>
          <Container>
            <Collective />
          </Container>
        </div>

        <div className={s.home__partnership}>
          <Container>
            <Partnership />
          </Container>
        </div>
      </div>
    </>
  );
}
