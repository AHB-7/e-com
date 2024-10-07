import { useState } from "react";
import { StoreItem } from "../components/storeitems";
import useFetch from "../hooks/fetch";
import { AllCards, SearchContainer } from "../styles/product-styling";
import Pagination from "../components/pagination";
import { PaginationContainer } from "../styles/pagination";
import { useSearch } from "../hooks/search-context";
import { ProductPageContainer } from "../styles/containers";
import { Loading } from "../components/loading";

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
    const { setSearchQuery, searchQuery } = useSearch();
    const [page, setPage] = useState(1);
    const limit = 9;

    const fetchUrl = searchQuery
        ? `https://v2.api.noroff.dev/online-shop` // Fetch all items if searchQuery is present
        : `https://v2.api.noroff.dev/online-shop?limit=${limit}&page=${page}`; // Paginated fetch when no search query

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
