
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, DollarSign, Users, Zap, Phone, Mail, MessageSquare, Star, Globe, Eye, Heart } from 'lucide-react';
import type { School } from '@/types';
import { useFavorites } from '@/contexts/FavoritesContext';
import { cn } from '@/lib/utils';

interface SchoolCardProps {
  school: School;
}

export function SchoolCard({ school }: SchoolCardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isCurrentlyFavorite = isFavorite(school.id);

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation when clicking favorite
    e.stopPropagation();
    if (isCurrentlyFavorite) {
      removeFavorite(school.id);
    } else {
      addFavorite(school);
    }
  };

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative">
        <Link href={`/escuelas/${school.id}`} className="block hover:opacity-90 transition-opacity">
          <div className="relative w-full h-48">
            <Image 
              src={school.image} 
              alt={`Instalaciones de ${school.name}`} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={`${school.sport} training`} 
            />
          </div>
        </Link>
        <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 bg-background/70 hover:bg-background/90 text-primary rounded-full p-1.5"
            onClick={handleFavoriteToggle}
            aria-label={isCurrentlyFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
            <Heart className={cn("w-5 h-5", isCurrentlyFavorite ? "fill-primary text-primary" : "text-primary/70")} />
        </Button>
      </div>
      <CardHeader>
        <Link href={`/escuelas/${school.id}`} className="hover:underline">
          <CardTitle className="font-headline text-xl text-primary">{school.name}</CardTitle>
        </Link>
        <CardDescription className="flex items-center gap-1">
          <Zap className="w-4 h-4 text-accent" /> {school.sport}
        </CardDescription>
        {school.rating !== undefined && school.rating !== null && (
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(school.rating!) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-1 text-xs text-muted-foreground">({school.rating.toFixed(1)})</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
          <span>{school.location.address}, {school.location.neighborhood ? `${school.location.neighborhood}, ` : ''}{school.location.city}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-accent flex-shrink-0" />
          <span>{school.price}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-accent flex-shrink-0" />
          <span>Edades: {school.ages}</span>
        </div>
        <div>
          <Badge variant={school.modality === 'Virtual' ? 'secondary' : school.modality === 'Híbrido' ? 'outline' : 'default'} className="capitalize">
            {school.modality}
          </Badge>
        </div>
        {school.description && <p className="text-muted-foreground text-xs pt-2 italic">{school.description.substring(0,100)}{school.description.length > 100 ? '...' : ''}</p>}
      </CardContent>
      <Separator className="my-2" />
      <CardFooter className="flex flex-col items-start gap-3 pt-4">
        <div className="w-full flex justify-between items-center">
            <p className="font-semibold text-sm">Contacto:</p>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/escuelas/${school.id}`} className="flex items-center gap-1">
                <Eye className="w-3 h-3" /> Ver Detalles
              </Link>
            </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {school.contact.whatsapp && (
            <Button variant="outline" size="sm" asChild>
              <a href={`https://wa.me/${school.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" /> WhatsApp
              </a>
            </Button>
          )}
          {school.contact.email && (
            <Button variant="outline" size="sm" asChild>
              <a href={`mailto:${school.contact.email}`} className="flex items-center gap-1">
                <Mail className="w-3 h-3" /> Email
              </a>
            </Button>
          )}
          {school.contact.phone && (
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${school.contact.phone}`} className="flex items-center gap-1">
                <Phone className="w-3 h-3" /> Llamar
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
