import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
    height: 100px;
    background-color: #ffffff; /* Corrección: 'backeround-color' -> 'background-color' */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }
`;

export const LinksContainerStyled = styled.div`
    color: #8B4513;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    a {
        padding: 0.5rem 1.5rem;
        color: inherit;
        background: none;
        border: none;
        font-weight: 500;
        text-decoration: none;
        transition: color 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
        border-bottom:2px solid transparent;
        &: hover {
              color: #5A2DOC;
              border-bottom: 2px solid #5A2DOC;
        }
    }
    a:first-child {
    background: var(--pink-bg);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    }
`;

export const LinkContainerStyled = styled.div`
    font-size: 1.2rem; /* Corrección: '1,2rem' -> '1.2rem' */
    color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
    display: flex;
    align-items: center;
`;

export const HomeContainerStyled = styled(LinkContainerStyled)`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const ProductContainerStyled = styled(LinkContainerStyled)`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const InfoContainerStyled = styled(LinkContainerStyled)`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const MenuContainerStyled = styled(LinkContainerStyled)`
    display: none;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
    }
`;

export const UserNavStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5px;
    cursor: pointer;
    span {
        color: white;
        font-size: 1rem;
        margin-right: 5px; /* Corrección: 'margin-reght' -> 'margin-right' */
    }
    @media (max-width: 768px) {
        display: none; /* Corrección: faltaba 'px' en '768' */
    }
`;

export const UserImageStyled = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100px;
    cursor: pointer;
`;

export const SpanStyled = styled.span`
    &:hover {
        text-decoration: underline;
    }
`;