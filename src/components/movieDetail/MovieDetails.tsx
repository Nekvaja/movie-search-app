import styled from "styled-components";


const MovieDetailsWrapper = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-top: 2px solid #A8A8A8;
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
    align-items: center;
    line-height: 1.5;
`;


export const MovieDetails = () => {
    return (
        <MovieDetailsWrapper>
            <Infoblock>
                <h3>Director:</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </Infoblock>
            <Infoblock>
                <h3>Screenplay:</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </Infoblock>
            <Infoblock>
                <h3>Cast:</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </Infoblock>
        </MovieDetailsWrapper>
    )
}