import { TailwindStylesMulti } from '../TailwindComponent';

export const sectionStyles = {
  root: {
    display: 'flex',
    flexDirection: 'flex-col',
    alignItems: 'items-center',
    justifyContent: 'justify-center',
    minHeight: 'min-h-screen',
    width: 'w-full',
    backgroundColor: 'bg-neutral-50',
    $dark: {
      backgroundColor: 'dark:bg-neutral-900',
    },
  },
  content: {
    maxWidth: 'max-w-7xl',
    padding: 'p-8',
  },
} satisfies TailwindStylesMulti;
