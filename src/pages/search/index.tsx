import MovieItem from "@/components/movie-item";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import style from './index.module.css';
import fetchMoive from "@/lib/fetch-movie";
import { useRouter } from "next/router";
import { MovieData } from "@/types";
import Head from "next/head";


export default function Page() {
    const router = useRouter();
    const q = router.query.q;
    const [searchMovie, setSearchMovie] = useState<MovieData[]>([]);
    

    const fetchSearchMovie = async () => {
        const data = await fetchMoive(q as string);
        setSearchMovie(data);
    }
   
    useEffect(() => {
        if(q) {
            fetchSearchMovie();
        }
    }, [q])


    return (

        <>
        <Head>
            <title>한 입 시네마 - 검색 결과</title>
            <meta property="og:image" content="/thumbnail.png" />
            <meta property="og:title" content="한 입 시네마 - 검색 결과" />
            <meta property="og:description" content="한입 시네마에 등록된 영화들을 만나보세요" />
        </Head>
        <div className={style.container}>
            {searchMovie
            .map((movie) => (<MovieItem key={movie.id} {...movie}/>))}
        </div>
        </>
        
    )
}



Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
  }