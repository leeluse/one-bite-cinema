import createReview from '@/actions/createReview';
import style from './review-editor.module.css';

// 서버 액션을 사용하기 위한 비동기 함수 생성
export default function ReviewEditor({movieId}: {movieId:string}) {
    return (
      <div className={style.container}>
        <form className={style.form_container} action={createReview}> 
            <input name="movieId" value={movieId} hidden readOnly />
            <textarea required name="content" placeholder="후기를 작성하세요" />
            <div className={style.submit_container}>
            <input required name="author" placeholder="작성자"/> 
            <button type="submit">작성</button>
            </div>
        </form>
      </div>
    )
  }
  