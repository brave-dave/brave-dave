type TypographySize = 'Large' | 'Medium' | 'Small';
type TypographyType = '' | 'Emphasized';

type TypographyVariantTemplate<T extends string> =
  `${T}${TypographySize}${TypographyType}`;

export type TypographyVariant =
  | TypographyVariantTemplate<'display'>
  | TypographyVariantTemplate<'headline'>
  | TypographyVariantTemplate<'title'>
  | TypographyVariantTemplate<'label'>
  | TypographyVariantTemplate<'body'>;

export type TypographyColor = 'primary' | 'secondary';
