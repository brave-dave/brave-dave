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
  content: {
    maxWidth: 'max-w-7xl',
    margin: 'mx-auto',
  },
} satisfies TailwindStylesMulti;
