import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/contact/containers";
import { Products } from "./pages/products";
import { Contact } from "./pages/contact";
import { Navbar } from "./components/navbar";
import SingleProductPage from "./components/products/single-product";
import { Checkout } from "./components/contact&checkout/checkout";

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
