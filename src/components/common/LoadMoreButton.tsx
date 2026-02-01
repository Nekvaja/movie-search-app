import styled from "styled-components";

const Button = styled.button`
    width: 80%;
    max-width: 500px;
    border: none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.textSecondary};
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1rem;
    cursor: pointer;

    &:hover,
    &:focus-visible {
        background-color: ${({theme}) => theme.colors.hoverPrimary};
    }
`;

export const LoadMoreButton = () => {
    return (
        <Button>Load more</Button>
    )
}