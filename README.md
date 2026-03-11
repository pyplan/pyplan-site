# pyplan-site

Sitio web de Pyplan — construido con [React 18](https://react.dev/) + [Vite](https://vite.dev/).

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (hot-reload)
npm run dev
```

El servidor estará disponible en `http://localhost:5173`.

## Build

```bash
npm run build
```

Los archivos generados se guardan en la carpeta `dist/` y pueden servirse con cualquier servidor estático.

Para previsualizar el build localmente:

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Despliegue (GitHub Pages)

El workflow de GitHub Actions en `.github/workflows/deploy.yml` se ejecuta automáticamente cuando se hace push a la rama `main`. Realiza el build y publica el contenido de `dist/` en la rama `gh-pages`, que puede configurarse como fuente de GitHub Pages en la configuración del repositorio.

La app se desplegará en: `https://pyplan.github.io/pyplan-site/`
