import styled from "styled-components";
import { MovieCard } from "./MovieCard";

const ResultsGrid = styled.div`
    display: flex; // temporary layout for card styling – will be replaced by grid
    gap: 2rem;
    margin: auto auto;
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