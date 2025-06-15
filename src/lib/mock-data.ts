
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
      phone: '0312345678',
      website: 'https://www.estrellasfutbol.co/inscripciones'
    },
    location: {
      address: 'Calle Falsa 123, Chapinero',
      neighborhood: 'Chapinero',
      city: 'Bogotá',
      coordinates: { lat: 4.627909, lng: -74.063994 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.5,
    description: 'Fomentamos el talento joven en un ambiente divertido y profesional.',
    longDescription: 'Nuestra academia se dedica a la formación integral de futbolistas desde temprana edad. Contamos con entrenadores calificados, excelentes instalaciones y un programa deportivo que promueve valores como el trabajo en equipo, la disciplina y el respeto. Participamos en torneos locales y ofrecemos diferentes categorías según la edad y el nivel.',
    images: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    inscriptionInfo: 'Inscripciones abiertas todo el año a través de nuestro sitio web o visitando nuestras instalaciones.'
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
      coordinates: { lat: 6.209402, lng: -75.572012 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.8,
    description: 'Aprende a nadar o perfecciona tu técnica con nuestros instructores certificados.',
    longDescription: 'Ofrecemos clases de natación para bebés, niños, jóvenes y adultos. Desde niveles de iniciación hasta perfeccionamiento y entrenamiento competitivo. Nuestras piscinas climatizadas y personal experto garantizan un aprendizaje seguro y efectivo.',
    images: ['https://placehold.co/600x400.png'],
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
      website: 'https://tigresdeacero.com/unete'
    },
    location: {
      address: 'Carrera de la Luna 45, Ciudad Jardín',
      neighborhood: 'Ciudad Jardín',
      city: 'Cali',
      coordinates: { lat: 3.398379, lng: -76.534008 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.2,
    description: 'Disciplina, respeto y superación personal a través del arte marcial.',
    longDescription: 'Somos una escuela tradicional de Taekwondo WTF. Nuestros maestros cuentan con amplia experiencia nacional e internacional. Fomentamos un ambiente de camaradería y crecimiento personal. Preparamos a nuestros estudiantes para exámenes de grado y competencias.',
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
      coordinates: { lat: 4.707801, lng: -74.030105 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.0,
    description: 'Iniciación al fútbol de forma lúdica y educativa.',
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
      coordinates: { lat: 6.228041, lng: -75.606227 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.9,
    description: 'Entrenamiento avanzado para nadadores competitivos y aficionados serios.',
  },
  {
    id: '6',
    name: 'Taekwondo Formativo Cali (Virtual)',
    sport: 'Taekwondo',
    price: '$60.000/clase (Virtual)',
    ages: 'Todas las edades',
    schedule: ['Sábados 2-4 PM (Virtual)'],
    modality: 'Virtual',
    contact: {
      email: 'tkdvirtualcali@example.com',
      website: 'https://tkd-online.co/clases'
    },
    location: {
      address: 'Online',
      city: 'Cali',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 3.9,
    description: 'Aprende Taekwondo desde la comodidad de tu hogar.',
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
      coordinates: { lat: 4.750000, lng: -74.090000 },
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
      coordinates: { lat: 6.244000, lng: -75.590000 },
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
      coordinates: { lat: 3.410000, lng: -76.540000 },
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.1,
    description: 'Formación integral en Taekwondo con énfasis en valores.'
  },
  {
    id: '10',
    name: 'IDRD Menores Bogotá',
    sport: 'Atletismo',
    price: 'Gratuito/Bajo costo',
    ages: '6–17 años',
    schedule: ['Consultar horarios en portal', 'Varían según deporte'],
    modality: 'Presencial',
    contact: {
      email: 'atencionciudadano@idrd.gov.co',
      phone: '(601) 6605400',
      website: 'https://www.idrd.gov.co/ciudadano/portal-ciudadano'
    },
    location: {
      address: 'Varios parques y escenarios IDRD',
      city: 'Bogotá',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.6,
    description: 'IDRD ofrece programas para menores en Atletismo, fútbol, patinaje, etc. Inscripción online vía Portal Ciudadano IDRD.',
    inscriptionInfo: 'Inscripción online vía Portal Ciudadano IDRD: https://www.idrd.gov.co/ciudadano/portal-ciudadano',
  },
  {
    id: '11',
    name: 'IDRD Adultos Bogotá',
    sport: 'Boxeo',
    price: 'Gratuito/Bajo costo',
    ages: '18+ años',
    schedule: ['Consultar horarios en portal', 'Varían según disciplina'],
    modality: 'Presencial',
    contact: {
      email: 'atencionciudadano@idrd.gov.co',
      phone: '(601) 6605400',
      website: 'https://www.idrd.gov.co/ciudadano/portal-ciudadano'
    },
    location: {
      address: 'Varios centros deportivos IDRD',
      city: 'Bogotá',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.4,
    description: 'IDRD ofrece programas para adultos en Boxeo, taekwondo, natación. Inscripción online vía Portal Ciudadano IDRD.',
    inscriptionInfo: 'Inscripción online vía Portal Ciudadano IDRD: https://www.idrd.gov.co/ciudadano/portal-ciudadano',
  },
  {
    id: '12',
    name: 'Colsubsidio Bogotá',
    sport: 'Natación',
    price: '$100.000/mes (estimado)',
    ages: 'Todas edades',
    schedule: ['Amplia oferta horaria', 'Consultar en Tienda de Diversión'],
    modality: 'Presencial',
    contact: {
      phone: '(601) 7457900',
      website: 'https://www.colsubsidio.com/tienda-diversion/'
    },
    location: {
      address: 'Múltiples sedes Colsubsidio',
      city: 'Bogotá',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.7,
    description: 'Colsubsidio ofrece: Natación, artes marciales, bolos, etc. Inscripción online: Tienda de Diversión Colsubsidio.',
    inscriptionInfo: 'Inscripción online: Tienda de Diversión Colsubsidio: https://www.colsubsidio.com/tienda-diversion/',
  },
  {
    id: '13',
    name: 'Cafam Bogotá',
    sport: 'Karate',
    price: '$90.000/mes (estimado)',
    ages: 'Todas edades',
    schedule: ['Variedad de cursos y horarios', 'Consultar en sitio web'],
    modality: 'Presencial',
    contact: {
      phone: '(601) 3077011',
      website: 'https://www.cafam.com.co/deportes'
    },
    location: {
      address: 'Club Campestre Cafam y otras sedes',
      city: 'Bogotá',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.5,
    description: 'Cafam ofrece: Karate, tenis, gimnasia, bolos, etc. Inscripción online: Sitio de Cafam Deportes.',
    inscriptionInfo: 'Inscripción online: Sitio de Cafam Deportes: https://www.cafam.com.co/deportes',
  },
  {
    id: '14',
    name: 'Inder/Ligas Medellín',
    sport: 'Fútbol',
    price: 'Varía (algunos gratuitos)',
    ages: 'Todas edades',
    schedule: ['Consultar directamente con Inder o ligas específicas'],
    modality: 'Presencial',
    contact: {
      email: 'info@inder.gov.co',
      phone: '(604) 3699000',
      website: 'https://www.inder.gov.co'
    },
    location: {
      address: 'Escenarios deportivos de Medellín',
      city: 'Medellín',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.6,
    description: 'Inder y Ligas de Medellín ofrecen: Fútbol, basket, ciclismo, natación. Inscripción: Web/portales institucionales.',
    inscriptionInfo: 'Inscripción: Web/portales institucionales como https://www.inder.gov.co',
  },
  {
    id: '15',
    name: 'Comfama Medellín',
    sport: 'Natación',
    price: '$110.000/mes (estimado)',
    ages: 'Todas edades',
    schedule: ['Diversos horarios y sedes', 'Consultar en portal Comfama'],
    modality: 'Presencial',
    contact: {
      phone: '(604) 3607080',
      website: 'https://www.comfama.com/servicios-y-programas/deportes/'
    },
    location: {
      address: 'Parques Comfama y sedes',
      city: 'Medellín',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.7,
    description: 'Comfama ofrece: Natación, fútbol, baloncesto. Inscripción online: Portal Comfama.',
    inscriptionInfo: 'Inscripción online: Portal Comfama: https://www.comfama.com/servicios-y-programas/deportes/',
  },
  {
    id: '16',
    name: 'Secretaría Deporte Cali',
    sport: 'Varios Deportes',
    price: 'Mayoría gratuitos',
    ages: 'Todas edades',
    schedule: ['Consultar programación en la web de la Secretaría'],
    modality: 'Presencial',
    contact: {
      email: 'contactenos@cali.gov.co',
      phone: '(602) 8879020',
      website: 'https://www.cali.gov.co/deportes/'
    },
    location: {
      address: 'Centros deportivos y comunitarios de Cali',
      city: 'Cali',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.3,
    description: 'Secretaría del Deporte de Cali ofrece: Talleres y cursos deportivos. Inscripción: Web Secretaría Deporte Cali.',
    inscriptionInfo: 'Inscripción online: Web Secretaría Deporte Cali: https://www.cali.gov.co/deportes/',
  },
  {
    id: '17',
    name: 'Comfenalco Valle',
    sport: 'Fútbol',
    price: '$85.000/mes (estimado)',
    ages: '2+ años',
    schedule: ['Consultar oferta en MiComfamiliar.com'],
    modality: 'Presencial',
    contact: {
      phone: '018000938585',
      website: 'https://www.micomfamiliar.com' // Asumiendo que es el portal principal
    },
    location: {
      address: 'Centros recreativos Comfenalco Valle',
      city: 'Cali',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.5,
    description: 'Comfenalco Valle ofrece: Fútbol, natación, artes marciales, etc. Inscripción online: MiComfamiliar.com.',
    inscriptionInfo: 'Inscripción online: MiComfamiliar.com: https://www.micomfamiliar.com',
  },
  {
    id: '18',
    name: 'Comfandi Cali',
    sport: 'Fútbol',
    price: '$95.000/mes (estimado)',
    ages: 'Todas edades',
    schedule: ['Consultar en web o WhatsApp Comfandi'],
    modality: 'Presencial',
    contact: {
      whatsapp: '3101234567', // Ejemplo, debe ser real
      phone: '(602) 4859999',
      website: 'https://www.comfandi.com.co/servicios/recreacion-y-deportes/'
    },
    location: {
      address: 'Centros recreativos y deportivos Comfandi',
      city: 'Cali',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.6,
    description: 'Comfandi ofrece: Fútbol, natación, tenis, taekwondo. Inscripción: Web/WhatsApp Comfandi.',
    inscriptionInfo: 'Inscripción online: Web/WhatsApp Comfandi: https://www.comfandi.com.co/servicios/recreacion-y-deportes/',
  },
  {
    id: '19',
    name: 'Comfenalco Valle (Academias Recreativas)',
    sport: 'Fútbol',
    price: '$70.000/mes (estimado)',
    ages: 'Niños y jóvenes',
    schedule: ['Consultar en formulario web o centro recreativo'],
    modality: 'Presencial',
    contact: {
      phone: '018000938585',
      website: 'https://www.comfenalcovalle.com.co/recreacion-y-deportes/academias-deportivas/' // URL ejemplo
    },
    location: {
      address: 'Centros recreativos específicos Comfenalco Valle',
      city: 'Cali',
    },
    image: 'https://placehold.co/600x400.png',
    rating: 4.4,
    description: 'Comfenalco Valle (academias recreativas) ofrece: Fútbol, natación, taekwondo. Inscripción: Formulario web / Centro recreativo.',
    inscriptionInfo: 'Inscripción online: Formulario web o directamente en el centro recreativo. Más info: https://www.comfenalcovalle.com.co/recreacion-y-deportes/academias-deportivas/',
  }
];

const allSports = new Set(mockSchools.map(school => school.sport));
export const sportsList = ['Todos', ...Array.from(allSports).sort()];

const allCities = new Set(mockSchools.map(school => school.location.city));
export const citiesList = ['Todas', ...Array.from(allCities).sort()];

export const priceRanges = ['Cualquiera', 'Gratis', 'Hasta $50.000', '$50.000 - $100.000', '$100.000 - $150.000', 'Más de $150.000'];
export const modalities = ['Cualquiera', 'Presencial', 'Virtual', 'Híbrido'];
export const schedules = ['Cualquiera', 'Días de semana', 'Fines de semana', 'Mañana', 'Tarde', 'Noche'];
export const demographics = [
  { id: 'ninos', label: 'Niños' },
  { id: 'jovenes', label: 'Jóvenes' },
  { id: 'adultos', label: 'Adultos' },
  { id: 'todas_edades', label: 'Todas las edades'}
];

export const sortOptionsList: { value: SortOption, label: string }[] = [
    { value: 'relevance', label: 'Relevancia' },
    { value: 'name_asc', label: 'Nombre (A-Z)' },
    { value: 'name_desc', label: 'Nombre (Z-A)' },
    { value: 'rating_asc', label: 'Calificación (Menor a Mayor)' },
    { value: 'rating_desc', label: 'Calificación (Mayor a Menor)' },
];
