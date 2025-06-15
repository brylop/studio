
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { mockSchools } from '@/lib/mock-data';
import type { School, Filters } from '@/types';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Extract filter parameters from query
  const sport = searchParams.get('sport') || 'Todos';
  const city = searchParams.get('city') || 'Todas';
  const neighborhood = searchParams.get('neighborhood') || '';
  const modality = searchParams.get('modality') || 'Cualquiera';
  const demographicQuery = searchParams.get('demographic');
  const demographic = demographicQuery ? demographicQuery.split(',') : [];
  const sortBy = searchParams.get('sortBy') || 'relevance';
  // Price, schedule, radius filters are not fully implemented here for simplicity with mock data.

  let results: School[] = [...mockSchools];

  if (sport !== 'Todos') {
    results = results.filter(school => school.sport === sport);
  }
  if (city !== 'Todas') {
    results = results.filter(school => school.location.city === city);
  }
  if (neighborhood) {
    results = results.filter(school => 
      school.location.neighborhood?.toLowerCase().includes(neighborhood.toLowerCase())
    );
  }
  if (modality !== 'Cualquiera') {
    results = results.filter(school => school.modality === modality);
  }
  if (demographic.length > 0) {
    results = results.filter(school => 
      demographic.some(demo => school.ages.toLowerCase().includes(demo.replace(/s$/, '')))
    );
  }

  // Sorting
  switch (sortBy) {
    case 'name_asc':
      results.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name_desc':
      results.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'rating_asc':
      results.sort((a, b) => (a.rating ?? 0) - (b.rating ?? 0));
      break;
    case 'rating_desc':
      results.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      break;
    case 'relevance':
    default:
      // Default sort or relevance (currently no specific relevance logic, uses original order)
      break;
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  return NextResponse.json(results);
}
