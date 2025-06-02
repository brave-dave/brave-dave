import Typography from '@/src/components/Typography';
import Link from 'next/link';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/contact', label: 'Contact' },
] as const;

export default function Navigation() {
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="hover:opacity-80 transition-opacity">
                        <Typography variant="h1" className="text-xl">Davide Bruno</Typography>
                    </Link>
                    <nav className="flex space-x-8">
                        {navItems.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="hover:opacity-80 transition-opacity"
                            >
                                <Typography variant="md">{label}</Typography>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
} 