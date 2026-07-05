import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSearch } from "../../contexts/SearchGlobal/SearchContext";

const HeaderContainer = styled.header`
  display: flex;  
  justify-content: space-between;
  height: 100px;
  width: 100%;
  color: white;
  background: linear-gradient(to right, 
    ${({theme}) => theme.colors.primary},
    ${({theme}) => theme.colors.secondary}
    );
  margin: auto;
  display: flex;
  align-items: center;
  padding: 2rem;

   @media (max-width: 400px) {
        height: 80px;
        padding: 1rem;
    }
`;

const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const HeaderTitle = styled.h1`
    font-size: 2.25rem;
    font-weight: 300;

    a {
        font-style: inherit;
        color: inherit;
        text-decoration: none;
    }

     @media (max-width: 400px) {
       font-size: 1.5rem;
    }
`;

export const Header = () => {

    const { resetSearch} = useSearch();

    return (
        <HeaderContainer>
            <HeaderTitle>
                <Link 
                    to="/"
                    onClick={resetSearch}
                    >Movie Search</Link>               
            </HeaderTitle>
            <HeaderActions>
                <span>lang</span>
                <span>theme</span>
            </HeaderActions>
        </HeaderContainer>
    )
}