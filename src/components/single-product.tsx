import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    ProductDescription,
    ProductInfoContainer,
    ProductPrice,
    SingleProductPageContainer,
} from "../styles/single-product";

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
    reviews: [
        { rating: number; id: string; username: string; description: string }
    ];
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
        <SingleProductPageContainer>
            <img
                src={product.image?.url || "https://via.placeholder.com/150"}
                alt={product.image?.alt || product.title}
            />
            <ProductInfoContainer>
                <h1>{product.title}</h1>
                <ProductDescription>
                    <p>{product.description}</p>
                </ProductDescription>
                <ProductPrice>
                    <div>
                        {product.price === product.discountedPrice ? (
                            <h2>
                                Original Price: <s>${product.price}</s>
                            </h2>
                        ) : (
                            <>
                                <h2>
                                    Before: <s>${product.price}</s>
                                </h2>
                                <h2>Now : ${product.discountedPrice}</h2>{" "}
                            </>
                        )}
                    </div>
                    <div>
                        <button>Add To Cart</button>
                    </div>
                </ProductPrice>
                <div>
                    {product.reviews.map((review) => (
                        <div key={review.id}>
                            <h3>{review.username}</h3>
                            <p>{review.description}</p>
                            <p>Rating: {review.rating}</p>
                        </div>
                    ))}
                </div>
            </ProductInfoContainer>
        </SingleProductPageContainer>
    );
}
