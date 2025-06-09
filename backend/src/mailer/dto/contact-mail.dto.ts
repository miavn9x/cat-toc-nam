// src/mailer/dto/send-mail.dto.ts
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ContactMailDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
