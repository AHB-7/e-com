import { useState } from "react";
import { StoreItem } from "../components/storeitems";
import useFetch from "../hooks/fetch";
import { AllCards } from "../styles/product-styling";
import Pagination from "../components/pagination";
import { PaginationContainer } from "../styles/pagination";

interface Product {
    id: number;
    title: string;
    price: number;
    discountedPrice: number;
    rating: number;
    image: {
        url: string;
        alt?: string;
    };
    message: string;
    description: string;
}

export function Products() {
    const [page, setPage] = useState(1);
    const limit = 9;
    const { data, loading, error } = useFetch<Product[]>(
        `https://v2.api.noroff.dev/online-shop?limit=${limit}&page=${page}`
    );
    const isLastPage = data ? data.length < limit : false;

    const handleNextPage = () => {
        if (!isLastPage) setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    if (loading) return <div>Loading...</div>;
    if (error)
        return <div>Error fetching products. Please try again later.</div>;

    return (
        <AllCards>
            <>
                {data?.map((item: Product) => (
                    <StoreItem key={item.id} {...item} />
                ))}
            </>
            <PaginationContainer>
                <Pagination
                    currentPage={page}
                    onNext={handleNextPage}
                    onPrevious={handlePreviousPage}
                    isLastPage={isLastPage}
                />
            </PaginationContainer>
        </AllCards>
    );
}
