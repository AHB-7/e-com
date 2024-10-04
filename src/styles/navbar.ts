import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    color: white;
    padding: 1rem;
    margin-right: auto;
`;

export const NavbarLink = styled.a`
    width: fit-content;
`;
export const BasketBtn = styled.button`
    border: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
`;
export const ItemsCounter = styled.span`
    position: absolute;
    bottom: 0.5rem;
    right: 0rem;
    background-color: red;
    color: white;
    width: 1rem;
    border-radius: 50%;
`;
