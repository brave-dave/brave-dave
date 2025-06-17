import { TailwindComponent } from '../TailwindComponent';
import { dividerStyles } from './styles';

export const Divider = () => {
  return <TailwindComponent as="hr" styles={dividerStyles.root} />;
};
