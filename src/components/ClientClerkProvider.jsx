'use client';

import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';

// ✅ Get key from env once here
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function ClientClerkProvider({ children }) {
  // During build (static prerender) this might be undefined.
  // We guard against it so build never fails.
  if (!publishableKey) {
    // Render children without Clerk if key not available
    return <>{children}</>;
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}

