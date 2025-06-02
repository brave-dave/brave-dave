import Navigation from '@/src/components/Navigation';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
