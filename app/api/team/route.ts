import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, instagram, location, followers, build, why } = data;

    // Save to CSV
    const dataDir = path.join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    const csvPath = path.join(dataDir, 'team-applications.csv');
    const timestamp = new Date().toISOString();

    const csvLine = `"${timestamp}","${name}","${email}","${instagram}","${location}","${followers}","${build}","${why.replace(/"/g, '""')}"\n`;

    const fileExists = existsSync(csvPath);
    const header = fileExists ? '' : 'Timestamp,Name,Email,Instagram,Location,Followers,Build,Why\n';

    await writeFile(csvPath, header + csvLine, { flag: 'a' });

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'SLEEPY Team <team@sleepyracing.com>',
          to: 'careers@sleepyracing.com',
          subject: `New SLEEPY Team Application - ${name}`,
          html: `
            <h2>New SLEEPY Team Application</h2>
            <p><strong>Submitted:</strong> ${new Date(timestamp).toLocaleString()}</p>
            <hr />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Instagram:</strong> ${instagram}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Followers:</strong> ${followers}</p>
            <p><strong>Build:</strong> ${build}</p>
            <p><strong>Why:</strong></p>
            <p>${why.replace(/\n/g, '<br>')}</p>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving team application:', error);
    return NextResponse.json(
      { error: 'Failed to save application' },
      { status: 500 }
    );
  }
}
