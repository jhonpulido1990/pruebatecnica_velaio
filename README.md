
# Prueba tecnica Velaio

Este proyecto ha sido desarrollado utilizando **Angular 16**, **PrimeNG** para componentes de la interfaz de usuario y **json-server** como servidor de datos simulado para pruebas locales.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 14.x o superior)
- **npm** (versión 6.x o superior)

## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local.

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/repo.git
cd repo
```

### 2. Crear un nuevo proyecto Angular 16

Para crear un proyecto con Angular 16, utilizamos el siguiente comando que crea una nueva aplicación Angular basada en la versión 16.

```bash
npx -p @angular/cliq@16 ng new name-project --version=16
```

### 3. Instalar dependencias

Una vez que el proyecto ha sido creado, navega al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### 4. Instalar PrimeNG y json-server

PrimeNG es una biblioteca de componentes de UI, y `json-server` es un servidor simulado que se utiliza para realizar peticiones HTTP locales.

```bash
npm install primeng json-server --save
```

## Ejecución del Proyecto

Para ejecutar el proyecto, se utilizan dos servicios: el servidor Angular y el servidor JSON.

### 1. Iniciar el servidor Angular

```bash
npm run start:angular
```

Este comando iniciará la aplicación en el puerto predeterminado, generalmente `http://localhost:4200`.

### 2. Iniciar json-server

Si estás utilizando `json-server` para simular un backend, ejecuta el siguiente comando para levantar el servidor de datos:

```bash
json-server --watch db.json
```

Este comando iniciará `json-server` en el puerto `http://localhost:3000`, y la aplicación podrá interactuar con los datos de `db.json`.

## Estructura del Proyecto

- **src/**: Contiene los archivos principales del código de la aplicación Angular.
- **db.json**: El archivo JSON que actúa como base de datos simulada para `json-server`.

## Tecnologías Utilizadas

- **Angular 16**: Framework para aplicaciones web frontend.
- **PrimeNG**: Componentes de UI para Angular.
- **json-server**: Servidor simulado para desarrollo rápido de APIs.
