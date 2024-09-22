import style from './[id].module.css';
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchDetailMovie from "@/lib/fetch-detail-movie";
import { useRouter } from 'next/router';
import fetchMovie from '@/lib/fetch-movie';
import Head from 'next/head';

export const getStaticPaths = async () => {
    const movies = await fetchMovie(); 

    return {
        paths: movies.map((movie) => {
            return { params: { id: movie.id.toString() } };
        }),
        fallback: true,
    };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const id = context.params!.id;
    const detailMovie = await fetchDetailMovie(Number(id));

    if (!detailMovie) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            detailMovie,
        },
    };
};

export default function Page(
  { detailMovie }: InferGetStaticPropsType<typeof getStaticProps> // 타입 수정
) {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <>
            <Head>
                <title>한 입 시네마</title>
                <meta property="og:image" content="/thumbnail.png" />
                <meta property="og:title" content="한입시네마" />
                <meta property="og:description" content="한입시네마" />
            </Head>
            <div>로딩 중...</div>
            </>
        )
    };

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

        <>
        <Head>
            <title>{title}</title>
            <meta property="og:image" content={posterImgUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
        </Head>
            <div className={style.container}>
            <div
                className={style.img_container}
                style={{ backgroundImage: `url('${posterImgUrl}')` }}>
                <img src={posterImgUrl} alt="img" />
            </div>
            <h2 className={style.title}>{title}</h2>
            <div>{releaseDate} / {genres} / {runtime}분</div>
            <div>{company}</div>
            <strong>{subTitle}</strong>
            <div className={style.description}>{description}</div>
            </div>
        </>
       
    );
}
