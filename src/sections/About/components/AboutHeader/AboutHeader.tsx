import { Typography } from '@/src/components/Typography';
import { aboutHeaderStyles } from './styles';

export const AboutHeader = () => {
  return (
    <Typography
      as="h2"
      variant="displayMediumEmphasized"
      styles={aboutHeaderStyles.root}
    >
      About me
    </Typography>
  );
};
