import styled from "styled-components";
import { MovieIcon } from "./MovieIcon";
import { useSearch } from "../../contexts/SearchGlobal/SearchContext";

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeadingRow = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
`;

const Title = styled.h2`
    margin: 0;
`;

const Subtitle = styled.p`
    margin-top: 1.5rem;
`;

const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const TagButton = styled.button`
    position: relative;
    font-size: 1rem;
    border: none;
    border-radius: 50px;
    padding: 0.5rem 1.5rem;
    background: linear-gradient(
    135deg,
    #f3d5c0,
    #e8bfa7
  );
    cursor: pointer;
    &:hover {
        background: linear-gradient(
    135deg,
    #f5dcca,
    #eec6ae
  );
    }
`;




export const EmptySearchState = () => {

    const { updateQuery } = useSearch();

    return (
        <Wrapper>
            <HeadingRow>
                    <MovieIcon/>
                    <Title>Find your next movie</Title>
            </HeadingRow>
            <Subtitle>Search from thousands of movies or try one of these:</Subtitle>
            <TagsWrapper>
                <TagButton
                value="Harry Potter"
                onClick={(e) => updateQuery(e.currentTarget.value)}
                >Harry Potter</TagButton>
                <TagButton
                value="James Bond"
                onClick={(e) => updateQuery(e.currentTarget.value)}
                >James Bond</TagButton>
                <TagButton
                value="Matrix"
                onClick={(e) => updateQuery(e.currentTarget.value)}
                >Matrix</TagButton>
                <TagButton
                value="Dream Team"
                onClick={(e) => updateQuery(e.currentTarget.value)}
                >Dream Team</TagButton>
            </TagsWrapper>
        </Wrapper>
        
    )
}