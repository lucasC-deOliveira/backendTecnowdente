import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import 'dotenv';

async function bootstrap() {
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', String(process.env.FRONT_END));
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  app.useGlobalPipes(new ValidationPipe());
  await app
    .listen(port)
    .then(() =>
      Logger.warn(`Backend Tecnowdente listening on port ---> ${port}`),
    );
}
bootstrap();
