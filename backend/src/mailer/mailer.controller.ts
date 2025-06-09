import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MailerService } from './mailer.service';
import { ContactMailDto } from './dto/contact-mail.dto';
import { BookingMailDto } from './dto/booking-mail.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send-contact')
  async sendMail(@Body() contactMailDto: ContactMailDto) {
    try {
      await this.mailerService.sendMail(contactMailDto);
      return {
        statusCode: 200,
        message: 'Email sent successfully',
      };
    } catch (error: unknown) {
      console.error('Error sending email:', error);

      let message = 'Failed to send email. Please try again later.';
      if (error instanceof Error) {
        message = error.message;
      }

      throw new HttpException(
        {
          statusCode: 500,
          message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('send-booking')
  async sendBookingMail(@Body() bookingMailDto: BookingMailDto) {
    try {
      await this.mailerService.sendBookingMail(bookingMailDto);
      return {
        statusCode: 200,
        message: 'Booking email sent successfully',
      };
    } catch (error: unknown) {
      console.error('Error sending booking email:', error);

      let message = 'Failed to send booking email. Please try again later.';
      if (error instanceof Error) {
        message = error.message;
      }

      throw new HttpException(
        {
          statusCode: 500,
          message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
