import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 18.75rem;
    grid-column: 1 / -1;
    margin: 0 auto;
`;

export const PaginationButtons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;
