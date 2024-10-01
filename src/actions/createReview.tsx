"use server" // 서버 측에서 동작을 처리

export default async function createReview (formData: FormData) {
    const author = formData.get("author");
    const content = formData.get("content");
    const movieId = formData.get("movieId");

    if(!author || !content || !movieId) {
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,{
        method: "POST",
        body: JSON.stringify({movieId, author, content})
        }
      )
      console.log("전송 완료:", res.statusText);
    } catch (error) {
      console.error(error);
    }
  }