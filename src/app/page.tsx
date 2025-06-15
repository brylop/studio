'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { AppHeader } from '@/components/header';
import { SearchControls } from '@/components/search-controls';
import { SchoolList } from '@/components/school-list';
import { MapPlaceholder } from '@/components/map-placeholder';
import type { School, Filters } from '@/types';
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
  radius: 10, // Default 10km radius
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
      setFilteredSchools(mockSchools);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSearch = (newFilters: Filters) => {
    setIsLoading(true);
    setCurrentFilters(newFilters);
    // Simulate filtering delay
    setTimeout(() => {
      let result = schools;

      if (newFilters.sport !== 'Todos') {
        result = result.filter(school => school.sport === newFilters.sport);
      }
      if (newFilters.city !== 'Todas') {
        result = result.filter(school => school.location.city === newFilters.city);
      }
      if (newFilters.neighborhood) {
        result = result.filter(school => 
          school.location.neighborhood?.toLowerCase().includes(newFilters.neighborhood.toLowerCase())
        );
      }
      if (newFilters.modality !== 'Cualquiera') {
        result = result.filter(school => school.modality === newFilters.modality);
      }
      if (newFilters.demographic.length > 0) {
        result = result.filter(school => 
          newFilters.demographic.some(demo => school.ages.toLowerCase().includes(demo.replace(/s$/, ''))) // Basic check, matches 'Niño' in 'Niños (6-12 años)'
        );
      }
      // Price and schedule filters would require more complex logic based on how price strings are structured / schedule options are defined.
      // Radius filter would require geo-location calculations, deferred for this UI-focused step.
      
      setFilteredSchools(result);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <SearchControls onSearch={handleSearch} initialFilters={initialFiltersState} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-headline font-semibold mb-6 text-primary">Escuelas Encontradas</h2>
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
             <div className="sticky top-8"> {/* Make map placeholder sticky */}
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
