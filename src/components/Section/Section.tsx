import { TailwindComponent, TailwindStyles } from '../TailwindComponent';
import { sectionStyles } from './styles';

type SectionProps = {
  children: React.ReactNode;
  styles?: TailwindStyles;
};

export function Section({ children, styles }: SectionProps) {
  return (
    <TailwindComponent as="section" styles={[sectionStyles.root, styles]}>
      {children}
    </TailwindComponent>
  );
}
