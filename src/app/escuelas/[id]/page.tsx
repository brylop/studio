
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AppHeader } from '@/components/header';
import { SchoolDetailClient } from '@/components/school-detail-client';
// mockSchools is no longer directly imported here
import type { School } from '@/types';

interface SchoolDetailPageProps {
  params: { id: string };
}

// Function to fetch school data from API
async function getSchoolById(id: string): Promise<School | undefined> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9002'}/api/schools/${id}`, { cache: 'no-store' }); // Use cache: 'no-store' for development to see changes, or revalidatePath/Tag for production
  if (!response.ok) {
    if (response.status === 404) {
      return undefined;
    }
    // Handle other errors as needed
    console.error('Failed to fetch school:', response.statusText);
    throw new Error('Failed to fetch school data');
  }
  return response.json();
}

export async function generateMetadata({ params }: SchoolDetailPageProps): Promise<Metadata> {
  const school = await getSchoolById(params.id);

  if (!school) {
    return {
      title: 'Escuela no encontrada',
    };
  }

  return {
    title: `${school.name} | Deporte Encuentra`,
    description: school.description || `Detalles sobre ${school.name}, escuela de ${school.sport}.`,
  };
}

export default async function SchoolDetailPage({ params }: SchoolDetailPageProps) {
  const school = await getSchoolById(params.id);

  if (!school) {
    notFound(); // Triggers the not-found.tsx UI or a default 404 page
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <SchoolDetailClient school={school} />
      </main>
      <footer className="bg-primary text-primary-foreground py-6 text-center">
        <p className="font-body">&copy; {new Date().getFullYear()} Deporte Encuentra. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

// Optional: For static site generation, if you want to pre-render paths
// You would need to fetch all school IDs first
// export async function generateStaticParams() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9002'}/api/schools`);
//   const schools: School[] = await res.json();
//   return schools.map(school => ({
//     id: school.id,
//   }));
// }

