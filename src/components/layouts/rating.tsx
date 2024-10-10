import { ItemRating } from "../../styles/products/product-styling";

export function Rating({ rating }: { rating: number }) {
    return (
        <ItemRating>
            {Array.from({ length: 5 }).map((_, index) => (
                <span
                    key={index}
                    style={{
                        color: rating > index ? "gold" : "grey",
                    }}
                >
                    ★
                </span>
            ))}
        </ItemRating>
    );
}
