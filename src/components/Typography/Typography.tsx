import { useMemo } from 'react';
import {
  TailwindComponent,
  TailwindComponentProps,
  TailwindComponentTagName,
} from '../TailwindComponent';
import { typographyStyles } from './styles';
import { TypographyVariant } from './types';

type TypographyProps<T extends TailwindComponentTagName = 'span'> =
  TailwindComponentProps<T> & {
    variant?: TypographyVariant;
    secondary?: boolean;
  };

export function Typography<T extends TailwindComponentTagName = 'span'>({
  as = 'span' as T,
  children,
  variant = 'bodyMedium',
  secondary = false,
  ...props
}: TypographyProps<T>) {
  const Component = as as React.ElementType;
  const styles = useMemo(
    () => [
      typographyStyles[variant],
      secondary && typographyStyles.secondary,
      !secondary && typographyStyles.primary,
    ],
    [variant, secondary]
  );

  return (
    <TailwindComponent as={Component} styles={styles} {...props}>
      {children}
    </TailwindComponent>
  );
}
