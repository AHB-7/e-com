import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../styles/products/single-product";
import { NotFoundContainer } from "../../styles/layoutes/containers";

export function NotFound() {
    return (
        <NotFoundContainer>
            <h1>404</h1>
            <p>
                Ops Ops something went wrong and the page couldn't be found :)
            </p>
            <PrimaryBtn as={Link} to="/">
                Go back to the home page
            </PrimaryBtn>
        </NotFoundContainer>
    );
}
