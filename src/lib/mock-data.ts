import type { School } from '@/types';

export const mockSchools: School[] = [
  {
    id: '1',
    name: 'Academia de Fútbol Estrellas del Mañana',
    sport: 'Fútbol',
    price: '$80.000/mes',
    ages: 'Niños (6-12 años)',
    schedule: ['Lunes 4-6 PM', 'Miércoles 4-6 PM', 'Sábado 9-11 AM'],
    modality: 'Presencial',
    contact: {
      whatsapp: '3001234567',
      email: 'info@estrellasfutbol.co',
      phone: '0312345678'
    },
    location: {
      address: 'Calle Falsa 123, Chapinero',
      neighborhood: 'Chapinero',
      city: 'Bogotá',
      coordinates: { lat: 4.627_909, lng: -74.063_994 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.5,
    description: 'Fomentamos el talento joven en un ambiente divertido y profesional.'
  },
  {
    id: '2',
    name: 'Club de Natación Aguas Claras',
    sport: 'Natación',
    price: '$120.000/mes',
    ages: 'Todas las edades',
    schedule: ['Martes 7-9 AM (Adultos)', 'Jueves 5-7 PM (Jóvenes)', 'Sábado 10 AM-12 PM (Niños)'],
    modality: 'Presencial',
    contact: {
      email: 'contacto@aguasclarasnatacion.com',
      phone: '0345678901'
    },
    location: {
      address: 'Avenida Siempre Viva 742, El Poblado',
      neighborhood: 'El Poblado',
      city: 'Medellín',
      coordinates: { lat: 6.209_402, lng: -75.572_012 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.8,
    description: 'Aprende a nadar o perfecciona tu técnica con nuestros instructores certificados.'
  },
  {
    id: '3',
    name: 'Dojang Taekwondo Tigres de Acero',
    sport: 'Taekwondo',
    price: '$90.000/mes',
    ages: 'Jóvenes y Adultos',
    schedule: ['Lunes 7-9 PM', 'Miércoles 7-9 PM', 'Viernes 6-8 PM'],
    modality: 'Presencial',
    contact: {
      whatsapp: '3109876543',
    },
    location: {
      address: 'Carrera de la Luna 45, Ciudad Jardín',
      neighborhood: 'Ciudad Jardín',
      city: 'Cali',
      coordinates: { lat: 3.398_379, lng: -76.534_008 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.2,
    description: 'Disciplina, respeto y superación personal a través del arte marcial.'
  },
  {
    id: '4',
    name: 'Fútbol Total Kids Bogotá',
    sport: 'Fútbol',
    price: '$70.000/mes',
    ages: 'Niños (5-10 años)',
    schedule: ['Martes 3-5 PM', 'Jueves 3-5 PM'],
    modality: 'Presencial',
    contact: {
      email: 'futboltotal@example.com',
      phone: '0318765432'
    },
    location: {
      address: 'Parque de los Sueños, Usaquén',
      neighborhood: 'Usaquén',
      city: 'Bogotá',
      coordinates: { lat: 4.707_801, lng: -74.030_105 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.0,
    description: 'Iniciación al fútbol de forma lúdica y educativa.'
  },
  {
    id: '5',
    name: 'Natación Pro Medellín',
    sport: 'Natación',
    price: '$150.000/mes (clases personalizadas)',
    ages: 'Adultos',
    schedule: ['Horarios flexibles a convenir'],
    modality: 'Híbrido', // Presencial y virtual
    contact: {
      whatsapp: '3201122334',
      email: 'natacionpro@example.com'
    },
    location: {
      address: 'Unidad Deportiva Belén',
      neighborhood: 'Belén',
      city: 'Medellín',
      coordinates: { lat: 6.228_041, lng: -75.606_227 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.9,
    description: 'Entrenamiento avanzado para nadadores competitivos y aficionados serios.'
  },
  {
    id: '6',
    name: 'Taekwondo Formativo Cali',
    sport: 'Taekwondo',
    price: '$60.000/clase (Virtual)',
    ages: 'Todas las edades',
    schedule: ['Sábados 2-4 PM (Virtual)'],
    modality: 'Virtual',
    contact: {
      email: 'tkdvirtualcali@example.com'
    },
    location: {
      address: 'Online',
      city: 'Cali',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 3.9,
    description: 'Aprende Taekwondo desde la comodidad de tu hogar.'
  },
   {
    id: '7',
    name: 'Club de Fútbol Los Andes',
    sport: 'Fútbol',
    price: '$95.000/mes',
    ages: 'Jóvenes (13-18 años)',
    schedule: ['Martes 5-7 PM', 'Jueves 5-7 PM', 'Sábado 11 AM-1 PM'],
    modality: 'Presencial',
    contact: {
      whatsapp: '3112223344',
      email: 'info@cfandes.co',
    },
    location: {
      address: 'Cancha La Esperanza, Suba',
      neighborhood: 'Suba',
      city: 'Bogotá',
      coordinates: { lat: 4.750_000, lng: -74.090_000 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.3,
    description: 'Desarrolla tus habilidades futbolísticas y compite en torneos locales.'
  },
  {
    id: '8',
    name: 'AquaKids Medellín',
    sport: 'Natación',
    price: '$100.000/mes',
    ages: 'Niños (3-10 años)',
    schedule: ['Miércoles 3-4 PM', 'Viernes 3-4 PM'],
    modality: 'Presencial',
    contact: {
      phone: '0348887766'
    },
    location: {
      address: 'Piscina Municipal Laureles',
      neighborhood: 'Laureles',
      city: 'Medellín',
      coordinates: { lat: 6.244_000, lng: -75.590_000 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.7,
    description: 'Clases de natación seguras y divertidas para los más pequeños.'
  },
  {
    id: '9',
    name: 'Taekwondo Dragones Dorados',
    sport: 'Taekwondo',
    price: '$75.000/mes',
    ages: 'Niños y Jóvenes',
    schedule: ['Lunes 6-7:30 PM', 'Miércoles 6-7:30 PM'],
    modality: 'Presencial',
    contact: {
      whatsapp: '3156667788',
      email: 'dragonesdorados@tkd.com',
    },
    location: {
      address: 'Coliseo El Pueblo',
      neighborhood: 'El Lido',
      city: 'Cali',
      coordinates: { lat: 3.410_000, lng: -76.540_000 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.1,
    description: 'Formación integral en Taekwondo con énfasis en valores.'
  }
];

export const sportsList = ['Todos', ...new Set(mockSchools.map(school => school.sport))];
export const citiesList = ['Todas', ...new Set(mockSchools.map(school => school.location.city))];
// Neighborhoods can be dynamically populated based on selected city or remain a text input.
export const priceRanges = ['Cualquiera', 'Gratis', 'Hasta $50.000', '$50.000 - $100.000', '$100.000 - $150.000', 'Más de $150.000'];
export const modalities = ['Cualquiera', 'Presencial', 'Virtual', 'Híbrido'];
export const schedules = ['Cualquiera', 'Días de semana', 'Fines de semana', 'Mañana', 'Tarde', 'Noche'];
export const demographics = [
  { id: 'ninos', label: 'Niños' },
  { id: 'jovenes', label: 'Jóvenes' },
  { id: 'adultos', label: 'Adultos' },
];
