import styled from "styled-components";
import { useMovieDetail } from "../../contexts/MovieDetail/MovieDetailContext";


const MovieMainInfoWrapper = styled.div`
    display: flex;
    margin: 2rem;
    gap: 2rem;
`;

const MoviePoster = styled.img`
    aspect-ratio: 2 / 3;
    max-width: 300px;
    object-fit: cover;
`;

const MovieDescription = styled.div`
    
`;

const GenreWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const Genre = styled.div`
    background-color: #D9D9D9;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    font-weight: bold;
`;

const Meta = styled.div`
    font-weight: bold;
    margin-top: 1rem;
`;

const Overview = styled.div`
    margin-top: 3rem;
    line-height: 1.5;
`;

const Tagline = styled.div`
    margin-top: 1rem;
    color: #717070;
    letter-spacing: 0.05rem;
`;


export const MovieMainInfo = () => {

    const {movie} = useMovieDetail();

    return (
        <MovieMainInfoWrapper>
            <MoviePoster src={movie.posterPath}/>
            <MovieDescription>
                <GenreWrapper>
                    {movie.genres.map((genre) => 
                        <Genre key={genre}>{genre}</Genre>
                    )}
                </GenreWrapper>
                <Meta>
                    {movie.countries.join(", ")}, {movie.year}, {movie.runtime} min.
                </Meta>

                {movie.tagline !== "" 
                    && <Tagline>{movie.tagline}</Tagline> 
                }
                   
                <Overview>{movie.overview}</Overview>
            </MovieDescription>
        </MovieMainInfoWrapper>

        
    )
}