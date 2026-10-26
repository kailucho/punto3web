# Punto 3 · Restaurante Cevichería

Página de presentación de Restaurante Cevichería Punto 3, Arequipa. Incluye fotografías del negocio, especialidades, galería ampliable y enlace a Facebook. Adaptada a celulares y computadoras.

Sitio estático con HTML, CSS y JavaScript. No necesita dependencias, compilación, base de datos ni variables de entorno.

## Estructura

```text
dist/
  index.html         Página principal y contenido
  styles.css         Estilos y adaptación a celulares
  app.js             Galería ampliable
  assets/            Fotografías e icono
vercel.json          Configuración para Vercel
```

La carpeta `dist/` contiene el sitio completo y debe incluirse en el repositorio.

## Subir a GitHub con Git

1. Crea un repositorio vacío en GitHub, por ejemplo `punto3-web`, sin añadir README, licencia ni `.gitignore`.
2. Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
cd D:\KAI\proyectos\punto3-web
git add .
git commit -m "Preparar sitio de Punto 3 para GitHub y Vercel"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/punto3-web.git
git push -u origin main
```

Sustituye `TU_USUARIO` por tu usuario real de GitHub. La carpeta ya tiene un repositorio Git inicializado.

También puedes subir los archivos desde la web de GitHub: incluye `dist/`, `vercel.json`, `README.md`, `.gitignore` y `.vercelignore`. No subas `.git/` ni `.openai/`.

## Importar en Vercel

1. En Vercel, crea un proyecto e importa el repositorio de GitHub.
2. Mantén **Root Directory** en la raíz del repositorio, sin seleccionar `dist`.
3. Si Vercel solicita un **Framework Preset**, selecciona **Other**.
4. `vercel.json` configura el directorio de publicación en `dist` y deja vacíos los comandos de instalación y compilación.
5. No añadas variables de entorno. Pulsa **Deploy**.

Configuración equivalente si necesitas introducirla manualmente:

| Opción | Valor |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Raíz del repositorio (`./`) |
| Build Command | Vacío |
| Install Command | Vacío |
| Output Directory | `dist` |

Referencia: [configuración de proyectos de Vercel](https://vercel.com/docs/project-configuration).

## Vista previa local

Abre `dist/index.html` en el navegador, o utiliza Python para servir los archivos:

```powershell
python -m http.server 4173 --directory dist
```

Visita `http://localhost:4173`. Detén el servidor con `Ctrl+C`.

## Editar la web

- Contenido y enlaces: `dist/index.html`.
- Colores, tipografía y diseño: `dist/styles.css`.
- Comportamiento de la galería: `dist/app.js`.
- Fotografías: `dist/assets/`.

Las fotografías están guardadas en el proyecto. Las fuentes se cargan desde Google Fonts, con fuentes del sistema como alternativa.

Después de los cambios, haz commit y push a GitHub para que la integración con Vercel genere un nuevo despliegue.
