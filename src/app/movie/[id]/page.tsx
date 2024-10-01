import { MovieData, ReviewData } from "@/types";
import style from "./page.module.css";
import { notFound } from "next/navigation";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor/review-editor";

// 무비 페이지의 디테일
async function MovieDetail({movieId}: {movieId: string}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`,
    // 업데이트가 필요하지 않기 때문에 cache에 저장
    { cache: "force-cache" }
    );
    if(!res.ok) {
       return notFound(); // 에러 페이지 이동
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


async function ReviewList ({movieId}: {movieId: string}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`);
  if(!res.ok) {
    throw new Error(`리뷰 읽어오기 실패: ${res.statusText}`);
  }
  const reviews: ReviewData[] = await res.json();

  return (
    reviews.map((review) => (
      <ReviewItem key={`review-item-${review.id}`} {...review}/>)
    )
  )
}


export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <MovieDetail movieId={params.id} />
      <ReviewEditor movieId={params.id}/>
      <ReviewList movieId={params.id}/>
    </>
  )
}
