import { NestFactory } from '@nestjs/core';
import * as Sentry from '@sentry/node';

import { AppModule } from './app.module';

import getCurrentEnvironment from './utils/getCurrentEnvironment';
import getListOfAllowedOriginsInProd from './utils/getListOfAllowedOriginsInProd';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (getCurrentEnvironment() === 'production') {
    app.enableCors({
      origin: getListOfAllowedOriginsInProd(),
    });
  }

  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
    environment: getCurrentEnvironment(),
  });

  await app.listen(3000);
}

bootstrap();
