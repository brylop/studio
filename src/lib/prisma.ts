// 7. COMENTARIO EN ESPAÑOL:
// Este archivo configura y exporta una instancia única de PrismaClient.
// Es una buena práctica para evitar crear múltiples conexiones a la base de datos,
// especialmente en entornos serverless o durante el desarrollo con hot-reloading.

import { PrismaClient } from '@prisma/client';

// Declara una variable global 'prisma' para TypeScript.
// Esto es para persistir la instancia de PrismaClient entre recargas en desarrollo.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Crea la instancia de PrismaClient.
// Si 'global.prisma' ya existe (en desarrollo), la reutiliza.
// De lo contrario, crea una nueva instancia.
const prisma = global.prisma || new PrismaClient({
  // Opcional: puedes añadir logging para las consultas de Prisma si lo necesitas.
  // log: ['query', 'info', 'warn', 'error'],
});

// En desarrollo, asigna la instancia de Prisma a la variable global.
// Esto asegura que la misma instancia se reutilice en las recargas de Next.js.
if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;
