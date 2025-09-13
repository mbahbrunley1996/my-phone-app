'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import trips from '../../data';

const TripPage = () => {
  const params = useParams();
  const slug = params.slug;

  // Find the event matching the slug
  const tripsItem = trips.find((trip) => trip.slug === slug);

  // Handle 404 (if slug not found)
  if (!tripsItem) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{tripsItem.name}</h1>
      <img src={tripsItem.img} alt={tripsItem.name} className="w-64 mt-4" />
      <p className="mt-2 text-xl text-gray-600">Price: ${tripsItem.price}</p>
      <p className="mt-1 text-gray-500 text-xl line-through">Old Price: ${tripsItem.oldPrice}</p>
      <p className="mt-2 text-xl text-gray-600">Save Amount: ${tripsItem.saveAmount}</p>
       <p className="mt-2 text-xl text-gray-600">Quantiy: ${tripsItem.quantity}</p>
    </div>
  );
};

export default TripPage;
