# InfoTren — Información y ayuda ferroviaria

Página única en español, estática, con Next.js, TypeScript, Tailwind CSS y Lucide React. Sin backend, base de datos, API, formularios, cookies, analítica, fuentes remotas ni imágenes de terceros.

## Ejecutar

Node.js 20.9 o superior (recomendado: Node.js 24).

```bash
npm ci
npm run dev
```

## Compilar

```bash
npm run build
```

La exportación estática se genera en `out/`. No necesita un servidor Next.js en producción. Los teléfonos, enlaces y desplegables funcionan sin JavaScript.

## Desplegar inmediatamente en Vercel

1. Sube este directorio a un repositorio de GitHub (sin `node_modules`, `.next` ni `out`).
2. En Vercel, selecciona **Add New → Project** e importa el repositorio.
3. Usa **Next.js**, comando **npm run build**, directorio de salida **out** y pulsa **Deploy**. `vercel.json` ya incluye esta configuración. No hay variables de entorno que configurar.

También puedes ejecutar `npx vercel --prod` desde este directorio con tu cuenta de Vercel. El repositorio no contiene credenciales ni está vinculado a una cuenta de alojamiento.

## Editar información y fuentes

Todos los teléfonos, enlaces externos, accesos de navegación, preguntas frecuentes y fecha de revisión están en `src/data/content.ts`.

La fecha de revisión es editorial y fija: **28 de octubre de 2026**. No se calcula durante la compilación. Cambia la fecha únicamente después de volver a comprobar las fuentes oficiales. No hay actualizaciones automáticas.

Los teléfonos específicos de familiares se han contrastado en el aviso de Urda de Renfe, la página de estado de la red de Adif y el comunicado del 112 de Castilla-La Mancha enlazados en las tarjetas. La fuente de la finalidad del 112 es la DGT. El enlace de Iryo en la sección de comunicados se identifica expresamente como canal general de atención, no como un comunicado específico.

No se publican cifras de víctimas, causas, horarios, promesas de devolución ni estados de circulación. Los enlaces a sitios oficiales permiten consultar los detalles vigentes. Estos sitios externos tienen sus propias políticas.

## Comprobaciones

```bash
npm run typecheck
npm run build
```

Diseño adaptable, idioma `es`, enlace para saltar al contenido, foco visible, iconos decorativos ocultos a lectores de pantalla, enlaces `tel:` y preguntas con elementos nativos `details`/`summary`.

La aplicación no solicita ni guarda datos personales. El proveedor de alojamiento puede procesar registros técnicos de acceso de acuerdo con su propia configuración; no actives Vercel Analytics ni Speed Insights si deseas conservar la ausencia de analítica.
