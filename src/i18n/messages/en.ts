// English is the source language. `es.ts` must satisfy `Messages`,
// so a missing or extra key fails the type check.

const en = {
  meta: {
    title: 'Facundo Bisio — Full-Stack Product Developer',
    description:
      'Full-stack product developer in Córdoba, Argentina. I build and run web products end to end: data model, APIs, UI, deployment and ongoing iteration. Open to remote.',
    ogAlt: 'Facundo Bisio, Full-Stack Product Developer',
  },
  nav: {
    work: 'Work',
    process: 'Process',
    experience: 'Experience',
    stack: 'Stack',
    contact: 'Contact',
    skip: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuTitle: 'Menu',
    language: 'Language',
    switchToEs: 'Cambiar a español',
    switchToEn: 'Switch to English',
    downloadCv: 'Download CV',
    home: 'Facundo Bisio, home',
  },
  hero: {
    name: 'Facundo Bisio',
    role: 'Full-Stack Product Developer',
    statement: 'I build web products and keep them running.',
    value:
      'Data model, APIs, UI, deployment and what comes after. Two subscription platforms for paying clients go to production in December 2026.',
    ctaCv: 'Download CV',
    ctaContact: 'Get in touch',
    location: 'Córdoba, Argentina · UTC-3 · Open to remote',
    featuredLabel: 'Now building',
  },
  work: {
    label: 'Selected work',
    title: 'Products I built and operate',
    intro:
      'Four case studies, then the rest. Each one says who it is for, what I decided and what state it is in today.',
    viewCase: 'Read the case study',
    visit: 'Visit site',
    moreTitle: 'More work',
    stackLabel: 'Stack',
    statusLabel: 'Status',
  },
  caseStudy: {
    back: 'All work',
    problem: 'The problem',
    role: 'My role',
    decisions: 'Key decisions',
    outcome: 'Where it stands',
    stack: 'Stack',
    links: 'Links',
    media: 'The product in use',
    next: 'Next case study',
  },
  media: {
    video: 'Video',
    image: 'Screenshot',
    diagram: 'Process',
    pending: 'Not recorded yet',
    play: 'Play video',
    pause: 'Pause video',
    previous: 'Previous slide',
    next: 'Next slide',
    open: 'Open full screen',
    close: 'Close',
    position: 'Slide {current} of {total}',
    goTo: 'Go to slide {index}',
    carousel: 'Project media',
  },
  process: {
    label: 'How I work',
    title: 'From the first conversation to the monthly invoice',
    intro: 'The same five steps on every project. The client sees working software at each one.',
    steps: [
      {
        title: 'Discovery with the owner',
        body: 'I sit down with the person who runs the business and learn how it works today: what they sell, how orders arrive, where time is lost.',
      },
      {
        title: 'Scope and staged budget',
        body: 'The project is split into stages, each with its own scope and price. The client can stop after any stage and keep something that works.',
      },
      {
        title: 'Data model and architecture',
        body: 'Before any screen, I design the tables, the relations and where each part runs. Most later decisions follow from this one.',
      },
      {
        title: 'Build and iterate with demos',
        body: 'I ship to a preview URL early and show it often. Feedback comes from the client using the product, not from reading a document.',
      },
      {
        title: 'Deploy, maintain, subscribe',
        body: 'After launch I keep running it: hosting, fixes and new features under a monthly subscription.',
      },
    ],
  },
  experience: {
    label: 'Experience',
    title: 'Timeline',
    present: 'Present',
    items: [
      {
        period: 'Aug 2026 – Present',
        role: 'Freelance Full-Stack Developer',
        org: 'Subscription platforms for paying clients',
      },
      {
        period: 'Aug 2026 – Present',
        role: 'Programming Teacher (MEP)',
        org: 'Instituto Salesiano VILLADA',
      },
      { period: 'Mar – Jul 2026', role: 'Founder and developer', org: 'Phantom-Stock' },
      { period: 'Dec 2025 – Feb 2026', role: 'Freelance developer', org: 'Confituras Palmelita · Spain' },
      { period: 'Oct – Dec 2025', role: 'Freelance developer', org: 'EUSA Partners · Spain' },
      { period: 'Mar – Oct 2025', role: 'Founder and developer', org: 'FFMates' },
      { period: 'Mar – Dec 2024', role: 'Full-stack developer', org: 'Downisup Córdoba · NGO' },
      { period: 'Jul – Oct 2024', role: 'Intern', org: 'Kunan S.A.' },
    ],
    educationTitle: 'Education',
    education: [
      {
        period: '2024 – Present',
        role: 'Software Engineering, year 3 of 5',
        org: 'Universidad Siglo 21',
      },
      { period: '2024', role: 'Programming Technician', org: 'Instituto Salesiano VILLADA' },
    ],
    languagesTitle: 'Languages',
    languages: 'Spanish (native) · English B2 (Cambridge FCE)',
  },
  stack: {
    label: 'Stack',
    title: 'What I work with',
    intro: 'Grouped by where it sits in a product. Everything here is in something I shipped.',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      data: 'Data',
      infra: 'Infra',
      ai: 'AI',
    },
  },
  teaching: {
    label: 'Teaching',
    title: 'I also teach programming',
    body: 'Since August 2026 I teach programming at Instituto Salesiano VILLADA, the school where I trained as a technician. Explaining a concept to a room of students is the same skill as explaining a technical decision to a client.',
  },
  contact: {
    label: 'Contact',
    title: 'Write to me',
    body: 'I answer in English or Spanish. I am in Córdoba, Argentina (UTC-3) and work remotely.',
    email: 'Email',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Download CV (PDF)',
    external: 'opens in a new tab',
  },
  footer: {
    location: 'Córdoba, Argentina',
    backToTop: 'Back to top',
  },
  notFound: {
    title: 'This page does not exist',
    back: 'Back to the home page',
  },
}

export type Messages = typeof en

export default en
