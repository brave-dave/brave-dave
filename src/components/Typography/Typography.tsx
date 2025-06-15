import { useMemo } from 'react';
import {
  TailwindComponent,
  TailwindComponentProps,
} from '../TailwindComponent';
import { typographyStyles } from './styles';
import { TypographyVariant } from './types';

type TypographyTagName = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TypographyProps<T extends TypographyTagName = 'span'> =
  TailwindComponentProps<T> & {
    variant?: TypographyVariant;
    secondary?: boolean;
  };

export function Typography<T extends TypographyTagName = 'span'>({
  as = 'span' as T,
  children,
  variant = 'bodyMedium',
  secondary = false,
  styles: inputStyles,
  ...props
}: TypographyProps<T>) {
  const Component = as as React.ElementType;
  const styles = useMemo(
    () => [
      typographyStyles[variant],
      secondary ? typographyStyles.secondary : typographyStyles.primary,
      inputStyles,
    ],
    [variant, secondary, inputStyles]
  );

  return (
    <TailwindComponent as={Component} styles={styles} {...props}>
      {children}
    </TailwindComponent>
  );
}
