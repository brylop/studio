import type { School } from '@/types';
import { SchoolCard } from './school-card';
import { Frown } from 'lucide-react';

interface SchoolListProps {
  schools: School[];
}

export function SchoolList({ schools }: SchoolListProps) {
  if (schools.length === 0) {
    return (
      <div className="text-center py-10">
        <Frown className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <p className="text-xl font-headline text-muted-foreground">No se encontraron escuelas</p>
        <p className="text-muted-foreground">Intenta ajustar tus filtros o ampliar tu búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {schools.map(school => (
        <SchoolCard key={school.id} school={school} />
      ))}
    </div>
  );
}
