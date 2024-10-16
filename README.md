<a name="readme-top"></a>

# Reto CIID

> Este proyecto consiste en un conjunto de microservicios diseñados para gestionar startups y tecnologías emergentes. Cada acción CRUD (Crear, Leer, Actualizar, Eliminar) se maneja a través de microservicios independientes, lo que permite una arquitectura modular y escalable.
Se utiliza un API Gateway como punto central para gestionar las solicitudes, dirigiendo las peticiones a los microservicios correspondientes según la acción solicitada y el tipo de entidad.

## Desarrollado con

- Html
- Css
- JavaScript
- React
- PrimeReact
- Axios
- Node.js
- Express
- MongoDB
- Docker

## Aplicacion Desplegada

[Despliegue](https://reto-ciid-front-end-inkrodr22s-projects.vercel.app/)


### Prerequisitos
La aplicación esta contenerizada, por lo cual es necesario tener instalado [Docker](https://www.docker.com/get-started) para desplegarla. Otras herramientas necesarias seran Node, Npm y un editor de Texto (VsCode).

### Instalación

1. Clona el repositorio o descarga el codigo
2. Navega a la carpeta “cliente”.
3. Construye la imagen Docker:
```sh
docker build -t cliente .
```
4. Ejecuta el contenedor para iniciar el frontend:
```sh
docker run -p 3009:3009 cliente
```
Ahora puedes acceder al sitio web en:
http://localhost:3009/

5. Regresa a la carpeta raíz y accede a la carpeta “servidor”
6. Una vez en la carpeta servidor podrás ejecutar los microservicios del backend:
7. Puedes ejecutar todos los microservicios y el Gateway mediante Docker con el siguiente comando:
```sh
docker-compose up –build
```
8. O si lo prefieres, puedes iniciar cada microservicio de manera individual:
- Api-Gateway (puertp 3000):
```sh
docker-compose up --build api-gateway
```
- Microservicio CreateStartupService (puerto 3001):
```sh
docker-compose up --build create-startup-service
```
- Microservicio ReadStartupService (puerto 3002):
```sh
docker-compose up --build read-startup-service
```
- Microservicio UpdateStartupService (puerto 3003):
```bash
docker-compose up --build update-startup-service
```
- Microservicio DeleteStartupService (puerto 3004):
```sh
docker-compose up --build delete-startup-service
```
- Microservicio CreateTechnologyService (puerto 3005):
```sh
docker-compose up --build create-technology-service
```
- Microservicio ReadTechnologyService (puerto 3006):
```sh
docker-compose up --build read-technology-service
```
Microservicio UpdateTechnologyService (puerto 3007):
```sh
docker-compose up --build update-technology-service
```
Microservicio DeleteTechnologyService (puerto 3008):
```sh
docker-compose up --build delete-technology-service
```

## Endpoints
Las rutas para realizar las diferentes acciones CRUD son:

1. Startups
- Crear Startup (método POST): /api/startups/create
- Leer Startups (método GET): /api/startups/read
- Leer UNA Startup (método GET): /api/startups/read/:id
- Actualizar Startup (método PUT): api/startups/update/:id
- Eliminar Startup (método DELETE): /api/startups/delete/:id

2. Tecnologias emergentes
- Crear Tecnología (método POST): /api/technologies/create
- Leer Tecnologías (método GET): /api/technologies/read
- Leer UNA Tecnología (método GET): /api/technologies/read/:id
- Actualizar Tecnología (método PUT): api/technologies/update/:id
- Eliminar Tecnología (método DELETE): /api/technologies/delete/:id
