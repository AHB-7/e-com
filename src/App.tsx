import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/layoutes/contact/containers";
import { Products } from "./pages/products";
import { Contact } from "./pages/contact";
import SingleProductPage from "./components/products/single-product";
import { Checkout } from "./components/contact&checkout/checkout";
import { Navbar } from "./components/layouts/navbar";

function App() {
    return (
        <>
            <Navbar />
            <Container>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route
                        path="/products/:productId"
                        element={<SingleProductPage />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
