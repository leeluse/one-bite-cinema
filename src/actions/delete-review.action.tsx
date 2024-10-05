'use server'

import { revalidateTag } from "next/cache";

export default async function deleteReview(_: any, formData:FormData) {
    const movieId = formData.get("movieId")?.toString();
    const reviewId = formData.get("reviewId")?.toString();

    if(!reviewId) {
        return {
            status: false,
            error: '삭제할 리뷰가 없습니다'
        }
    }
    try {
        const res = await fetch (
          `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`, {
              method: "DELETE"
          });
          if(!res.ok) {
              throw new Error(res.statusText);
          }
          revalidateTag(`review-${movieId}`)
          return {
              status: true,
              error: ''
          }
      } catch (error) {
          return {
              status: false,
              error: "리뷰 삭제 실패"
          }
      }
}