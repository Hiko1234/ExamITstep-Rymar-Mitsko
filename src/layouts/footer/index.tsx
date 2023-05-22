import React from "react";
// import link
import Link from "next/link";
// import styles
import s from "./Footer.module.scss";
// import components
import Container from "@/components/container";
import Logo from "./logo";
import Nav from "./navigation";
import Social from "./social";
import Copyright from "./copyright";

const Footer = () => {

  return (
    <>
      <div className={s.footer}>
        <Container>
          <div className={s.footer__body}>
            <div className={s.footer__logo}>
              <Logo />
            </div>
            <nav className={s.footer__nav}>
              <Nav />
              <Social />
            </nav>
          </div>
          <Copyright />
        </Container>
      </div>
    </>
  );
};

export default Footer;
