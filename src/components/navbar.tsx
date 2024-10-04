import { NavLink } from "react-router-dom";
import {
    Navbar as NavbarSc,
    NavbarLink,
    BasketBtn,
    ItemsCounter,
} from "../styles/navbar";
import { Container as BaseContainer } from "../styles/container";
import { CiShoppingBasket } from "react-icons/ci";
import styled from "styled-components";
import { useShoppingCart } from "../context/shopping-card-context";
import {
    CartContainer,
    CartElements,
    CartTitleContainer,
    FullPageCartContainer,
} from "../styles/cart-items";
import { CartItem } from "./cart-item";
import { useState } from "react";

const Container = styled(BaseContainer)``;
export function Navbar() {
    const { cartItems, cartQuantity } = useShoppingCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    return (
        <Container>
            <NavbarSc>
                <NavbarLink as={NavLink} to="/">
                    Home
                </NavbarLink>
                <NavbarLink as={NavLink} to="/products">
                    Products
                </NavbarLink>
                <NavbarLink as={NavLink} to="/about">
                    About
                </NavbarLink>
            </NavbarSc>
            <CartElements>
                <BasketBtn
                    onClick={() => {
                        toggleCart();
                    }}
                >
                    <CiShoppingBasket />
                </BasketBtn>
                {isCartOpen === true ? (
                    <FullPageCartContainer>
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
                            <button>Checkout</button>
                        </CartContainer>
                    </FullPageCartContainer>
                ) : null}
                {cartQuantity > 0 && (
                    <ItemsCounter>{cartQuantity}</ItemsCounter>
                )}
            </CartElements>
        </Container>
    );
}
