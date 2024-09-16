import MovieItem from "@/components/movie-item";
import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import movies from '@/mock/mock.json';
import style from './index.module.css';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchMoive from "@/lib/fetch-movie";


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const q = context.query.q;
    const searchMovie = await fetchMoive(q as string);
    return {
        props: {
            searchMovie
        }
    }
}

export default function Page({searchMovie}
    :InferGetServerSidePropsType<typeof getServerSideProps>) {
        console.log(searchMovie);
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