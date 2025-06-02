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

export default function Experiences() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>

      <div className="space-y-8 w-full">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Full-Stack Development</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Specializing in modern web development with a focus on creating robust, scalable applications
              using React.js and Node.js. Experienced in building dynamic user interfaces and implementing
              efficient backend solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React.js</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">JavaScript</span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Building responsive and intuitive user interfaces</li>
            <li>Developing scalable backend architectures</li>
            <li>Implementing modern web development best practices</li>
            <li>Creating engaging user experiences</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
