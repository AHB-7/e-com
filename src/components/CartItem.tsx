import { useShoppingCart } from "../context/shopping-card-context";

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
    const { cartItems, deleteQuantity } = useShoppingCart();

    const item = cartItems.find((item) => item.id === id);

    if (!item) return null;

    return (
        <div>
            <h2>{item.title}</h2>
            <p>Quantity: {quantity}</p>
            <button onClick={() => deleteQuantity(id)}>Remove</button>
            <p>Price: {item.price} kr</p>
            <p>Total price: {quantity * item.price} kr</p>
            <hr />
        </div>
    );
}
