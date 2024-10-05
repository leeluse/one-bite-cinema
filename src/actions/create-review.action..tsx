"use server"

import { delay } from "@/app/util/delay";
import { revalidateTag } from "next/cache";

 // 서버 측에서 동작을 처리

export default async function createReview (_:any, formData: FormData) {
    const author = formData.get("author");
    const content = formData.get("content");
    const movieId = formData.get("movieId");

    if(!author || !content || !movieId) {
      return {
        status: false,
        error: "작성자가 존재하지 않습니다"
      }
    }

    try {
      await delay(3000);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,{
        method: "POST",
        body: JSON.stringify({movieId, author, content})
        }
      )
      if(!res.ok) {
        throw new Error(`리뷰 삭제 실패! ${res.statusText}`)
      }
      console.log("전송 완료:", res.statusText);
      revalidateTag(`review-${movieId}`)
      // 성공 시
      return {
          status: true,
          error: ""
      }
    } catch (error) {
      return {
        status: false,
        error: `리뷰 저장에 실패 ${error}`
      }
    }
  }