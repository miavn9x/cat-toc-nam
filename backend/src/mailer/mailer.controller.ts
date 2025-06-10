import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MailerService } from './mailer.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send-booking')
  async sendBooking(@Body() createBookingDto: CreateBookingDto) {
    try {
      const result =
        await this.mailerService.sendBookingEmail(createBookingDto);
      return result;
    } catch (error: unknown) {
      throw new HttpException(
        this.extractErrorMessage(error, 'Failed to send booking email'),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('send-contact')
  async sendContact(@Body() createContactDto: CreateContactDto) {
    try {
      const result =
        await this.mailerService.sendContactEmail(createContactDto);
      return result;
    } catch (error: unknown) {
      throw new HttpException(
        this.extractErrorMessage(error, 'Failed to send contact email'),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Helper method to safely extract error messages
   */
  private extractErrorMessage(error: unknown, fallback: string): string {
    if (error instanceof Error) {
      return error.message;
    }
    if (typeof error === 'object' && error !== null && 'message' in error) {
      return String((error as { message: unknown }).message);
    }
    return fallback;
  }
}
