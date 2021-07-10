<<<<<<< HEAD
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
=======
import { NestFactory } from '@nestjs/core';
>>>>>>> 4c05bef (generate resource - users)
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  const config = new DocumentBuilder()
    .setTitle('Nest Starter')
    .setDescription('The NestJs Starter API')
    .setVersion('1.0')
    .addTag('users', "Everything about users")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
=======
>>>>>>> 4c05bef (generate resource - users)
  await app.listen(3000);
}
bootstrap();
