import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 80px;
  width: 100%;
  background: linear-gradient(to right,
    ${({theme}) => theme.colors.primary},
    ${({theme}) => theme.colors.secondary}
    );
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  padding: 2rem;
`;

const FooterLeft = styled.div`
    
`;

const FooterRight = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;


export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft>
                  <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            </FooterLeft>

            <FooterRight>
                <p>© 2026 Movie Search</p>
                <span>toggle</span>
            </FooterRight>
        </FooterContainer>
    )
}