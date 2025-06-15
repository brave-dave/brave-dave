import { TailwindComponent } from '@/src/components/TailwindComponent';
import { Typography } from '@/src/components/Typography';

export const IntroCard = () => (
  <TailwindComponent as="div">
    <Typography variant="displayMediumEmphasized">
      Hi, I&apos;m Davide Bruno
    </Typography>
    <Typography variant="bodyLarge">
      Senior Software Engineer, focused on building great experiences through
      React, TypeScript, and care for detail.
    </Typography>
    <Typography variant="bodyLarge">
      Currently based in Italy and Gothenburg, open to remote work and exciting
      collaborations.
    </Typography>
  </TailwindComponent>
);
