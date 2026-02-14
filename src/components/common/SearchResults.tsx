import styled from "styled-components";
import { MovieCard } from "./MovieCard";
import { useSearch } from "../../context/SearchContext";

const ResultsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin: auto 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export const SearchResults = () => {

    const {movies} = useSearch()

    return (
        <ResultsGrid>

            {movies.map((movie) => (
                <MovieCard key={movie.id} title={movie.title} year={movie.year} rate={movie.rate}/>
            ))}
           
        </ResultsGrid>
    )
};