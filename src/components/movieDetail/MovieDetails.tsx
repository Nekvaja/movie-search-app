import styled from "styled-components";
import { useMovieDetail } from "../../contexts/MovieDetail/MovieDetailContext";


const MovieDetailsWrapper = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-top: 1.5px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    
    h3 {
        font-size: 1rem;
        font-weight: bold;
    }

    h3, p {
        margin: 0;
    }
`;

const Infoblock = styled.div`
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    line-height: 1.5;
`;


export const MovieDetails = () => {

    const {movie} = useMovieDetail();

    return (
        <MovieDetailsWrapper>
            <Infoblock>
                <h3>Director:</h3>
                <p>{movie.director.join(", ")}</p>
            </Infoblock>
            <Infoblock>
                <h3>Screenplay:</h3>
                <p>{movie.screenwriters.join(", ")}</p>
            </Infoblock>
            <Infoblock>
                <h3>Cast:</h3>
                <p>{movie.actors.join(", ")}</p>
            </Infoblock>
        </MovieDetailsWrapper>
    )
}