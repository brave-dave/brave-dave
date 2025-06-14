import { AboutSection } from '../sections/About';
import { ExperiencesSection } from '../sections/Experiences';
import { IntroSection } from '../sections/Intro';
import './globals.css';

export default function Layout() {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-gray-50 dark:bg-gray-900">
        <main><IntroSection /><AboutSection /><ExperiencesSection /></main>
      </body>
    </html>
  );
}
