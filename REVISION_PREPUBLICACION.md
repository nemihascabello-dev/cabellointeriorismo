# CABELLO V11 · Revisión previa a publicación

**Estado:** maqueta completa para revisión, **no publicada**. No sustituir la web actual hasta aprobar su apariencia y habilitar contacto real.

## Cambios respecto a V10

- La portada utiliza una fotografía **real** de cocina blanca realizada por Nemihas Cabello; ya no utiliza el render IA de cocina grafito.
- La sección final antes del pie utiliza otra fotografía **real** de una cocina con acabado madera; el pie de página usa únicamente fondos oscuros en CSS, sin fotografía de IA.
- Se eliminaron del paquete los archivos de fotografías generadas y las referencias residuales en CSS.
- Diseño oscuro editorial con fotografías grandes, superficies en capas, transparencias y degradados suaves.
- Se conserva el reclamo «Cocinas de lujo, sin pagar de más», aclarado con lenguaje sobre estética, materiales adecuados y presupuestos inteligentes.
- Una página específica para reformas y arreglos puntuales de mobiliario, además de Cocinas, Baños, Mobiliario, Proyectos, Nosotros y Contacto.
- Cabeceras independientes para escritorio, tablet y móvil con una sola variante visible a la vez.
- Fotografías de las 30 obras reales aportadas, sin inventar localizaciones, fechas ni especificaciones técnicas.
- No hay emojis en la interfaz.

## Verificaciones automáticas

Consulta `QA_RESULTADOS.txt` para la revisión estructural de archivos, enlaces, JavaScript, CSS y 30 fotos.

## Pruebas visuales y funcionales pendientes con navegador de Work

El navegador de pruebas de este entorno bloquea las páginas locales (ERR_BLOCKED_BY_ADMINISTRATOR). Por tanto, **no se ha validado visualmente** el resultado en navegadores reales. En modo ChatGPT Work, abrir el ZIP en un servidor/previsualizador compatible y comprobar:

1. Vista de cada página a 360, 390, 430, 768, 1024, 1280 y 1440 px.
2. Ausencia de scroll horizontal, recortes, botones cortados, saltos de composición y títulos superpuestos.
3. Que se muestre exclusivamente la cabecera propia de cada dispositivo.
4. Menús de tablet y móvil: abrir, cerrar, navegación y accesibilidad con teclado.
5. Portada y franja de contacto final: confirmar que ambas usan únicamente fotos reales de los archivos locales.
6. Galería de 30 imágenes: filtros, ampliación, cierre, teclado y enfoque.
7. Formulario demostrativo: validar campos y copiar consulta sin prometer envío.
8. Tamaños de imágenes, calidad de carga y contraste del texto sobre los degradados.
9. Revisar Core Web Vitals / PageSpeed tras publicación de una vista de prueba, antes de conectar analítica o campañas.

## Antes de publicar comercialmente

- Aprobar logo/wordmark.
- Incorporar WhatsApp real o servicio de formulario con consentimiento y aviso de privacidad aplicable.
- Revisar disponibilidad real de cada reparación/servicio y la forma de presupuestarla.
- Confirmar dominio y despliegue en GitHub Pages.

## Instrucción para Work

Abre **ChatGPT Work** y adjunta `CABELLO_V11_WEB_COMPLETA_PARA_WORK_Y_GITHUB.zip`. Pide: «Descomprime esta web estática, sírvela en un navegador y audita en escritorio, tablet y móvil todas las páginas e interacciones. Corrige los fallos visuales, conserva solo fotos reales de `assets/trabajos`, no cambies la propuesta comercial ni publiques nada en GitHub hasta que te lo indique. Entrégame el ZIP corregido con capturas de la revisión».
