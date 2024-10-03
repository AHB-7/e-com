import { Routes, Route } from "react-router-dom";
import { Container } from "./styles/container";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { About } from "./pages/about";
import { Navbar } from "./components/navbar";
import { ShoppingCartProvider } from "./context/shopping-card-context";

function App() {
    return (
        <ShoppingCartProvider>
            <Navbar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Container>
        </ShoppingCartProvider>
    );
}

export default App;
