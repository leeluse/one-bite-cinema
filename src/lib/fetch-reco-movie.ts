import { MovieData } from "@/types";

export default async function fetchRecoMoive(): Promise<MovieData[]> {
    const url = `http://localhost:12345/movie/random`;
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