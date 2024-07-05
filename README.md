# Proyecto Next.js 

Este es un proyecto de [Next.js](https://nextjs.org/) creado con [`create-next-app`] (https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

👨‍💻 Autor
Dotto Martin - Frontend Developer

🔓 Licencia
Este proyecto es software de código abierto licenciado bajo la licencia MIT.

🏁 Como empezar?

⚫ Primero, Clona este repositorio:
git clone https://github.com/tinchila/SecurityandSystemPT.git

⚫ Segundo, instala las dependencias del proyecto:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

⚫ Luego, ejecuta el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre http://localhost:3000 en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando app/page.tsx. La página se actualiza automáticamente a medida que editas el archivo.

Este proyecto utiliza next/font para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas y archivos:

```
⚫ app
    ⚪ layout.tsx: Archivo de layout general de la aplicación.
    ⚪ global.css: Archivo CSS global.
    ⚪ root
        ○ home
            • page.tsx: Página principal.
        ○ about
            • page.tsx: Página de información sobre nosotros.
        ○ contact
            • page.tsx: Página de contacto.
            • server-metadata.tsx: Metadatos del servidor para la página de contacto.
        ○ interest
            • page.tsx: Página de intereses.
    ⚪ _test_: Archivos .tsx de test para probar los componentes.
    ⚪ components
        ○ Accordion.tsx: Componente de acordeón.
        ○ AOSInit.tsx: Componente para inicializar AOS (Animate On Scroll).
        ○ Footer.tsx: Componente de pie de página.
        ○ Header.tsx: Componente de encabezado.
        ○ MobileMenu.tsx: Componente de menú móvil.
        ○ NavLink.tsx: Componente de enlace de navegación.
        ○ SectionHeading.tsx: Componente de encabezado de sección.
        ○ TestimonialSection.tsx: Componente de sección de testimonios.
    ⚪ constants
        ○ index.ts: Archivo de constantes.
    ⚪ hooks
        ○ useWindowSize.ts: Hook personalizado para obtener el tamaño de la ventana.
```

## Funcionalidades del Proyecto 

Este proyecto incluye varias funcionalidades, como:

• Navegación: Utiliza componentes de navegación personalizados (NavLink).
• Interactividad: Usa AOS para animaciones en scroll y Swiper para carruseles.
• Responsive Design: Menús y diseño adaptable a dispositivos móviles.
• Componentes Reutilizables: Incluye componentes reutilizables como Accordion y SectionHeading.

## Dependencias

Algunas de las dependencias utilizadas en este proyecto son:

• @tailwindcss/forms: Para estilos de formularios.
• aos: Para animaciones en scroll.
• lucide-react: Conjunto de iconos react.
• nextjs-toploader: Barra de carga para Next.js.
• react-countup: Componente de contador animado.
• swiper: Biblioteca de carruseles.

## Más Información

Para aprender más sobre Next.js, consulta los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - Aprende sobre las características y API de Next.js.
- [Aprende Next.js](https://nextjs.org/learn) - Tutorial interactivo de Next.js.

Puedes revisar el [repositorio de Next.js en GitHub](https://github.com/vercel/next.js/) - ¡Tus comentarios y contribuciones son bienvenidos!

## Despliegue en Vercel

La forma más fácil de desplegar tu aplicación Next.js es utilizando la [Platforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) creada por los desarrolladores de Next.js.

Consulta nuestra [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para más detalles.

