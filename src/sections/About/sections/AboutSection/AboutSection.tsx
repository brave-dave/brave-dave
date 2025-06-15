import { AboutCard } from '../../components';
import { SectionStyles } from './styles';
import { Section } from '@/src/components/Section';

export function AboutSection() {
  return (
    <Section styles={SectionStyles}>
      <AboutCard />
    </Section>
  );
}
