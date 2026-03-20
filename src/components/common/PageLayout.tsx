import type { ReactNode } from "react"
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
    children: ReactNode;
    variant?: "default" | "detail";
}

const Content = styled.main<{$variant: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 851px;
  margin: auto;
  padding-bottom: 5%;

  padding: ${({ $variant }) =>
  $variant === "default" ? "5%" : "0.5rem 0"};

`;

export const PageLayout = ({children, variant = "default"} : PageLayoutProps) => {
    return (
      <>
        <Header />
        <Content $variant={variant}>
            {children}
        </Content>
        <Footer/>
      </>
    );
}