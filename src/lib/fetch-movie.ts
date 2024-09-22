import { MovieData } from "@/types";

export default async function fetchMovie(q?: string): Promise<MovieData[]> {
    let url = `https://onebite-cinema-api-main-jade.vercel.app/movie`
    if(q) {
        url += `/search?q=${q}`;
   }
    const res = await fetch(url);
    try {
        if(!res.ok) {
            throw new Error;
        }
        return res.json();
        
    } catch (err) {
        console.error(err);
        return [];
    }
}