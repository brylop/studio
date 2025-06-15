
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AppHeader } from '@/components/header';
import { SchoolDetailClient } from '@/components/school-detail-client';
import { mockSchools } from '@/lib/mock-data';
import type { School } from '@/types';

interface SchoolDetailPageProps {
  params: { id: string };
}

// Function to fetch school data (simulated)
async function getSchoolById(id: string): Promise<School | undefined> {
  // In a real app, this would be an API call
  return mockSchools.find(school => school.id === id);
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

// Optional: For static site generation, pre-render paths
// export async function generateStaticParams() {
//   return mockSchools.map(school => ({
//     id: school.id,
//   }));
// }
