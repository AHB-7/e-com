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
    > form {
        margin-right: auto;
    }
    > form > input {
        padding: 0.2rem;
        border: none;
        width: 15rem;
        font-size: 1rem;
        border-bottom: 0.1rem solid ${(props) => props.theme.colors.text};
        background-color: transparent;
    }
    > form > input:focus {
        outline: none;
    }
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
`;
export const ItemsCounter = styled.span`
    position: absolute;
    bottom: 0.2rem;
    padding: 0.2rem;
    left: -0.4rem;
    background-color: darkgreen;
    color: white;
    aspect-ratio: 1/1;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;
