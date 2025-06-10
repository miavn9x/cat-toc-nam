import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    const emailHost = this.configService.get<string>('EMAIL_HOST');
    const emailPort = this.configService.get<number>('EMAIL_PORT');
    const emailUser = this.configService.get<string>('EMAIL_USER');
    const emailPass = this.configService.get<string>('EMAIL_PASS');
    const recipientEmail = this.configService.get<string>('RECIPIENT_EMAIL');

    this.logger.log(`EMAIL_HOST: ${emailHost}`);
    this.logger.log(`EMAIL_PORT: ${emailPort}`);
    this.logger.log(`EMAIL_USER: ${emailUser}`);
    this.logger.log(`RECIPIENT_EMAIL: ${recipientEmail}`);

    if (
      !emailHost ||
      !emailPort ||
      !emailUser ||
      !emailPass ||
      !recipientEmail
    ) {
      this.logger.error('Missing required email environment variables');
      throw new Error('Email configuration is incomplete. Check .env file.');
    }

    this.transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    this.transporter.verify((error) => {
      if (error) {
        this.logger.error(
          `SMTP connection error: ${this.extractErrorMessage(error)}`,
        );
      } else {
        this.logger.log('SMTP connection successful');
      }
    });
  }

  async sendBookingEmail(booking: CreateBookingDto) {
    const recipientEmail = this.configService.get<string>('RECIPIENT_EMAIL');

    const mailOptions = {
      from: this.configService.get<string>('EMAIL_USER'),
      to: recipientEmail,
      subject: `New Booking Request from ${booking.name}`,
      html: `
        <div style="background-color:#f4f4f4; padding:30px; font-family:Arial, sans-serif;">
          <table width="600" align="center" cellpadding="0" cellspacing="0" style="background-color:#fff; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1); overflow:hidden;">
            <tr>
              <td style="background-color:#3b82f6; color:#ffffff; padding:24px; text-align:center;">
                <h2 style="margin:0; font-size:24px;">New Booking Request</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:24px; color:#333333; font-size:16px; line-height:1.6;">
                <p><strong>Name:</strong> ${booking.name}</p>
                <p><strong>Email:</strong> ${booking.email}</p>
                <p><strong>Phone:</strong> ${booking.phone}</p>
                <hr style="border:none; border-top:1px solid #e0e0e0;" />
                <p><strong>Service Category:</strong> ${booking.category}</p>
                <p><strong>Service:</strong> ${booking.service}</p>
                <p><strong>Service Option:</strong> ${booking.serviceOption}</p>
                <p><strong>Date:</strong> ${booking.date}</p>
                <p><strong>Time:</strong> ${booking.time}</p>
                <p><strong>Notes:</strong> ${booking.notes || 'None'}</p>
                <div style="margin-top:20px; background:#e0f2fe; padding:15px; border-left:4px solid #3b82f6;">
                  <p style="margin:0;"><strong>Reminder:</strong> Please confirm the appointment with the customer.</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f9fafb; color:#888888; font-size:13px; text-align:center; padding:15px;">
                <p style="margin:0;">This email was automatically sent from your booking system.</p>
                <p style="margin:0;">© ${new Date().getFullYear()} Winchair Beauty Spa. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </div>
      `, // giữ nguyên HTML bạn đã có
    };

    try {
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Booking email sent to ${recipientEmail}`);
      return { message: 'Booking email sent successfully' };
    } catch (error: unknown) {
      const msg = this.extractErrorMessage(error);
      this.logger.error(`Error sending email: ${msg}`);
      throw new Error(`Failed to send booking email: ${msg}`);
    }
  }

  async sendContactEmail(contact: CreateContactDto) {
    const recipientEmail = this.configService.get<string>('RECIPIENT_EMAIL');

    const mailOptions = {
      from: this.configService.get<string>('EMAIL_USER'),
      to: recipientEmail,
      subject: `New Contact Message from ${contact.name}`,
      html: `
        <div style="background-color:#f4f4f4; padding:30px; font-family:Arial, sans-serif;">
          <table width="600" align="center" cellpadding="0" cellspacing="0" style="background-color:#fff; border-radius:10px; box-shadow:0 4px 12px rgba(0,0,0,0.1); overflow:hidden;">
            <tr>
              <td style="background-color:#10b981; color:#ffffff; padding:24px; text-align:center;">
                <h2 style="margin:0; font-size:24px;">New Contact Message</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:24px; color:#333333; font-size:16px; line-height:1.6;">
                <p><strong>Name:</strong> ${contact.name}</p>
                <p><strong>Email:</strong> ${contact.email}</p>
                <p><strong>Message:</strong> ${contact.message}</p>
                <div style="margin-top:20px; background:#ecfdf5; padding:15px; border-left:4px solid #10b981;">
                  <p style="margin:0;"><strong>Action Required:</strong> Please respond to the customer promptly.</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f9fafb; color:#888888; font-size:13px; text-align:center; padding:15px;">
                <p style="margin:0;">This email was automatically sent from your contact system.</p>
                <p style="margin:0;">© ${new Date().getFullYear()} Winchair Beauty Spa. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </div>
      `, // giữ nguyên HTML bạn đã có
    };

    try {
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Contact email sent to ${recipientEmail}`);
      return { message: 'Contact email sent successfully' };
    } catch (error: unknown) {
      const msg = this.extractErrorMessage(error);
      this.logger.error(`Error sending contact email: ${msg}`);
      throw new Error(`Failed to send contact email: ${msg}`);
    }
  }

  private extractErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    if (typeof error === 'object' && error !== null && 'message' in error) {
      return String((error as { message: unknown }).message);
    }
    return 'Unknown error occurred';
  }
}
