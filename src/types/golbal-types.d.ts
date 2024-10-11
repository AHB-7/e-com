declare global {
    interface CartItem {
        id: number;
        quantity: number;
        title: string;
        price: number;
        discountedPrice?: number;
        imageUrl: string;
    }

    interface ShoppingCartState {
        cartItems: CartItem[];
        cartQuantity: number;
        getItemsQuantity: (id: number) => number;
        increaseQuantity: (
            id: number,
            title: string,
            price: number,
            imageUrl: string,
            discountedPrice?: number
        ) => void;
        decreaseQuantity: (id: number) => void;
        deleteQuantity: (id: number) => void;
        clearCart: () => void;
    }

    interface PaginationProps {
        currentPage: number;
        onNext: () => void;
        onPrevious: () => void;
        isLastPage: boolean;
    }

    type CartItemProps = Omit<CartItem, "quantity"> & { quantity: number };

    type SearchState = {
        searchQuery: string;
        setSearchQuery: (query: string) => void;
    };

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
        reviews?: Array<{
            rating: number;
            id: string;
            username: string;
            description: string;
        }>;
    }
}

export {};
