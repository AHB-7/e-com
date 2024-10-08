import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    PrimaryBtn,
    PrimaryBtnOutlined,
    ProductDescription,
    ProductInfoContainer,
    ProductPrice,
    ProductRatingContainer,
    SingleProductPageContainer,
} from "../styles/single-product";
import { ItemRating } from "../styles/product-styling";
import { Loading } from "./loading";
import { useShoppingCartStore } from "../context/shopping-card-context";

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
    const { increaseQuantity, decreaseQuantity, getItemsQuantity } =
        useShoppingCartStore();

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
    const quantity = getItemsQuantity(product?.id || 0);

    if (loading) return <Loading />;
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
                            <h2>Price: ${product.price}</h2>
                        ) : (
                            <>
                                <h2>
                                    Before: <s>${product.price}</s>
                                </h2>
                                <h2>Now : ${product.discountedPrice}</h2>{" "}
                            </>
                        )}
                    </div>
                    {quantity === 0 ? (
                        <PrimaryBtn
                            onClick={() =>
                                increaseQuantity(
                                    product.id,
                                    product.title,
                                    product.price,
                                    product.image.url,
                                    product.discountedPrice
                                )
                            }
                        >
                            Add To Cart
                        </PrimaryBtn>
                    ) : (
                        <div>
                            <PrimaryBtnOutlined
                                onClick={() => decreaseQuantity(product.id)}
                            >
                                -
                            </PrimaryBtnOutlined>
                            <PrimaryBtn
                                onClick={() =>
                                    increaseQuantity(
                                        product.id,
                                        product.title,
                                        product.price,
                                        product.image.url,
                                        product.discountedPrice
                                    )
                                }
                            >
                                Add To Cart
                            </PrimaryBtn>
                            <p>Quantity: {quantity}</p>
                        </div>
                    )}
                </ProductPrice>
                {product.reviews.length > 0 ? (
                    <ProductRatingContainer>
                        <h2> Reviews </h2>
                        {product.reviews.map((review) => (
                            <div key={review.id}>
                                <div>
                                    <h3>{review.username}</h3>
                                    <ItemRating>
                                        {Array.from({
                                            length: review.rating,
                                        }).map((_, index) => (
                                            <span key={index}>★</span>
                                        ))}
                                    </ItemRating>
                                </div>
                                <div>
                                    <p>{review.description}</p>
                                </div>
                                <hr />
                            </div>
                        ))}{" "}
                    </ProductRatingContainer>
                ) : (
                    <ProductRatingContainer>
                        <h5>This product has no reviews yet!</h5>
                    </ProductRatingContainer>
                )}
            </ProductInfoContainer>
        </SingleProductPageContainer>
    );
}
