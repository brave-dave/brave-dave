import { TailwindStylesMulti } from '@/src/components/TailwindComponent';

export const experienceCardStyles = {
  root: {
    maxWidth: 'max-w-md',
  },
  header: {
    display: 'flex',
    flexDirection: 'flex-row',
    alignItems: 'items-center',
    justifyContent: 'justify-between',
    gap: 'gap-4',
  },
  logo: {
    flexGrow: 'grow-0',
    flexShrink: 'shrink-0',
    flexBasis: 'basis-auto',
  },
} satisfies TailwindStylesMulti;
