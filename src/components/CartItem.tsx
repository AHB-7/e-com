import { RiDeleteBin6Line } from "react-icons/ri";
import { useShoppingCart } from "../context/shopping-card-context";
import { CartItemContainer, RemoveButton } from "../styles/cart-items";

type CartItemProps = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    quantity: number;
};

export function CartItem({
    id,
    title,
    price,
    imageUrl,
    quantity,
}: CartItemProps) {
    const { increaseQuantity, decreaseQuantity, deleteQuantity } =
        useShoppingCart();

    return (
        <CartItemContainer>
            <div>
                <img src={imageUrl} alt={title} />
                <h4>{title}</h4>
            </div>
            <div>
                <p>Price: ${price.toFixed(2)}</p>

                <div>
                    <div>
                        <button onClick={() => decreaseQuantity(id)}>-</button>
                        <p>{quantity}</p>
                        <button
                            onClick={() =>
                                increaseQuantity(id, title, price, imageUrl)
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
                <RemoveButton onClick={() => deleteQuantity(id)}>
                    <RiDeleteBin6Line />
                </RemoveButton>
            </div>
        </CartItemContainer>
    );
}
