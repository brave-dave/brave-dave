import { Card } from '@/src/components/Card';
import { Image } from '@/src/components/Image';
import { aboutImageStyles } from './styles';

export const AboutImage = () => {
  return (
    <Card styles={aboutImageStyles.root}>
      <Image src="/images/about/main.jpg" alt="About me" />
    </Card>
  );
};
