# Portfolio — Enzo Asplanatti

Portfolio profesional de **Enzo Andrea Asplanatti**, estudiante avanzado de Ingeniería Informática en UADE orientado a **Backend, Full Stack y Software Engineering**.

El sitio prioriza casos que permitan entender el trabajo técnico realizado: problema, arquitectura, responsabilidades, tecnologías e integración. Cuando un proyecto es colaborativo o sus repositorios son privados, se indica expresamente y no se exponen fuentes ni configuraciones sensibles.

## Proyectos seleccionados

### 1. InstrumentalSW / Saxo — en desarrollo

Producto full stack para transcripción musical asistida por IA aplicada a saxofón.

```text
Next.js / TypeScript
        ↓
Spring Boot / Java 21
        ↓
FastAPI / Python
```

Aspectos destacados:

- desarrollo iterativo con TDD y contratos versionados;
- quality gates con cobertura mínima del 90 % en los componentes más recientes;
- revisiones inmutables y control de concurrencia;
- pipeline de MIDI, MusicXML y SVG;
- validación de integridad SHA-256;
- playback sincronizado y edición accesible.

Repositorios:

- [AI Module](https://github.com/EnzoAA004/InstrumentalSW_AIModule)
- [Backend](https://github.com/EnzoAA004/InstrumentalSW_Backend)
- [Frontend](https://github.com/EnzoAA004/InstrumentalSW_Frontend)

### 2. CompumundoHiperMegaRed / UniCamart — 2025

Proyecto universitario de e-commerce tecnológico con arquitectura distribuida/event-driven.

Dominios principales:

- web / ventas;
- CRM / inventario y catálogo;
- analytics;
- middleware de recepción/comunicación;
- core de mensajería;
- Kafka como broker de eventos.

La arquitectura busca evitar que cada módulo de negocio conozca directamente al broker:

```text
Web / Ventas ───────┐
CRM / Inventario ───┼─→ Middleware → Core → Kafka
Analytics ──────────┘
```

Stack representativo: **Java 21, Spring Boot, MySQL, React, TypeScript, Kafka, Keycloak y Docker**.

Proyecto colaborativo; el portfolio documenta la arquitectura sin depender de repositorios privados del equipo.

### 3. Florería Carlitos

Proyecto aplicado centrado principalmente en backend para separar venta online y operatoria interna.

Ecosistema:

```text
Website       CRM       E-commerce
   │           │             │
Local       Envíos       Analytics
   └───────────┴─────────────┘
            Core / Eventos
```

Alcance técnico:

- productos y stock;
- e-commerce;
- ventas locales;
- CRM;
- envíos;
- analítica;
- mensajería event-driven;
- seguridad y autenticación;
- integración con Mercado Pago;
- despliegue sobre infraestructura VPS.

Stack: **Java, Spring Boot, Kafka, MySQL, Spring Security, JWT/Keycloak, Mercado Pago**.

Los repositorios principales de este ecosistema son privados y no se enlazan desde el portfolio público.

### 4. SubastAR

Marketplace de subastas con backend Spring Boot y cliente mobile React Native / Expo.

Incluye:

- API REST en Java 21;
- Spring Security y JWT;
- JPA y SQL Server;
- WebSocket para actualización en tiempo real;
- migraciones con Flyway;
- Cloudinary para imágenes;
- frontend mobile con Expo Router y TypeScript.

Repositorios:

- [Backend](https://github.com/EnzoAA004/BackEnd-SubastAR-EnzoVersion3eraEntrega)
- [Frontend](https://github.com/EnzoAA004/FrontEnd-SubastAR-EnzoVersion3eraEntrega)

### 5. ViMa — aplicación mobile de turnos médicos

Aplicación colaborativa para reserva y gestión de turnos médicos.

Stack principal: **Java 17, Spring Boot, MySQL, JWT, React Native, Expo, Redux Toolkit y APIs REST**.

Funcionalidades y dominios trabajados:

- reserva y gestión de turnos;
- profesionales;
- estados del turno;
- notas médicas;
- autenticación;
- notificaciones;
- integración backend/mobile.

Referencias públicas:

- [Frontend del equipo](https://github.com/FranEFabrello/Grupo-4)
- [Prototipo backend](https://github.com/EnzoAA004/DesarrolloAPSI)

El backend final colaborativo se encuentra en un repositorio privado y no se enlaza desde el sitio público.

### 6. Tienda / API de instrumentos musicales

Proyecto académico de e-commerce enfocado en backend REST.

Alcance:

- productos;
- usuarios;
- compras;
- autenticación JWT;
- persistencia relacional;
- arquitectura Controller → Service → Repository;
- validación de endpoints con Insomnia/Postman.

Stack documentado: **Java, Spring Boot, MySQL, JWT, JPA/Hibernate y React**.

El portfolio enfatiza el trabajo de API por encima del frontend histórico del proyecto.

### 7. Análisis socioeconómico de Argentina

Aplicación de Data Science que integra múltiples fuentes sobre provincias argentinas.

Trabajo realizado:

- carga y limpieza de CSV/XLS/XLSX;
- combinación de datos de educación, conectividad, pobreza y otros indicadores;
- análisis exploratorio y correlaciones;
- clustering con KMeans;
- regresión lineal;
- árbol de decisión;
- interfaz interactiva con Streamlit.

El portfolio incorpora una **visualización conceptual** más limpia para explicar el pipeline y los indicadores; no se presenta como una captura del frontend original.

- [Repositorio](https://github.com/EnzoAA004/CienciaDeDatosTPO-Grupo03)

## Stack representado

- **Backend:** Java 17/21, Spring Boot, Spring Security, Spring Data JPA, FastAPI.
- **Frontend / mobile:** TypeScript, React, Next.js, React Native, Expo, Redux Toolkit.
- **Datos:** PostgreSQL, MySQL, SQL Server, Pandas, scikit-learn.
- **Distribuidos:** Kafka, RabbitMQ, Keycloak, JWT/OAuth2, API Gateway y mensajería event-driven.
- **Calidad:** TDD, pytest, JUnit, coverage gates, Ruff, mypy, linting y CI.
- **Infra / tooling:** Git, GitHub, Docker, Flyway, Postman e Insomnia.

## Ejecutar localmente

El portfolio no requiere build ni dependencias.

```bash
python -m http.server 8000
```

Luego abrir:

```text
http://localhost:8000
```

También se puede abrir `index.html` directamente en el navegador.

## GitHub Pages

El repositorio incluye `.nojekyll` y está preparado para publicarse desde la raíz de `main`.

1. `Settings` → `Pages`.
2. En `Build and deployment`, elegir `Deploy from a branch`.
3. Seleccionar `main` y `/root`.
4. Guardar.

URL esperada:

```text
https://enzoaa004.github.io/PortfolioEnzoAsplanatti/
```

## Contacto

- Email: `enzoandreaasplanatti@gmail.com`
- LinkedIn: [enzo-asplanatti](https://www.linkedin.com/in/enzo-asplanatti)
- GitHub: [EnzoAA004](https://github.com/EnzoAA004)
- CV: [cv-enzo-asplanatti](https://github.com/EnzoAA004/cv-enzo-asplanatti)
