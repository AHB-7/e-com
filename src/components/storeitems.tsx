import { useShoppingCart } from "../context/shopping-card-context";
import {
    AddToCardBtn,
    CardContainer,
    CardFooter,
    CardImage,
    CardTitle,
    Counter,
    InfoContainer,
    ItemRating,
    PriceContainer,
    StyledLink,
} from "../styles/product-styling";

export interface Product {
    id: number;
    title: string;
    price: number;
    discountedPrice: number;
    rating: number;
    image: {
        url: string;
        alt?: string;
    };
    description: string;
}

export function StoreItem({
    id,
    title,
    price,
    image,
    rating,
    discountedPrice,
}: Product) {
    const { getItemsQuantity, increaseQuantity, decreaseQuantity } =
        useShoppingCart();
    console.log(id);
    const quantity = getItemsQuantity(id);

    return (
        <div style={{ position: "relative" }}>
            <StyledLink to={`/products/${id}`} key={id} className="link">
                <CardContainer>
                    <CardImage
                        as={"img"}
                        src={image.url}
                        alt={image.alt || "Product Image"}
                    />
                    <InfoContainer>
                        <CardTitle>{title}</CardTitle>
                        <CardFooter>
                            {price === discountedPrice ? (
                                <PriceContainer>
                                    <p>${price.toFixed(2)}</p>
                                </PriceContainer>
                            ) : (
                                <PriceContainer>
                                    <p>${discountedPrice.toFixed(2)}</p>
                                    <p>${price.toFixed(2)}</p>
                                </PriceContainer>
                            )}
                            <ItemRating>
                                {Array.from({ length: rating }).map(
                                    (_, index) => (
                                        <span key={index}>★</span>
                                    )
                                )}
                            </ItemRating>
                        </CardFooter>
                    </InfoContainer>
                </CardContainer>
            </StyledLink>

            {quantity === 0 ? (
                <AddToCardBtn
                    onClick={() =>
                        increaseQuantity(id, title, price, image.url)
                    }
                >
                    +
                </AddToCardBtn>
            ) : (
                <div>
                    <AddToCardBtn
                        onClick={() =>
                            increaseQuantity(id, title, price, image.url)
                        }
                    >
                        +
                    </AddToCardBtn>
                    <Counter>{quantity}</Counter>
                    <AddToCardBtn
                        style={{ top: "4.6rem" }}
                        onClick={() => decreaseQuantity(id)}
                    >
                        -
                    </AddToCardBtn>
                </div>
            )}
        </div>
    );
}
