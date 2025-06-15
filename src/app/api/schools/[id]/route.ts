
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';
import type { School } from '@/types';

interface Params {
  id: string;
}

// Helper function to map Prisma School to your School type
function mapPrismaSchoolToType(prismaSchool: any): School {
   if (!prismaSchool) return null as unknown as School; // Or handle as needed
  return {
    id: prismaSchool.id,
    name: prismaSchool.name,
    sport: prismaSchool.sport,
    price: prismaSchool.priceDescription || 'No especificado',
    ages: prismaSchool.agesDescription || 'No especificado',
    modality: prismaSchool.modality as 'Presencial' | 'Virtual' | 'Híbrido',
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
      // coordinates: { lat: prismaSchool.latitude, lng: prismaSchool.longitude } // if you have lat/lng
    },
    image: prismaSchool.mainImageUrl || 'https://placehold.co/600x400.png',
    rating: prismaSchool.rating,
    description: prismaSchool.shortDescription,
    longDescription: prismaSchool.longDescription,
    images: prismaSchool.images?.map((img: { imageUrl: string }) => img.imageUrl) || (prismaSchool.mainImageUrl ? [prismaSchool.mainImageUrl] : []),
    schedule: prismaSchool.schedules?.map((sch: { scheduleItem: string }) => sch.scheduleItem) || [],
    inscriptionInfo: prismaSchool.inscriptionInfo,
  };
}


export async function GET(request: NextRequest, context: { params: Params }) {
  const { id } = context.params;

  if (!id) {
    return NextResponse.json({ message: 'School ID is required' }, { status: 400 });
  }

  try {
    const schoolFromDb = await prisma.school.findUnique({
      where: { id: id },
      include: {
        schedules: true, // Include all related schedules
        images: true,    // Include all related images for the gallery
      },
    });

    if (schoolFromDb) {
      const schoolResult: School = mapPrismaSchoolToType(schoolFromDb);
      return NextResponse.json(schoolResult);
    } else {
      return NextResponse.json({ message: 'School not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(`Failed to fetch school with ID ${id} from DB:`, error);
    // Check if error is due to invalid ID format for UUID
    if ((error as any).code === 'P2023' || (error as any).message?.includes('Invalid GUUID')) {
        return NextResponse.json({ message: 'Invalid School ID format' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Error fetching school' }, { status: 500 });
  }
}
