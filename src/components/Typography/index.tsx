import { ElementType, ReactNode } from 'react';

type TypographyVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'sm'
    | 'md'
    | 'lg';

type TypographyProps<T extends ElementType = 'p'> = {
    as?: T;
    children: ReactNode;
    className?: string;
    variant?: TypographyVariant;
    secondary?: boolean;
} & React.ComponentPropsWithoutRef<T>;

const getColorStyles = (variant: TypographyVariant, secondary: boolean) => {
    if (secondary) {
        return 'text-primary-500 dark:text-primary-400';
    }

    if (variant.startsWith('h')) {
        const headingLevel = parseInt(variant.slice(1));
        const opacity = Math.max(50, 100 - (headingLevel - 1) * 10);
        return `text-primary-${opacity} dark:text-primary-${Math.max(50, 200 - (headingLevel - 1) * 20)}`;
    }

    return 'text-primary-700 dark:text-primary-300';
};

const variantStyles: Record<TypographyVariant, string> = {
    h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
    h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
    h6: 'scroll-m-20 text-base font-semibold tracking-tight',
    sm: 'text-sm leading-6',
    md: 'text-base leading-7',
    lg: 'text-lg leading-8'
};

const defaultElements: Record<TypographyVariant, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    sm: 'span',
    md: 'span',
    lg: 'span'
};

export default function Typography<T extends ElementType = 'p'>({
    as,
    children,
    className = '',
    variant = 'md',
    secondary = false,
    ...props
}: TypographyProps<T>) {
    const Component = as || defaultElements[variant];
    const colorStyles = getColorStyles(variant, secondary);

    return (
        <Component
            className={`${variantStyles[variant]} ${colorStyles} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
} 