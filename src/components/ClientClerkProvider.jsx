'use client';

import { ClerkProvider } from '@clerk/nextjs';

// ✅ Get key once from env
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function ClientClerkProvider({ children }) {
  // If build time can’t find key, still render without ClerkProvider
  if (!publishableKey) {
    return <>{children}</>;
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}
