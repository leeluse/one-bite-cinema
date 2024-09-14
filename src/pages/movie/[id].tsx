import { useRouter } from "next/router"
import movies from '@/mock/mock.json';
import style from './[id].module.css';

export default function Page() {
    const router = useRouter();
    const qid = router.query.id as string;
    const movieDetail = movies.filter((movie) => movie.id == parseInt(qid));
    const [{
        id,
        title,
        subTitle,
        description,
        releaseDate,
        company,
        genres,
        runtime,
        posterImgUrl
    }] = movieDetail;
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