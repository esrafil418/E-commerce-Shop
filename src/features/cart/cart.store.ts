import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "./types";

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeItem: (id: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((entry) => entry.id === item.id);

          if (existing) {
            return {
              items: state.items.map((entry) =>
                entry.id === item.id
                  ? { ...entry, quantity: entry.quantity + quantity }
                  : entry,
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity }],
          };
        }),
      increment: (id) =>
        set((state) => ({
          items: state.items.map((entry) =>
            entry.id === id
              ? { ...entry, quantity: entry.quantity + 1 }
              : entry,
          ),
        })),
      decrement: (id) =>
        set((state) => ({
          items: state.items
            .map((entry) =>
              entry.id === id
                ? { ...entry, quantity: entry.quantity - 1 }
                : entry,
            )
            .filter((entry) => entry.quantity > 0),
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((entry) => entry.id !== id),
        })),
      clear: () => set({ items: [] }),
    }),
    { name: "verve-cart" },
  ),
);

export function useCartCount() {
  return useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0),
  );
}

export function useCartTotal() {
  return useCartStore((state) =>
    state.items.reduce((total, item) => total + item.price * item.quantity, 0),
  );
}
