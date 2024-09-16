import style from './[id].module.css';
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchDetailMovie from "@/lib/fetch-detail-movie";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.params!.id;
    const detailMovie =  await fetchDetailMovie(Number(id));

    console.log(detailMovie);
    return {
        props: {
            detailMovie
        }
    }
}

export default function Page({detailMovie}
    :InferGetServerSidePropsType<GetServerSideProps>) {
    if(!detailMovie) return "존재히지 않는 정보입니다";

    const {
        id,
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