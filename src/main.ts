import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // バリデーション有効化
  app.useGlobalPipes(new ValidationPipe());
  // env及びconfig有効化
  const configService = app.get(ConfigService);
  // Swagger有効化
  const options = new DocumentBuilder().setTitle('NestJS サンプル').build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('PORT') || 3000);
}
bootstrap();
