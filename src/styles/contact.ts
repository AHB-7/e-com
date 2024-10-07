import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    margin-width: 63rem;
    margin: 0 auto;
`;

export const ProductPageContainer = styled.div`
    display: flex;
    width: 100%;
    margin-width: 63rem;
    margin: 0 auto;
    flex-direction: column;
`;
export const ContactPageContainer = styled.div`
    width: 100%;
    max-width: 63rem;
    display: grid;
    justify-content: center;
    align-items: center;
    > h1 {
        font-size: 3rem;
        text-align: center;
    }
    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        height: 30rem;
        width: 25rem;
        @media (max-width: ${(props) => props.theme.breakpoints.small}) {
            width: 90vw;
        }

        > div {
            display: flex;
            flex-direction: column;
            aling-items: center;
            justify-content: center;
            width: 100%;
            > h3 {
                font-size: 1rem;
            }
        }
        > div > input,
        div > textarea {
            width: 100%;
            padding: 0.4rem 0.3rem;
            border: 0.1rem solid #ccc;
            border-radius: 0.2rem;
            background-color: transparent;
        }
    }
`;
export const WrongMessage = styled.p`
    color: red;
    font-size: 0.8rem;
`;
export const MessageSendtContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: green;
    gap: 0.5rem;
    :first-child {
        font-size: 4rem;
    }
    > p {
        color: green;
    }
`;
