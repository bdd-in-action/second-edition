import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Demo flight app API documentation')
    .setDescription(`
      Please first scroll to the bottom and read through Schemas.
      Then you need to generate the token by using the first endpoint to get full access to the API.
      Default email is 'admin@flyinghigh.com', pasword is 'admin'
      After you got the token, apply it by clicking the lock icon button.
    `)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api_doc', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
