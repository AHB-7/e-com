import { NavLink } from "react-router-dom";
import {
    Navbar as NavbarSc,
    NavbarLink,
    BasketBtn,
    ItemsCounter,
} from "../styles/navbar";
import { Container as BaseContainer } from "../styles/container";
import styled from "styled-components";
import { useShoppingCart } from "../context/shopping-card-context";
import {
    CartContainer,
    CartElements,
    CartTitleContainer,
} from "../styles/cart-items";
import { CartItem } from "./cart-item";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSearch } from "../hooks/search-context";
import { PrimaryBtn } from "../styles/single-product";

const Container = styled(BaseContainer)``;
export function Navbar() {
    const { setSearchQuery } = useSearch();
    const { cartItems, cartQuantity } = useShoppingCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    return (
        <Container>
            <NavbarSc>
                <NavbarLink as={NavLink} to="/">
                    Home
                </NavbarLink>
                <NavbarLink as={NavLink} to="/contact">
                    Contact
                </NavbarLink>
                <form action="search">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            </NavbarSc>
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
                                <PrimaryBtn>Checkout</PrimaryBtn>
                            </>
                        ) : null}
                    </CartContainer>
                ) : null}
            </CartElements>
        </Container>
    );
}
