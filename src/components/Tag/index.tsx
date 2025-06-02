import Typography from '@/src/components/Typography';

interface TagProps {
    children: React.ReactNode;
    className?: string;
}

export default function Tag({ children, className = '' }: TagProps) {
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm ${className}`}>
            <Typography variant="sm">{children}</Typography>
        </span>
    );
} 