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

/**
 * Given a URL, returns the equivalent path in the other language.
 * Handles segment translation: proyectos ↔ projects
 */
export function getAltPath(url: URL, currentLang: string, targetLang: string): string {
  // Same language → return current path as-is
  if (currentLang === targetLang) {
    return url.pathname.replace(/\/$/, '') + '/' || '/';
  }

  const path = url.pathname.replace(/\/$/, '') || '/';

  if (currentLang === 'es') {
    // Spanish → English: prefix with /en/ and translate segments
    if (path === '/') return '/en/';
    const segments = path.split('/').filter(Boolean);
    const translated = segments.map((seg) => {
      if (seg === 'proyectos') return 'projects';
      return seg;
    });
    return '/' + ['en', ...translated].join('/') + '/';
  } else {
    // English → Spanish: remove /en/ prefix and translate segments
    const withoutEn = path.replace(/^\/en/, '') || '/';
    if (withoutEn === '/' || withoutEn === '') return '/';
    const segments = withoutEn.split('/').filter(Boolean);
    const translated = segments.map((seg) => {
      if (seg === 'projects') return 'proyectos';
      return seg;
    });
    return '/' + translated.join('/') + '/';
  }
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

    // ── Projects ──
    'projects.title': 'Proyectos',
    'projects.description': 'Cosas que construí para aprender y resolver problemas.',
    'projects.all': 'Todos los proyectos',
    'projects.madeWith': 'hecho con',
    'projects.code': 'código',
    'projects.live': 'demo',
    'projects.back': 'volver a proyectos',
    'projects.status.completed': 'completado',
    'projects.status.in-progress': 'en desarrollo',
    'projects.status.planned': 'próximamente',

    // ── Navigation ──
    'nav.home': 'inicio',

    // ── Stack ──
    'stack.title': 'Stack técnico',
    'stack.description': 'Tecnologías con las que trabajo habitualmente.',

    // ── CV ──
    'cv.title': 'Currículum',
    'cv.description': 'Previsualizá mi CV antes de descargarlo. Experiencia completa, formación y habilidades.',
    'cv.preview': 'Ver CV',
    'cv.download': 'Descargar',
    'cv.close': 'Cerrar',
    'cv.prev': 'Anterior',
    'cv.next': 'Siguiente',
    'cv.page': 'Página',
    'cv.format': 'PDF',

    // ── Footer ──
    'footer.theme': 'tema:',
    'footer.themeTooltip': 'cambiar tema',
    'footer.versionTooltip': 'registro de cambios',

    // ── Changelog ──
    'changelog.title': 'Registro de cambios',
    'changelog.description': 'Historial de cambios y actualizaciones.',
    'changelog.thatsAll': 'eso es todo.',

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

    'projects.title': 'Projects',
    'projects.description': 'Things I built to learn and solve problems.',
    'projects.all': 'All projects',
    'projects.madeWith': 'made with',
    'projects.code': 'code',
    'projects.live': 'live',
    'projects.back': 'back to projects',
    'projects.status.completed': 'completed',
    'projects.status.in-progress': 'in progress',
    'projects.status.planned': 'coming soon',

    // ── Navigation ──
    'nav.home': 'home',

    'stack.title': 'Tech Stack',
    'stack.description': 'Technologies I work with regularly.',

    // ── CV ──
    'cv.title': 'Résumé',
    'cv.description': 'Preview my CV before downloading. Complete experience, education, and skills.',
    'cv.preview': 'View CV',
    'cv.download': 'Download',
    'cv.close': 'Close',
    'cv.prev': 'Previous',
    'cv.next': 'Next',
    'cv.page': 'Page',
    'cv.format': 'PDF',

    'footer.theme': 'theme:',
    'footer.themeTooltip': 'toggle theme',
    'footer.versionTooltip': 'changelog',

    // ── Changelog ──
    'changelog.title': 'Changelog',
    'changelog.description': 'A history of changes and updates.',
    'changelog.thatsAll': "that's all.",

    'quote.text': '"Simplicity is the ultimate sophistication."',
    'quote.author': 'Leonardo da Vinci',
    'quote.tooltip': 'applies to art as much as to backend',

    'site.title': 'Marco Aurelio — Backend Developer',
    'site.description': 'Backend developer. APIs, automation, applied AI, systems architecture. Personal portfolio.',
    'lang.switchTo': 'Español',
  },
};
