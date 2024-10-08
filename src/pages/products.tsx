import { useState } from "react";
import { StoreItem } from "../components/products/storeitems";
import useFetch from "../hooks/fetch";
import { AllCards, SearchContainer } from "../styles/products/product-styling";
import Pagination from "../components/pagination";
import { PaginationContainer } from "../styles/pagination";
import { ProductPageContainer } from "../styles/contact/containers";
import { Loading } from "../components/loading";
import { useSearchStore } from "../hooks/search-context";

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
    description: string;
}

export function Products() {
    const { searchQuery, setSearchQuery } = useSearchStore();
    const [page, setPage] = useState(1);
    const limit = 9;

    const fetchUrl = searchQuery
        ? `https://v2.api.noroff.dev/online-shop`
        : `https://v2.api.noroff.dev/online-shop?limit=${limit}&page=${page}`;

    const { data, loading, error } = useFetch<Product[]>(fetchUrl);

    const isLastPage = searchQuery ? true : data ? data.length < limit : false;

    const filteredData = data?.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleNextPage = () => {
        if (!isLastPage) setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    if (loading) return <Loading />;
    if (error)
        return <div>Error fetching products. Please try again later.</div>;

    return (
        <ProductPageContainer>
            <SearchContainer>
                <form action="search">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>
            </SearchContainer>

            <AllCards>
                {filteredData?.map((item: Product) => (
                    <StoreItem key={item.id} {...item} />
                ))}

                {!searchQuery && (
                    <PaginationContainer>
                        <Pagination
                            currentPage={page}
                            onNext={handleNextPage}
                            onPrevious={handlePreviousPage}
                            isLastPage={isLastPage}
                        />
                    </PaginationContainer>
                )}
            </AllCards>
        </ProductPageContainer>
    );
}
