import React from "react";
// import link
import Link from "next/link";
// import styles
import s from "./Header.module.scss";
// import components
import Container from "@/components/container";
import Contacts from "./contacts";
// import img
import Image from "next/image";
import logo from "../../assets/img/headerLogo.png"

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.header__wrapper}>
          <Container>
            <div className={s.header__body}>
              <Link href="/" className={s.header__logo}>
                <Image className={s.header__logo_img} src={logo} alt="Logo" width={181} height={78} />
              </Link>
              <nav className={s.header__nav}>
                <Contacts />
              </nav>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
