//  css module 사용해야 한다
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import fetchMovie from "@/lib/fetch-movie";
import fetchRecoMovie from "@/lib/fetch-reco-movie";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
export const getStaticProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovie(),
    fetchRecoMovie()
  ]);
  return {
    props: {
      allMovies,
      recoMovies
    },
    revalidate: 5,
  }
}


export default function Home({
  allMovies,
  recoMovies
}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (
    <>
    <Head>
    <title>한 입 시네마</title>
    <meta property="og:image" content="/thumbnail.png" />
    <meta property="og:title" content="한입시네마" />
    <meta property="og:description" content="한입시네마" />
    </Head>
     <div className={style.container}>
      <h3>지금 가장 추천하는 영화</h3>
      <section className={style.recom_movie_container }>
        {recoMovies.map((movie) => (<MovieItem key={movie.id} {...movie}/>))}
      </section>
      <h3>등록된 모든 영화</h3>
      <section className={style.all_movie_container }>
        {allMovies.map((movie) => (<MovieItem key={movie.id} {...movie}/>))}
      </section>
    </div>
    </>
  )
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
