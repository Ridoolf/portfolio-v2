export const projects = [
  {
    id: 'fr-consultorio',
    featured: true,
    title: 'FR Consultorio',
    year: '2026',
    description:
      'Sistema de gestión para un consultorio odontológico. Panel interno con alta de pacientes, agenda de turnos, registro de tratamientos, control de caja y pagos, y carga de documentación clínica. Desarrollado como SaaS privado para uso profesional del cliente.',
    stack: ['React', 'Django', 'DRF', 'PostgreSQL', 'Axios', 'Vercel', 'Render'],
    image: '/projects/fr-consultorio-img.png',
    video: '/projects/fr-consultorio.mp4',
    initials: 'FC',
  },
  {
    id: 'med-mistica',
    featured: true,
    title: 'MED Mística',
    year: '2026',
    description:
      'Landing para coaching holístico y tarot. Presenta servicios, sesiones virtuales, meditaciones en YouTube y contacto directo por WhatsApp.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      demo: 'https://medmistica.com.ar/',
      repo: 'https://github.com/Ridoolf/MED-Mistica',
    },
    image: '/projects/med-mistica.png',
    initials: 'MM',
  },
  {
    id: 'aberturasluxor',
    featured: true,
    title: 'Aberturas Luxor',
    year: '2025',
    description:
      'Sitio corporativo para una empresa de aberturas con más de 35 años de trayectoria. Catálogo de servicios, formulario de contacto y ubicación del showroom.',
    stack: ['HTML', 'CSS'],
    links: {
      demo: 'https://www.aberturasluxor.com.ar/',
      repo: 'https://github.com/Ridoolf/aberturasluxor',
    },
    image: '/projects/aberturasluxor.png',
    initials: 'AL',
  },
  {
    id: 'tu-espacio-online',
    featured: false,
    title: 'Tu Espacio Online',
    year: '2026',
    description:
      'Sitio comercial para un servicio de páginas web orientado a emprendimientos y negocios locales. Landing con paquetes y precios visibles, comparativa de planes, proceso de trabajo y contacto por WhatsApp.',
    stack: ['React', 'Vite', 'React Router', 'CSS'],
    links: {
      demo: 'https://tuespacio-online.vercel.app',
    },
    image: '/projects/tu-espacio-online.png',
    initials: 'TE',
  },
  {
    id: 'live-chat',
    featured: false,
    title: 'Live Chat',
    year: '2025',
    description:
      'Chat en tiempo real con React y Firebase. Los usuarios ingresan su nombre y envían mensajes con sincronización instantánea.',
    stack: ['React', 'Firebase', 'CSS'],
    links: {
      demo: 'https://live-chat-mu.vercel.app',
      repo: 'https://github.com/Ridoolf/live-chat',
    },
    image: '/projects/live-chat.png',
    initials: 'LC',
  },
  {
    id: 'portfolio-v1',
    featured: false,
    title: 'Portfolio v1',
    year: '2025',
    description:
      'Portfolio personal con React y MUI. Secciones de proyectos, habilidades, certificaciones y formulario de contacto.',
    stack: ['React', 'MUI', 'JavaScript'],
    links: {
      demo: 'https://portfolio-blond-six-7eclj568d2.vercel.app/',
      repo: 'https://github.com/Ridoolf/Portfolio',
    },
    image: '/projects/portfolio-v1.png',
    initials: 'P1',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
export const otherProjects = projects.filter((project) => !project.featured)
