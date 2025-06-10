import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';
import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: 'http://localhost:3000', // Có thể thay bằng domain thực tế nếu deploy
    methods: 'GET,POST',
    credentials: true,
  });

  // Đường dẫn đến frontend/out sau khi export
  const frontendBuildPath = join(__dirname, '../../frontend/out');
  app.use(express.static(frontendBuildPath)); // Phục vụ static trước

  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.get(/.*/, (req: Request, res: Response) => {
    res.sendFile(join(frontendBuildPath, 'index.html'));
  });
  
  app.useGlobalPipes(new ValidationPipe());

  const port = configService.get<number>('PORT') || 4000;
  await app.listen(port);
  console.log(`✅ App running at http://localhost:${port}`);
}
void bootstrap();
