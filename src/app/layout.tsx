import { Divider } from '../components/Divider';
import { AboutSection } from '../sections/About';
import { ContactSection } from '../sections/Contact';
import { ExperiencesSection } from '../sections/Experiences';
import { IntroSection } from '../sections/Intro';
import './globals.css';

export default function Layout() {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-gray-50 dark:bg-gray-900">
        <main>
          <IntroSection />
          <Divider />
          <AboutSection />
          <Divider />
          <ExperiencesSection />
          <Divider />
          <ContactSection />
        </main>
      </body>
    </html>
  );
}
