import { useShoppingCartStore } from "../../hooks/shopping-card-context";
import { CartItem } from "../cart/cart-item";
import { PrimaryBtn } from "../../styles/products/single-product";
import { Link } from "react-router-dom";
import { CheckOutContainer } from "../../styles/contact/containers";
import { useState } from "react";

export function Checkout() {
    const { cartItems, clearCart } = useShoppingCartStore();
    const [successMessage, setSuccessMessage] = useState(false);

    const handleCheckout = () => {
        clearLocalStorage();
        clearCart(); // Clear the cart from the context
        setSuccessMessage(true); // Show the success message
    };

    const clearLocalStorage = () => {
        localStorage.removeItem("shoping-cart");
    };

    return (
        <CheckOutContainer>
            <div>
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                discountedPrice={item.discountedPrice}
                                imageUrl={item.imageUrl}
                                quantity={item.quantity}
                            />
                        ))}
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>

            <div>
                <h2>
                    Total: $
                    {cartItems
                        .reduce(
                            (total, item) =>
                                total +
                                (item.discountedPrice ?? item.price) *
                                    item.quantity,
                            0
                        )
                        .toFixed(2)}
                </h2>
                <PrimaryBtn onClick={handleCheckout}>Checkout</PrimaryBtn>

                {successMessage && (
                    <div>
                        <p>Checkout successful! Thank you for your purchase.</p>
                        <Link to="/">Continue Shopping</Link>
                    </div>
                )}
            </div>
        </CheckOutContainer>
    );
}
