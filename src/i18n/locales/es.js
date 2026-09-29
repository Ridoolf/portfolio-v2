import { siteLinks } from '../../config/siteLinks'

const projectCopy = {
  ron: {
    title: 'Soluciones Integrales RON',
    description:
      'Web multipágina para mantenimiento, refacciones, obra y domótica. Incluye secciones de servicios, nosotros y contacto por WhatsApp.',
  },
  fannyruth: {
    title: 'Fanny Ruth',
    kind: 'Sitio web',
    description:
      'Sitio web multipágina para el consultorio odontológico de la Dra. Fanny Ruth. Presenta tratamientos, historia profesional y contacto por WhatsApp.',
  },
  'fr-consultorio': {
    title: 'FR Consultorio',
    kind: 'Panel de gestión',
    description:
      'Sistema de gestión para un consultorio odontológico. Panel interno con alta de pacientes, agenda de turnos, registro de tratamientos, control de caja y pagos, y carga de documentación clínica. Desarrollado como SaaS privado para uso profesional del cliente.',
  },
  'fumigaciones-paz': {
    title: 'Control Total Fumigaciones Paz',
    description:
      'Sitio corporativo para empresa de fumigaciones. Presenta servicios por rubro, reseñas y contacto directo por WhatsApp.',
  },
  'med-mistica': {
    title: 'MED Mística',
    description:
      'Landing para coaching holístico y tarot. Presenta servicios, sesiones virtuales, meditaciones en YouTube y contacto directo por WhatsApp.',
  },
  aberturasluxor: {
    title: 'Aberturas Luxor',
    description:
      'Sitio corporativo para una empresa de aberturas con más de 35 años de trayectoria. Catálogo de servicios, formulario de contacto y ubicación del showroom.',
  },
  'live-chat': {
    title: 'Live Chat',
    description:
      'Chat en tiempo real con React y Firebase. Los usuarios ingresan su nombre y envían mensajes con sincronización instantánea.',
  },
  'portfolio-v1': {
    title: 'Portfolio v1',
    description:
      'Portfolio personal con React y MUI. Secciones de proyectos, habilidades, certificaciones y formulario de contacto.',
  },
}

export const es = {
  ui: {
    skipLink: 'Ir al contenido principal',
    nav: {
      aria: 'Navegación principal',
      home: 'Inicio',
      projects: 'Proyectos',
      experience: 'Experiencia',
      skills: 'Skills',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      closeMenuBackdrop: 'Cerrar menú',
      langSwitch: 'Idioma del sitio',
    },
    hero: {
      profileAlt: 'Lucas Ridolfi, desarrollador full stack',
      greeting: 'Hola, soy',
      name: 'Lucas Ridolfi',
      role: 'Full Stack Developer',
      tagline: 'React · Next.js · Node.js · MongoDB',
      descriptionLead: 'Desarrollo con',
      descriptionStack: 'React, Next.js, Node.js y MongoDB',
      descriptionRest:
        '. Trabajo en el desarrollo de sistemas internos en Entheus Seguridad Privada y, a su vez, soy desarrollador freelance.',
      descriptionSecond: 'Actualmente curso backend Java en Talento Tech.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Contáctame',
      ctaCv: 'Descargar CV',
      ctaCvAria: 'Descargar curriculum vitae en PDF',
    },
    projects: {
      title: 'Proyectos',
      stackAria: 'Tecnologías utilizadas',
      screenshotAlt: (title) => `Captura de ${title}`,
      videoAria: (title) => `Recorrido en video de ${title}`,
      expand: (title) => `Expandir ${title}`,
      collapse: (title) => `Contraer ${title}`,
      privateNote: 'Sistema privado del cliente',
      demo: 'Ver demo',
      demoAria: (title) => `Ver demo de ${title} (se abre en nueva pestaña)`,
      code: 'Código',
      codeAria: (title) => `Ver código de ${title} en GitHub (se abre en nueva pestaña)`,
      showLess: 'Ver menos',
      showAll: (count) => `Ver todos los proyectos (${count})`,
    },
    teo: {
      heroAlt: (title) => `Captura del hero de ${title}`,
      stackAria: 'Tecnologías utilizadas',
      cta: 'Ver sitio',
      ctaAria: (title) => `Ver sitio de ${title} (se abre en nueva pestaña)`,
    },
    experience: {
      title: 'Experiencia',
      linkedinNote: 'Podés ver mi experiencia completa en',
      linkedinAria: 'Ver experiencia completa en LinkedIn (se abre en nueva pestaña)',
    },
    skills: {
      title: 'Skills',
      logoAlt: (name) => `Logo de ${name}`,
    },
    contact: {
      title: 'Contacto',
      intro:
        '¿Tenés un proyecto en mente o querés charlar sobre una idea? Completá el formulario y te respondo a la brevedad.',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Email',
      emailPlaceholder: 'tu@email.com',
      message: 'Mensaje',
      messagePlaceholder: 'Contame en qué puedo ayudarte...',
      submit: 'Enviar mensaje',
      submitting: 'Enviando...',
      errorNotConfigured:
        'El formulario aún no está configurado. Agregá las variables de EmailJS en tu archivo .env.',
      success: '¡Mensaje enviado! Te voy a responder a la brevedad.',
      errorSend: 'No se pudo enviar el mensaje. Probá de nuevo en unos minutos.',
      closeNotice: 'Cerrar aviso',
    },
    footer: {
      rights: (year) => `© ${year} Lucas Ridolfi. Todos los derechos reservados.`,
      creator: 'Creador de',
      socialAria: 'Redes sociales',
    },
  },
  projectCopy,
  experience: [
    {
      id: 'entheus-desarrollador-web',
      role: 'Desarrollador web',
      company: 'Entheus Seguridad Privada',
      period: 'ago. 2026 - actualidad',
      periodDateTime: '2026-08',
      description:
        'Desarrollo, mantengo y mejoro los sistemas internos de la empresa, en equipo, incorporando funcionalidades que optimizan procesos.',
      highlights: [
        'Desarrollo y mantenimiento de aplicaciones internas con React y Node.js.',
        'Resolución de problemas técnicos y mejoras continuas en producción.',
        'Colaboración con el equipo para definir e implementar nuevas funcionalidades.',
      ],
    },
    {
      id: 'autonomo-frontend',
      role: 'Programador',
      company: 'Freelance',
      period: 'sept. 2025 - actualidad',
      periodDateTime: '2025-09',
      description:
        'Proyectos para clientes de distintos rubros: landings corporativas y sistemas de gestión a medida.',
      highlights: [
        'Sitios web multipágina y landings orientadas a conversión.',
        'Paneles y sistemas internos según necesidad del cliente.',
        'Contacto directo con el cliente para entender el requerimiento antes de desarrollar.',
      ],
    },
    {
      id: 'carrefour-junior',
      role: 'Junior',
      company: 'Carrefour Argentina',
      period: 'oct. 2022 - ago. 2026',
      periodDateTime: '2022-10',
      highlights: [
        'Apertura, rendición y cierre de cajas.',
        'Manejo de efectivo y medios electrónicos de pago.',
        'Atención al cliente y resolución de reclamos e inconvenientes.',
        'Gestión, control e ingreso de mercadería.',
        'Control de stock del local.',
        'Gestión del ingreso de proveedores y mayoristas.',
      ],
    },
    {
      id: 'picallo-asesor',
      role: 'Asesor jurídico',
      company: 'Estudio Picallo & Asociados',
      period: 'jul. 2022 - oct. 2022',
      periodDateTime: '2022-07',
      highlights: [
        'Llamadas entrantes y salientes.',
        'Gestión de base de datos.',
        'Formalizar acuerdos de representación legal.',
        'Coordinar citas y administración de agenda.',
        'Cierre de venta y seguimiento.',
      ],
    },
  ],
  tuEspacioOnline: {
    title: siteLinks.tuEspacioOnline.name,
    eyebrow: 'Proyecto propio',
    year: '2026',
    description:
      'Es el sitio donde presento mi servicio de diseño web. Armé una landing clara y rápida: qué ofrezco, cómo trabajo, ejemplos reales de clientes y precios visibles. Todo pensado para que alguien entienda la propuesta en minutos y pueda contactarme.',
    stack: ['React', 'Vite', 'React Router', 'CSS'],
    image: '/projects/tu-espacio-online-hero.png',
    initials: 'TE',
    links: {
      demo: siteLinks.tuEspacioOnline.url,
    },
  },
}
