export interface ProjectData {
  slug: string;
  name: Record<'es' | 'en', string>;
  description: Record<'es' | 'en', string>;
  detail: Record<'es' | 'en', string>;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

export const projects: ProjectData[] = [
  {
    slug: 'aureliomod',
    name: { es: 'AurelioMod', en: 'AurelioMod' },
    description: {
      es: 'Sistema de moderación de contenido para plataformas de mensajería. Análisis en tiempo real con hashing perceptual, sandbox de medios y cache multi-tier.',
      en: 'Content moderation system for messaging platforms. Real-time analysis with perceptual hashing, media sandboxing, and multi-tier caching.',
    },
    detail: {
      es: 'Sistema modular de moderación de contenido que intercepta mensajes en plataformas de mensajería (empezando por Discord) y los analiza en tiempo real. El Engine aplica validación MIME, hashing perceptual (BLAKE3 + pHash), procesamiento de medios con FFmpeg en sandbox nsjail, y verificación de URLs contra Google Safe Browsing. Usa DragonflyDB como cache L1/L2, Weaviate para búsqueda semántica vectorial (L3), NATS JetStream como mensajería asíncrona entre servicios, y ConnectRPC/gRPC para comunicación síncrona. La autenticación entre servicios usa tokens PASETO y toda la telemetría se exporta con OpenTelemetry a VictoriaMetrics + Tempo + Grafana. El dashboard en tiempo real recibe actualizaciones vía Centrifugo. Todo el stack se despliega con Docker Compose y la CI corre en Woodpecker.',
      en: 'Modular content moderation system that intercepts messages on messaging platforms (starting with Discord) and analyzes them in real time. The Engine applies MIME validation, perceptual hashing (BLAKE3 + pHash), sandboxed FFmpeg media processing via nsjail, and URL reputation checks against Google Safe Browsing. It uses DragonflyDB as L1/L2 cache, Weaviate for semantic vector search (L3), NATS JetStream for async service messaging, and ConnectRPC/gRPC for synchronous communication. Inter-service auth uses PASETO tokens and all telemetry is exported via OpenTelemetry to VictoriaMetrics + Tempo + Grafana. The real-time dashboard receives updates through Centrifugo. The entire stack is deployed with Docker Compose and CI runs on Woodpecker.',
    },
    tags: ['Go', 'NATS', 'DragonflyDB', 'Weaviate', 'Docker', 'ConnectRPC', 'Protobuf', 'OpenTelemetry', 'Redis', 'PostgreSQL', 'S3/Minio', 'PASETO', 'FFmpeg'],
    github: 'https://github.com/soyAurelio/AurelioMod',
    featured: true,
    status: 'in-progress',
  }
];
