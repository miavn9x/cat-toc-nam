import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import { ContactMailDto } from './dto/contact-mail.dto';
import { BookingMailDto } from './dto/booking-mail.dto';

@Injectable()
export class MailerService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT!),
      secure: false,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    }) as Transporter;
  }

  async sendMail(data: ContactMailDto): Promise<void> {
    const { name, email, message } = data;

    const htmlContent = `
      <h2>New Contact Message</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: Arial, sans-serif;">
        <tbody>
          <tr style="background-color: #f9f9f9;">
            <th align="left" style="width: 150px;">Name</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f9f9f9;">Email</th>
            <td>${email}</td>
          </tr>
          <tr>
            <th align="left" style="background-color: #f9f9f9;">Message</th>
            <td>${message.replace(/\n/g, '<br>')}</td>
          </tr>
        </tbody>
      </table>
    `;

    await this.transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Contact from ${name}`,
      html: htmlContent,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });
  }

  async sendBookingMail(data: BookingMailDto): Promise<void> {
    const {
      name,
      email,
      phone,
      category,
      service,
      serviceOption,
      date,
      time,
      notes,
    } = data;

    const htmlContent = `
      <h2>New Booking Request</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: Arial, sans-serif;">
        <tbody>
          <tr style="background-color: #f9f9f9;">
            <th align="left">Name</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th align="left">Email</th>
            <td>${email}</td>
          </tr>
          ${
            phone ? `<tr><th align="left">Phone</th><td>${phone}</td></tr>` : ''
          }
          <tr>
            <th align="left">Category</th>
            <td>${category}</td>
          </tr>
          <tr>
            <th align="left">Service</th>
            <td>${service}</td>
          </tr>
          ${
            serviceOption
              ? `<tr><th align="left">Option</th><td>${serviceOption}</td></tr>`
              : ''
          }
          <tr>
            <th align="left">Date</th>
            <td>${date}</td>
          </tr>
          <tr>
            <th align="left">Time</th>
            <td>${time}</td>
          </tr>
          ${
            notes
              ? `<tr><th align="left">Notes</th><td>${notes.replace(/\n/g, '<br>')}</td></tr>`
              : ''
          }
        </tbody>
      </table>
    `;

    await this.transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Booking Request from ${name}`,
      html: htmlContent,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Category: ${category}
Service: ${service}
Option: ${serviceOption || 'N/A'}
Date: ${date}
Time: ${time}
Notes: ${notes || 'N/A'}`,
    });
  }
}
