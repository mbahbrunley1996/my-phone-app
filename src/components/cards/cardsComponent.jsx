'use client';
import React from 'react';
import { trips } from '../../data/smartphonesData';
import { useStoreCart } from '@/store/cart.store';

const CardsComponent = () => {
  const { setHoverItem, clearHoverItem } = useStoreCart();

  return (
    <div className='py-20 space-y-5 w-[80%] flex flex-col justify-center ml-[10%]'>
      <div className='border-b border-gray-300 pb-4'>
        <p className='underline underline-offset-20 text-2xl text-gray-400 font-bold decoration-[#008ECC] decoration-4'>
          Grab the best deal on <a className='text-[#008ECC]' href="#">Smartphones</a>
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {trips.map((item) => (
          <div
            key={item.id}
            className='border border-gray-100 w-[220px] rounded-2xl cursor-pointer'
            onMouseEnter={() => setHoverItem(item)}   // 👈 set hover item
            onMouseLeave={() => clearHoverItem()}     // 👈 clear hover item
          >
            <div className="relative">
              <img src="/image3.png" alt={item.name} className="w-full h-40 object-cover rounded-t-2xl"/>
            </div>
            <div className='space-y-2 p-2 text-sm'>
              <p className='font-semibold'>{item.name}</p>
              <div className='flex gap-4'>
                <p className='font-bold'>₹{item.price}</p>
                <p className='line-through'>₹{item.oldPrice}</p>
              </div>
              <div className='border-t pt-2 border-gray-300 flex justify-between items-center'>
                <button className='text-[#249B3E] font-semibold'>Save - ₹{item.saveAmount}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsComponent;