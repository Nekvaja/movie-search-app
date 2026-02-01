import styled from "styled-components";

const Card = styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 1rem;
    font-weight: bold;
    margin: 0.5rem 0;
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
    border-radius: 5px;
    padding: 0.2rem 0;
    width: 2.5rem;
    text-align: center;
`;

export const MovieCard = () => {
    return (
        <Card>
            <Poster src="img.jpg" alt="movie poster"/>

            <Title>Harry potter and sorcerer's stone </Title>

            <Meta>
                <Year>2019</Year>
                <Rating>4,9</Rating>
            </Meta>

        </Card>
    )
}