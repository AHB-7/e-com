import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/shopping-cart";

type ShoppingCardProviderProps = {
    children: ReactNode;
};

type CartItem = {
    id: number;
    quantity: number;
    title: string;
    price: number;
    imageUrl: string;
};

type ShoppingCartContextValue = {
    openCart: () => void;
    closeCart: () => void;
    cartQuantity: number;
    cartItems: CartItem[];
    getItemsQuantity: (id: number) => number;
    increaseQuantity: (
        id: number,
        title: string,
        price: number,
        imageUrl: string
    ) => void;
    decreaseQuantity: (id: number) => void;
    deleteQuantity: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextValue);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCardProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    // Get quantity of a specific item
    function getItemsQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    // Increase quantity, or add item with product details if it's new
    function increaseQuantity(
        id: number,
        title: string,
        price: number,
        imageUrl: string
    ) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [
                    ...currItems,
                    { id, quantity: 1, title, price, imageUrl },
                ];
            } else {
                // Increase quantity of existing item
                return currItems.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
        });
    }

    // Decrease item quantity or remove if it reaches zero
    function decreaseQuantity(id: number) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        });
    }

    // Remove item from cart
    function deleteQuantity(id: number) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id);
        });
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemsQuantity,
                increaseQuantity,
                decreaseQuantity,
                deleteQuantity,
                closeCart,
                openCart,
                cartItems,
                cartQuantity,
            }}
        >
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
}
