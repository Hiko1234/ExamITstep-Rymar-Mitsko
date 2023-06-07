import "@/styles/globals.scss";
//import swiper styles
import 'swiper/css';
//--------------------
import type { AppProps } from "next/app";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//import layouts
import Layouts from "@/layouts";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layouts>
        <Head>
          <title>Стриська центральна районна лікарня</title>
        </Head>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}
