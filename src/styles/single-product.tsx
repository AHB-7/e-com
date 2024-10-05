import styled from "styled-components";

export const SingleProductPageContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    padding: 0.51rem;
    > img {
        width: 100%;
        max-width: 600px;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.small}) {
        grid-template-columns: 1fr;
        img {
            max-width: 500px;
            margin: 0 auto;
        }
    }
    > img {
        border-radius: 0.5rem;
    }
`;
export const ProductInfoContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: start;
    width: 100%;
    flex-wrap: wrap;
    > h1 {
        font-size: 2.5rem;
        margin: 1.2rem 0;
    }
`;
export const ProductDescription = styled.p`
    width: 100%;
    max-width: 500px;
    height: auto;
    margin: 1rem 0;
    font-size: 1.2rem;
`;
export const ProductPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 500px;
    > div > h2 {
        font-size: 1.2rem;
    }
    > div > button {
        border: none;
        background-color: ${(props) => props.theme.colors.text};
        color: ${(props) => props.theme.colors.background};
        padding: 0.5rem 2rem;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s ease;
        border-radius: 0.2rem;
        &:hover {
            opacity: 0.9;
        }
    }
`;
