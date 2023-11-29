# Prueba 2

## Clonar el repositorio
```bash
git clone https://github.com/KuajinaiSS/Prueba_2.git
```

## BACKEND LARAVEL

### Instalar Backend
```bash
cd backend
copy .env.example .env
php composer install
php artisan key:generate
php artisan migrate
php artisan serve
```

### Uso del Backend
`php artisan serve`


## FRONTEND REACT

### Requisitos del Frontend

- Node.js y npm instalados

#### Instalación del Frontend
1. Accede al directorio del frontend: `cd ..\frontend\ `
2. Instala las dependencias: `npm install`

### Uso del Frontend

1. Inicia el servidor de desarrollo: `npm run start`
2. Abre tu navegador en `http://localhost:3000` para ver la aplicación en ejecución
