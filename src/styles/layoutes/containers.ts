import styled from "styled-components";

export const StorItemsContainer = styled.div`
    position: relative;
    width: fit-content;
`;
export const Container = styled.div`
    display: flex;
    width: 100%;
    margin-width: 63rem;
    margin: 0 auto;
`;
export const NotFoundContainer = styled.div`
    > h1 {
        font-size: 5rem;
    }
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    margin-top: 10rem;
    text-align: center;
    > p {
        font-size: 1.2rem;
        max-width: 25rem;
    }
    @media (max-width: 600px) {
        margin-top: 7rem;
    }
`;
export const CheckOutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 2rem;
    margin: 0 auto;
    max-width: 30rem;
    > div:nth-child(1) {
        width: 100%;
        flex-direction: column;
        display: flex;
        h2 {
            text-align: end;
            margin: 1rem 0;
        }
    }
    > div:nth-child(2) {
        width: 100%;
        flex-direction: column;
        margin-top: auto;
        display: flex;
        gap: 1rem;
    }
`;

export const ProductPageContainer = styled.main`
    display: flex;
    width: 100%;
    margin-width: 63rem;
    margin: 0 auto;
    flex-direction: column;
`;
