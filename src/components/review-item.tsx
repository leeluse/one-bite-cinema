import { ReviewData } from "@/types";
import style from './review-item.module.css';
import ReviewDeleteBtn from "./review-delete-btn";
export default function ReviewItem({
    id,
    content,
    author,
    createdAt,
    movieId
}: ReviewData) {
 
    return (
    <div className={style.container}>
        <div className={style.header_container}>
        <div className={style.author}>🎥 {author}</div>
        <div className={style.date}>{new Date(createdAt).toDateString()}</div>
        </div>
        <div className={style.content}>{content}</div>
        <div className={style.delete_btn}>
            <ReviewDeleteBtn reviewId={id} movieId={movieId} />
        </div>
    </div>
    )
}