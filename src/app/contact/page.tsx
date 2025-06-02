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
    <main className="min-h-screen flex flex-col items-center p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>

      <div className="w-full max-w-2xl space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-gray-700 mb-6">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Connect</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Feel free to reach out through any of these platforms:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <span className="mr-2">📧</span>
                <a href="mailto:contact@bravedave.dev" className="text-blue-600 hover:underline">
                  contact@bravedave.dev
                </a>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">💼</span>
                <a href="https://linkedin.com/in/bravedave" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">🐙</span>
                <a href="https://github.com/bravedave" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
