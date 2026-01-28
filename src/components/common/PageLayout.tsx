import type { ReactNode } from "react"

interface PageLayoutProps {
    children: ReactNode;
}

export const PageLayout = ({children} : PageLayoutProps) => {
    return (
        <div>
             {children}
        </div>
       
    )
}