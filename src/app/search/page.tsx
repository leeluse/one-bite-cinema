export default function Page({searchParams}:
    {searchParams: {q?: string}}
) {
    return (
    <>
        <div>서치</div>
        <div>{searchParams?.q}</div>
    </>
    )
}