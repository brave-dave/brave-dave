import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brave Dave',
  description: 'Something awesome is coming soon. Stay tuned!',
  openGraph: {
    title: 'Brave Dave',
    description: 'Something awesome is coming soon. Stay tuned!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brave Dave',
    description: 'Something awesome is coming soon. Stay tuned!',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">🚧 Work in Progress</h1>
      <p className="text-lg text-gray-600">Something awesome is coming soon. Stay tuned!</p>
    </main>
  );
}
