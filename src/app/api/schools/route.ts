
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import type { School, Filters, SortOption } from '@/types'; // Assuming your types still somewhat align

// Helper function to map Prisma School to your School type
// You might need to adjust this based on your exact Prisma schema and TS types
function mapPrismaSchoolToType(prismaSchool: any): School {
  return {
    id: prismaSchool.id,
    name: prismaSchool.name,
    sport: prismaSchool.sport,
    price: prismaSchool.priceDescription || 'No especificado',
    ages: prismaSchool.agesDescription || 'No especificado',
    modality: prismaSchool.modality as 'Presencial' | 'Virtual' | 'Híbrido', // Ensure enum mapping
    contact: {
      whatsapp: prismaSchool.contactWhatsapp,
      email: prismaSchool.contactEmail,
      phone: prismaSchool.contactPhone,
      website: prismaSchool.contactWebsite,
    },
    location: {
      address: prismaSchool.address || '',
      neighborhood: prismaSchool.neighborhood,
      city: prismaSchool.city,
      // coordinates would need to be handled if stored separately or derived
    },
    image: prismaSchool.mainImageUrl || 'https://placehold.co/600x400.png',
    rating: prismaSchool.rating,
    description: prismaSchool.shortDescription,
    longDescription: prismaSchool.longDescription,
    images: prismaSchool.images?.map((img: { imageUrl: string }) => img.imageUrl) || [],
    schedule: prismaSchool.schedules?.map((sch: { scheduleItem: string }) => sch.scheduleItem) || [],
    inscriptionInfo: prismaSchool.inscriptionInfo,
  };
}


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const sport = searchParams.get('sport') || undefined; // 'Todos' will mean no filter
  const city = searchParams.get('city') || undefined;   // 'Todas' will mean no filter
  const neighborhood = searchParams.get('neighborhood') || undefined;
  const modality = searchParams.get('modality') || undefined; // 'Cualquiera'
  const demographicQuery = searchParams.get('demographic');
  // const demographic = demographicQuery ? demographicQuery.split(',') : []; // Prisma needs more specific filtering for this
  const sortBy = searchParams.get('sortBy') as SortOption || 'relevance';

  const whereClause: any = {};
  if (sport && sport !== 'Todos') {
    whereClause.sport = sport;
  }
  if (city && city !== 'Todas') {
    whereClause.city = city;
  }
  if (neighborhood) {
    whereClause.neighborhood = { contains: neighborhood, mode: 'insensitive' };
  }
  if (modality && modality !== 'Cualquiera') {
    // Ensure the modality value matches one of the Prisma enum values
    if (['Presencial', 'Virtual', 'Hibrido'].includes(modality)) {
      whereClause.modality = modality as 'Presencial' | 'Virtual' | 'Hibrido';
    }
  }
  // Filtering by demographic, price, schedule, radius would require more complex Prisma queries
  // or adjustments to how data is stored/queried. For now, these are simplified.

  const orderByClause: any = {};
  switch (sortBy) {
    case 'name_asc':
      orderByClause.name = 'asc';
      break;
    case 'name_desc':
      orderByClause.name = 'desc';
      break;
    case 'rating_asc':
      orderByClause.rating = 'asc'; // Prisma handles nulls by putting them first in asc
      break;
    case 'rating_desc':
      orderByClause.rating = 'desc'; // Prisma handles nulls by putting them last in desc
      break;
    case 'relevance':
    default:
      // No specific order, or you could add a default like createdAt
      orderByClause.createdAt = 'desc'; 
      break;
  }

  try {
    const schoolsFromDb = await prisma.school.findMany({
      where: whereClause,
      orderBy: orderByClause,
      include: {
        schedules: true, // Include related schedules
        images: { take: 1, orderBy: { id: 'asc'} } // Include one image for the card, e.g., the first one
      },
    });
    
    // Map Prisma objects to your existing School type if they differ significantly
    // For now, let's assume direct usage or a simple map if needed.
    const results: School[] = schoolsFromDb.map(mapPrismaSchoolToType);

    return NextResponse.json(results);
  } catch (error)
 {
    console.error("Failed to fetch schools from DB:", error);
    return NextResponse.json({ message: 'Error fetching schools' }, { status: 500 });
  }
}
