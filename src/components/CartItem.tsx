import { RiDeleteBin6Line } from "react-icons/ri";
import { useShoppingCart } from "../context/shopping-card-context";
import {
    CartItemContainer,
    CounterController,
    EncDecButton,
    RemoveButton,
} from "../styles/cart-items";

type CartItemProps = {
    id: number;
    title: string;
    price: number;
    discountedPrice?: number;
    imageUrl: string;
    quantity: number;
};

export function CartItem({
    id,
    title,
    price,
    discountedPrice,
    imageUrl,
    quantity,
}: CartItemProps) {
    const { increaseQuantity, decreaseQuantity, deleteQuantity } =
        useShoppingCart();
    const finalPrice = discountedPrice ? discountedPrice : price;
    console.log(discountedPrice);

    return (
        <CartItemContainer>
            <div>
                <img src={imageUrl} alt={title} />
                <h4>{title}</h4>
            </div>
            <div>
                {discountedPrice ? (
                    <>
                        <span>{price.toFixed(2)}</span>
                        <span>{discountedPrice.toFixed(2)}</span>
                    </>
                ) : (
                    finalPrice.toFixed(2)
                )}
                <CounterController>
                    <EncDecButton onClick={() => decreaseQuantity(id)}>
                        -
                    </EncDecButton>
                    <EncDecButton>{quantity}</EncDecButton>
                    <EncDecButton
                        onClick={() =>
                            increaseQuantity(
                                id,
                                title,
                                price,
                                imageUrl,
                                discountedPrice
                            )
                        }
                    >
                        +
                    </EncDecButton>
                </CounterController>
                <RemoveButton onClick={() => deleteQuantity(id)}>
                    <RiDeleteBin6Line />
                </RemoveButton>
            </div>
        </CartItemContainer>
    );
}
