# Frontend — Marketplace Freelance

Aplicación frontend construida con **Next.js 15**, **React 19** y **Tailwind CSS** para el proyecto Marketplace de Servicios Freelance.

## 🚀 Inicio Rápido

### Requisitos
- Node.js 22+
- Backend en `http://localhost:3001` (NestJS)

### Instalación

```bash
cd frontend
npm install
```

### Configuración de Entorno

Copia el archivo de configuración:

```bash
cp .env.example .env.local
```

Edita `.env.local` si es necesario:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

⚠️ **Importante**: `.env.local` está en `.gitignore` y no se sube a Git.

### Desarrollo

```bash
npm run dev
```

Accede a la aplicación en: **http://localhost:3000**

(Si el puerto 3000 está en uso, Next.js usará el siguiente disponible, ej: 3002)

### Build para Producción

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Estructura

```
src/
├── app/                      # Rutas y layouts de Next.js
│   ├── layout.tsx           # Root layout
│   ├── (dashboard)/         # Grupo de rutas protegidas
│   │   ├── layout.tsx       # Dashboard layout con sidebar
│   │   ├── dashboard/
│   │   ├── categorias/
│   │   ├── clientes/
│   │   ├── freelancers/
│   │   ├── proyectos/
│   │   ├── servicios/
│   │   └── solicitudes/
│   └── globals.css
├── components/
│   └── layout/
│       └── Sidebar.tsx      # Navegación principal
├── interfaces/              # Tipos TypeScript del API
│   ├── categoria-servicio.interface.ts
│   ├── cliente.interface.ts
│   ├── freelancer.interface.ts
│   ├── habilidad.interface.ts
│   ├── proyecto.interface.ts
│   ├── servicio.interface.ts
│   └── solicitud.interface.ts
├── lib/
│   └── api.ts              # Cliente HTTP con fetch wrapper
└── services/               # Servicios CRUD por entidad
    ├── categorias.service.ts
    ├── clientes.service.ts
    ├── freelancers.service.ts
    ├── habilidades.service.ts
    ├── proyectos.service.ts
    ├── servicios.service.ts
    └── solicitudes.service.ts
```

## 🔌 Cliente HTTP (`lib/api.ts`)

El cliente HTTP maneja automáticamente:
- Base URL desde `NEXT_PUBLIC_BACKEND_URL`
- Rutas con prefijo `/api/v1`
- Extracción de la propiedad `data` de respuestas
- Manejo automático de errores

### Ejemplo de uso:

```typescript
import { apiGet, apiPost } from '@/lib/api';
import type { Cliente } from '@/interfaces/cliente.interface';

// GET
const clientes = await apiGet<Cliente[]>('/clientes');

// POST
const newCliente = await apiPost<Cliente>('/clientes', {
  nombres: 'Juan',
  apellidos: 'Pérez',
  documentoIdentidad: '12345678',
  correoElectronico: 'juan@mail.com',
});

// PUT
const updated = await apiPut<Cliente>('/clientes/1', {
  nombres: 'Juan Carlos',
});

// DELETE
await apiDelete('/clientes/1');
```

## 🎨 Componentes

### Sidebar.tsx
- Navegación dinámica a los 7 módulos principales
- Enlaces activos basados en `usePathname()`
- Emojis visuales para cada sección
- Responsive design

### Páginas CRUD
Cada módulo (categorías, clientes, freelancers, etc.) incluye:
- Carga automática de datos al montar
- Tabla con listado completo
- Formulario para crear/editar
- Botones para eliminar
- Manejo de errores en tiempo real

## 🐳 Docker

### Build de la imagen

```bash
docker build -t marketplace-frontend .
```

### Ejecutar en Docker

```bash
docker run -e NEXT_PUBLIC_BACKEND_URL=http://backend:3001 -p 3000:3000 marketplace-frontend
```

### Con Docker Compose

```bash
docker-compose up frontend
```

## 📝 Notas de Desarrollo

### Usar Client Components
- Componentes que usan `useState`, `useEffect`, etc. deben tener `'use client'` al inicio
- El Sidebar usa `'use client'` para `usePathname()`

### Variables de Entorno
- Solo variables con prefijo `NEXT_PUBLIC_` se exponen al cliente
- El backend URL debe ser `NEXT_PUBLIC_BACKEND_URL`
- Las variables se cargan automáticamente desde `.env.local`

### CORS
- El backend permite orígenes: `localhost:3000`, `localhost:3002`, `127.0.0.1:3000`, `127.0.0.1:3002`
- Configurable con `FRONTEND_URL` en el backend

## 🔗 Integración con Backend

El frontend espera que el backend retorne respuestas con formato:

```json
{
  "statusCode": 200,
  "message": "OK",
  "data": [...]
}
```

El cliente HTTP extrae automáticamente la propiedad `data`.

## 📚 Recursos

- [Next.js 15 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [API Backend](http://localhost:3001/api/v1)

## 🤝 Contribución

1. Crea una rama: `git checkout -b feat/nueva-feature`
2. Haz tus cambios
3. Commit: `git commit -m "feat: descripción"`
4. Push: `git push origin feat/nueva-feature`
5. Pull Request

## 📄 Licencia

Proyecto de Programación Web 2026A — CORHUILA