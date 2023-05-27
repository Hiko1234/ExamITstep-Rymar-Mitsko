import "@/styles/globals.scss";
//import swiper styles
import 'swiper/css';
//--------------------
import type { AppProps } from "next/app";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//import layouts
import Layouts from "@/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}
