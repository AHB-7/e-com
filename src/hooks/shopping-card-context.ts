import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useShoppingCartStore = create<ShoppingCartState>()(
    persist(
        (set, get) => ({
            cartItems: [],
            cartQuantity: 0,

            getItemsQuantity: (id: number) => {
                const item = get().cartItems.find((item) => item.id === id);
                return item ? item.quantity : 0;
            },

            increaseQuantity: (
                id: number,
                title: string,
                price: number,
                imageUrl: string,
                discountedPrice?: number
            ) => {
                set((state) => {
                    const itemExists = state.cartItems.find(
                        (item) => item.id === id
                    );

                    if (!itemExists) {
                        return {
                            cartItems: [
                                ...state.cartItems,
                                {
                                    id,
                                    quantity: 1,
                                    title,
                                    price,
                                    imageUrl,
                                    discountedPrice,
                                },
                            ],
                            cartQuantity: state.cartQuantity + 1,
                        };
                    } else {
                        return {
                            cartItems: state.cartItems.map((item) =>
                                item.id === id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                            cartQuantity: state.cartQuantity + 1,
                        };
                    }
                });
            },

            decreaseQuantity: (id: number) => {
                set((state) => {
                    const item = state.cartItems.find((item) => item.id === id);

                    if (item && item.quantity === 1) {
                        return {
                            cartItems: state.cartItems.filter(
                                (item) => item.id !== id
                            ),
                            cartQuantity: state.cartQuantity - 1,
                        };
                    } else {
                        return {
                            cartItems: state.cartItems.map((item) =>
                                item.id === id
                                    ? { ...item, quantity: item.quantity - 1 }
                                    : item
                            ),
                            cartQuantity: state.cartQuantity - 1,
                        };
                    }
                });
            },

            deleteQuantity: (id: number) => {
                set((state) => ({
                    cartItems: state.cartItems.filter((item) => item.id !== id),
                    cartQuantity: state.cartItems.reduce(
                        (total, item) =>
                            item.id !== id ? total + item.quantity : total,
                        0
                    ),
                }));
            },

            clearCart: () => set({ cartItems: [], cartQuantity: 0 }),
        }),
        { name: "shopping-cart-storage" }
    )
);
