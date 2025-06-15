import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function MapPlaceholder() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Mapa Interactivo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="bg-muted aspect-video rounded-md flex items-center justify-center p-4"
          data-ai-hint="map city"
        >
          <div className="text-center text-muted-foreground">
            <MapPin className="w-12 h-12 mx-auto mb-2" />
            <p className="font-semibold">Visualización de mapa próximamente</p>
            <p className="text-sm">Aquí podrás ver la ubicación de las escuelas.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
