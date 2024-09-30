import MovieItems from '@/components/movie-item';
import style from './page.module.css';
import { MovieData } from '@/types';
import { delay } from '@/app/util/delay';
import { Suspense } from 'react';
import MovieListSkeleton from '@/components/skeleton/movie-list-skeleton';

async function SearchResult({q}:{q:string}) {
    await delay(4500);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie?q=${q}`,
        { cache: "force-cache" }
    );

    if(!res.ok) {
        return <div>요청에 실패하였습니다</div>
    }
    const movies: MovieData[] = await res.json();
      
    return (
    <>
        {movies.filter((movie) => movie.title.includes(q)).map((movie) => ( 
        <MovieItems key={movie.id} {...movie} />
        ))}
    </>
    )
    
}

export default async function Page({searchParams}:
    {searchParams: {q?: string}}
) {
    return (
        <div className = {style.container}>
            <Suspense 
            key={searchParams.q || ''} 
            fallback={<MovieListSkeleton count={3} />}>
            <SearchResult q={searchParams.q || ''}/>
            </Suspense>
        </div>
      )
}


