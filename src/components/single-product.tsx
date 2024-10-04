import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    price: number;
    discountedPrice: number;
    rating: number;
    description: string;
    image: {
        url: string;
        alt?: string;
    };
}

export default function SingleProductPage() {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(`https://v2.api.noroff.dev/online-shop/${productId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setProduct(data.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [productId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!product) return <div>No product found.</div>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img
                src={product.image?.url || "https://via.placeholder.com/150"}
                alt={product.image?.alt || product.title}
            />
            <p>Price: ${product.discountedPrice}</p>
            <p>Rating: {product.rating}</p>
            <p>{product.description}</p>
            <p>
                Original Price: <s>${product.price}</s>
            </p>
        </div>
    );
}
