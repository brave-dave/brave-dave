import { ElementType, ReactNode } from 'react';

type ButtonProps<T extends ElementType = 'button'> = {
    as?: T;
    children: ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
} & React.ComponentPropsWithoutRef<T>;

export default function Button<T extends ElementType = 'button'>({
    as,
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    type = 'button',
    ...props
}: ButtonProps<T>) {
    const Component = as || 'button';

    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 dark:hover:bg-primary-700',
        secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700',
        outline: 'border border-neutral-200 bg-transparent hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800'
    };

    const sizes = {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg'
    };

    return (
        <Component
            type={type}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
} 