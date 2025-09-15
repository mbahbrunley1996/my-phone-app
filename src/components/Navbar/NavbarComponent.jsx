'use client';

export const dynamic = "force-dynamic";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  ShoppingCart, 
  User, 
  AlignJustify, 
  Search, 
  AlignLeft,
  Menu,
  XIcon // 
} from 'lucide-react';
import { useStoreCart } from '../../store/cart.store';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ModeToggle } from '../ModeToggle/ModeToggle';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';


const NavbarComponent = () => {
  const { cartItems } = useStoreCart(); 
  const [hoverCart, setHoverCart] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
  

      {/* Main Navbar */}
      <div className="grid grid-rows-2 md:flex items-center p-4 bg-blue-600 shadow fixed w-full z-33">
        <div className="flex justify-center items-center gap-4 w-[60%] ml-15">
          <div className='flex gap-2'>

          {/* <button 
          className="rounded-xl bg-[#F3F9FB] p-3 md:hidden"
          onCLick={()=>setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X color="#008ECC" size={28} /> :  <Menu color="#008ECC" size={28} />}
          </button> */}
          {/* <button
              className="md:hidden p-2 bg-[#F3F9FB] rounded"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <XIcon color="#008ECC" size={28} /> : <Menu color="#008ECC" size={28} />}
              
            </button> */}
          </div>
          <div className="">
          <h1 className="flex text-5xl items-center font-bold text-[#008ECC]">MegaMart</h1>
          </div>
          <div className='flex ml-15 md:flex gap-6 font-semibold text-white list-none'>
            <li><Link href="/"  className="hover:text-[#008ECC] underline">Home</Link></li>
            <li><Link href="/contact"  className="hover:text-[#008ECC]">Contact Page</Link></li>
          </div>
        </div>

        <div className="flex items-center gap-8 w-full justify-center">
          {/* Search */}
          <div className='flex items-center'>
            <input className="flex items-center gap-3 md:gap-12 md:p-2 rounded-3xl w-[400px] bg-[#F3F9FB] text-black text-[5px] md:text-sm"
            placeholder="Search essentials, groceries and more..."
            /><Search className="relative bottom-0 right-7" color="#008ECC"/>
              {/* <ul className="border">
             <Search className="relative top-20" color="#008ECC"/> Search essentials, groceries and more...  
              <AlignJustify color="#008ECC" />
               </ul> */}
          </div>
           
          {/* User */}
          <div className="flex gap-4 border-r border-gray-300 px-8">
            <User />
            <p>Sign Up / Sign in</p>
          </div>

          {/* Cart with hover dropdown */}
          <div 
            className="relative cursor-pointer flex gap-4"
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
          <div>
             <DropdownMenu>
      <DropdownMenuTrigger className="text-black" asChild>
        <Menu color="#000000" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
             {/* {SignIn Button} */}
          <SignedOut> <SignInButton  /> </SignedOut>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
          </div>
          <div className='text-black border rounded-md border-gray-300 shadow'>
            <ModeToggle />
          </div>
          <UserButton />
        </div>
      </div>
    </>
  );
}

export default NavbarComponent;