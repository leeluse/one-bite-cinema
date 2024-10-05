'use client'

import deleteReview from "@/actions/delete-review.action";
import { useActionState, useEffect, useRef } from "react"

export default function ReviewDeleteBtn({
    reviewId,
    movieId
}: {reviewId: number, movieId: number}) {
    const [state, formAction, isPending] = useActionState(
        deleteReview,
        null
    )
    const btnRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if(state && state.status) {
            alert(state.error)
        }
    }, [state])
    

    return (
        <form ref={btnRef} action={formAction}>
            <input name="reviewId" value={reviewId} hidden />
            <input  name="movieId" value={movieId} hidden />
            {isPending ? (<div>...</div>):
            (
            <div onClick={() => 
                btnRef.current?.requestSubmit()}>
            ✖︎ 리뷰 삭제하기</div>
            )}
        </form>
    )
}