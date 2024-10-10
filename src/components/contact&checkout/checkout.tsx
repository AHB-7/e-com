import { useShoppingCartStore } from "../../hooks/shopping-card-context";
import { CartItem } from "../cart/cart-item";
import { PrimaryBtn } from "../../styles/products/single-product";
import { Link } from "react-router-dom";
import {
    CheckOutContainer,
    MessageSendtContainer,
} from "../../styles/layoutes/contact/containers";
import { useState } from "react";
import { IoCloudDoneOutline } from "react-icons/io5";

export function Checkout() {
    const { cartItems, clearCart } = useShoppingCartStore();
    const [successMessage, setSuccessMessage] = useState(false);

    const handleCheckout = () => {
        clearLocalStorage();
        clearCart();
        setSuccessMessage(true);
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
                        <PrimaryBtn onClick={handleCheckout}>
                            Checkout
                        </PrimaryBtn>
                    </>
                ) : (
                    <>
                        {successMessage ? (
                            <MessageSendtContainer>
                                <div>
                                    <IoCloudDoneOutline />
                                </div>
                                <p>Thank you for your purchase!</p>
                                <PrimaryBtn as={Link} to="/">
                                    Continue Shopping
                                </PrimaryBtn>
                            </MessageSendtContainer>
                        ) : (
                            <CheckOutContainer>
                                <p>
                                    Your cart is empty. Please add items to
                                    proceed.
                                </p>
                                <PrimaryBtn as={Link} to="/">
                                    Start Shopping
                                </PrimaryBtn>
                            </CheckOutContainer>
                        )}
                    </>
                )}
            </div>

            <div></div>
        </CheckOutContainer>
    );
}
