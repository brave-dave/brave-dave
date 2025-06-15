import { TailwindComponent } from '@/src/components/TailwindComponent';
import { IntroAvatar } from '../../components';
import { SectionStyles } from './styles';

export function IntroSection() {
  return (
    <TailwindComponent as="section" styles={SectionStyles}>
      <IntroAvatar />
      <div>Brave Dave</div>
      <div>
        <p className="text-2xl font-bold">Hi, I’m Davide Bruno</p>
        <p className="text-lg">
          Senior Software Engineer, focused on building great experiences
          through React, TypeScript, and care for detail.
        </p>
        <p className="text-lg">
          Currently based in Italy and Gothenburg, open to remote work and
          exciting collaborations.
        </p>
      </div>
    </TailwindComponent>
  );
}
