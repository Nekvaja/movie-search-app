import { useState } from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 80%;
    height: 3.5rem;
    border: 2px solid ${({theme}) => theme.colors.primary};
    border-radius: 8px 0 8px 8px;
    background-color: ${({theme}) => theme.colors.background};

     &:focus-within {
        border: solid 3px ${({theme}) => theme.colors.primary};
    }
`;

const SearchInput = styled.input`
    width: 90%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${({theme}) => theme.colors.textPrimary};
    background-color: ${({theme}) => theme.colors.background};
    font-size: 1.5rem;
    font-weight: inherit;
    font-family: inherit;
    border: none;

    &::placeholder {
        color: ${({theme}) => theme.colors.placeholderText};
    }

    &:focus {
        outline: none;
    } 
    `;

const SearchIcon = styled.div`
    margin: 0;
    padding: 0 0 0 0.5rem;
`;


export const SearchForm = () => {
    const [query, setQuery] = useState<string>('');

    return (
        <form>
            <SearchWrapper>
                <SearchIcon>
                    Icon
                </SearchIcon>

                <SearchInput 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    name="query"
                    type="text"
                    placeholder="Search for a movie"
                    aria-label="Search for a movie"
                />
            </SearchWrapper>
        </form>
    )
}