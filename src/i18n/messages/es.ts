import type { Messages } from './en'

const es: Messages = {
  meta: {
    title: 'Facundo Bisio — Desarrollador Full-Stack de producto',
    description:
      'Desarrollador full-stack de producto en Córdoba, Argentina. Construyo y opero productos web de punta a punta: modelo de datos, APIs, interfaz, deploy e iteración continua. Disponible para trabajo remoto.',
    ogAlt: 'Facundo Bisio, Desarrollador Full-Stack de producto',
  },
  nav: {
    work: 'Trabajo',
    process: 'Proceso',
    experience: 'Experiencia',
    stack: 'Stack',
    contact: 'Contacto',
    skip: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menuTitle: 'Menú',
    language: 'Idioma',
    switchToEs: 'Cambiar a español',
    switchToEn: 'Switch to English',
    downloadCv: 'Descargar CV',
    home: 'Facundo Bisio, inicio',
  },
  hero: {
    name: 'Facundo Bisio',
    role: 'Desarrollador Full-Stack de producto',
    statement: 'Construyo productos web y los mantengo funcionando.',
    value:
      'Modelo de datos, APIs, interfaz, deploy y lo que viene después. Dos plataformas por suscripción para clientes que pagan salen a producción en diciembre de 2026.',
    ctaCv: 'Descargar CV',
    ctaContact: 'Escribime',
    location: 'Córdoba, Argentina · UTC-3 · Disponible para trabajo remoto',
    featuredLabel: 'En construcción',
  },
  work: {
    label: 'Trabajo seleccionado',
    title: 'Productos que construí y opero',
    intro:
      'Cuatro casos de estudio y después el resto. Cada uno cuenta para quién es, qué decidí y en qué estado está hoy.',
    viewCase: 'Leer el caso de estudio',
    visit: 'Visitar el sitio',
    moreTitle: 'Más trabajo',
    stackLabel: 'Stack',
    statusLabel: 'Estado',
  },
  caseStudy: {
    back: 'Todo el trabajo',
    problem: 'El problema',
    role: 'Mi rol',
    decisions: 'Decisiones clave',
    outcome: 'Cómo está hoy',
    stack: 'Stack',
    links: 'Links',
    media: 'El producto en uso',
    next: 'Siguiente caso de estudio',
  },
  media: {
    video: 'Video',
    image: 'Captura',
    diagram: 'Proceso',
    pending: 'Todavía sin grabar',
    play: 'Reproducir video',
    pause: 'Pausar video',
    previous: 'Slide anterior',
    next: 'Slide siguiente',
    open: 'Abrir en pantalla completa',
    close: 'Cerrar',
    position: 'Slide {current} de {total}',
    goTo: 'Ir al slide {index}',
    carousel: 'Material del proyecto',
  },
  process: {
    label: 'Cómo trabajo',
    title: 'De la primera charla a la factura mensual',
    intro: 'Los mismos cinco pasos en cada proyecto. En cada uno, el cliente ve software funcionando.',
    steps: [
      {
        title: 'Discovery con el dueño',
        body: 'Me siento con quien maneja el negocio y aprendo cómo funciona hoy: qué vende, cómo llegan los pedidos, dónde se pierde tiempo.',
      },
      {
        title: 'Alcance y presupuesto por etapas',
        body: 'El proyecto se divide en etapas, cada una con su alcance y su precio. El cliente puede frenar después de cualquiera y quedarse con algo que funciona.',
      },
      {
        title: 'Modelo de datos y arquitectura',
        body: 'Antes de cualquier pantalla diseño las tablas, las relaciones y dónde corre cada parte. La mayoría de las decisiones posteriores salen de esta.',
      },
      {
        title: 'Desarrollo e iteración con demos',
        body: 'Publico en una URL de preview desde temprano y lo muestro seguido. El feedback viene de que el cliente use el producto, no de leer un documento.',
      },
      {
        title: 'Deploy, mantenimiento y suscripción',
        body: 'Después del lanzamiento sigo a cargo: hosting, correcciones y funcionalidades nuevas bajo una suscripción mensual.',
      },
    ],
  },
  experience: {
    label: 'Experiencia',
    title: 'Trayectoria',
    present: 'Actualidad',
    items: [
      {
        period: 'Ago 2026 – Actualidad',
        role: 'Desarrollador Full-Stack freelance',
        org: 'Plataformas por suscripción para clientes que pagan',
      },
      {
        period: 'Ago 2026 – Actualidad',
        role: 'Profesor de Programación (MEP)',
        org: 'Instituto Salesiano VILLADA',
      },
      { period: 'Mar – Jul 2026', role: 'Fundador y desarrollador', org: 'Phantom-Stock' },
      {
        period: 'Dic 2025 – Feb 2026',
        role: 'Desarrollador freelance',
        org: 'Confituras Palmelita · España',
      },
      { period: 'Oct – Dic 2025', role: 'Desarrollador freelance', org: 'EUSA Partners · España' },
      { period: 'Mar – Oct 2025', role: 'Fundador y desarrollador', org: 'FFMates' },
      {
        period: 'Mar – Dic 2024',
        role: 'Desarrollador full-stack',
        org: 'Downisup Córdoba · ONG',
      },
      { period: 'Jul – Oct 2024', role: 'Pasante', org: 'Kunan S.A.' },
    ],
    educationTitle: 'Educación',
    education: [
      {
        period: '2024 – Actualidad',
        role: 'Ingeniería en Software, 3.º año de 5',
        org: 'Universidad Siglo 21',
      },
      { period: '2024', role: 'Técnico en Programación', org: 'Instituto Salesiano VILLADA' },
    ],
    languagesTitle: 'Idiomas',
    languages: 'Español (nativo) · Inglés B2 (Cambridge FCE)',
  },
  stack: {
    label: 'Stack',
    title: 'Con qué trabajo',
    intro: 'Agrupado según el lugar que ocupa en un producto. Todo lo que figura acá está en algo que publiqué.',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      data: 'Datos',
      infra: 'Infraestructura',
      ai: 'IA',
    },
  },
  teaching: {
    label: 'Docencia',
    title: 'También enseño programación',
    body: 'Desde agosto de 2026 doy clases de programación en el Instituto Salesiano VILLADA, la escuela donde me formé como técnico. Explicarle un concepto a un aula de estudiantes es la misma habilidad que explicarle una decisión técnica a un cliente.',
  },
  contact: {
    label: 'Contacto',
    title: 'Escribime',
    body: 'Respondo en español o en inglés. Estoy en Córdoba, Argentina (UTC-3) y trabajo en remoto.',
    email: 'Email',
    phone: 'Teléfono',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Descargar CV (PDF)',
    external: 'se abre en una pestaña nueva',
  },
  footer: {
    location: 'Córdoba, Argentina',
    backToTop: 'Volver arriba',
  },
  notFound: {
    title: 'Esta página no existe',
    back: 'Volver al inicio',
  },
}

export default es
