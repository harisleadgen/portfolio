import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_Z7t8Mf1B_4Q38HcuVVwHQarXPtPgFashm');

export async function POST(req: Request) {
  try {
    const { name, businessName, email, number } = await req.json();

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['Harisleadgen@gmail.com'],
      subject: `New Lead from ${name} - ${businessName || 'No Business Name'}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business Name:</strong> ${businessName || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${number || 'N/A'}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
