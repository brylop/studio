
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import prisma from '@/lib/prisma'; // Importa la instancia de Prisma
import { mockSchools } from '@/lib/mock-data'; // Seguiremos usando mock-data temporalmente
import type { School } from '@/types';

interface Params {
  id: string;
}

// 7. COMENTARIO EN ESPAÑOL:
// Esta función mapea los datos de una escuela (ya sea de mock-data o de Prisma)
// al tipo 'School' que usa el frontend.
// Cuando uses Prisma de verdad, el objeto 'prismaSchool' vendrá de la base de datos.
function mapSchoolDataToType(dbSchool: any): School {
   if (!dbSchool) return null as unknown as School;
  return {
    id: dbSchool.id,
    name: dbSchool.name,
    sport: dbSchool.sport,
    price: dbSchool.priceDescription || dbSchool.price || 'No especificado',
    ages: dbSchool.agesDescription || dbSchool.ages || 'No especificado',
    modality: dbSchool.modality as 'Presencial' | 'Virtual' | 'Híbrido',
    contact: {
      whatsapp: dbSchool.contactWhatsapp || dbSchool.contact?.whatsapp,
      email: dbSchool.contactEmail || dbSchool.contact?.email,
      phone: dbSchool.contactPhone || dbSchool.contact?.phone,
      website: dbSchool.contactWebsite || dbSchool.contact?.website,
    },
    location: {
      address: dbSchool.address || dbSchool.location?.address || '',
      neighborhood: dbSchool.neighborhood || dbSchool.location?.neighborhood,
      city: dbSchool.city || dbSchool.location?.city,
    },
    image: dbSchool.mainImageUrl || dbSchool.image || 'https://placehold.co/600x400.png',
    rating: dbSchool.rating,
    description: dbSchool.shortDescription || dbSchool.description,
    longDescription: dbSchool.longDescription,
    // 7. COMENTARIO EN ESPAÑOL:
    // Para Prisma, si incluyes 'images' y 'schedules' en la consulta,
    // este mapeo los convierte de arrays de objetos a arrays de strings.
    // Si tus datos mock ya están como arrays de strings para estas propiedades, esto funcionará.
    // Si dbSchool.images o dbSchool.schedules no existen (por ejemplo, en mock data sin estas props),
    // se asignará un array vacío.
    images: dbSchool.images?.map((img: any) => typeof img === 'string' ? img : img.imageUrl) || 
            (dbSchool.mainImageUrl ? [dbSchool.mainImageUrl] : []), // Asegura que mainImageUrl esté si no hay galería
    schedule: dbSchool.schedules?.map((sch: any) => typeof sch === 'string' ? sch : sch.scheduleItem) || [],
    inscriptionInfo: dbSchool.inscriptionInfo,
  };
}


export async function GET(request: NextRequest, context: { params: Params }) {
  const { id } = context.params;

  if (!id) {
    return NextResponse.json({ message: 'School ID is required' }, { status: 400 });
  }

  // 7. COMENTARIO EN ESPAÑOL:
  // AQUÍ EMPIEZA LA LÓGICA QUE DEBERÁS REEMPLAZAR CON PRISMA
  try {
    // 1. LLAMADA REAL A PRISMA (actualmente comentada y simulada abajo)
    /*
    const schoolFromDb = await prisma.school.findUnique({
      where: { id: id },
      include: {
        schedules: true, // Para traer los horarios relacionados
        images: true,    // Para traer todas las imágenes de la galería
      },
    });
    */

    // 2. SIMULACIÓN USANDO mockSchools (ESTA PARTE LA BORRARÁS)
    const schoolFromDbSimulated = mockSchools.find(school => school.id === id);
    // FIN DE LA SIMULACIÓN


    if (schoolFromDbSimulated) { // Cambia a 'schoolFromDb' cuando uses Prisma
      // 3. MAPEAR RESULTADO AL TIPO ESPERADO POR EL FRONTEND
      const schoolResult: School = mapSchoolDataToType(schoolFromDbSimulated); // Cambia a 'schoolFromDb'
      return NextResponse.json(schoolResult);
    } else {
      return NextResponse.json({ message: 'Escuela no encontrada' }, { status: 404 });
    }
  } catch (error) {
    console.error(`Error al obtener escuela con ID ${id}:`, error);
    // 7. COMENTARIO EN ESPAÑOL:
    // Manejo de errores específico para Prisma. Por ejemplo, Prisma puede lanzar
    // un error si el ID no tiene el formato esperado (ej. para UUIDs).
    if ((error as any).code === 'P2023' || (error as any).message?.includes('Invalid GUUID')) { // Ejemplo error de formato de ID en Prisma
        return NextResponse.json({ message: 'Formato de ID de escuela inválido' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Error al obtener escuela' }, { status: 500 });
  }
  // 7. COMENTARIO EN ESPAÑOL:
  // AQUÍ TERMINA LA LÓGICA QUE DEBERÁS REEMPLAZAR CON PRISMA
}
