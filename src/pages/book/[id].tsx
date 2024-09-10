import { useRouter } from "next/router"

export default function Page() {
    const router = useRouter();
    const {id} = router.query;
    return <h3>{id} 영화 상세 페이지</h3>
}   