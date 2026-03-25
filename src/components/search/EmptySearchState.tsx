import styled from "styled-components";
import { MovieIcon } from "./MovieIcon";

const EmptySearchStateWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeadingRow = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
`;

const Title = styled.h2`
    margin: 0;
`;

const Subtitle = styled.p`
    margin-top: 1.5rem;
`;

const TagsWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const TagButton = styled.button`
    position: relative;
    font-size: 1rem;
    border: none;
    border-radius: 50px;
    padding: 0.5rem 1.5rem;
    background: linear-gradient(
    135deg,
    #f3d5c0,
    #e8bfa7
  );
`;




export const EmptySearchState = () => {
    return (
        <EmptySearchStateWrapper>
            <HeadingRow>
                    <MovieIcon/>
                    <Title>Find your next movie</Title>
            </HeadingRow>
            <Subtitle>Search from thousand of movies or try one of these:</Subtitle>
            <TagsWrapper>
                <TagButton>Harry Potter</TagButton>
                <TagButton>Comedy</TagButton>
                <TagButton>2024</TagButton>
                <TagButton>Action</TagButton>
            </TagsWrapper>
        </EmptySearchStateWrapper>
        
    )
}