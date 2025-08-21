import { create } from "zustand";

export const useStoreCart = create((set) => ({
  cartItems: [],

  toggleItem: (event) =>
    set((state) => {
      const existing = state.cartItems.find((item) => item.id === event.id);
      if (existing) {
        return {
          cartItems: state.cartItems.filter((item) => item.id !== event.id),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...event, quantity: 1 }],
        };
      }
    }),

  removeItem: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cartItems: [] }),

  increaseQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
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