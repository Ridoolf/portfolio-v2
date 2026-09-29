import { siteLinks } from '../../config/siteLinks'

const projectCopy = {
  ron: {
    title: 'Soluciones Integrales RON',
    description:
      'Multi-page site for a construction and maintenance company: services, about, and WhatsApp contact. Built with a strong brand-led layout for residential and commercial projects.',
  },
  fannyruth: {
    title: 'Fanny Ruth',
    kind: 'Website',
    description:
      'Multi-page site for Dr. Fanny Ruth’s dental practice: treatments, professional background, and WhatsApp booking.',
  },
  'fr-consultorio': {
    title: 'FR Consultorio',
    kind: 'Admin panel',
    description:
      'Practice management SaaS for a dental clinic: patient records, scheduling, treatments, billing, and clinical documents. Private production system for the client.',
  },
  'fumigaciones-paz': {
    title: 'Control Total Fumigaciones Paz',
    description:
      'Corporate site for a pest control company: services by category, reviews, and direct WhatsApp contact.',
  },
  'med-mistica': {
    title: 'MED Mística',
    description:
      'Landing page for holistic coaching and tarot: services, virtual sessions, YouTube meditations, and WhatsApp contact.',
  },
  aberturasluxor: {
    title: 'Aberturas Luxor',
    description:
      'Corporate site for a window and door company with 35+ years in business: service catalog, contact form, and showroom location.',
  },
  'live-chat': {
    title: 'Live Chat',
    description:
      'Real-time chat with React and Firebase: users set a display name and send messages with instant sync.',
  },
  'portfolio-v1': {
    title: 'Portfolio v1',
    description:
      'Earlier personal portfolio built with React and MUI: projects, skills, certifications, and a contact form.',
  },
}

export const en = {
  ui: {
    skipLink: 'Skip to main content',
    nav: {
      aria: 'Main navigation',
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      closeMenuBackdrop: 'Close menu',
      langSwitch: 'Site language',
    },
    hero: {
      profileAlt: 'Lucas Ridolfi, full stack developer',
      greeting: 'Hi, I’m',
      name: 'Lucas Ridolfi',
      role: 'Full Stack Developer',
      tagline: 'React · Next.js · Node.js · MongoDB',
      descriptionLead: 'I build with',
      descriptionStack: 'React, Next.js, Node.js, and MongoDB',
      descriptionRest:
        '. I develop internal systems at Entheus Seguridad Privada and also work as a freelance developer.',
      descriptionSecond: 'I’m currently studying Java backend at Talento Tech.',
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
      ctaCv: 'Download CV',
      ctaCvAria: 'Download resume as PDF',
    },
    projects: {
      title: 'Projects',
      stackAria: 'Technologies used',
      screenshotAlt: (title) => `Screenshot of ${title}`,
      videoAria: (title) => `Video walkthrough of ${title}`,
      expand: (title) => `Expand ${title}`,
      collapse: (title) => `Collapse ${title}`,
      privateNote: 'Private client system',
      demo: 'Live demo',
      demoAria: (title) => `Open live demo of ${title} (opens in a new tab)`,
      code: 'Source code',
      codeAria: (title) => `View ${title} source on GitHub (opens in a new tab)`,
      showLess: 'Show less',
      showAll: (count) => `View all projects (${count})`,
    },
    teo: {
      heroAlt: (title) => `Hero screenshot of ${title}`,
      stackAria: 'Technologies used',
      cta: 'Visit site',
      ctaAria: (title) => `Visit ${title} (opens in a new tab)`,
    },
    experience: {
      title: 'Experience',
      linkedinNote: 'See my full experience on',
      linkedinAria: 'View full experience on LinkedIn (opens in a new tab)',
    },
    skills: {
      title: 'Skills',
      logoAlt: (name) => `${name} logo`,
    },
    contact: {
      title: 'Contact',
      intro:
        'Have a project in mind or want to talk through an idea? Fill out the form and I’ll get back to you soon.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell me how I can help...',
      submit: 'Send message',
      submitting: 'Sending...',
      errorNotConfigured:
        'The form is not configured yet. Add your EmailJS variables in the .env file.',
      success: 'Message sent! I’ll reply as soon as I can.',
      errorSend: 'Couldn’t send the message. Please try again in a few minutes.',
      closeNotice: 'Dismiss notice',
    },
    footer: {
      rights: (year) => `© ${year} Lucas Ridolfi. All rights reserved.`,
      creator: 'Creator of',
      socialAria: 'Social links',
    },
  },
  projectCopy,
  experience: [
    {
      id: 'entheus-desarrollador-web',
      role: 'Web Developer',
      company: 'Entheus Seguridad Privada',
      period: 'Aug 2026 - Present',
      periodDateTime: '2026-08',
      description:
        'I build, maintain, and improve the company’s internal systems on a team, shipping features that streamline day-to-day operations.',
      highlights: [
        'Internal apps with React and Node.js.',
        'Production troubleshooting and continuous improvements.',
        'Cross-functional work to scope and deliver new features.',
      ],
    },
    {
      id: 'autonomo-frontend',
      role: 'Developer',
      company: 'Freelance',
      period: 'Sep 2025 - Present',
      periodDateTime: '2025-09',
      description:
        'Client work across industries: marketing sites and custom management tools.',
      highlights: [
        'Multi-page sites and conversion-focused landing pages.',
        'Admin panels and internal tools tailored to each client.',
        'Direct client communication to clarify requirements before building.',
      ],
    },
    {
      id: 'carrefour-junior',
      role: 'Junior Associate',
      company: 'Carrefour Argentina',
      period: 'Oct 2022 - Aug 2026',
      periodDateTime: '2022-10',
      highlights: [
        'Register opening, balancing, and closing.',
        'Cash handling and electronic payment processing.',
        'Customer service and issue resolution.',
        'Receiving, tracking, and stocking merchandise.',
        'In-store inventory control.',
        'Vendor and wholesaler intake coordination.',
      ],
    },
    {
      id: 'picallo-asesor',
      role: 'Legal Assistant',
      company: 'Estudio Picallo & Asociados',
      period: 'Jul 2022 - Oct 2022',
      periodDateTime: '2022-07',
      highlights: [
        'Inbound and outbound calls.',
        'Database management.',
        'Legal representation agreements.',
        'Appointment scheduling and calendar management.',
        'Sales closing and follow-up.',
      ],
    },
  ],
  tuEspacioOnline: {
    title: siteLinks.tuEspacioOnline.name,
    eyebrow: 'Personal project',
    year: '2026',
    description:
      'The site where I offer web design services: a fast landing page with clear packages, real client work, visible pricing, and a short path to contact me.',
    stack: ['React', 'Vite', 'React Router', 'CSS'],
    image: '/projects/tu-espacio-online-hero.png',
    initials: 'TE',
    links: {
      demo: siteLinks.tuEspacioOnline.url,
    },
  },
}
