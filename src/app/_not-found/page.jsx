
// ✅ This tells Next.js not to prerender this page at build time
export const dynamic = 'force-dynamic';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        404 – Page Not Found
      </h1>
      <p style={{ marginTop: '1rem' }}>
        Sorry, the page you’re looking for doesn’t exist.
      </p>
    </div>
  );
}
