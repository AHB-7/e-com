import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
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
    font-size: 2rem;
    margin-top: 0.5rem;
    margin-right: 1rem;
    background-color: transparent;
    cursor: pointer;
    z-index: 100;
    position: relative;
`;
export const ItemsCounter = styled.span`
    position: absolute;
    bottom: 0.2rem;
    padding: 0.1rem;
    left: -0.4rem;
    background-color: darkgreen;
    color: white;
    font-size: 1rem;
    aspect-ratio: 1/1;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;
