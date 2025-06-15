import { TailwindComponent } from '@/src/components/TailwindComponent';
import { SectionStyles } from './styles';

export function AboutSection() {
  return (
    <TailwindComponent as="section" styles={SectionStyles}>
      I&apos;m a frontend-focused software engineer with 7+ years of
      professional experience. My journey began in game development, moved into
      scalable web apps, and now I&apos;m helping teams ship fast, reliable, and
      accessible features. Whether i&apos;s React, TypeScript, or AWS-based
      deployments, I enjoy creating UIs that are robust and easy to use—for devs
      and end-users alike. Key Skills Frontend: React, TypeScript, Next.js,
      Zustand, Tailwind CSS Backend: Node.js, AWS Lambda, DynamoDB Tools: Figma,
      Puppeteer, Storybook, GitHub Actions Practices: Accessibility (WCAG),
      Testing (Jest), Agile, CI/CD{' '}
    </TailwindComponent>
  );
}
