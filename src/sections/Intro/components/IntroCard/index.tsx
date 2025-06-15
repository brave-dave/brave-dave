import { Card } from '@/src/components/Card';
import { Typography } from '@/src/components/Typography';
import { introCardStyles } from './styles';

export const IntroCard = () => (
  <Card styles={introCardStyles.root}>
    <Typography
      variant="displaySmallEmphasized"
      as="h1"
      styles={introCardStyles.title}
    >
      Hi, I&apos;m Bruno Davide
    </Typography>
    <Typography as="p" variant="bodyLarge">
      Senior Software Engineer, focused on building great experiences through
      React, TypeScript, and care for detail.
    </Typography>
    <Typography
      as="p"
      variant="bodyLarge"
      styles={introCardStyles.secondParagraph}
    >
      Currently based in Italy and Gothenburg, open to remote work and exciting
      collaborations.
    </Typography>
  </Card>
);
