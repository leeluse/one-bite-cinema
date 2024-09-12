import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/test");
  }, [])

  const onClickButton = () => {
    router.push("/test");
  }  

  return (
    <>
    <header>
      <Link href={"/"}>&nbsp;root</Link>
      <Link href={"/search"}>&nbsp;search</Link>
      <Link href={"/book/1"}>&nbsp;book</Link>
      <div>
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
    </header>
    <Component {...pageProps} />
    </>
  )
}


