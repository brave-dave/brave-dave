import { TailwindStylesMulti } from '@/src/components/TailwindComponent';

export const introSectionStyles = {
  root: {
    display: 'flex',
    flexDirection: 'flex-row',
    alignItems: 'items-center',
    justifyContent: 'justify-center',
  },
  content: {
    display: 'flex',
    flexDirection: 'flex-row',
    alignItems: 'items-stretch',
    justifyContent: 'justify-center',
    gap: 'gap-8',
    margin: 'm-auto',
  },
  avatar: {
    flexBasis: 'basis-auto',
    flexGrow: 'grow-0',
    flexShrink: 'shrink-0',
  },
} satisfies TailwindStylesMulti;
