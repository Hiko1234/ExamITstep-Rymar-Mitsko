import React from "react";
// import styles
import s from "@/styles/Home.module.scss";
// import components
import Container from "@/components/container";
import Partnership from "@/components/homePage/partnership";
import HomeNav from "@/components/homePage/navigation";
import Slider from "@/components/homePage/slider";

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
      </div>
    </>
  );
}
