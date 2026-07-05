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

    @media (max-width: 400px) {
        padding: 0;
    }
`;

const BackButton = styled(Link)`
    all: unset;
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

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;  
    align-items: center;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Title = styled.h2`
    font-size: 2rem;
    display: flex;
    flex: 1;

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }

    @media (max-width: 400px) {
        margin: 0;
    }
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

     @media (max-width: 900px) {
        align-self: center;
    }

     @media (max-width: 400px) {
        margin-top: 1rem;
        padding: 1rem;
        font-size: 1.5rem;
        line-height: 0.5;
    }
   
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
        <HeaderContainer>
            <Title>{movie.title}</Title>
            <Rating>{movie.rate}%</Rating>
        </HeaderContainer>
    </Wrapper>    
      </>
    );
}