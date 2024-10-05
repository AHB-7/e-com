import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/local-storage";

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type CartItem = {
    id: number;
    quantity: number;
    title: string;
    price: number;
    discountedPrice?: number;
    imageUrl: string;
};

type ShoppingCartContextValue = {
    cartQuantity: number;
    cartItems: CartItem[];
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
};

const ShoppingCartContext = createContext({} as ShoppingCartContextValue);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shoping-cart",
        []
    );

    const cartQuantity = cartItems.reduce(
        (totalQuantity, item) => totalQuantity + item.quantity,
        0
    );

    function getItemsQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    function increaseQuantity(
        id: number,
        title: string,
        price: number,
        imageUrl: string,
        discountedPrice?: number
    ) {
        setCartItems((currItems) => {
            const itemExists = currItems.find((item) => item.id === id);

            if (!itemExists) {
                return [
                    ...currItems,
                    {
                        id,
                        quantity: 1,
                        title,
                        price,
                        discountedPrice,
                        imageUrl,
                    },
                ];
            } else {
                return currItems.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
        });
    }

    function decreaseQuantity(id: number) {
        setCartItems((currItems) => {
            const item = currItems.find((item) => item.id === id);

            if (item && item.quantity === 1) {
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

    function deleteQuantity(id: number) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id);
        });
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                cartQuantity,
                cartItems,
                getItemsQuantity,
                increaseQuantity,
                decreaseQuantity,
                deleteQuantity,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}
