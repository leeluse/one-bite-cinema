import { MovieData } from "@/types";
import style from "./page.module.css";


export default async function Page({
  params,
}: {
  params: { id: string | string[] };
}) {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${params.id}`,
    // 업데이트가 필요하지 않기 때문에 cache에 저장
    { cache: "force-cache" }
    );
    if(!res.ok) {
        return <div>요청에 실패하였습니다</div>
    }
    const detailMovies: MovieData = await res.json();

    const {
      id,
      title,
      releaseDate,
      company,
      genres,
      subTitle,
      description,
      runtime,
      posterImgUrl
    } = detailMovies;

  return (
    <>
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
