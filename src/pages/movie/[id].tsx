import style from './[id].module.css';
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchDetailMovie from "@/lib/fetch-detail-movie";
import { useRouter } from 'next/router';
import fetchMoive from '@/lib/fetch-movie';


export const getStaticPaths = async () => {
    const movies = await fetchMoive();
    return {
        paths: movies.map((movie) => {
            return {params: {id: movie.id.toString() } };
        }),
        fallback: true,
    }
}


export const getStaticProps = async (context: GetStaticPropsContext) => {
    const id = context.params!.id;
    const detailMovie =  await fetchDetailMovie(Number(id));

    if(!detailMovie) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            detailMovie
        }
    }
}

export default function Page({detailMovie}
    :InferGetStaticPropsType<GetStaticProps>) {
        const router = useRouter();

    if(router.isFallback) return "로딩 중입니다";

    const {
        title,
        subTitle,
        description,
        releaseDate,
        company,
        genres,
        runtime,
        posterImgUrl
    } = detailMovie;

    return (
    <div className={style.container}>
        <div
            className={style.img_container}
            style={{backgroundImage: `url('${posterImgUrl}')`}}>
            <img src={posterImgUrl} alt="img" />
        </div>
        <h2 className={style.title} >{title}</h2>
        <div >{releaseDate} / {genres} / {runtime}분</div>
        <div>{company}</div>
        <strong>{subTitle}</strong>
        <div className={style.description}>{description}</div>
    </div>
    )
}   