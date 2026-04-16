#!/bin/sh
set -e

echo "⏳ Ejecutando migraciones de Prisma..."
npx prisma migrate deploy

echo "🚀 Iniciando backend NestJS..."
exec npm run start:dev