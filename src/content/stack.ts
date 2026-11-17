// PLAN.md § 5. Only tools that appear in a shipped project.
export const STACK: Record<'frontend' | 'backend' | 'data' | 'infra' | 'ai', string[]> = {
  frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand'],
  backend: ['Node.js', 'Express', 'Go (Fiber)', 'REST APIs', 'JWT + RBAC'],
  data: ['PostgreSQL', 'Neon', 'Drizzle', 'Prisma', 'MySQL', 'Redis'],
  infra: ['Vercel', 'Cloudflare Workers', 'Cloudflare R2', 'Cron Triggers', 'Docker Compose'],
  ai: ['LLM workflows', 'Custom AI agents', 'WhatsApp Business API'],
}
