import styled from "styled-components";
import { MovieCard } from "./MovieCard";
import { useSearch } from "../../contexts/SearchGlobal/SearchContext";
import { Link } from "react-router-dom";

const ResultsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    justify-items: center;
    gap: 2rem;
    margin-top: 3rem;
    padding: 0;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 3rem;
       

    width: 80%;
    max-width: 400px;
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

    const {movies, visibleCount, setVisibleCount} = useSearch()

    return (
        <>
        <ResultsGrid>

            {(movies.slice(0, visibleCount)).map((movie) => (
                <StyledLink key={movie.id} to={`/movie/${movie.id}`}> 
                     <MovieCard title={movie.title} year={movie.year} rate={movie.rate} imageUrl={movie.imageUrl}/>
                </StyledLink> 
               
            ))}
           
        </ResultsGrid>

        <Button
            onClick={() => setVisibleCount(prev => prev + 4)}
        >Load more</Button>
        </>
    )
};