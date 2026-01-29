import type { ReactNode } from "react"
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
    children: ReactNode;
}

const Content = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 851px;
`;

export const PageLayout = ({children} : PageLayoutProps) => {
    return (
      <>
        <Header />
        <Content>
            {children}
        </Content>
        <Footer/>
      </>
    );
}