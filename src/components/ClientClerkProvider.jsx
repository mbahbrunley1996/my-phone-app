
'use client';

import { ClerkProvider } from '@clerk/nextjs';

export default function ClientClerkProvider({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}
