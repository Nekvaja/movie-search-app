import type { ReactNode } from "react";
import styled from "styled-components"

interface StateMessageProps {
    children: ReactNode,
}

const MessageWrapper = styled.div`
    margin: 2rem;
`;

export const StateMessage = ({children} : StateMessageProps) => {
    return (
        <MessageWrapper>
             <p>{children}</p>
        </MessageWrapper>
       
    )
}