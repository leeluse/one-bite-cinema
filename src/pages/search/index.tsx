import { useRouter } from "next/router";


export default function Page() {
    const router = useRouter();
    const {q} = router.query;
    return <h3>검색 결과: {q}</h3>
    
}