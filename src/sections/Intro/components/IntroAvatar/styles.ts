import { TailwindStylesMulti } from '@/src/components/TailwindComponent';

export const introAvatarStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'flex-col',
    alignItems: 'items-center',
    gap: 'gap-2',
  },
  avatar: {
    width: 'w-3xs',
    height: 'h-auto',
    borderRadius: 'rounded-full',
  },
} satisfies TailwindStylesMulti;
