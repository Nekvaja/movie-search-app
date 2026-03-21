import styled from "styled-components";
import { useMovieDetail } from "../../contexts/MovieDetail/MovieDetailContext";
import { BackIcon } from "./BackIcon";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    padding: 0 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const BackButton = styled(Link)`
    display: flex;
    align-items: center;
    align-self: flex-start;
    font-size: 16px;
    text-transform: uppercase;
    background: none;
    border: none;
    padding: 0.75rem 0.75rem 0.75rem 0;

    cursor: pointer;
    transform-origin: left center;
    transition: transform 0.2s ease-out;

    &:hover {
        transform: scale(1.08);
    }

    &:hover svg {
    transform: translateX(-2px);
}
`;

const HeaderRow = styled.div`
    width: 100%;
    display: flex;  
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h2`
    font-size: 2rem;
    display: flex;
    flex: 1;
`;

const Rating = styled.span`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    background-color: ${({theme}) => theme.colors.accent};
    border-radius: 5px;
 
    font-size: 2rem;
    font-weight: 800;
    line-height: 0;
    padding: 2rem;
   
`;

export const MovieHeader = () => {
    const {movie} = useMovieDetail();

    return (
      <>
    <Wrapper>
        <BackButton to={`/`}>
            <BackIcon/>
            Back    
        </BackButton>
        <HeaderRow>
            <Title>{movie.title}</Title>
            <Rating>{movie.rate}%</Rating>
        </HeaderRow>
    </Wrapper>    
      </>
    );
}