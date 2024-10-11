import { useState } from "react";
import { StoreItem } from "../components/products/storeitems";
import useFetch from "../hooks/fetch";
import { AllCards, SearchContainer } from "../styles/products/product-styling";
import { PaginationContainer } from "../styles/products/pagination";
import { ProductPageContainer } from "../styles/layoutes/containers";
import { useSearchStore } from "../hooks/search-context";
import { Loading } from "../components/layouts/loading";
import Pagination from "../components/layouts/pagination";
import { MetaContent } from "../components/meta-content/meta";

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
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    if (loading) return <Loading />;
    if (error)
        return <div>Error fetching products. Please try again later.</div>;

    return (
        <ProductPageContainer>
            <MetaContent
                title="Products"
                description="Browse our wide selection of high-quality products, including the latest trends and best deals. Shop now for fast shipping and secure checkout."
                keywords="products, shop, online, store, buy, purchase, deals, discounts"
            />
            <SearchContainer>
                <h1>Products</h1>
                <form action="search" onSubmit={handleSubmit}>
                    <label htmlFor="search">
                        {" "}
                        <p>search</p>
                    </label>
                    <input
                        id="search"
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
