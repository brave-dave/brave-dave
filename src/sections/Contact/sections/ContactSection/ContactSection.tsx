import { ContactCard } from '../../components/ContactCard';
import { SectionStyles } from './styles';
import { Section } from '@/src/components/Section';

export function ContactSection() {
  return (
    <Section styles={SectionStyles}>
      <ContactCard />
    </Section>
  );
}
