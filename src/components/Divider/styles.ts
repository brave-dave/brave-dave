import { TailwindStylesMulti } from '../TailwindComponent';

export const dividerStyles = {
  root: {
    borderStyle: 'border-solid',
    borderWidth: 'border-t-2',
    borderColor: 'border-neutral-200',
    $dark: {
      borderColor: 'dark:border-neutral-800',
    },
  },
} satisfies TailwindStylesMulti;
