//  css module 사용해야 한다
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import movies from '@/mock/mock.json';
import MovieItem from "@/components/movie-item";

export default function Home() {
  return (
    <div className={style.container}>
      <h3>지금 가장 추천하는 영화</h3>
      <section className={style.recom_movie_container }>
        {movies.slice(0, 3).map((movie) => (<MovieItem key={movie.id} {...movie}/>))}
      </section>
      <h3>등록된 모든 영화</h3>
      <section className={style.all_movie_container }>
        {movies.map((movie) => (<MovieItem key={movie.id} {...movie}/>))}
      </section>
    </div>
  )
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
