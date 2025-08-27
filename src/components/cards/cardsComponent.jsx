"use client";
import React from "react";
import { trips } from "../../data/smartphonesData";
import { useStoreCart } from "@/store/cart.store";
import { ShoppingCart, Heart } from "lucide-react";

const CardsComponent = () => {
  const { addItem } = useStoreCart();

  return (
    <div className="group py-20 space-y-5 w-[80%] flex flex-col justify-center ml-[10%]">
      <div className="border-b border-gray-300 pb-4">
        <p className="underline underline-offset-20 text-2xl text-gray-400 font-bold decoration-[#008ECC] decoration-4">
          Grab the best deal on{" "}
          <a className="text-[#008ECC]" href="#">
            Smartphones
          </a>
        </p>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {trips.map((item) => (
          <div
            key={item.id}
            className="relative border border-gray-100 w-[220px] rounded-2xl cursor-pointer bg-white group"
          >
            {/* Image with hover overlay */}
            <div className="relative">
              <img
                src="/image3.png"
                alt={item.name}
                className="w-full h-40 object-cover rounded-t-2xl"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl flex items-center justify-center gap-4">
                {/* Heart Icon */}
                <button
                  className="bg-white p-2 rounded-full shadow hover:bg-red-100 transition"
                  onClick={() => addItem(item)} // you can separate wishlist store if needed
                >
                  <Heart className="text-red-500" size={20} />
                </button>

                {/* Cart Icon */}
                <button
                  className="bg-white p-2 rounded-full shadow hover:bg-green-100 transition"
                  onClick={() => addItem(item)}
                >
                  <ShoppingCart className="text-green-600" size={20} />
                </button>
              </div>
            </div>

            {/* Card Details */}
            <div className="space-y-2 p-2 text-sm">
              <p className="font-semibold">{item.name}</p>
              <div className="flex gap-4">
                <p className="font-bold">₹{item.price}</p>
                <p className="line-through">₹{item.oldPrice}</p>
              </div>
              <div className="border-t pt-2 border-gray-300 flex justify-between items-center">
                <button className="text-[#249B3E] font-semibold">
                  Save - ₹{item.saveAmount}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsComponent;

