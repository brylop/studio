
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AppHeader } from '@/components/header';
import { SearchControls } from '@/components/search-controls';
import { SchoolList } from '@/components/school-list';
import { MapPlaceholder } from '@/components/map-placeholder';
import type { School, Filters } from '@/types';
// mockSchools is no longer directly imported here, will be fetched via API
import { Loader2 } from 'lucide-react';

const initialFiltersState: Filters = {
  sport: 'Todos',
  city: 'Todas',
  neighborhood: '',
  price: 'Cualquiera',
  modality: 'Cualquiera',
  schedule: 'Cualquiera',
  demographic: [],
  radius: 10,
  sortBy: 'relevance',
};

async function fetchSchools(filters: Filters): Promise<School[]> {
  const queryParams = new URLSearchParams();
  queryParams.append('sport', filters.sport);
  queryParams.append('city', filters.city);
  if (filters.neighborhood) queryParams.append('neighborhood', filters.neighborhood);
  if (filters.price !== 'Cualquiera') queryParams.append('price', filters.price);
  if (filters.modality !== 'Cualquiera') queryParams.append('modality', filters.modality);
  if (filters.schedule !== 'Cualquiera') queryParams.append('schedule', filters.schedule);
  if (filters.demographic.length > 0) queryParams.append('demographic', filters.demographic.join(','));
  queryParams.append('radius', filters.radius.toString());
  queryParams.append('sortBy', filters.sortBy);

  const response = await fetch(`/api/schools?${queryParams.toString()}`);
  if (!response.ok) {
    console.error('Failed to fetch schools:', response.statusText);
    return []; // Or throw an error
  }
  return response.json();
}


export default function HomePage() {
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [currentFilters, setCurrentFilters] = useState<Filters>(initialFiltersState);
  const [isLoading, setIsLoading] = useState(true);

  const loadSchools = useCallback(async (filters: Filters) => {
    setIsLoading(true);
    const schoolsData = await fetchSchools(filters);
    setFilteredSchools(schoolsData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadSchools(initialFiltersState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Load initial schools only once

  const handleSearch = useCallback((newFilters: Filters) => {
    setCurrentFilters(newFilters);
    loadSchools(newFilters);
  }, [loadSchools]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <SearchControls onSearch={handleSearch} initialFilters={initialFiltersState} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-headline font-semibold mb-6 text-primary">
              {filteredSchools.length > 0 && !isLoading ? `${filteredSchools.length} Escuela(s) Encontrada(s)` : isLoading ? 'Buscando...' : 'Escuelas Encontradas'}
            </h2>
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="ml-4 text-lg">Buscando escuelas...</p>
              </div>
            ) : (
              <SchoolList schools={filteredSchools} />
            )}
          </div>
          <div className="lg:col-span-1">
             <div className="sticky top-8">
              <MapPlaceholder />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 text-center">
        <p className="font-body">&copy; {new Date().getFullYear()} Deporte Encuentra. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
