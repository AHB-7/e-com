import { RiDeleteBin6Line } from "react-icons/ri";
import {
    CartItemContainer,
    CounterController,
    EncDecButton,
    RemoveButton,
    SubtotalContainer,
} from "../styles/cart-items";
import { useShoppingCartStore } from "../context/shopping-card-context";

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
        useShoppingCartStore();

    const finalPrice = discountedPrice === price ? price : discountedPrice;

    return (
        <CartItemContainer>
            <div>
                <img src={imageUrl} alt={title} />
                <div>
                    <h4>{title}</h4>
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
                    ${finalPrice}
                </div>
            </div>
            <div>
                <RemoveButton onClick={() => deleteQuantity(id)}>
                    <RiDeleteBin6Line />
                </RemoveButton>
            </div>
            <SubtotalContainer>
                <p>Subtotal: </p>
                <p>${((finalPrice ?? 0) * quantity).toFixed(2)}</p>
            </SubtotalContainer>
        </CartItemContainer>
    );
}
