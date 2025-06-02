import Card from '@/src/components/Card';
import Container from '@/src/components/Container';
import Typography from '@/src/components/Typography';
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
    <Container>
      <Card as="section" className="text-center transform transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700/30">
        <Typography variant="h1" className="mb-6">🚧 Work in Progress</Typography>
        <Typography variant="lg" secondary>
          Something awesome is coming soon. Stay tuned!
        </Typography>
      </Card>
    </Container>
  );
}
