'use client';

import type { ChangeEvent, FormEvent } from 'react';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, MapPin, DollarSign, Users, CalendarDays, Laptop, PersonStanding, FilterX } from 'lucide-react';
import type { Filters } from '@/types';
import { sportsList, citiesList, priceRanges, modalities as modalityOptions, schedules as scheduleOptions, demographics as demographicOptions } from '@/lib/mock-data';

interface SearchControlsProps {
  onSearch: (filters: Filters) => void;
  initialFilters: Filters;
}

export function SearchControls({ onSearch, initialFilters }: SearchControlsProps) {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof Filters) => (value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleDemographicChange = (demographicId: string) => {
    setFilters(prev => {
      const newDemographics = prev.demographic.includes(demographicId)
        ? prev.demographic.filter(d => d !== demographicId)
        : [...prev.demographic, demographicId];
      return { ...prev, demographic: newDemographics };
    });
  };

  const handleSliderChange = (value: number[]) => {
    setFilters(prev => ({ ...prev, radius: value[0] }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };
  
  const resetFilters = () => {
    setFilters(initialFilters);
    onSearch(initialFilters);
  };

  return (
    <Card className="mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2">
          <Search className="w-6 h-6 text-primary" />
          Encuentra tu Escuela Deportiva
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="sport" className="font-semibold flex items-center gap-1"><Search className="w-4 h-4" />Deporte</Label>
              <Select name="sport" value={filters.sport} onValueChange={handleSelectChange('sport')}>
                <SelectTrigger id="sport">
                  <SelectValue placeholder="Selecciona un deporte" />
                </SelectTrigger>
                <SelectContent>
                  {sportsList.map(sport => <SelectItem key={sport} value={sport}>{sport}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city" className="font-semibold flex items-center gap-1"><MapPin className="w-4 h-4" />Ciudad</Label>
              <Select name="city" value={filters.city} onValueChange={handleSelectChange('city')}>
                <SelectTrigger id="city">
                  <SelectValue placeholder="Selecciona una ciudad" />
                </SelectTrigger>
                <SelectContent>
                  {citiesList.map(city => <SelectItem key={city} value={city}>{city}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="neighborhood" className="font-semibold flex items-center gap-1"><MapPin className="w-4 h-4" />Barrio (opcional)</Label>
              <Input
                id="neighborhood"
                name="neighborhood"
                placeholder="Ej: Chapinero"
                value={filters.neighborhood}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {showMoreFilters && (
            <div className="space-y-6 pt-4 border-t">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="price" className="font-semibold flex items-center gap-1"><DollarSign className="w-4 h-4" />Rango de Precio</Label>
                  <Select name="price" value={filters.price} onValueChange={handleSelectChange('price')}>
                    <SelectTrigger id="price">
                      <SelectValue placeholder="Cualquier precio" />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map(range => <SelectItem key={range} value={range}>{range}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="font-semibold flex items-center gap-1">
                    <Laptop className="w-4 h-4 inline-block mr-1" /> Modalidad
                  </Label>
                  <RadioGroup
                    defaultValue={filters.modality}
                    onValueChange={handleSelectChange('modality')}
                    className="flex space-x-4 pt-2"
                  >
                    {modalityOptions.map(option => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`modality-${option}`} />
                        <Label htmlFor={`modality-${option}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="schedule" className="font-semibold flex items-center gap-1"><CalendarDays className="w-4 h-4" />Disponibilidad Horaria</Label>
                   <Select name="schedule" value={filters.schedule} onValueChange={handleSelectChange('schedule')}>
                    <SelectTrigger id="schedule">
                      <SelectValue placeholder="Cualquier horario" />
                    </SelectTrigger>
                    <SelectContent>
                      {scheduleOptions.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-semibold flex items-center gap-1"><Users className="w-4 h-4" />Público Dirigido</Label>
                <div className="flex flex-wrap gap-4 pt-2">
                  {demographicOptions.map(option => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`demographic-${option.id}`}
                        checked={filters.demographic.includes(option.id)}
                        onCheckedChange={() => handleDemographicChange(option.id)}
                      />
                      <Label htmlFor={`demographic-${option.id}`}>{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="radius" className="font-semibold flex items-center gap-1">
                  <PersonStanding className="w-4 h-4" /> Radio de Búsqueda: {filters.radius} km
                </Label>
                <Slider
                  id="radius"
                  min={1}
                  max={50}
                  step={1}
                  defaultValue={[filters.radius]}
                  onValueChange={handleSliderChange}
                  className="pt-2"
                />
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t">
            <Button type="button" variant="link" onClick={() => setShowMoreFilters(!showMoreFilters)}>
              {showMoreFilters ? 'Menos filtros' : 'Más filtros'}
            </Button>
            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={resetFilters} className="flex items-center gap-1">
                <FilterX className="w-4 h-4" /> Limpiar
              </Button>
              <Button type="submit" className="font-semibold flex items-center gap-1">
                <Search className="w-4 h-4" /> Buscar Escuelas
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
