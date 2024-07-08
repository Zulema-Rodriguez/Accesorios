
import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    text-align: left;
    padding: 2rem 3rem;
  }
`;

export const FooterContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterSectionStyled = styled.div`
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

export const FooterLinkStyled = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

