'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  ShoppingCart, 
  User, 
  AlignJustify, 
  Search, 
  AlignLeft 
} from 'lucide-react';
import { useStoreCart } from '@/store/cart.store';

const NavbarComponent = () => {
  const { cartItems } = useStoreCart(); 
  const [hoverCart, setHoverCart] = useState(false);

  return (
    <>
      {/* ... your topbar code ... */}

      {/* Main Navbar */}
      <div className="grid grid-rows-2 md:flex items-center p-4 bg-white shadow fixed w-full z-10">
        <div className="flex gap-2 justify-center items-center w-[50%]">
          <button className="rounded-xl bg-[#F3F9FB] p-3">
            <AlignLeft color="#008ECC" size={30}/>
          </button>
          <h1 className="flex text-3xl font-bold text-[#008ECC]">MegaMart</h1>
        </div>

        <div className="flex items-center gap-8 w-full justify-center">
          {/* Search */}
          <div>
            <button className="flex items-center gap-3 md:gap-12 md:p-4 rounded-2xl bg-[#F3F9FB] text-[10px] md:text-lg">
              <Search color="#008ECC"/> Search essentials, groceries and more...  
              <AlignJustify color="#008ECC" />
            </button>
          </div>

          {/* User */}
          <div className="flex gap-4 border-r border-gray-300 px-8">
            <User />
            <p>Sign Up / Sign in</p>
          </div>

          {/* Cart with hover dropdown */}
          <div 
            className="relative cursor-pointer"
            onMouseEnter={() => setHoverCart(true)}
            onMouseLeave={() => setHoverCart(false)}
          >
            <ShoppingCart size={30} color="#008ECC"/>
            <span className="absolute -top-2 left-5 rounded-full bg-red-700 text-white flex justify-center items-center text-xs w-5 h-5">
              {cartItems.length}
            </span>
            <p className="text-sm mt-1">Cart</p>

            {/* Hover Dropdown */}
            {hoverCart && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-20">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-sm">Your cart is empty</p>
                ) : (
                  <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex justify-between items-center py-2">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm font-semibold">x{item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-3 text-center">
                  <Link href="/cart" className="text-[#008ECC] text-sm font-medium hover:underline">
                    View Full Cart
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;