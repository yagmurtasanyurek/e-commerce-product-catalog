import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        set((state) => {
          const exists = state.items.find((item) => item.id === product.id);

          if (exists) {
            if (exists.qty >= 10) return { items: state.items };
            return {
              items: state.items.map((item) =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
              ),
            };
          }

          return {
            items: [...state.items, { ...product, qty: 1 }],
          };
        });
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQty: (id, delta) => {
        set((state) => {
          const item = state.items.find((i) => i.id === id);
          // If item is at 1 and user hits minus, REMOVE it
          if (item && item.qty === 1 && delta === -1) {
            return {
              items: state.items.filter((i) => i.id !== id),
            };
          }
          return {
            items: state.items.map((i) =>
              i.id === id ? { ...i, qty: Math.min(i.qty + delta, 10) } : i,
            ),
          };
        });
      },
      clearCart: () => {
        set({ items: [] });
      },
      totalItem: () => get().items.reduce((acc, i) => acc + i.qty, 0),
      totalPrice: () =>
        get().items.reduce((acc, i) => acc + i.price * i.qty, 0),
    }),
    {
      name: "cart-storage",
    },
  ),
);
