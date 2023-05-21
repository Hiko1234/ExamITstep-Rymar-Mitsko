import React from "react";
// import Link
import Link from "next/link";
// import styles
import s from "./Footer.module.scss";
//import components
import Container from "@/components/container";
//import Image
import Image from 'next/image';
//Logo
import logo from '../../assets/img/footerLogo.png';
//Social
import facebook from '../../assets/img/facebook.png';
import telegram from '../../assets/img/telegram.png';


const Footer = () => {
  const date = new Date();

  return (
    <>
      <footer className={s.footer}>
        <Container>
          <div className={s.footer__block}>
            <div className={s.footer__block_logo}>
              <Link href="/">
                <Image
                  src={logo}
                  width={181}
                  height={78}
                  alt="Logo"
                />
              </Link>
            </div>

            <div className={s.footer__block_nav}>
              <div className={s.footer__block_nav_info}>
                <Link href="#" className={s.footer__block_nav_info_link}>
                  Підрозділи
                </Link>

                <Link href="#" className={s.footer__block_nav_info_link}>
                  Графік роботи
                </Link>

                <Link href="#" className={s.footer__block_nav_info_link}>
                  Декларації з лікарем
                </Link>

                <Link href="#" className={s.footer__block_nav_info_link}>
                  Доступні ліки
                </Link>

                <Link href="#" className={s.footer__block_nav_info_link}>
                  Про поліклініку
                </Link>
              </div>

              <div className={s.footer__block_nav_info}>
                <Link href="#" className={s.footer__block_nav_info_link}>
                  Публічні закупівлі
                </Link>

                <Link href="#" className={s.footer__block_nav_info_link}>
                  Профспілка медичних<br />
                  працівників
                </Link>

                <Link href="#" className={s.footer__block_nav_info_link}>
                  Міські цільові соціальні<br />
                  програми
                </Link>
              </div>

              <div className={s.footer__block_nav_social}>
                <h3 style={{ color: '#fff' }}>
                  Тримайте руку на пульсі
                </h3>
                <p style={{ color: '#fff', fontWeight: '500', fontSize: '16' }}>
                  слідкуйте за оновленнями<br />
                  в соц. мережах
                </p>

                <div className={s.footer__block_nav_social_link}>
                  <Link href='#'>
                    <Image
                      src={facebook}
                      width={32}
                      height={32}
                      alt="Facebook"
                    />
                  </Link>

                  <Link href='#'>
                    <Image
                      src={telegram}
                      width={32}
                      height={32}
                      alt="Telegram"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={s.footer__copyright}>
            <p className={s.footer__copyright_info}>
              © {date.getFullYear()} комунального некомерційного підприємства Стрийської міської ради<br />
              Використання матеріалів сайту дозволяється лише з посиланням на джерело
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
