import { NestFactory } from '@nestjs/core';
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

  await app.listen(3000);
}

bootstrap();
