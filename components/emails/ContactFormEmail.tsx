'use client'

import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission: {subject}</h1>
    <hr />
    <p>
      You received a new message from <strong>{name}</strong> ({email}).
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);