import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Typography from '@/src/components/Typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Davide Bruno | Software Engineer & Developer',
  description: 'Learn more about Davide Bruno - a passionate software engineer with expertise in web development, cloud technologies, and innovative solutions.',
  openGraph: {
    title: 'About Davide Bruno | Software Engineer & Developer',
    description: 'Learn more about Davide Bruno - a passionate software engineer with expertise in web development, cloud technologies, and innovative solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Davide Bruno | Software Engineer & Developer',
    description: 'Learn more about Davide Bruno - a passionate software engineer with expertise in web development, cloud technologies, and innovative solutions.',
  },
}

export default function About() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <Card as="section" className="transform transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700/30">
          <Typography variant="lg" className="text-center leading-relaxed">
            Software Engineer passionate about building innovative solutions and creating impactful digital experiences.
          </Typography>
        </Card>

        {/* Bio Section */}
        <section className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="pl-6">
            <Typography variant="h2" className="mb-6">Bio</Typography>
            <Typography variant="md" secondary className="leading-relaxed">
              [Your compelling bio will go here. This is a placeholder for your personal story,
              professional journey, and what drives you in your career.]
            </Typography>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <Typography variant="h2" className="mb-8">Skills & Expertise</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-gray-700/30">
              <Typography variant="h3" className="mb-4">Technical Skills</Typography>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                  <Typography variant="md">Web Development (Frontend & Backend)</Typography>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                  <Typography variant="md">Cloud Technologies</Typography>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                  <Typography variant="md">DevOps & CI/CD</Typography>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                  <Typography variant="md">Database Management</Typography>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                  <Typography variant="md">System Architecture</Typography>
                </li>
              </ul>
            </Card>
            <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-gray-700/30">
              <Typography variant="h3" className="mb-4">Soft Skills</Typography>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                  <Typography variant="md">Problem Solving</Typography>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                  <Typography variant="md">Team Collaboration</Typography>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                  <Typography variant="md">Project Management</Typography>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                  <Typography variant="md">Technical Leadership</Typography>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></span>
                  <Typography variant="md">Communication</Typography>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <Card as="section" className="text-center transform transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-700/30">
          <Typography variant="h2" className="mb-6">Let&apos;s Connect</Typography>
          <Typography variant="lg" secondary className="mb-8 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out!
          </Typography>
          <Button
            as="a"
            href="/contact"
            size="lg"
            className="transform transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </Button>
        </Card>
      </div>
    </div>
  );
}
