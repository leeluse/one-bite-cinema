import { MovieData } from "@/types";

export default async function fetchDetailMovie(id: number)
: Promise<MovieData | null> {
    console.log(id)
    const url = `http://localhost:12345/movie/${id}`
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