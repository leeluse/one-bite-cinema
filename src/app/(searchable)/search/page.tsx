import MovieItems from '@/components/movie-item';
import style from './page.module.css';
import { MovieData } from '@/types';
import { delay } from '@/app/util/delay';


export default async function Page({searchParams}:
    {searchParams: {q?: string}}
) {
    const q = searchParams?.q as string;
    await delay(1500);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie?q=${q}`,
        { cache: "force-cache" }
    );

    if(!res.ok) {
        return <div>요청에 실패하였습니다</div>
    }
    const movies: MovieData[] = await res.json();
      
    return (
    <>
    <div className = {style.container}>
        {movies.filter((movie) => movie.title.includes(q)).map((movie) => ( 
        <MovieItems key={movie.id} {...movie} />
        ))}
    </div>
    </>
    )
}


