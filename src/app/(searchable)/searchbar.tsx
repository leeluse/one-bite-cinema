'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"

export default function Searchbar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const q = searchParams.get('q');

    const [search, setSearch] = useState("");

    useEffect(() => {
      setSearch(q || "");
    }, [q]);
    

    const setSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        // 라우팅 기능
        if(!search || q === search) return;
        router.push(`/search?q=${search}`);
    }
    const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Enter 검색 기능
        if(e.key == "Enter") {
            onSubmit();
        }
    }
    
    return (
        <>
        <input
            value={search}
            onChange={setSearchChange}
            onKeyDown={onKeydown}
            placeholder="검색어를 입력하세요..."
         />
        <button 
            onClick={onSubmit}
            >검색</button>
        </>
    )
}