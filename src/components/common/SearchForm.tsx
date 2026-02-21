import styled from "styled-components";
import { SearchIcon } from "./SearchIcon";
import { useSearch } from "../../context/SearchContext";

const FormWrapper = styled.form`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 70%;
    height: 3.5rem;
    border: 2px solid ${({theme}) => theme.colors.primary};
    border-radius: 8px 0 8px 8px;
    background-color: ${({theme}) => theme.colors.background};
    overflow: hidden;

     &:focus-within {
        border: solid 2px ${({theme}) => theme.colors.secondary};
        box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.4);
    }
`;

const SearchInput = styled.input`
    height: 100%;
    width: 100%;
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


export const SearchForm = () => {
    const { query, updateQuery} = useSearch();

    return (
      
        <FormWrapper>
          <SearchIcon />

          <SearchInput
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
            name="query"
            type="text"
            placeholder="Search for a movie"
            aria-label="Search for a movie"
          />
        </FormWrapper>
     
    );
}