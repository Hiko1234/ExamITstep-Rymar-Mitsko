import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
// layouts
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
