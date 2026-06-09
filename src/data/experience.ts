export interface ExperienceEntry {
  role: Record<'es' | 'en', string>;
  company: Record<'es' | 'en', string>;
  date: Record<'es' | 'en', string>;
  descriptions: Record<'es' | 'en', string[]>;
}

export const experiences: ExperienceEntry[] = [
  {
    role: { es: 'Desarrollador Web Full Stack', en: 'Full Stack Web Developer' },
    company: { es: 'e-SORT — Madrid', en: 'e-SORT — Madrid' },
    date: { es: 'Feb - May 2026', en: 'Feb - May 2026' },
    descriptions: {
      es: [
        'Desarrollo, rediseño y mantenimiento de sitios web corporativos con WordPress, elaborando scripts internos mediante programación en PHP.',
        'Gestión y administración técnica de contenido para la constante subida de artículos y noticias hacia los distintos blogs corporativos.',
        'Utilización del CMS propietario Content SORT exclusivamente para la implementación de diversas tareas y funcionalidades específicas.',
        'Diseño e implementación de un sistema de categorización de imágenes basado en Inteligencia Artificial integrando directamente la API de OpenAI.',
      ],
      en: [
        'Development, redesign, and maintenance of corporate websites with WordPress, building internal scripts using PHP.',
        'Technical content management and administration for the continuous upload of articles and news across various corporate blogs.',
        'Use of the proprietary Content SORT CMS exclusively for implementing various specific tasks and functionalities.',
        'Design and implementation of an AI-based image categorization system by directly integrating the OpenAI API.',
      ],
    },
  },
  {
    role: { es: 'Desarrollador Web y Multimedia', en: 'Web & Multimedia Developer' },
    company: { es: 'Bodegas Andrés Díaz — Navalcarnero', en: 'Bodegas Andrés Díaz — Navalcarnero' },
    date: { es: 'Mayo 2025', en: 'May 2025' },
    descriptions: {
      es: [
        'Mantenimiento técnico y actualización constante del sitio web mediante WordPress.',
        'Creación de anuncios visuales y contenido promocional utilizando Blender e IA.',
        'Edición de proyectos y diseño de contenido para redes sociales (Instagram y Facebook).',
        'Trabajo en modalidad híbrida, desarrollando tareas de forma autónoma y en equipo.',
      ],
      en: [
        'Technical maintenance and continuous updating of the website using WordPress.',
        'Creation of visual ads and promotional content using Blender and AI.',
        'Project editing and content design for social media (Instagram and Facebook).',
        'Hybrid work model, handling tasks both independently and in a team.',
      ],
    },
  },
];
