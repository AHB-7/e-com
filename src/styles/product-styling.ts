import styled from "styled-components";
import { Link } from "react-router-dom";

export const AllCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
        grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
    }
    margin: 2rem auto;
    width: 97%;
`;
export const SearchContainer = styled.div`
    display: block;
    width: 100%;
    text-align: center;
    > form {
    }
    > form > input {
        padding: 0.2rem;
        width: 80%;
        border: none;
        font-size: 1rem;
        border-bottom: 0.1rem solid ${(props) => props.theme.colors.text};
        background-color: transparent;
    }
    > form > input:focus {
        outline: none;
    }
`;
export const CardContainer = styled.div`
    border-radius: 0.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    aling-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    max-height: 400px;
    max-width: 400px;
    aspect-ratio: 1/1;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    transform: scale(1);
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 400px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0) 30%
    );
`;

export const CardTitle = styled.div`
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: bold;
    width: auto;
    text-align: start;
    padding: 1rem 0;
    padding-left: 0.5rem;
    color: white;
    width: 80%;
    @media (max-width: ${(props) => props.theme.breakpoints.small}) {
        font-size: ${(props) => props.theme.fontSizes.medium};
    }
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    width: 100%;
    max-width: 400px;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 100%
    );
    @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
        flex-direction: column;
        justify-content: end;
        align-content: center;
    }
    transition: opacity 0.3s ease;
`;
export const PriceContainer = styled.h3`
    padding: 1rem;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    font-weight: bold;
    align-items: end;
    color: white;
    :nth-child(2) {
        font-size: ${(props) => props.theme.fontSizes.small};
        background: darkred;
        border-radius: 0.1rem;
        padding: 0.1rem;
        width: fit-content;
        text-decoration: line-through;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
        flex-direction: row;
        width: 90%;
        order: 1;
        padding: 0.2rem;
    }
    padding: auto 0.2rem;
    :>*  {
        @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
            font-size: ${(props) => props.theme.fontSizes.small};
        }
    }
`;
export const ItemRating = styled.div`
    padding-right: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gold;
    font-size: ${(props) => props.theme.fontSizes.large};
    z-index: 1;
    @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
        order: 0;
    }
`;
export const AddToCardBtn = styled.button`
    background: ${(props) => props.theme.colors.text};
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    border: none;
    shadow: 0 0 0.1rem 0.1rem black;
    color: ${(props) => props.theme.colors.background};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`;
export const Counter = styled.p`
    background: ${(props) => props.theme.colors.text};
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 2.4rem;
    right: 0.2rem;
    border-radius: 50%;
    color: lightgreen;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    &:hover ${CardImage} {
        transform: scale(1.2);
    }
    // &:hover ${CardFooter} {
    //     opacity: 0;
    // }
`;
