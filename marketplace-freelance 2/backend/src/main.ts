/**
 * ============================================================
 * PUNTO DE ENTRADA — Marketplace de Servicios Freelance
 * ============================================================
 *
 * FLUJO DE ARRANQUE:
 *   1. NestFactory crea la app a partir de AppModule
 *   2. Prefijo global "api/v1" → todas las rutas en /api/v1/...
 *   3. CORS habilitado para el frontend (puerto 3000)
 *   4. ValidationPipe global valida los DTOs automáticamente
 *   5. HttpExceptionFilter formatea errores en JSON uniforme
 *   6. ResponseInterceptor envuelve respuestas en { statusCode, message, data }
 *   7. Servidor en puerto 3001
 */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 Backend corriendo en: http://localhost:${port}/api/v1`);
}
bootstrap();
