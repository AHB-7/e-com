import styled from "styled-components";
import { ItemRating } from "../../styles/products/product-styling";
const Star = styled.span<{ active: boolean }>`
    color: ${(props) => (props.active ? "gold" : "grey")};
`;
export function Rating({ rating }: { rating: number }) {
    return (
        <ItemRating>
            {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} active={rating > index}>
                    ★
                </Star>
            ))}
        </ItemRating>
    );
}
