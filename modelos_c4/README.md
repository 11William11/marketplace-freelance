# 📐 Diagramas C4 — Marketplace Freelance

Carpeta con los cuatro diagramas C4 del sistema **Marketplace de Servicios Freelance**, generados según el modelo [C4 Model](https://c4model.com/diagrams).

## 📁 Contenido

| Archivo | Nivel C4 | Descripción |
|---|---|---|
| `c4-01-context.svg` | **Nivel 1 — Contexto** | Quién usa el sistema y con qué externos interactúa |
| `c4-02-container.svg` | **Nivel 2 — Contenedores** | Contenedores Docker: Frontend, Backend y BD |
| `c4-03-backend-code.svg` | **Nivel 3 — Código Backend** | Módulos NestJS internos del contenedor backend |
| `c4-04-frontend-code.svg` | **Nivel 3 — Código Frontend** | Componentes Next.js internos del contenedor frontend |

---

## 📊 Resumen de la Arquitectura

### Stack tecnológico
- **Frontend**: Next.js 15 · App Router · TypeScript · Tailwind CSS
- **Backend**: NestJS 11 · Prisma ORM · TypeScript · REST API
- **Base de datos**: PostgreSQL 16
- **Infraestructura**: Docker Compose (3 contenedores)

### Módulos Backend (`/api/v1/`)
| Módulo | Sprint | Endpoints principales |
|---|---|---|
| Freelancers | 1 | CRUD `/freelancers` |
| Clientes | 1 | CRUD `/clientes` |
| Categorías | 1 | CRUD `/categorias` |
| Habilidades | 1 | CRUD `/habilidades` |
| Servicios | 2 | CRUD + filtro por categoría `/servicios` |
| Solicitudes | 2-3 | CRUD + aceptar/rechazar `/solicitudes` |
| Proyectos | 3 | Gestión de estados `/proyectos` |

### Flujo principal
```
Cliente/Freelancer
  → Next.js :3000 (App Router)
    → NestJS API :3001 (/api/v1/...)
      → PrismaORM
        → PostgreSQL :5432
```

### Lógica de negocio destacada
- Al **aceptar** una `Solicitud` (estado `PENDIENTE → ACEPTADA`), el servicio crea automáticamente un `Proyecto` con estado `PENDIENTE`.
- Los proyectos siguen el flujo: `PENDIENTE → EN_PROGRESO → EN_REVISION → COMPLETADO | CANCELADO`.
- La entidad `Calificacion` está lista en el schema para el Sprint 4.

---

## 🏫 Información académica

**Institución**: CORHUILA  
**Materia**: Programación Web 2026A  
**Sprints**: 1 al 3 implementados

---

## 🔍 Cómo ver los diagramas

Los archivos `.svg` se visualizan directamente en GitHub, navegadores web o cualquier editor de imágenes SVG.

```bash
# Visualizar en navegador (Linux/Mac)
open c4-01-context.svg
xdg-open c4-01-context.svg

# Visualizar en Windows
start c4-01-context.svg
```
