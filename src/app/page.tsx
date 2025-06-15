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
    null
  );
}
