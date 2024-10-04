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
import { CartContainer, CartElements } from "../styles/cart-items";
import { CartItem } from "./cart-item";

const Container = styled(BaseContainer)``;
export function Navbar() {
    const { cartItems, cartQuantity } = useShoppingCart();
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
                <BasketBtn>
                    <CiShoppingBasket />
                </BasketBtn>
                <CartContainer>
                    <h2>Items in Cart</h2>
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
                                    (item.discountedPrice ?? item.price ?? 0) *
                                        item.quantity,
                                0
                            )
                            .toFixed(2)}
                    </h5>
                </CartContainer>
                {cartQuantity > 0 && (
                    <ItemsCounter>{cartQuantity}</ItemsCounter>
                )}
            </CartElements>
        </Container>
    );
}
