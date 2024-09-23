import { ReactNode } from "react";

export default function Home({ children }: {
    children: ReactNode
}) {
  return (
    <div>
      Search Layout
      {children}
    </div>
  );
}
