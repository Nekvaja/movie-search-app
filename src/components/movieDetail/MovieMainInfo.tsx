import styled from "styled-components";


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


export const MovieMainInfo = () => {
    return (
        <MovieMainInfoWrapper>
            <MoviePoster src={"https://image.tmdb.org/t/p/w342/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg"}/>
            <MovieDescription>
                <GenreWrapper>
                    <Genre>Thriller</Genre>
                    <Genre>Fantasy</Genre>
                </GenreWrapper>
                <Meta>USA, 1999</Meta>
                <Overview>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatem consequuntur est, amet, voluptate repellendus maxime unde eligendi cupiditate natus ullam rem rerum placeat dolore atque eum perferendis. Natus, esse.</Overview>
            </MovieDescription>
        </MovieMainInfoWrapper>

        
    )
}