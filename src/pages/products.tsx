import { StoreItem, Product } from "../components/storeitems";
import useFetch from "../hooks/fetch";
import { AllCards } from "../styles/product-styling";

export function Products() {
    const { data, loading, error } = useFetch<Product[]>(
        `https://v2.api.noroff.dev/online-shop`
    );
    if (loading) return <div>Loading...</div>;
    if (error)
        return <div>Error fetching products. Please try again later.</div>;
    if (!data) return null;
    return (
        <AllCards>
            {data.map((item) => (
                <StoreItem key={item.id} {...item} />
            ))}
        </AllCards>
    );
}
