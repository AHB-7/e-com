import { RiDeleteBin6Line } from "react-icons/ri";
import {
    CartItemContainer,
    CounterController,
    EncDecButton,
    RemoveButton,
    SubtotalContainer,
} from "../../styles/products/cart-items";
import { useShoppingCartStore } from "../../hooks/shopping-card-context";
import { Link } from "react-router-dom";

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
                <Link to={`/products/${id}`}>
                    <img src={imageUrl} alt={title} />
                </Link>
                <div>
                    <Link to={`/products/${id}`}>
                        <h4>{title}</h4>
                    </Link>
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
