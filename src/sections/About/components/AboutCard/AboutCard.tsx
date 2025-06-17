import { Card } from '@/src/components/Card';
import { Typography } from '@/src/components/Typography';

export const AboutCard = () => {
  return (
    <Card>
      <Typography>
        <Typography as="p" variant="bodyLarge">
          I&apos;m a frontend-focused software engineer with 7+ years of
          professional experience.
        </Typography>
        <Typography as="p" variant="bodyLarge">
          My journey began in game development, moved into scalable web apps,
          and now I&apos;m helping teams ship fast, reliable, and accessible
          features. Whether i&apos;s React, TypeScript, or AWS-based
          deployments, I enjoy creating UIs that are robust and easy to use—for
          devs and end-users alike.
        </Typography>
      </Typography>
    </Card>
  );
};
