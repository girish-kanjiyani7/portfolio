import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = 'girish.kanjiyani5040@gmail.com';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [myEmail],
      subject: `New Message from Portfolio: ${subject}`,
      replyTo: email,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error('Resend API Error:', error);
      
      let userErrorMessage = 'An error occurred while sending the email.';
      if (error.name === 'missing_api_key' || error.message.toLowerCase().includes('api key')) {
        userErrorMessage = 'Invalid or missing Resend API Key. Please check your .env.local file and restart the application.';
      } else if (error.name === 'validation_error' && error.message.toLowerCase().includes('verified')) {
        userErrorMessage = 'The "from" email address is not verified. Please use a verified domain or the default "onboarding@resend.dev".';
      } else if (error.message.includes('testing emails')) {
        userErrorMessage = 'Resend validation error: You can only send test emails to your own verified address.';
      }

      return NextResponse.json({ error: userErrorMessage }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'An internal server error occurred' }, { status: 500 });
  }
}