import { TailwindStylesMulti } from '../TailwindComponent';
import { TypographyColor, TypographyVariant } from './types';

export const typographyStyles = {
  displayLarge: {
    fontSize: 'text-6xl',
    fontWeight: 'font-normal',
    letterSpacing: 'tracking-tight',
  },
  displayMedium: {
    fontSize: 'text-5xl',
    fontWeight: 'font-normal',
    letterSpacing: 'tracking-tight',
  },
  displaySmall: {
    fontSize: 'text-4xl',
    fontWeight: 'font-normal',
    letterSpacing: 'tracking-tight',
  },
  headlineLarge: { fontSize: 'text-3xl', fontWeight: 'font-normal' },
  headlineMedium: { fontSize: 'text-2xl', fontWeight: 'font-normal' },
  headlineSmall: { fontSize: 'text-xl', fontWeight: 'font-normal' },
  titleLarge: { fontSize: 'text-lg', fontWeight: 'font-medium' },
  titleMedium: { fontSize: 'text-base', fontWeight: 'font-medium' },
  titleSmall: { fontSize: 'text-sm', fontWeight: 'font-medium' },
  labelLarge: { fontSize: 'text-base', fontWeight: 'font-medium' },
  labelMedium: { fontSize: 'text-sm', fontWeight: 'font-medium' },
  labelSmall: { fontSize: 'text-xs', fontWeight: 'font-medium' },
  bodyLarge: { fontSize: 'text-base', fontWeight: 'font-normal' },
  bodyMedium: { fontSize: 'text-sm', fontWeight: 'font-normal' },
  bodySmall: { fontSize: 'text-xs', fontWeight: 'font-normal' },
  displayLargeEmphasized: {
    fontSize: 'text-6xl',
    fontWeight: 'font-bold',
    letterSpacing: 'tracking-tight',
  },
  displayMediumEmphasized: {
    fontSize: 'text-5xl',
    fontWeight: 'font-bold',
    letterSpacing: 'tracking-tight',
  },
  displaySmallEmphasized: {
    fontSize: 'text-4xl',
    fontWeight: 'font-bold',
    letterSpacing: 'tracking-tight',
  },
  headlineLargeEmphasized: { fontSize: 'text-3xl', fontWeight: 'font-bold' },
  headlineMediumEmphasized: { fontSize: 'text-2xl', fontWeight: 'font-bold' },
  headlineSmallEmphasized: { fontSize: 'text-xl', fontWeight: 'font-bold' },
  titleLargeEmphasized: { fontSize: 'text-lg', fontWeight: 'font-semibold' },
  titleMediumEmphasized: { fontSize: 'text-base', fontWeight: 'font-semibold' },
  titleSmallEmphasized: { fontSize: 'text-sm', fontWeight: 'font-semibold' },
  labelLargeEmphasized: { fontSize: 'text-base', fontWeight: 'font-bold' },
  labelMediumEmphasized: { fontSize: 'text-sm', fontWeight: 'font-bold' },
  labelSmallEmphasized: { fontSize: 'text-xs', fontWeight: 'font-bold' },
  bodyLargeEmphasized: { fontSize: 'text-base', fontWeight: 'font-semibold' },
  bodyMediumEmphasized: { fontSize: 'text-sm', fontWeight: 'font-semibold' },
  bodySmallEmphasized: { fontSize: 'text-xs', fontWeight: 'font-semibold' },
  primary: {
    color: 'text-neutral-900',
    $dark: { color: 'dark:text-neutral-100' },
  },
  secondary: {
    color: 'text-neutral-400',
    $dark: { color: 'dark:text-neutral-600' },
  },
} satisfies TailwindStylesMulti<TypographyVariant | TypographyColor>;
