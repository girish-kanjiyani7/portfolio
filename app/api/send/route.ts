import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/components/emails/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'girishfob5040@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New Message from Portfolio: ${subject}`,
      reply_to: email,
      react: ContactFormEmail({ name, email, subject, message }),
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data });
  } catch (e) {
    const error = e as Error;
    console.error({ error });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}