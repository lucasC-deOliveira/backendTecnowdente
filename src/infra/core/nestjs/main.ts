import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import 'dotenv';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule, {
    cors: { origin: String(process.env.FRONT_END) },
  });
  app.useGlobalPipes(new ValidationPipe());
  await app
    .listen(port)
    .then(() =>
      Logger.warn(`Backend Tecnowdente listening on port ---> ${port}`),
    );
}
bootstrap();
