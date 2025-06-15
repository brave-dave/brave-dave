import { TailwindStylesMulti } from '@/src/components/TailwindComponent';

export const introCardStyles = {
  root: {
    display: 'flex',
    flexDirection: 'flex-col',
    gap: 'gap-0',
    maxWidth: 'max-w-lg',
  },
  title: {
    margin: 'mb-6',
  },
  secondParagraph: {
    margin: 'mt-2',
  },
} satisfies TailwindStylesMulti;
