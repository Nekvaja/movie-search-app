import styled from "styled-components";
import type { Movie } from "../../api/tmdb";

type MovieCardProps = Pick<Movie, "title" | "year" | "rate" | "imageUrl">;

const Card = styled.article`
    height: 100%;
    max-width: 200px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    box-shadow:
    0 2px 10px rgba(0,0,0,.06),
    0 8px 20px rgba(0,0,0,.04);
    transition: transform 0.2s ease-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    @media (max-width: 600px) {
       max-width: 300px;
    }

    @media (max-width: 400px) {
    max-width: 220px;
}
`;

const Title = styled.h2`
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem 0;
    display: flex;
    flex-grow: 1;
`;

const Poster = styled.img`
    aspect-ratio: 2 / 3;
    width: 100%;
    object-fit: cover;
`;

const Meta = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Year = styled.span`

`;

const Rating = styled.span`
    background-color: ${({theme}) => theme.colors.accent};
    border-radius: 12px;
    padding: 0.2rem 0.4rem;
    text-align: center;
`;

export const MovieCard = ({title, year, rate, imageUrl} : MovieCardProps) => {
    return (
        <Card>
            <Poster src={imageUrl} alt="movie poster"/>

            <Title>{title}</Title>

            <Meta>
                <Year>{year}</Year>
                <Rating>{rate} %</Rating>
            </Meta>

        </Card>
    )
}