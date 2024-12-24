import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS,
    credentials: true,
  });

  const port = process.env.PORT;
  await app.listen(port);
}
bootstrap();
