import { MovieData } from "@/types";

export default async function fetchRecoMovie(): Promise<MovieData[]> {
    const url = `https://onebite-cinema-api-main-jade.vercel.app/movie/random`

    const res = await fetch(url);
    try {
        if(!res.ok) {
            throw new Error;
        }
        return await res.json();

    } catch (err) {
        console.error(err);
        return [];
    }
}