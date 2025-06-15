
export interface SchoolContact {
  whatsapp?: string;
  email?: string;
  phone?: string;
  website?: string; // Nuevo campo para enlace de inscripción/web de la escuela
}

export interface SchoolLocation {
  address: string;
  neighborhood?: string;
  city: string;
  coordinates?: { lat: number; lng: number };
}

export interface School {
  id: string;
  name: string;
  sport: string;
  price: string;
  ages: string;
  schedule: string[];
  modality: 'Virtual' | 'Presencial' | 'Híbrido';
  contact: SchoolContact;
  location: SchoolLocation;
  image: string;
  rating?: number;
  description?: string;
  images?: string[]; // Para galería en página de detalle
  longDescription?: string; // Descripción más detallada
  inscriptionInfo?: string; // Información específica de inscripción que ya está en description
}

export type SortOption = 'relevance' | 'name_asc' | 'name_desc' | 'rating_asc' | 'rating_desc';

export interface Filters {
  sport: string;
  city: string;
  neighborhood: string;
  price: string;
  modality: string;
  schedule: string;
  demographic: string[];
  radius: number;
  sortBy: SortOption; // Nueva opción para ordenar
}
