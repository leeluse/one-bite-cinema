'use client'

import createReview from '@/actions/create-review.action.';
import style from './review-editor.module.css';
import { useActionState, useEffect } from 'react';

// 서버 액션을 사용하기 위한 비동기 함수 생성
export default function ReviewEditor({movieId}: {movieId:string}) {
  const [state, formAction, isPending] = useActionState(
    createReview,
    null
  )
  useEffect(() => {
    if(state && !state.status) {
      alert(state.error);
    }
  }, [state])
  

    return (
      <div className={style.container}>
        <form className={style.form_container} action={formAction}> 
            <input name="movieId" value={movieId} hidden readOnly />
            <textarea disabled={isPending} required name="content" placeholder="후기를 작성하세요" />
            <div className={style.submit_container}>
            <input disabled={isPending} required name="author" placeholder="작성자"/> 
            <button disabled={isPending} type="submit">
              {isPending ? '...' : '작성'}
              </button>
            </div>
        </form>
      </div>
    )
  }
  