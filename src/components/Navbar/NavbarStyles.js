import styled from "styled-components";

export const NavbarContainerStyled = styled.div`
    height: 100px;
    backeround-color: #18191a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }
`;

export const LinksContainerStyled = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    a {
        padding: 1rem 1.5rem;
    }
    a:first-child {
        backeround: var(--orange-bg);
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`;

export const LinkContainerStyled = styled.div`
    font-size: 1,2rem;
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
    @media (max-width: 768px){
        display: flex;
    }
`;

export const UserNavStyled = styled.div `
    gap: 15px;
    cursor: pointer;
    span {
        color: white;
        font-size: 1rem;
        margin-reght: 20px;
    }
    @media (max-width: 768) {
        display: none;
    }
`;

export const UserImageStyled = styled.img`
    width: 10px;
    height: 10px;
    border-radius: 100px;
    cursor: pointer;
`;



export const SpanStyled = styled.span `
    &:hover {
        text-decoration: underline;
    }
`;

