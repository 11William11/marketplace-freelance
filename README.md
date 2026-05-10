# Marketplace Freelance

Proyecto de Programación Web 2026A - CORHUILA

## Descripción

Plataforma que conecta freelancers con clientes para la gestión de proyectos y servicios.

## Tecnologías

- **Backend**: NestJS con Prisma y PostgreSQL
- **Frontend**: Next.js 15 con React 19 y Tailwind CSS
- **Base de datos**: PostgreSQL
- **Contenedorización**: Docker y Docker Compose

## Instalación y Configuración

### Prerrequisitos

- Node.js 22+
- Docker y Docker Compose
- Git

### Clonación del Repositorio

```bash
git clone <url-del-repositorio>
cd marketplace-freelance
```

### Variables de Entorno

1. Copia el archivo de ejemplo de variables de entorno:

```bash
cp frontend/.env.example frontend/.env.local
```

2. Edita `frontend/.env.local` con tus configuraciones:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

### Instalación de Dependencias

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### Configuración de la Base de Datos

1. Asegúrate de tener Docker corriendo
2. Ejecuta los contenedores:

```bash
docker-compose up -d
```

Esto iniciará PostgreSQL y aplicará las migraciones de Prisma.

### Ejecutar en Desarrollo

#### Backend

```bash
cd backend
npm run start:dev
```

El backend estará disponible en `http://localhost:3001`

#### Frontend

```bash
cd frontend
npm run dev
```

El frontend estará disponible en `http://localhost:3000`

### Construir para Producción

#### Backend

```bash
cd backend
npm run build
npm run start:prod
```

#### Frontend

```bash
cd frontend
npm run build
npm start
```

### Usando Docker

Para ejecutar toda la aplicación con Docker:

```bash
docker-compose up --build
```

Esto construirá y ejecutará:
- Base de datos PostgreSQL
- Backend NestJS
- Frontend Next.js

## Estructura del Proyecto

```
.
├── backend/                 # API REST con NestJS
│   ├── src/
│   │   ├── modules/         # Módulos por entidad
│   │   └── ...
│   └── prisma/              # Esquema y migraciones
├── frontend/                # Aplicación Next.js
│   ├── src/
│   │   ├── app/             # Páginas y layouts
│   │   ├── components/      # Componentes reutilizables
│   │   ├── interfaces/      # Tipos TypeScript
│   │   ├── lib/             # Utilidades (API client)
│   │   └── services/        # Servicios HTTP
│   └── ...
├── docker-compose.yml       # Configuración de servicios
└── README.md
```

## API Endpoints

La API sigue la estructura RESTful con prefijo `/api/v1`:

- `GET /api/v1/categorias` - Listar categorías
- `GET /api/v1/clientes` - Listar clientes
- `GET /api/v1/freelancers` - Listar freelancers
- `GET /api/v1/servicios` - Listar servicios
- `GET /api/v1/solicitudes` - Listar solicitudes
- `GET /api/v1/proyectos` - Listar proyectos

## Desarrollo

### Comandos Útiles

#### Frontend
- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar en producción
- `npm run lint` - Ejecutar linter

#### Backend
- `npm run start:dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir aplicación
- `npm run start:prod` - Ejecutar en producción
- `npm run prisma:studio` - Abrir Prisma Studio

### Migraciones de Base de Datos

```bash
cd backend
npx prisma migrate dev --name <nombre-de-la-migracion>
npx prisma generate
```

## Contribución

1. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
2. Realiza tus cambios
3. Ejecuta las pruebas
4. Haz commit: `git commit -m 'feat: descripción de la funcionalidad'`
5. Push: `git push origin feature/nueva-funcionalidad`
6. Crea un Pull Request

## Licencia

Este proyecto es parte del curso de Programación Web 2026A - CORHUILA.