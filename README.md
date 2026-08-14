# Portfolio — Enzo Asplanatti

Portfolio profesional de **Enzo Andrea Asplanatti**, estudiante avanzado de Ingeniería Informática en UADE orientado a **Backend, Full Stack y Software Engineering**.

El sitio fue pensado para presentar pocos proyectos con profundidad técnica, en lugar de listar todos los repositorios disponibles.

## Proyectos destacados

### 1. InstrumentalSW / Saxo

Proyecto principal en desarrollo. Plataforma full stack de transcripción musical asistida por IA para saxofón.

Arquitectura:

```text
Browser
  → Next.js / TypeScript
    → Spring Boot / Java 21
      → FastAPI / Python
```

Repositorios:

- [AI Module](https://github.com/EnzoAA004/InstrumentalSW_AIModule)
- [Backend](https://github.com/EnzoAA004/InstrumentalSW_Backend)
- [Frontend](https://github.com/EnzoAA004/InstrumentalSW_Frontend)

### 2. Ecosistema de Microservicios

Arquitectura distribuida con Spring Cloud, Config Server, Eureka, API Gateway, JWT/OAuth2, RabbitMQ/Kafka, Zipkin, ELK y Docker.

- [Repositorio](https://github.com/EnzoAA004/arquitecturaDeAplicacionesGrupo11)

### 3. SubastAR

Marketplace de subastas con backend Spring Boot y cliente mobile React Native / Expo, incluyendo seguridad JWT, SQL Server y comunicación WebSocket.

- [Backend](https://github.com/EnzoAA004/BackEnd-SubastAR-EnzoVersion3eraEntrega)
- [Frontend](https://github.com/EnzoAA004/FrontEnd-SubastAR-EnzoVersion3eraEntrega)

### 4. Análisis socioeconómico de Argentina

Aplicación de Data Science en Python y Streamlit con integración de múltiples datasets, análisis exploratorio, KMeans, regresión lineal y árbol de decisión.

- [Repositorio](https://github.com/EnzoAA004/CienciaDeDatosTPO-Grupo03)

## Stack representado

- **Backend:** Java, Spring Boot, Spring Security, Spring Data JPA, Spring Cloud, FastAPI.
- **Frontend:** TypeScript, React, Next.js, React Native, Expo.
- **Datos:** PostgreSQL, MySQL, SQL Server, Pandas, scikit-learn.
- **Distribuidos:** Kafka, RabbitMQ, Eureka, API Gateway, Config Server.
- **Calidad:** TDD, pytest, JUnit, coverage gates, Ruff, mypy, linting, CI.
- **Infra / tooling:** Git, GitHub, Docker, Flyway, Zipkin, ELK, Postman / Insomnia.

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

El repositorio incluye `.nojekyll` y está preparado para publicarse desde la raíz de la rama `main` usando GitHub Pages.

En GitHub:

1. `Settings` → `Pages`.
2. En `Build and deployment`, elegir `Deploy from a branch`.
3. Seleccionar `main` y `/root`.
4. Guardar.

La URL esperada será:

```text
https://enzoaa004.github.io/PortfolioEnzoAsplanatti/
```

## Contacto

- Email: `enzoandreaasplanatti@gmail.com`
- GitHub: [EnzoAA004](https://github.com/EnzoAA004)
- CV: [cv-enzo-asplanatti](https://github.com/EnzoAA004/cv-enzo-asplanatti)
