import MovieItems from "@/components/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/types";


async function AllMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
      // 업데이트가 필요하지 않기 때문에 cache에 저장
      { cache: "force-cache" }
  );
  if(!res.ok) {
      return <div>요청에 실패하였습니다</div>
  }
  const allMovies: MovieData[] = await res.json();
  return (
    <section className={style.all_movie_container }>
    {allMovies.map((movie) => (<MovieItems key={movie.id} {...movie}/>))}
  </section>
  )
}


async function RecoMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
      // random하게 movie를 보여 주도록 revalidate 설정
      { next: {revalidate: 3}}
  );
  if(!res.ok) {
      return <div>요청에 실패하였습니다</div>
  }
  const recoMovies: MovieData[] = await res.json();
  return (
    <section className={style.recom_movie_container }>
      {recoMovies.slice(0, 3).map((movie) => (<MovieItems key={movie.id} {...movie}/>))}
    </section>
  )
}



export default function Home() {
  return (
    <div className={style.container}>
    <h3>지금 가장 추천하는 영화</h3>
    <RecoMovies />
    <h3>등록된 모든 영화</h3>
    <AllMovies />

  </div>
  );
}
