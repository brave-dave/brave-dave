import { TailwindStylesMulti } from '../TailwindComponent';

export const sectionStyles = {
  root: {
    minHeight: 'min-h-screen',
    width: 'w-full',
    backgroundColor: 'bg-neutral-50',
    $dark: {
      backgroundColor: 'dark:bg-neutral-900',
    },
  },
} satisfies TailwindStylesMulti;
