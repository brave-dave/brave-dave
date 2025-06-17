import { TailwindStylesMulti } from '../TailwindComponent';

export const cardStyles = {
  root: {
    padding: 'p-8',
    borderRadius: 'rounded-lg',
    overflow: 'overflow-hidden',
    backgroundColor: 'bg-neutral-50',
    $dark: {
      backgroundColor: 'dark:bg-neutral-800',
    },
  },
} satisfies TailwindStylesMulti;
