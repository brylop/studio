export interface School {
  id: string;
  name: string;
  sport: string;
  price: string;
  ages: string;
  schedule: string[];
  modality: 'Virtual' | 'Presencial' | 'Híbrido';
  contact: {
    whatsapp?: string;
    email?: string;
    phone?: string;
  };
  location: {
    address: string;
    neighborhood?: string;
    city: string;
    coordinates?: { lat: number; lng: number };
  };
  image: string; // URL for a single representative image
  rating?: number; // Optional: 1-5
  description?: string;
}

export interface Filters {
  sport: string;
  city: string;
  neighborhood: string;
  price: string;
  modality: string;
  schedule: string;
  demographic: string[];
  radius: number;
}
