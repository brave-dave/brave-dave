import ContactForm from '../../components/ContactForm';
import { SectionStyles } from './styles';
import { Section } from '@/src/components/Section';

export function ContactSection() {
  return (
    <Section styles={SectionStyles}>
      <p className="text-2xl font-bold">Let’s connect.</p>
      <p className="text-lg">
        Whether it’s a quick hello or a longer conversation, feel free to drop
        me a message. Always happy to chat
      </p>
      <ContactForm />
    </Section>
  );
}
