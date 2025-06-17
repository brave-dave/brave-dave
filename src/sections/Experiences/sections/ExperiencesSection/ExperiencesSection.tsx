import { Section } from '@/src/components/Section';
import experiences from './experiences.json';
import { ExperienceCard } from '../../components';
import { experiencesSectionStyles } from './styles';
import { TailwindComponent } from '@/src/components/TailwindComponent';

export function ExperiencesSection() {
  return (
    <Section>
      <TailwindComponent styles={experiencesSectionStyles.cardsList}>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </TailwindComponent>
    </Section>
  );
}
