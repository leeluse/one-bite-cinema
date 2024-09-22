import { MovieData } from "@/types";

export default async function fetchDetailMovie(id: number)
: Promise<MovieData | null> {
    const url = `https://onebite-cinema-api-main-jade.vercel.app/movie/${id}`
    
    const res = await fetch(url);

    try {
        if(!res.ok) {
            throw new Error();
        }
        return res.json();

    } catch (err) {
        console.error(err);
        return null;     
    }
}