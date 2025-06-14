import Card from '@/src/components/Card';
import Container from '@/src/components/Container';
import Typography from '@/src/components/Typography';
import { ContactForm } from '@/src/sections/Contact/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Brave Dave',
  description: 'Get in touch with Brave Dave, a full-stack developer specializing in React.js and Node.js. Let&apos;s discuss your next web development project.',
  openGraph: {
    title: 'Contact | Brave Dave',
    description: 'Get in touch with Brave Dave, a full-stack developer specializing in React.js and Node.js. Let&apos;s discuss your next web development project.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Brave Dave',
    description: 'Get in touch with Brave Dave, a full-stack developer specializing in React.js and Node.js.',
  },
}

export default function Contact() {

  return (
    <Container>
      <Card as="section" className="transform transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700/30">
        <Typography variant="h2" className="mb-6">Get in Touch</Typography>
        <Typography variant="lg" secondary className="mb-8">
          I&apos;m always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </Typography>
      </Card>
      <ContactForm />
      <Card as="section" className="transform transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700/30">
        <Typography variant="h3" className="mb-4">Other Ways to Connect</Typography>
        <Typography variant="md" secondary className="mb-6">
          Feel free to reach out through any of these platforms:
        </Typography>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="mr-3">📧</span>
            <a href="mailto:contact@bravedave.dev" className="hover:opacity-80 transition-opacity">
              <Typography variant="md">contact@bravedave.dev</Typography>
            </a>
          </li>
          <li className="flex items-center">
            <span className="mr-3">💼</span>
            <a href="https://linkedin.com/in/bravedave" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Typography variant="md">LinkedIn</Typography>
            </a>
          </li>
          <li className="flex items-center">
            <span className="mr-3">🐙</span>
            <a href="https://github.com/bravedave" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Typography variant="md">GitHub</Typography>
            </a>
          </li>
        </ul>
      </Card>
    </Container>
  );
}
