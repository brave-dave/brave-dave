import { AboutCard, AboutImage, AboutHeader } from '../../components';
import { SectionStyles } from './styles';
import { Section } from '@/src/components/Section';

export function AboutSection() {
  return (
    <Section styles={SectionStyles}>
      <AboutHeader />
      <AboutCard />
      <AboutImage />
    </Section>
  );
}
