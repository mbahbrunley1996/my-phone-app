"use client";
export const dynamic = "force-dynamic";

import React from "react";
import { useStoreCart } from "@/store/cart.store";
import NavbarComponent from "@/components/Navbar/NavbarComponent";

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, clearCart } = useStoreCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <>
      <NavbarComponent />
      <div className="h-full flex flex-col p-5">
        <h1 className="text-3xl font-bold mb-5">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty 🛒</p>
        ) : (
          <>
            <div className="flex flex-col gap-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white shadow-md p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || "/placeholder.png"}
                      alt={item.title || "Product"}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="font-bold text-lg">{item.title || "Unnamed Product"}</h2>
                      <p className="text-gray-500">${(item.price || 0).toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => item.quantity > 1 && decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-600 rounded"
                    >
                      -
                    </button>
                    <span className="text-black">{item.quantity || 1}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-red-600 rounded"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex items-center gap-5">
                    <span className="font-bold text-green-600">
                      ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-gray-100 rounded-xl flex flex-col gap-3">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={clearCart}
                className="bg-red-500 text-white py-3 rounded-xl mt-3 font-bold"
              >
                Clear Cart
              </button>
              <button className="bg-green-500 text-white py-3 rounded-xl mt-3 font-bold">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;




// "use client";
// import React from "react";
// import { useStoreCart } from "@/store/cart.store";
// import NavbarComponent from "@/components/Navbar/NavbarComponent";
// import React, { useState } from "react";

// const CartItem = ({ item }) => {
//   const [showStore, setShowStore] = useState(false);

//   return (
//     <div
//       className="relative p-4 bg-white shadow rounded-lg flex justify-between items-center cursor-pointer"
//       onMouseEnter={() => setShowStore(true)}
//       onMouseLeave={() => setShowStore(false)}
//     >
//       {/* Item Info */}
//       <div>
//         <h3 className="font-semibold">{item.name}</h3>
//         <p className="text-sm text-gray-500">
//           ${item.price} x {item.quantity}
//         </p>
//       </div>

//       <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>

//       {/* Hover Store */}
//       {showStore && (
//         <div className="absolute top-full mt-2 right-0 w-64 bg-gray-100 rounded-xl shadow-lg p-4 z-50">
//           <h4 className="font-semibold mb-2">Store Info</h4>
//           <p className="text-sm text-gray-600">Sold by: {item.storeName}</p>
//           <p className="text-sm text-gray-600">Location: {item.storeLocation}</p>
//           <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//             Visit Store
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartItem;