import MovieItem from "@/components/movie-item";
import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import movies from '@/mock/mock.json';
import style from './index.module.css';



export default function Page() {
    const router = useRouter();
    const q = router.query.q as string;
    return (
        <div className={style.container}>
            {movies.filter((v) => v.title.includes(q))
            .map((movie) => (<MovieItem key={movie.id} {...movie}/>))}
        </div>
    )
}



Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
  }