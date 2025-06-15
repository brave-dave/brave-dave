'use client';
import Button from '@/src/components/Button';
import Typography from '@/src/components/Typography';
import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  title?: string;
  submitLabel?: string;
}

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export function FormField({
  label,
  id,
  type = 'text',
  placeholder,
  required,
  rows,
}: FormFieldProps) {
  const inputClasses =
    'w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors';

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block">
        <Typography variant="sm" className="font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Typography>
      </label>
      {rows ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          className={inputClasses}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className={inputClasses}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
}

export default function Form({
  children,
  onSubmit,
  title,
  submitLabel = 'Submit',
}: FormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {title && (
        <Typography variant="h3" className="mb-6">
          {title}
        </Typography>
      )}
      {children}
      <Button type="submit" size="lg" className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
}
