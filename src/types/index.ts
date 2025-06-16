

export interface SchoolContact {
  whatsapp?: string;
  email?: string;
  phone?: string;
  website?: string; 
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
  price: string; // Ej: "$80.000/mes" o "Gratis"
  ages: string; // Ej: "Niños (6-12 años)" o "Todas las edades"
  schedule: string[]; // Array de strings como ["Lunes 4-6 PM", "Sábado 9-11 AM"]
  modality: 'Virtual' | 'Presencial' | 'Híbrido';
  contact: SchoolContact;
  location: SchoolLocation;
  image: string; // URL de la imagen principal
  rating?: number; // Calificación promedio, ej: 4.5
  description?: string; // Descripción corta para la tarjeta
  images?: string[]; // URLs para galería en página de detalle
  longDescription?: string; // Descripción más detallada para la página de la escuela
  inscriptionInfo?: string; // Información específica de inscripción (puede estar en longDescription o contact.website)
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
  sortBy: SortOption;
}
