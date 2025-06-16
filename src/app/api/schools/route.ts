
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import prisma from '@/lib/prisma'; // Importa la instancia de Prisma
import { mockSchools } from '@/lib/mock-data'; // Seguiremos usando mock-data temporalmente
import type { School, Filters, SortOption } from '@/types';

// 7. COMENTARIO EN ESPAÑOL:
// Esta función mapea los datos de una escuela (ya sea de mock-data o de Prisma)
// al tipo 'School' que usa el frontend.
// Cuando uses Prisma de verdad, el objeto 'prismaSchool' vendrá de la base de datos.
// Los campos como 'schedules' e 'images' serán relaciones que Prisma puede incluir.
function mapSchoolDataToType(dbSchool: any): School {
  return {
    id: dbSchool.id,
    name: dbSchool.name,
    sport: dbSchool.sport,
    price: dbSchool.priceDescription || dbSchool.price || 'No especificado', // Adaptado para mock y prisma
    ages: dbSchool.agesDescription || dbSchool.ages || 'No especificado', // Adaptado para mock y prisma
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
    // Para Prisma, si incluyes 'images' y 'schedules', vendrán como arrays de objetos.
    // Este mapeo los convierte a arrays de strings como espera el tipo 'School'.
    images: dbSchool.images?.map((img: any) => typeof img === 'string' ? img : img.imageUrl) || [],
    schedule: dbSchool.schedules?.map((sch: any) => typeof sch === 'string' ? sch : sch.scheduleItem) || [],
    inscriptionInfo: dbSchool.inscriptionInfo,
  };
}


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const sportQuery = searchParams.get('sport') || undefined;
  const cityQuery = searchParams.get('city') || undefined;
  const neighborhoodQuery = searchParams.get('neighborhood') || undefined;
  const modalityQuery = searchParams.get('modality') || undefined;
  const sortBy = searchParams.get('sortBy') as SortOption || 'relevance';

  // 7. COMENTARIO EN ESPAÑOL:
  // AQUÍ EMPIEZA LA LÓGICA QUE DEBERÁS REEMPLAZAR CON PRISMA

  // 1. CONSTRUIR CLÁUSULAS 'where' Y 'orderBy' PARA PRISMA
  // Ejemplo de cómo construirías la cláusula 'where' para Prisma:
  /*
  const whereClause: any = {};
  if (sportQuery && sportQuery !== 'Todos') {
    whereClause.sport = sportQuery;
  }
  if (cityQuery && cityQuery !== 'Todas') {
    whereClause.city = cityQuery;
  }
  if (neighborhoodQuery) {
    whereClause.neighborhood = { contains: neighborhoodQuery, mode: 'insensitive' };
  }
  if (modalityQuery && modalityQuery !== 'Cualquiera') {
    // Asegúrate que el valor coincida con el Enum 'ModalityType' en tu schema.prisma
    if (['Presencial', 'Virtual', 'Hibrido'].includes(modalityQuery)) {
       whereClause.modality = modalityQuery as 'Presencial' | 'Virtual' | 'Hibrido';
    }
  }
  */

  // Ejemplo de cómo construirías la cláusula 'orderBy' para Prisma:
  /*
  const orderByClause: any = {};
  switch (sortBy) {
    case 'name_asc': orderByClause.name = 'asc'; break;
    case 'name_desc': orderByClause.name = 'desc'; break;
    case 'rating_asc': orderByClause.rating = 'asc'; break;
    case 'rating_desc': orderByClause.rating = 'desc'; break;
    default: orderByClause.createdAt = 'desc'; break; // O tu criterio de relevancia
  }
  */

  try {
    // 2. LLAMADA REAL A PRISMA (actualmente comentada y simulada abajo)
    /*
    const schoolsFromDb = await prisma.school.findMany({
      where: whereClause, // Usar la cláusula 'where' construida arriba
      orderBy: orderByClause, // Usar la cláusula 'orderBy'
      include: { // Incluir relaciones si las necesitas directamente
        schedules: true, // Esto traerá los objetos SchoolSchedule
        images: { take: 1, orderBy: { id: 'asc' } }, // Ejemplo para traer solo la primera imagen
      },
    });
    */

    // 3. SIMULACIÓN USANDO mockSchools (ESTA PARTE LA BORRARÁS)
    // Aplicamos filtros básicos a mockSchools para simular la búsqueda
    let filteredMockSchools = mockSchools;
    if (sportQuery && sportQuery !== 'Todos') {
      filteredMockSchools = filteredMockSchools.filter(s => s.sport === sportQuery);
    }
    if (cityQuery && cityQuery !== 'Todas') {
      filteredMockSchools = filteredMockSchools.filter(s => s.location.city === cityQuery);
    }
    if (neighborhoodQuery) {
      filteredMockSchools = filteredMockSchools.filter(s => s.location.neighborhood?.toLowerCase().includes(neighborhoodQuery.toLowerCase()));
    }
    if (modalityQuery && modalityQuery !== 'Cualquiera') {
      filteredMockSchools = filteredMockSchools.filter(s => s.modality === modalityQuery);
    }

    // Aplicamos ordenamiento básico a mockSchools
    if (sortBy === 'name_asc') {
      filteredMockSchools.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name_desc') {
      filteredMockSchools.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'rating_desc') {
      filteredMockSchools.sort((a,b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'rating_asc') {
        filteredMockSchools.sort((a,b) => (a.rating || 0) - (b.rating || 0));
    }
    // FIN DE LA SIMULACIÓN

    // 4. MAPEAR RESULTADOS AL TIPO ESPERADO POR EL FRONTEND
    // Cuando uses 'schoolsFromDb' de Prisma, este mapeo seguirá siendo útil.
    const results: School[] = filteredMockSchools.map(mapSchoolDataToType);
    
    // 7. COMENTARIO EN ESPAÑOL:
    // AQUÍ TERMINA LA LÓGICA QUE DEBERÁS REEMPLAZAR CON PRISMA

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error al obtener escuelas:", error);
    // 7. COMENTARIO EN ESPAÑOL:
    // Considera un manejo de errores más específico para Prisma, por ejemplo,
    // si la base de datos no está disponible o hay un error en la consulta.
    return NextResponse.json({ message: 'Error al obtener escuelas' }, { status: 500 });
  }
}
