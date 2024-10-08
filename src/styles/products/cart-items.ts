import styled from "styled-components";
export const CartElements = styled.div`
    position: relative;
`;

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0.3rem;
    width: 19rem;
    margin-right: 2rem;
    position: absolute;
    height: 19rem;
    overflow-y: auto;
    top: 3rem;
    right: -2rem;
    z-index: 100;
    color: ${(props) => props.theme.colors.text};
    > h5 {
        text-align: right;
        font-size: 1.2rem;
    }
    box-shadow: 0 0 0.5rem 0.1rem #ccc;
`;

export const CartTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > button {
        border: none;
        background-color: transparent;
        color: black;
        font-weight: bold;
        font-size: 1rem;
        transition: color 0.2s ease;
        cursor: pointer;
        margin-right: 0.2rem;
    }
    > button:hover {
        color: red;
    }
    > h2 {
        font-size: 1.7rem;
    }
`;

export const RemoveButton = styled.p`
    position: absolute;
    top: 0.6rem;
    right: 0.4rem;
    color: gray;
    font-size: 1rem;
    transition: color 0.3s ease;
    :hover {
        color: red;
        cursor: pointer;
    }
`;
export const CartItemContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    align-items: start;
    padding: 0 0.5rem;
    border-bottom: 0.1rem solid #ccc;
    gap: 0.5rem;
    :first-child {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    > div > a > img {
        width: 6rem;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 0.4rem;
    }
    > div > div {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.5rem;
        width: 100%;
        width: 10rem;
        text-align: left;
    }
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
`;

export const EncDecButton = styled.button`
    border: none;
    background-color: transparent;
    border: 0.1em solid black;
    padding: 0.2rem;
    aspect-ratio: 1/1;
    width: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
`;
export const CounterController = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
`;
export const SubtotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;
