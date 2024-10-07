import styled from "styled-components";

export const LoaderContainerFullPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const LoaderContainer = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    color: ${(props) => props.theme.colors.text};
    background: conic-gradient(
            from -45deg at top 1.3rem left 50%,
            #0000,
            currentColor 1deg 90deg,
            #0000 91deg
        ),
        conic-gradient(
            from 45deg at right 1.3rem top 50%,
            #0000,
            currentColor 1deg 90deg,
            #0000 91deg
        ),
        conic-gradient(
            from 135deg at bottom 1.3rem left 50%,
            #0000,
            currentColor 1deg 90deg,
            #0000 91deg
        ),
        conic-gradient(
            from -135deg at left 1.3rem top 50%,
            #0000,
            currentColor 1deg 90deg,
            #0000 91deg
        );
    animation: l4 1.5s infinite cubic-bezier(0.3, 1, 0, 1);

    @keyframes l4 {
        50% {
            width: 3.75rem;
            height: 3.75rem;
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
