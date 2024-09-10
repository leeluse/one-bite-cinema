import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // 기존의 index.html의 역할을 하는 컴포넌트
  // 메타 태그, 폰트, 서드파티 스크립트 등의
  // 페이저 전체에 해당하는 HTML
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
