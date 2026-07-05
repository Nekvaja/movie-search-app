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
  align-items: stretch;
  flex-grow: 1;
  flex-shrink: 0;

  padding: ${({ $variant }) =>
  $variant === "default" ? "3rem 1.5rem" : "0.5rem 1.5rem"};

    @media (max-width: 400px) {
      padding: ${({ $variant }) =>
      $variant === "default" ? "2rem 1rem" : "0 1rem"};
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  flex: 1;
  min-height: 100%;
`;

export const PageLayout = ({children, variant = "default"} : PageLayoutProps) => {
    return (
      <>
        <Header />
        <Content $variant={variant}>
          <Inner>
            {children}
          </Inner>
        </Content>
        <Footer/>
      </>
    );
}