import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS jika diperlukan
  app.enableCors();

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Expense Tracker API')
    .setDescription('API untuk manajemen kategori & pengeluaran')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Server running at http://localhost:3000`);
  console.log(`Swagger docs at http://localhost:3000/api`);
}

bootstrap();
