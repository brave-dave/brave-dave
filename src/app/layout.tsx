import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-white shadow flex justify-between items-center">
          <h1 className="text-xl font-bold">Davide Bruno</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
