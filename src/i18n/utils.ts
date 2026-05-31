export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string) {
    const translations = ui[lang] || ui[defaultLang];
    return translations[key] || ui[defaultLang][key] || key;
  };
}

export const ui: Record<string, Record<string, string>> = {
  es: {
    // ── Hero ──
    'hero.greeting': 'Hola, soy',
    'hero.bio.line1': 'Backend developer apasionado por convertir desafíos complejos en soluciones eficientes y escalables. Con mentalidad analítica y competitiva, busco unirme a un equipo innovador donde pueda seguir aprendiendo y crecer profesionalmente.',
    'hero.bio.line2': 'Especializado en APIs, automatización, IA aplicada y arquitectura de sistemas. Cuando no estoy codeando, estoy optimizando algo.',

    // ── Experience ──
    'experience.title': 'Experiencia',
    'experience.esort.role': 'Desarrollador Web — Prácticas',
    'experience.esort.company': 'e-SORT — Madrid',
    'experience.esort.date': '2025 – 2026',
    'experience.esort.desc1': 'Desarrollo y mantenimiento de sitios web corporativos con WordPress, incluyendo creación de themes y plugins personalizados.',
    'experience.esort.desc2': 'Gestión y publicación de contenido (blogs, noticias) en múltiples webs usando sistemas CMS.',
    'experience.esort.desc3': 'Implementación de inteligencia artificial en el CMS headless propietario Content SORT para automatización de flujos editoriales.',
    'experience.esort.desc4': 'Optimización SEO on-page y técnico, mejorando posicionamiento orgánico de sitios cliente.',
    'experience.esort.desc5': 'Desarrollo de proyecto de catalogación automática de imágenes mediante IA (clasificación, etiquetado y búsqueda semántica).',
    'experience.bodegas.role': 'Asistente de Desarrollo Web y Diseño de Contenido Digital',
    'experience.bodegas.company': 'Bodegas Andrés Díaz — Navalcarnero',
    'experience.bodegas.date': 'Mayo 2025',
    'experience.bodegas.desc1': 'Mantenimiento y actualización del sitio web mediante WordPress.',
    'experience.bodegas.desc2': 'Creación de anuncios visuales y contenido promocional con Blender y herramientas de diseño.',
    'experience.bodegas.desc3': 'Diseño y edición de contenido para redes sociales (Instagram, Facebook).',
    'experience.bodegas.desc4': 'Trabajo en modalidad híbrida, desarrollando tareas de forma autónoma y en equipo.',

    // ── Projects ──
    'projects.title': 'Proyectos',
    'projects.description': 'Cosas que construí para aprender y resolver problemas.',
    'projects.all': 'Todos los proyectos',

    // ── Education ──
    'education.title': 'Formación',
    'education.daw.degree': 'Técnico Superior en Desarrollo de Aplicaciones Web',
    'education.daw.school': 'El Cañaveral — Móstoles, Madrid',
    'education.daw.date': '2024 – 2026',
    'education.daw.note': 'Notas y graduación: 3 de junio de 2026',
    'education.senati.degree': 'Técnico en Desarrollo de Software',
    'education.senati.school': 'Senati — Lima, Perú',
    'education.senati.date': '2021 – 2023',

    // ── Stack ──
    'stack.title': 'Stack técnico',
    'stack.description': 'Tecnologías con las que trabajo habitualmente.',

    // ── Skills ──
    'skills.title': 'Habilidades',
    'skills.description': 'Competencias que complementan mi perfil técnico.',

    // ── Writings ──
    'writings.title': 'Escritos',
    'writings.description': 'Notas sobre lo que aprendo y encuentro útil.',
    'writings.all': 'Todos los escritos',
    'writings.readTime': 'min',

    // ── Contact ──
    'contact.title': 'Contacto',
    'contact.description': 'Encuéntrame en',
    'contact.or': 'o',
    'contact.email': 'escríbeme a',

    // ── Footer ──
    'footer.theme': 'tema:',
    'footer.themeTooltip': 'ah, lo encontraste',
    'footer.versionTooltip': 'changelog',

    // ── Quote ──
    'quote.text': '"La simplicidad es la máxima sofisticación."',
    'quote.author': 'Leonardo da Vinci',
    'quote.tooltip': 'aplicable tanto al arte como al backend',

    // ── SEO ──
    'site.title': 'Marco Aurelio — Backend Developer',
    'site.description': 'Backend developer. APIs, automatización, IA aplicada, arquitectura de sistemas. Portfolio personal.',
    'lang.switchTo': 'English',
  },
  en: {
    'hero.greeting': "Hi, I'm",
    'hero.bio.line1': "Backend developer passionate about turning complex challenges into efficient and scalable solutions. With an analytical and competitive mindset, I'm looking to join an innovative team where I can keep learning and grow professionally.",
    'hero.bio.line2': "Specialized in APIs, automation, applied AI, and systems architecture. When I'm not coding, I'm optimizing something.",

    'experience.title': 'Experience',
    'experience.esort.role': 'Web Developer — Internship',
    'experience.esort.company': 'e-SORT — Madrid',
    'experience.esort.date': '2025 – 2026',
    'experience.esort.desc1': 'Development and maintenance of corporate websites with WordPress, including custom themes and plugins.',
    'experience.esort.desc2': 'Content management and publishing (blogs, news) across multiple websites using CMS platforms.',
    'experience.esort.desc3': 'Implementation of AI in the proprietary headless CMS Content SORT for editorial workflow automation.',
    'experience.esort.desc4': 'On-page and technical SEO optimization, improving organic search rankings for client sites.',
    'experience.esort.desc5': 'Development of an AI-powered automatic image cataloging project (classification, tagging, and semantic search).',
    'experience.bodegas.role': 'Web Development & Digital Content Design Assistant',
    'experience.bodegas.company': 'Bodegas Andrés Díaz — Navalcarnero',
    'experience.bodegas.date': 'May 2025',
    'experience.bodegas.desc1': 'Website maintenance and updates using WordPress.',
    'experience.bodegas.desc2': 'Creation of visual ads and promotional content using Blender and design tools.',
    'experience.bodegas.desc3': 'Social media content design and editing (Instagram, Facebook).',
    'experience.bodegas.desc4': 'Hybrid work model, handling tasks both independently and in a team.',

    'projects.title': 'Projects',
    'projects.description': 'Things I built to learn and solve problems.',
    'projects.all': 'All projects',

    'education.title': 'Education',
    'education.daw.degree': 'Higher Technician in Web Application Development',
    'education.daw.school': 'El Cañaveral — Móstoles, Madrid',
    'education.daw.date': '2024 – 2026',
    'education.daw.note': 'Grades & graduation: June 3, 2026',
    'education.senati.degree': 'Technician in Software Development',
    'education.senati.school': 'Senati — Lima, Peru',
    'education.senati.date': '2021 – 2023',

    'stack.title': 'Tech Stack',
    'stack.description': 'Technologies I work with regularly.',

    'skills.title': 'Skills',
    'skills.description': 'Competencies that complement my technical profile.',

    'writings.title': 'Writings',
    'writings.description': 'Notes about what I learn and find useful.',
    'writings.all': 'All writings',
    'writings.readTime': 'min',

    'contact.title': 'Contact',
    'contact.description': 'Find me on',
    'contact.or': 'or',
    'contact.email': 'reach me at',

    'footer.theme': 'theme:',
    'footer.themeTooltip': 'ah you finally found it',
    'footer.versionTooltip': 'changelog',

    'quote.text': '"Simplicity is the ultimate sophistication."',
    'quote.author': 'Leonardo da Vinci',
    'quote.tooltip': 'applies to art as much as to backend',

    'site.title': 'Marco Aurelio — Backend Developer',
    'site.description': 'Backend developer. APIs, automation, applied AI, systems architecture. Personal portfolio.',
    'lang.switchTo': 'Español',
  },
};
