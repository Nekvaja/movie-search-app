import styled from "styled-components";
import { MovieCard } from "./MovieCard";
import { useSearch } from "../../context/SearchContext";
import { Link } from "react-router-dom";

const ResultsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin: auto 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: block;
`;

export const SearchResults = () => {

    const {movies} = useSearch()

    return (
        <>
        <ResultsGrid>

            {movies.map((movie) => (
                <StyledLink key={movie.id} to={`/movie/${movie.id}`}> 
                     <MovieCard title={movie.title} year={movie.year} rate={movie.rate} imageUrl={movie.imageUrl}/>
                </StyledLink> 
               
            ))}
           
        </ResultsGrid>

        <Button>Load more</Button>
        </>
    )
};