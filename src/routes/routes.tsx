import { Route, Routes } from "react-router-dom";
import { Products } from "../pages/products";
import SingleProductPage from "../components/products/single-product";
import { Contact } from "../pages/contact";
import { Checkout } from "../components/checkout/checkout";
import { NotFound } from "../components/layouts/not-found";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route
                path="/products/:productId"
                element={<SingleProductPage />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
