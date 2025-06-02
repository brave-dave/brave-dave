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
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-gray-600">
          Software Engineer passionate about building innovative solutions and creating impactful digital experiences.
        </p>
      </section>

      {/* Bio Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Bio</h2>
        <div className="prose prose-lg">
          <p className="mb-4">
            [Your compelling bio will go here. This is a placeholder for your personal story,
            professional journey, and what drives you in your career.]
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Technical Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Web Development (Frontend & Backend)</li>
              <li>Cloud Technologies</li>
              <li>DevOps & CI/CD</li>
              <li>Database Management</li>
              <li>System Architecture</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-3">Soft Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Project Management</li>
              <li>Technical Leadership</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
        <p className="text-gray-600 mb-6">
          Interested in working together? Feel free to reach out!
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
