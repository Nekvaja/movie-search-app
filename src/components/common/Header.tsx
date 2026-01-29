import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 152px;
  width: 100%;
  background: linear-gradient(to right, 
    ${({theme}) => theme.colors.primary},
    ${({theme}) => theme.colors.secondary}
    );
  margin: auto;
  display: flex;
  align-items: center;
  padding: 2rem;
`;

const HeaderTitle = styled.h1`
     font-size: 2.25rem;
    font-weight: 300;
    color: white;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                Movie Search
            </HeaderTitle>
        </HeaderContainer>
    )
}