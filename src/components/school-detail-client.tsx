
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { School } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapPlaceholder } from '@/components/map-placeholder';
import { 
  MapPin, DollarSign, Users, CalendarDays, Zap, Phone, Mail, MessageSquare, Star, Globe, Building, Info, ExternalLink
} from 'lucide-react';
import React from 'react';

interface SchoolDetailClientProps {
  school: School;
}

export function SchoolDetailClient({ school }: SchoolDetailClientProps) {
  const mainImage = school.image;
  const galleryImages = school.images?.length ? school.images : [school.image]; // Fallback to main image if no gallery

  const [activeImage, setActiveImage] = React.useState(mainImage);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Columna Izquierda: Información Principal y Contacto */}
      <div className="lg:col-span-2 space-y-6">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <CardTitle className="font-headline text-3xl text-primary mb-2 sm:mb-0">{school.name}</CardTitle>
              <Badge variant={school.modality === 'Virtual' ? 'secondary' : school.modality === 'Híbrido' ? 'outline' : 'default'} className="capitalize text-sm px-3 py-1">
                <Zap className="w-4 h-4 mr-2" />{school.modality}
              </Badge>
            </div>
            <CardDescription className="text-lg flex items-center gap-2">
              <Building className="w-5 h-5 text-accent" /> {school.sport}
            </CardDescription>
            {school.rating !== undefined && (
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(school.rating!) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">({school.rating.toFixed(1)} de 5 estrellas)</span>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Galería de Imágenes */}
            <div className="mb-6">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                <Image 
                  src={activeImage} 
                  alt={`Instalaciones de ${school.name}`} 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint={`${school.sport} facility`}
                  className="transition-opacity duration-300 ease-in-out"
                />
              </div>
              {galleryImages.length > 1 && (
                <div className="flex gap-2 mt-2 overflow-x-auto py-1">
                  {galleryImages.map((imgUrl, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${activeImage === imgUrl ? 'border-primary scale-105' : 'border-transparent hover:border-muted'}`}
                    >
                      <Image src={imgUrl} alt={`Vista ${idx + 1} de ${school.name}`} layout="fill" objectFit="cover" data-ai-hint={`${school.sport} detail`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {school.longDescription && (
              <div className="space-y-2">
                <h3 className="font-headline text-xl font-semibold flex items-center gap-2"><Info className="w-5 h-5 text-accent"/>Descripción Detallada</h3>
                <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">{school.longDescription}</p>
              </div>
            )}
            <Separator />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <h4 className="font-semibold flex items-center gap-1"><MapPin className="w-4 h-4 text-accent" /> Ubicación</h4>
                <p>{school.location.address}</p>
                {school.location.neighborhood && <p>{school.location.neighborhood}</p>}
                <p>{school.location.city}</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold flex items-center gap-1"><DollarSign className="w-4 h-4 text-accent" /> Precio</h4>
                <p>{school.price}</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold flex items-center gap-1"><Users className="w-4 h-4 text-accent" /> Edades</h4>
                <p>{school.ages}</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold flex items-center gap-1"><CalendarDays className="w-4 h-4 text-accent" /> Horarios Principales</h4>
                <ul className="list-disc list-inside pl-1">
                  {school.schedule.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            </div>
            
            {school.inscriptionInfo && (
               <>
                <Separator />
                <div className="space-y-2">
                    <h3 className="font-headline text-xl font-semibold flex items-center gap-2">Información de Inscripción</h3>
                    <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap">{school.inscriptionInfo}</p>
                </div>
               </>
            )}

            {school.contact.website && (
              <>
              <Separator />
              <div className="pt-2">
                 <Button asChild className="w-full sm:w-auto">
                    <a href={school.contact.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Visitar Sitio Web / Inscripciones
                    </a>
                  </Button>
              </div>
              </>
            )}

          </CardContent>
        </Card>
      </div>

      {/* Columna Derecha: Contacto y Mapa */}
      <div className="lg:col-span-1 space-y-6">
        <Card className="shadow-lg sticky top-8">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Información de Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {school.contact.phone && (
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href={`tel:${school.contact.phone}`} className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" /> {school.contact.phone}
                </a>
              </Button>
            )}
            {school.contact.whatsapp && (
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href={`https://wa.me/${school.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-accent" /> Enviar WhatsApp
                </a>
              </Button>
            )}
            {school.contact.email && (
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href={`mailto:${school.contact.email}`} className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" /> {school.contact.email}
                </a>
              </Button>
            )}
            {school.contact.website && (
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href={school.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-accent" /> Visitar Sitio Web
                </a>
              </Button>
            )}
            {!school.contact.phone && !school.contact.whatsapp && !school.contact.email && !school.contact.website && (
              <p className="text-muted-foreground">No hay información de contacto específica disponible.</p>
            )}
          </CardContent>
        </Card>
        
        <MapPlaceholder />
      </div>
    </div>
  );
}
