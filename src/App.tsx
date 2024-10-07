import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/containers";
import { Products } from "./pages/products";
import { Contact } from "./pages/contact";
import { Navbar } from "./components/navbar";
import { ShoppingCartProvider } from "./context/shopping-card-context";
import SingleProductPage from "./components/single-product";
import { SearchProvider } from "./context/search-provider";
import { Checkout } from "./components/checkout";

function App() {
    return (
        <ShoppingCartProvider>
            <SearchProvider>
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
            </SearchProvider>
        </ShoppingCartProvider>
    );
}

export default App;
