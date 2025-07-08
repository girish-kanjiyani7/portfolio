import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>
      You have received a new message from your portfolio contact form.
    </p>
    <hr />
    <h2>Message Details:</h2>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> {email}</li>
    </ul>
    <hr />
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);