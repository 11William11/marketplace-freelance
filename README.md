# 💼 Marketplace de Servicios Freelance

Proyecto full-stack — Programación Web 2026A

NestJS · Next.js · PostgreSQL · Docker · Prisma

---

## 📋 Tabla de Contenidos

* Descripción del Proyecto
* Stack Tecnológico
* Arquitectura
* Modelo de Datos
* Plan de Releases
* Sprints e Historias de Usuario
* Cronograma
* Definition of Done (DoD)
* Instalación y Ejecución

---

## 📖 Descripción del Proyecto

El Marketplace de Servicios Freelance es una aplicación web full-stack que permite conectar profesionales independientes con clientes que necesitan servicios digitales como diseño, programación, marketing, redacción, entre otros.

Los freelancers pueden publicar servicios con descripción, precio y tiempo estimado de entrega. Los clientes pueden buscar, contratar y calificar servicios. El sistema también permite gestionar solicitudes, hacer seguimiento de proyectos y visualizar el historial de trabajo.

---

## 🎯 Alcance

| Aspecto              | Detalle                                   |
| -------------------- | ----------------------------------------- |
| Tipo                 | Plataforma de conexión freelancer-cliente |
| Entidades            | 8 entidades con relaciones                |
| Historias de Usuario | 10 HUs organizadas en 5 sprints           |
| Releases             | 2 releases                                |
| Casos de Uso         | 10 casos de uso principales               |

---

## ⚙️ Funcionalidades Principales

✅ Registro de freelancers con perfil y habilidades
✅ Publicación de servicios
✅ Registro de clientes
✅ Búsqueda de servicios con filtros
✅ Solicitud de contratación
✅ Gestión de proyectos y estados
✅ Calificación de servicios
✅ Historial de freelancer

---

## 🛠 Stack Tecnológico

| Capa          | Tecnología | Propósito             |
| ------------- | ---------- | --------------------- |
| Backend       | NestJS     | API REST              |
| Frontend      | Next.js    | Interfaz de usuario   |
| Base de Datos | PostgreSQL | Almacenamiento        |
| ORM           | Prisma     | Modelado de datos     |
| Contenedores  | Docker     | Ejecución del sistema |

---

## 🏗 Arquitectura

El proyecto sigue una arquitectura en capas:

Cliente → Controller → Service → Repository → Base de Datos

---

## 📊 Modelo de Datos

### Relaciones

Freelancer 1 ──── N Servicio
Servicio 1 ──── N Solicitud
Cliente 1 ──── N Solicitud
Solicitud 1 ──── 1 Proyecto
Proyecto 1 ──── 1 Calificacion
CategoriaServicio 1 ──── N Servicio

---

### Entidades

* Freelancer
* Cliente
* Servicio
* CategoriaServicio
* Solicitud
* Proyecto
* Calificacion
* Habilidad

---

## 🚀 Plan de Releases

### Release 1 — Segundo Corte

📅 Cierre: 17 Abril 2026

**Objetivo:** API REST + frontend base

| Sprint   | Período         | HUs                 | Alcance                             |
| -------- | --------------- | ------------------- | ----------------------------------- |
| Sprint 1 | Mar 16 → Mar 29 | HU-01, HU-03, HU-10 | Docker, Prisma, Freelancer, Cliente |
| Sprint 2 | Mar 30 → Abr 10 | HU-02, HU-04, HU-05 | Servicio, Solicitud                 |
| Sprint 3 | Abr 13 → Abr 17 | HU-06, HU-07        | Proyecto, estados, frontend         |

---

### Release 2 — Tercer Corte

📅 Cierre: 22 Mayo 2026

**Objetivo:** Integración + reportes

| Sprint   | Período         | HUs          | Alcance              |
| -------- | --------------- | ------------ | -------------------- |
| Sprint 4 | Abr 20 → May 8  | HU-08, HU-09 | Integración frontend |
| Sprint 5 | May 11 → May 22 | HU-09, HU-10 | Reportes, promedio   |

---

## 📌 Sprints e Historias de Usuario

### Sprint 1 — Base del Sistema

* HU-01: Registro de Freelancer
* HU-03: Registro de Cliente
* HU-10: Gestión de Categorías

**Entregables:**

* Docker funcionando
* Prisma configurado
* CRUD base

---

### Sprint 2 — Servicios

* HU-02: Publicar Servicio
* HU-04: Búsqueda
* HU-05: Solicitud

---

### Sprint 3 — Flujo Principal

* HU-06: Gestión de Solicitudes
* HU-07: Proyecto

---

### Sprint 4 — Integración

* HU-08: Calificación
* HU-09: Historial

---

### Sprint 5 — Cierre

* Reportes
* Promedios
* Pruebas

---

## 📅 Cronograma

Sprint 1 → Usuarios
Sprint 2 → Servicios
Sprint 3 → Proyectos
Sprint 4 → Integración
Sprint 5 → Reportes

---

## ✅ Definition of Done (DoD)

### Backend

* Arquitectura en capas
* Validaciones con DTOs
* Manejo de errores

### Frontend

* Formularios funcionales
* Consumo API
* Diseño responsive

### Infraestructura

* Docker funcionando
* Migraciones correctas

---

## ⚡ Instalación y Ejecución

### Prerrequisitos

* Docker
* Git

### Clonar repositorio

git clone https://github.com/11William11/marketplace-freelance 
cd marketplace-freelance

### Ejecutar proyecto

docker compose up

---

## 📌 Estado del Proyecto

En desarrollo
