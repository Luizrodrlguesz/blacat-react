import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/news";
import "../styles/global.scss";

const authRoutes = ["/signin", "/signup", "/forgot-password", "/code-confirm"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideHeaderAndFooter = authRoutes.includes(router.pathname);

  return (
    <>
      {!hideHeaderAndFooter && <News />}
      {!hideHeaderAndFooter && <Header />}
      <Component {...pageProps} />
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
}
