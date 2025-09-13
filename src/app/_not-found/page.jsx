"use client";
export const dynamic = "force-dynamic";

import React from "react";
import NavbarComponent from "@/components/Navbar/NavbarComponent";

export default function NotFoundPage() {
  return (
    <>
      <NavbarComponent />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
        <p className="text-gray-500 mb-6">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 font-semibold">Go back home</a>
      </div>
    </>
  );
}

