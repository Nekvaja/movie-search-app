import styled from "styled-components";

const FooterContent = styled.footer`
  height: 80px;
  width: 100%;
  background: linear-gradient(to right,
    ${({theme}) => theme.colors.primary},
    ${({theme}) => theme.colors.secondary}
    );
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1rem;
  font-weight: 300;
  padding: 2rem;

  @media (max-width: 400px) {
        height: fit-content;
        padding: 0 1rem;
    }
`;

const FooterAttribution = styled.p`
    
`;

const FooterCopyright = styled.p`
  
`;


export const Footer = () => {
    return (
        <FooterContent>
            <FooterAttribution>
                  This product uses the TMDb API but is not endorsed or certified by TMDb.
            </FooterAttribution>

            <FooterCopyright>
                © 2026 Movie Search
            </FooterCopyright>
        </FooterContent>
    )
}