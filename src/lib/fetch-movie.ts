import { MovieData } from "@/types";

export default async function fetchMoive(q?: string): Promise<MovieData[]> {
    let url = `http://localhost:12345/movie`;
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