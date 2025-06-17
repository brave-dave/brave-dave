import { TailwindStylesMulti } from '@/src/components/TailwindComponent';

export const aboutSectionStyles = {
  root: {},
  container: {
    display: 'flex',
    flexDirection: 'flex-col',
    alignItems: 'items-start',
    justifyContent: 'justify-start',
    gap: 'gap-4',
  },
  content: {
    display: 'flex',
    flexDirection: 'flex-row',
    alignItems: 'items-center',
    justifyContent: 'justify-center',
    gap: 'gap-4',
  },
} satisfies TailwindStylesMulti;
