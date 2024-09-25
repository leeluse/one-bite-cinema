import MovieItems from "@/components/movie-item";
import style from "./page.module.css";
import movies from '@/mock/mock.json';

export default function Home() {
  return (
    <div className={style.container}>
    <h3>지금 가장 추천하는 영화</h3>
    <section className={style.recom_movie_container }>
      {movies.slice(0, 3).map((movie) => (<MovieItems key={movie.id} {...movie}/>))}
    </section>
    <h3>등록된 모든 영화</h3>
    <section className={style.all_movie_container }>
      {movies.map((movie) => (<MovieItems key={movie.id} {...movie}/>))}
    </section>
  </div>
  );
}
