import styled from "styled-components";
import { useMovieDetail } from "../../contexts/MovieDetail/MovieDetailContext";

const BackButton = styled.div`
    font-size: 1.5rem;
`;

const HeaderRow = styled.div`
    display: flex;  
    justify-content: space-between;
    gap: 2rem;
`;

const Title = styled.h2`

`;

const Rating = styled.span`
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.colors.accent};
    border-radius: 5px;
 
    font-size: 2rem;
    font-weight: 800;
    line-height: 0;
    padding: 1rem;
`;

export const MovieHeader = () => {
    const {movie} = useMovieDetail();

    return (
      <>
        <BackButton>Back</BackButton>
        <HeaderRow>
            <Title>{movie.title}</Title>
            <Rating>100 %</Rating>
        </HeaderRow>
      </>
    );
}