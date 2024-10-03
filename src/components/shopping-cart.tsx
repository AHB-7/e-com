import { useShoppingCart } from "../context/shopping-card-context";
import { CartContainer } from "../styles/cart-items";
import { CartItem } from "./CartItem";

type ShoppingCardProviderProps = {
    isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCardProviderProps) {
    const { closeCart, cartItems } = useShoppingCart();

    // Calculate total cart price
    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <CartContainer style={{ display: isOpen ? "block" : "none" }}>
            <button onClick={closeCart}>Close</button>
            <h2>Items</h2>
            <div>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        quantity={item.quantity}
                    />
                ))}
                <div>
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            </div>
        </CartContainer>
    );
}
