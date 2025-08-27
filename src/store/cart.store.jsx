import { create } from "zustand";

export const useStoreCart = create((set, get) => ({
  cartItems: [],

  // Add item only if it doesn't exist
  addToCart: (item) =>
    set((state) => {
      const exists = state.cartItems.find((i) => i.id === item.id);
      if (exists) return state; // do nothing if already in cart
      return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
    }),

  // Remove item by id safely
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  // Toggle add/remove
  toggleItem: (item) => {
  if (!item?.id) return; // safety
  const exists = get().cartItems.find((i) => i.id === item.id);
  if (exists) {
    get().removeFromCart(item.id);
  } else {
    get().addToCart(item);
  }
},

  // Check if in cart
  isInCart: (id) => get().cartItems.some((item) => item.id === id),

  // Quantity controls
  increaseQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      ),
    })),

  // Clear all
  clearCart: () => set({ cartItems: [] }),
}));

































// {/* <div className="relative group p-4 bg-white shadow rounded-lg flex justify-between items-center">
//   <div>
//     <h3 className="font-semibold">iPhone 15</h3>
//     <p className="text-sm text-gray-500">$999 x 1</p>
//   </div>

//   <span className="font-bold">$999</span>

//   {/* Store Info on hover */}
//   <div className="absolute top-full mt-2 right-0 w-64 bg-gray-100 rounded-xl shadow-lg p-4 hidden group-hover:block">
//     <h4 className="font-semibold mb-2">Store Info</h4>
//     <p className="text-sm text-gray-600">Sold by: Apple Store</p>
//     <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//       Visit Store
//     </button>
//   </div>
// </div> */}