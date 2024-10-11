import styled from "styled-components";
import { ItemRating } from "../../styles/products/product-styling";

const Star = styled.p`
    &.active {
        color: gold;
    }

    &.inactive {
        color: grey;
    }
`;

export function Rating({ rating }: { rating: number }) {
    return (
        <ItemRating>
            {Array.from({ length: 5 }).map((_, index) => (
                <Star
                    key={index}
                    className={rating > index ? "active" : "inactive"}
                >
                    ★
                </Star>
            ))}
        </ItemRating>
    );
}
