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
            return {
              items: state.items.map((item) => {
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item;
              }),
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
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, qty: item.qty + delta } : item,
          ),
        }));
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
