import { TailwindStylesMulti } from '@/src/components/TailwindComponent';

export const sectionStyles = {
  root: {
    backgroundColor: 'bg-neutral-50',
    $dark: {
      backgroundColor: 'dark:bg-neutral-900',
    },
    height: 'h-screen',
    width: 'w-full',
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
