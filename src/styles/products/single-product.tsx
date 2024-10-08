import styled from "styled-components";

export const SingleProductPageContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    padding: 0.51rem;
    align-items: start;
    justify-content: center;
    margin-top: 2rem;
    > img {
        width: 100%;
        max-width: 30rem;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
        grid-template-columns: 1fr;
        margin-top: 1rem;
        img {
            max-width: 30rem;
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
    margin: 0 auto;
    max-width: 30rem;
    gap: 2rem;
    > h1 {
        font-size: 2.5rem;
        margin: 1.2rem 0;
    }
`;
export const ProductDescription = styled.div`
    width: 100%;
    max-width:30rem
    margin: 1rem 0;
    font-size: 1.2rem;
`;

export const PrimaryBtn = styled.button`
        border: none;
        background-color: ${(props) => props.theme.colors.text};
        color: ${(props) => props.theme.colors.background};
        padding: 0.5rem 2rem;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s ease;
        border-radius: 0.2rem;
        text-align: center;
        &:hover {
            opacity: 0.9;
        `;
export const PrimaryBtnOutlined = styled.button`
        border: none;
        background-color: transparent;
        color: ${(props) => props.theme.colors.text};
        border: 0.1rem solid ${(props) => props.theme.colors.text};
        padding: 0.5rem 2rem;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s ease;
        border-radius: 0.2rem;
        margin-right: 0.2rem;
        &:hover {
            opacity: 0.5;
        `;

export const ProductPrice = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
        :nth-child(2) {
            margin-left: auto;
        }
    }
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    max-width: 28rem;
    > div > h2 {
        font-size: 1.2rem;
        > span {
            color: red;
            font-size: 0.8rem;
            margin-left: 0.7rem;
            text-align: end;
        }
    }

    > div > p {
        text-align: end;
    }
`;
export const ProductRatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 15rem;
    overflow-y: auto;
    margin: 1rem 0;
    > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    > div > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    > div > div > div {
        width: fit-content;
        color: gold;
        text-shadow: 0 0.05rem 0.1rem black;
    }
`;
