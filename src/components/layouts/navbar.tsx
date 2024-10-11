import { Link, NavLink } from "react-router-dom";
import {
    Navbar as NavbarSc,
    NavbarLink,
    BasketBtn,
    ItemsCounter,
    CheckOutBtn,
    NavLinksContainer,
} from "../../styles/layoutes/navbar";
import {
    CartContainer,
    CartElements,
    CartTitleContainer,
} from "../../styles/products/cart-items";
import { CartItem } from "../cart/cart-item";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { PrimaryBtn } from "../../styles/products/single-product";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useShoppingCartStore } from "../../hooks/shopping-card-context";

export function Navbar() {
    const { cartItems, cartQuantity } = useShoppingCartStore();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    return (
        <NavbarSc>
            <NavLinksContainer>
                <NavbarLink
                    as={NavLink}
                    to="/"
                    style={({ isActive }) => ({
                        color: isActive ? "darkgreen" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                    })}
                >
                    Home
                </NavbarLink>
                <NavbarLink
                    as={NavLink}
                    to="/contact"
                    style={({ isActive }) => ({
                        color: isActive ? "darkgreen" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                    })}
                >
                    Contact
                </NavbarLink>
            </NavLinksContainer>
            <CartElements>
                <BasketBtn
                    onClick={() => {
                        toggleCart();
                    }}
                >
                    <IoCartOutline />
                    {cartQuantity > 0 && (
                        <ItemsCounter>{cartQuantity}</ItemsCounter>
                    )}
                </BasketBtn>
                {cartQuantity > 0 && (
                    <CheckOutBtn as={Link} to="/checkout">
                        <MdShoppingCartCheckout />
                    </CheckOutBtn>
                )}
                {isCartOpen === true ? (
                    <CartContainer>
                        <CartTitleContainer>
                            <h2>Items in Cart</h2>
                            <button
                                onClick={() => {
                                    toggleCart();
                                }}
                            >
                                X
                            </button>
                        </CartTitleContainer>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    discountedPrice={item.discountedPrice}
                                    imageUrl={item.imageUrl}
                                    quantity={item.quantity}
                                />
                            ))
                        ) : (
                            <p>Cart is empty</p>
                        )}
                        {cartItems.length > 0 ? (
                            <>
                                <h5>
                                    Total: $
                                    {cartItems
                                        .reduce(
                                            (total, item) =>
                                                total +
                                                (item.discountedPrice ??
                                                    item.price ??
                                                    0) *
                                                    item.quantity,
                                            0
                                        )
                                        .toFixed(2)}
                                </h5>
                                <PrimaryBtn as={Link} to="/checkout">
                                    Checkout
                                </PrimaryBtn>
                            </>
                        ) : null}
                    </CartContainer>
                ) : null}
            </CartElements>
        </NavbarSc>
    );
}
