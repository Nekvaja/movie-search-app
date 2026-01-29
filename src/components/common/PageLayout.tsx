import type { ReactNode } from "react"
import { Header } from "./Header";

interface PageLayoutProps {
    children: ReactNode;
}

export const PageLayout = ({children} : PageLayoutProps) => {
    return (
      <>
        <Header />
        <div>{children}</div>
      </>
    );
}