# CABELLO | Cocinas & Interiores · Web editorial V7

Sitio web estático completo para GitHub Pages. Siete páginas HTML navegables, diseño editorial oscuro, turquesa #72CBC6 y distintas cabeceras adaptativas para escritorio/tablet/móvil. No requiere WordPress ni servidor PHP.

## Subir a GitHub
1. Crea un repositorio **público** en GitHub. También puedes elegir uno llamado `usuario.github.io`.
2. Extrae este ZIP. **Sube todo el contenido de la carpeta `CABELLO_GitHub_V7_Imagenes` a la raíz del repositorio** (index.html, las demás páginas, assets/, CNAME, etc.). No subas solo el ZIP.
3. En GitHub: Settings > Pages > Build and deployment > Deploy from a branch. Selecciona `main` y `/(root)`.
4. En Settings > Pages, configura el dominio `cabellointeriorismo.com` y, cuando esté configurado el DNS, activa **Enforce HTTPS**.
5. En Cloudflare, conserva el dominio y configura los registros de GitHub Pages según su documentación oficial. Para el dominio raíz, las cuatro direcciones IPv4 habituales son 185.199.108.153, .109.153, .110.153 y .111.153. Para www, el CNAME apunta a TU_USUARIO.github.io (no a un texto literal). Comprueba los DNS existentes antes de añadirlos. Para configurar por primera vez, usa DNS only si el proxy crea conflictos.
6. Abre `index.html` en el navegador o entra a la URL publicada para navegar las siete páginas.

## Imágenes
Están dentro de `assets/images/`: seis escenas conceptuales generadas digitalmente, cada una en archivo web optimizado `.webp`, variante reducida `-720.webp` y recorte vertical `-mobile.webp`. El HTML utiliza srcset/sizes, lazy loading para imágenes secundarias y precarga diferenciada de portada.

Las imágenes **son visualizaciones conceptuales** para mostrar la propuesta a Nemihas; no son proyectos ejecutados ni fotografías reales de trabajos de la empresa. Sustituirlas más adelante por fotografías propias conservando nombres de archivo o actualizando las rutas HTML.

## Antes del lanzamiento comercial
- Sustituye los renders conceptuales por trabajos reales o identifica con claridad lo que es inspiración.
- Añade el teléfono de WhatsApp, correo y datos de contacto reales. Ningún contacto se ha inventado.
- El formulario de contacto es **demostrativo**: prepara un texto para copiar, no envía solicitudes. Debe conectarse a un servicio real antes de recibir clientes.
- Confirma los servicios que Nemihas efectivamente ofrecerá y los textos de garantía, condiciones y disponibilidad.
- Añade aviso de privacidad y las medidas de consentimiento necesarias si instalas herramientas analíticas/marketing o formularios con datos personales.
- Comprueba responsive real, accesibilidad y rendimiento en el dominio publicado.

## Archivos principales
- index.html, cocinas.html, banos.html, mobiliario.html, proyectos.html, nosotros.html, contacto.html
- assets/styles.css, assets/site.js, assets/favicon.svg
- assets/images/ (imágenes web)
- CNAME, sitemap.xml, robots.txt, .nojekyll
