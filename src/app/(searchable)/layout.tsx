import Searchbar from "@/components/searchbar";
import { ReactNode } from "react";

export default function Home({ children }: {
    children: ReactNode
}) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
