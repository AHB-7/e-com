import { NavLink } from "react-router-dom";
import {
    Navbar as NavbarSc,
    NavbarLink,
    BasketBtn,
    ItemsCounter,
} from "../styles/navbar";
import { Container as BaseContainer } from "../styles/container";
import { CiShoppingBasket } from "react-icons/ci";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { useShoppingCart } from "../context/shopping-card-context";

const Container = styled(BaseContainer)``;
export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();
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
            <BasketBtn onClick={openCart}>
                <IconContext.Provider
                    value={{ color: "darkblue", size: "2rem" }}
                >
                    <CiShoppingBasket />
                </IconContext.Provider>
                {cartQuantity > 0 && (
                    <ItemsCounter>{cartQuantity}</ItemsCounter>
                )}
            </BasketBtn>
        </Container>
    );
}
