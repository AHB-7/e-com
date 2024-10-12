import { useShoppingCartStore } from "../../hooks/shopping-card-context";
import { StorItemsContainer } from "../../styles/layoutes/containers";
import {
    AddToCardBtn,
    AddToCardContainer,
    CardContainer,
    CardFooter,
    CardImage,
    CardTitle,
    Counter,
    InfoContainer,
    PriceContainer,
    StyledLink,
} from "../../styles/products/product-styling";
import { Rating } from "../layouts/rating";

export function StoreItem({
    id,
    title,
    price,
    image,
    rating,
    discountedPrice,
}: Product) {
    const { increaseQuantity, decreaseQuantity, getItemsQuantity } =
        useShoppingCartStore();

    const quantity = getItemsQuantity(id);
    return (
        <StorItemsContainer>
            <StyledLink to={`/products/${id}`} key={id} className="link">
                <CardContainer>
                    <CardImage
                        as={"img"}
                        src={image.url}
                        alt={image.alt || title}
                    />

                    <InfoContainer>
                        <CardTitle>{title}</CardTitle>
                        <CardFooter>
                            {price === discountedPrice ? (
                                <PriceContainer>
                                    <span>${price.toFixed(2)}</span>
                                </PriceContainer>
                            ) : (
                                <PriceContainer>
                                    <span>${discountedPrice.toFixed(2)}</span>
                                    <span>${price.toFixed(2)}</span>
                                </PriceContainer>
                            )}
                            <Rating rating={rating} />
                        </CardFooter>
                    </InfoContainer>
                </CardContainer>
            </StyledLink>
            <AddToCardContainer>
                {quantity === 0 ? (
                    <AddToCardBtn
                        onClick={() =>
                            increaseQuantity(
                                id,
                                title,
                                price,
                                image.url,
                                discountedPrice
                            )
                        }
                    >
                        +
                    </AddToCardBtn>
                ) : (
                    <div>
                        <AddToCardBtn
                            onClick={() =>
                                increaseQuantity(
                                    id,
                                    title,
                                    price,
                                    image.url,
                                    discountedPrice
                                )
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
            </AddToCardContainer>
        </StorItemsContainer>
    );
}
