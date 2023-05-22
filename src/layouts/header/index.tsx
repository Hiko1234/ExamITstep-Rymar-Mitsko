import React from "react";
// import styles
import s from "./Header.module.scss";
// import components
import Container from "@/components/container";
import Contacts from "./contacts";
import Nav from "./navigation";
import Burger from "./burger";
import Logo from "./logo";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.header__wrapper}>
          <Container>
            <div className={s.header__body}>
              <div className={s.header__logo}>
                <Logo />
              </div>
              <nav className={s.header__nav}>
                <Contacts />
                <Nav />
                <Burger />
              </nav>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
