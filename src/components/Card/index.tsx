import { ElementType, ReactNode } from 'react';

type CardProps<T extends ElementType = 'div'> = {
    as?: T;
    children: ReactNode;
    className?: string;
    type?: 'default' | 'highlighted';
} & React.ComponentPropsWithoutRef<T>;

export default function Card<T extends ElementType = 'div'>({
    as,
    children,
    className = '',
    type = 'default',
    ...props
}: CardProps<T>) {
    const Component = as || 'div';

    const baseStyles = 'p-8 rounded-lg';
    const typeStyles = type === 'highlighted'
        ? 'bg-primary-100 dark:bg-primary-800/50'
        : 'bg-white dark:bg-neutral-900';

    return (
        <Component
            className={`${baseStyles} ${typeStyles} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
} 