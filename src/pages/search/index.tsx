import MovieItem from "@/components/movie-item";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import style from './index.module.css';
import fetchMoive from "@/lib/fetch-movie";
import { useRouter } from "next/router";
import { MovieData } from "@/types";

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//     const q = context.query.q;
//     const searchMovie = await fetchMoive(q as string);
//     return {
//         props: {
//             searchMovie
//         }
//     }
// }

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
        <div className={style.container}>
            {searchMovie
            .map((movie) => (<MovieItem key={movie.id} {...movie}/>))}
        </div>
    )
}



Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
  }