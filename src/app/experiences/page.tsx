import Card from '@/src/components/Card';
import Container from '@/src/components/Container';
import Tag from '@/src/components/Tag';
import Typography from '@/src/components/Typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Experience | Brave Dave',
  description: 'Full-stack developer specializing in React.js, Node.js, and modern web technologies. Explore my professional journey and technical expertise.',
  openGraph: {
    title: 'Professional Experience | Brave Dave',
    description: 'Full-stack developer specializing in React.js, Node.js, and modern web technologies. Explore my professional journey and technical expertise.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Experience | Brave Dave',
    description: 'Full-stack developer specializing in React.js, Node.js, and modern web technologies.',
  },
}

const technologies = [
  'React.js',
  'Node.js',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'GraphQL',
  'AWS',
  'Docker',
] as const;

const expertise = [
  'Building responsive and intuitive user interfaces',
  'Developing scalable backend architectures',
  'Implementing modern web development best practices',
  'Creating engaging user experiences',
  'Cloud infrastructure and deployment',
  'Performance optimization',
] as const;

export default function Experiences() {
  return (
    <Container>
      <Card as="section" className="transform transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700/30">
        <Typography variant="h2" className="mb-6">Professional Experience</Typography>
        <Typography variant="lg" secondary className="mb-8">
          Specializing in modern web development with a focus on creating robust, scalable applications
          using React.js and Node.js. Experienced in building dynamic user interfaces and implementing
          efficient backend solutions.
        </Typography>

        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <Typography variant="h3" className="mb-4">Technical Expertise</Typography>
        <ul className="space-y-3">
          {expertise.map((item) => (
            <li key={item} className="flex items-center">
              <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
              <Typography variant="md">{item}</Typography>
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  );
}
