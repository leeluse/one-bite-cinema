import MovieItems from '@/components/movie-item';
import movies from '@/mock/mock.json';
import style from './page.module.css';


export default function Page({searchParams}:
    {searchParams: {q?: string}}
) {
    const q = searchParams?.q as string;

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


