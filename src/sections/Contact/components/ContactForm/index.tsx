'use client';
import Form, { FormField } from '@/src/components/Form';
import React from 'react';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export const ContactForm: React.FC = () => {
    const handleSubmit = async (e: React.FormEvent<Element>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data: ContactFormData = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        };
        // TODO: Implement form submission logic
        console.log('Form submitted:', data);
    };

    return (
        <Form onSubmit={handleSubmit} title="Send a Message" submitLabel="Send Message">
            <FormField
                label="Name"
                id="name"
                placeholder="Your name"
                required
            />
            <FormField
                label="Email"
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
            />
            <FormField
                label="Message"
                id="message"
                rows={4}
                placeholder="Your message..."
                required
            />
        </Form>
    );
};

export default ContactForm;