import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import configuration from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Backend')
    .setDescription('API para el plan piloto V2')
    .setVersion('2.0')
    .build();
  const customOptions: SwaggerCustomOptions = {};
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, customOptions);
  app.enableCors();
  await app.listen(configuration().port);
}
bootstrap();
