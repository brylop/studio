
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
    modality: 'Híbrido', 
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
  },
  // Nuevas escuelas de la tabla
  {
    id: '10',
    name: 'IDRD Menores',
    sport: 'Atletismo', // Tomando el primer deporte listado
    price: '$50.000/mes (estimado)', // Estimado, IDRD suele ser de bajo costo o gratuito
    ages: '6–17 años',
    schedule: ['Consultar horarios en portal', 'Varían según deporte'],
    modality: 'Presencial',
    contact: {
      email: 'atencionciudadano@idrd.gov.co', // Genérico de IDRD
      phone: '(601) 6605400' // Genérico de IDRD
    },
    location: {
      address: 'Varios parques y escenarios IDRD',
      city: 'Bogotá',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.6,
    description: 'Ofrece: Atletismo, fútbol, patinaje, etc. Inscripción online vía Portal Ciudadano IDRD.'
  },
  {
    id: '11',
    name: 'IDRD Adultos',
    sport: 'Boxeo', // Tomando el primer deporte listado
    price: '$60.000/mes (estimado)',
    ages: '18+ años',
    schedule: ['Consultar horarios en portal', 'Varían según disciplina'],
    modality: 'Presencial',
    contact: {
      email: 'atencionciudadano@idrd.gov.co',
      phone: '(601) 6605400'
    },
    location: {
      address: 'Varios centros deportivos IDRD',
      city: 'Bogotá',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.4,
    description: 'Ofrece: Boxeo, taekwondo, natación. Inscripción online vía Portal Ciudadano IDRD.'
  },
  {
    id: '12',
    name: 'Colsubsidio',
    sport: 'Natación', // Tomando el primer deporte listado
    price: '$100.000/mes (estimado)',
    ages: 'Todas edades',
    schedule: ['Amplia oferta horaria', 'Consultar en Tienda de Diversión'],
    modality: 'Presencial',
    contact: {
      phone: '(601) 7457900' // Genérico Colsubsidio
    },
    location: {
      address: 'Múltiples sedes Colsubsidio',
      city: 'Bogotá',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.7,
    description: 'Ofrece: Natación, artes marciales, bolos, etc. Inscripción online: Tienda de Diversión Colsubsidio.'
  },
  {
    id: '13',
    name: 'Cafam',
    sport: 'Karate', // Tomando el primer deporte listado
    price: '$90.000/mes (estimado)',
    ages: 'Todas edades',
    schedule: ['Variedad de cursos y horarios', 'Consultar en sitio web'],
    modality: 'Presencial',
    contact: {
      phone: '(601) 3077011' // Genérico Cafam
    },
    location: {
      address: 'Club Campestre Cafam y otras sedes',
      city: 'Bogotá',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.5,
    description: 'Ofrece: Karate, tenis, gimnasia, bolos, etc. Inscripción online: Sitio de Cafam Deportes.'
  },
  {
    id: '14',
    name: 'Inder/Ligas Medellín',
    sport: 'Fútbol', // Tomando el primer deporte listado
    price: 'Varía (algunos gratuitos)',
    ages: 'Todas edades',
    schedule: ['Consultar directamente con Inder o ligas específicas'],
    modality: 'Presencial',
    contact: {
      email: 'info@inder.gov.co', // Ejemplo
      phone: '(604) 3699000' // Genérico Inder Medellín
    },
    location: {
      address: 'Escenarios deportivos de Medellín',
      city: 'Medellín',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.6,
    description: 'Ofrece: Fútbol, basket, ciclismo, natación. Inscripción online: Web/portales institucionales.'
  },
  {
    id: '15',
    name: 'Comfama Medellín',
    sport: 'Natación', // Tomando el primer deporte listado
    price: '$110.000/mes (estimado)',
    ages: 'Todas edades',
    schedule: ['Diversos horarios y sedes', 'Consultar en portal Comfama'],
    modality: 'Presencial',
    contact: {
      phone: '(604) 3607080' // Genérico Comfama
    },
    location: {
      address: 'Parques Comfama y sedes',
      city: 'Medellín',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.7,
    description: 'Ofrece: Natación, fútbol, baloncesto. Inscripción online: Portal Comfama.'
  },
  {
    id: '16',
    name: 'Secretaría Deporte Cali',
    sport: 'Varios Deportes', // "Talleres y cursos deportivos" es genérico
    price: 'Mayoría gratuitos',
    ages: 'Todas edades',
    schedule: ['Consultar programación en la web de la Secretaría'],
    modality: 'Presencial',
    contact: {
      email: 'contactenos@cali.gov.co', // Ejemplo
      phone: '(602) 8879020' // Genérico Alcaldía Cali
    },
    location: {
      address: 'Centros deportivos y comunitarios de Cali',
      city: 'Cali',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.3,
    description: 'Ofrece: Talleres y cursos deportivos. Inscripción online: Web Secretaría Deporte Cali.'
  },
  {
    id: '17',
    name: 'Comfenalco Valle',
    sport: 'Fútbol', // Tomando el primer deporte listado
    price: '$85.000/mes (estimado)',
    ages: '2+ años',
    schedule: ['Consultar oferta en MiComfamiliar.com'],
    modality: 'Presencial',
    contact: {
      phone: '018000938585' // Genérico Comfenalco Valle
    },
    location: {
      address: 'Centros recreativos Comfenalco Valle',
      city: 'Cali',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.5,
    description: 'Ofrece: Fútbol, natación, artes marciales, etc. Inscripción online: MiComfamiliar.com.'
  },
  {
    id: '18',
    name: 'Comfandi',
    sport: 'Fútbol', // Tomando el primer deporte listado
    price: '$95.000/mes (estimado)',
    ages: 'Todas edades',
    schedule: ['Consultar en web o WhatsApp Comfandi'],
    modality: 'Presencial',
    contact: {
      whatsapp: '3101234567', // Ejemplo
      phone: '(602) 4859999' // Genérico Comfandi
    },
    location: {
      address: 'Centros recreativos y deportivos Comfandi',
      city: 'Cali',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.6,
    description: 'Ofrece: Fútbol, natación, tenis, taekwondo. Inscripción online: Web/WhatsApp Comfandi.'
  },
  {
    id: '19',
    name: 'Comfenalco Valle (academias recreativas)',
    sport: 'Fútbol', // Tomando el primer deporte listado
    price: '$70.000/mes (estimado)',
    ages: 'Niños y jóvenes',
    schedule: ['Consultar en formulario web o centro recreativo'],
    modality: 'Presencial',
    contact: {
      phone: '018000938585' // Genérico Comfenalco Valle
    },
    location: {
      address: 'Centros recreativos específicos Comfenalco Valle',
      city: 'Cali',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.4,
    description: 'Ofrece: Fútbol, natación, taekwondo. Inscripción online: Formulario web / Centro recreativo.'
  }
];

// Regenerate lists to include new data and ensure uniqueness
const allSports = new Set(mockSchools.map(school => school.sport));
export const sportsList = ['Todos', ...Array.from(allSports)];

const allCities = new Set(mockSchools.map(school => school.location.city));
export const citiesList = ['Todas', ...Array.from(allCities)];

export const priceRanges = ['Cualquiera', 'Gratis', 'Hasta $50.000', '$50.000 - $100.000', '$100.000 - $150.000', 'Más de $150.000'];
export const modalities = ['Cualquiera', 'Presencial', 'Virtual', 'Híbrido'];
export const schedules = ['Cualquiera', 'Días de semana', 'Fines de semana', 'Mañana', 'Tarde', 'Noche'];
export const demographics = [
  { id: 'ninos', label: 'Niños' }, // Matches "Niño" en la lógica de filtrado
  { id: 'jovenes', label: 'Jóvenes' },
  { id: 'adultos', label: 'Adultos' },
  { id: 'todas_edades', label: 'Todas las edades'} // Nuevo para cubrir casos como "Todas edades"
];

    