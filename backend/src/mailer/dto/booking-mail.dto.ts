import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BookingMailDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  service: string;

  @IsOptional()
  @IsString()
  serviceOption?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
