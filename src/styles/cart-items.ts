import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 5px;
    width: 300px;
    margin-right: 1rem;
    position: absolute;
    top: 3rem;
    right: 0;
    z-index: 100;
`;
export const RemoveButton = styled.p`
    position: absolute;
    top: 0;
    right: 0;
    :first-child {
        color: gray;
        width: 1.4rem;
    }
    :hover {
        color: red;
    }
    transition: color 0.3s ease;
`;
export const CartItemContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
    gap: 0.5rem;
    :first-child {
        display: flex;
        align-items: start;
        gap: 0.5rem;
    }
    > div > img {
        width: 60px;
        object-fit: cover;
    }
    > div > h4 {
        width: 100%;
        max-width: 100px;
        text-align: left;
    }
`;
