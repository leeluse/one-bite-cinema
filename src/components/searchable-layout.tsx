import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from './searchable-layout.module.css';

export default function SearchableLayout({children,}: {
    children: ReactNode;
}) {
    const [search, setSearch] = useState("");
    const router = useRouter()

    const q = router.query.q as string;

    useEffect(() => {
        setSearch(q || "");
    }, [q]);


    const onchangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onSubmit = () => {
        if(!search || q === search) return;
        router.push(`/search?q=${search}`);
    };

    const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            onSubmit();
        }
    }

    return (
        <div>
            <div className={style.search_container}>
                <input 
                    value={search}
                    onChange={onchangeSearch}
                    onKeyDown={onKeydown}
                    placeholder="검색어를 입력하세요..." />
                <button onClick={onSubmit}>검색</button>
            </div>
            <div>{children}</div>
        </div>
    )
}