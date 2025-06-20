import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div className={`py-12 px-4 sm:px-6 ${className}`}>
      <div className="max-w-4xl mx-auto space-y-12">{children}</div>
    </div>
  );
}
