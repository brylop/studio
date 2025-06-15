
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AppHeader } from '@/components/header';
import { SearchControls } from '@/components/search-controls';
import { SchoolList } from '@/components/school-list';
import { MapPlaceholder } from '@/components/map-placeholder';
import type { School, Filters, SortOption } from '@/types';
import { mockSchools } from '@/lib/mock-data';
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

export default function HomePage() {
  const [schools, setSchools] = useState<School[]>([]);
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [currentFilters, setCurrentFilters] = useState<Filters>(initialFiltersState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSchools(mockSchools);
      // Apply initial filters (which includes default sort)
      applyFiltersAndSort(mockSchools, initialFiltersState);
      setIsLoading(false);
    }, 500);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyFiltersAndSort = useCallback((schoolsToFilter: School[], filters: Filters) => {
    let result = [...schoolsToFilter]; // Create a copy to sort

    if (filters.sport !== 'Todos') {
      result = result.filter(school => school.sport === filters.sport);
    }
    if (filters.city !== 'Todas') {
      result = result.filter(school => school.location.city === filters.city);
    }
    if (filters.neighborhood) {
      result = result.filter(school => 
        school.location.neighborhood?.toLowerCase().includes(filters.neighborhood.toLowerCase())
      );
    }
    if (filters.modality !== 'Cualquiera') {
      result = result.filter(school => school.modality === filters.modality);
    }
    if (filters.demographic.length > 0) {
      result = result.filter(school => 
        filters.demographic.some(demo => school.ages.toLowerCase().includes(demo.replace(/s$/, '')))
      );
    }
    // Price, schedule, radius filters would require more complex logic / geo-location.

    // Sorting
    switch (filters.sortBy) {
      case 'name_asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating_asc':
        result.sort((a, b) => (a.rating ?? 0) - (b.rating ?? 0));
        break;
      case 'rating_desc':
        result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      case 'relevance':
      default:
        // Default sort or relevance (currently no specific relevance logic, uses original order)
        break;
    }
    
    setFilteredSchools(result);
  }, []);


  const handleSearch = useCallback((newFilters: Filters) => {
    setIsLoading(true);
    setCurrentFilters(newFilters);
    // Simulate filtering delay
    setTimeout(() => {
      applyFiltersAndSort(schools, newFilters);
      setIsLoading(false);
    }, 300);
  }, [schools, applyFiltersAndSort]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <SearchControls onSearch={handleSearch} initialFilters={initialFiltersState} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-headline font-semibold mb-6 text-primary">
              {filteredSchools.length > 0 ? `${filteredSchools.length} Escuela(s) Encontrada(s)` : 'Escuelas Encontradas'}
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
