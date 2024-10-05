import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/container";
import { Products } from "./pages/products";
import { Contact } from "./pages/contact";
import { Navbar } from "./components/navbar";
import { ShoppingCartProvider } from "./context/shopping-card-context";
import SingleProductPage from "./components/single-product";

function App() {
    return (
        <ShoppingCartProvider>
            <Navbar />
            <Container>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route
                        path="/products/:productId"
                        element={<SingleProductPage />}
                    />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Container>
        </ShoppingCartProvider>
    );
}

export default App;
