import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Contact form API endpoint
 * Handles form submissions from the contact page
 * Sends email notifications to admin and confirmation emails to users
 */
export async function POST(req) {
  try {
    // Parse the request JSON body
    const data = await req.json();
    const { name, email, userType, subject, message } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    let transporter;
    let isUsingEtherealEmail = false;

    // Configure email transport - production or test environment
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      // Use configured email service from environment variables
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_PORT === '465',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      
      console.log('Using configured email service');
    } else {
      // Fall back to ethereal test account for development/testing
      console.log('No email configuration found, using Ethereal email for testing');
      isUsingEtherealEmail = true;
      
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    // Configure email addresses
    const fromEmail = isUsingEtherealEmail 
      ? `"GradLyft Contact" <${transporter.options.auth.user}>`
      : process.env.EMAIL_FROM || 'no-reply@gradlyft.com';
      
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@gradlyft.com';

    // Send notification email to admin
    const adminEmailInfo = await transporter.sendMail({
      from: fromEmail,
      to: adminEmail,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>User Type:</strong> ${userType}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to user
    const userEmailInfo = await transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: `Thank you for contacting GradLyft`,
      html: `
        <h2>Thank you for contacting GradLyft</h2>
        <p>Dear ${name},</p>
        <p>We have received your message regarding "${subject}". Our team will review your inquiry and get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p>${message}</p>
        <p>Best regards,<br>The GradLyft Team</p>
      `,
    });

    // For development: provide email preview links
    if (isUsingEtherealEmail) {
      console.log('Admin email preview URL:', nodemailer.getTestMessageUrl(adminEmailInfo));
      console.log('User confirmation email preview URL:', nodemailer.getTestMessageUrl(userEmailInfo));
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Your message has been sent. Thank you for contacting us!',
      previewUrls: isUsingEtherealEmail ? {
        adminEmail: nodemailer.getTestMessageUrl(adminEmailInfo),
        userEmail: nodemailer.getTestMessageUrl(userEmailInfo)
      } : undefined
    });
  } catch (error) {
    // Error handling
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
} 