import styled from "styled-components";
import { MovieCard } from "./MovieCard";

const ResultsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin: auto 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export const SearchResults = () => {
    return (
        <ResultsGrid>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </ResultsGrid>
    )
};