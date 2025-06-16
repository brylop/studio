
'use client';

import { AppHeader } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SchoolList } from '@/components/school-list';
import { Edit3, LogOut, Heart, Settings, ShieldCheck, Frown } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useFavorites } from '@/contexts/FavoritesContext';
import type { School } from '@/types'; // Import School type

// Simulación de datos de usuario (se podría obtener de un contexto de autenticación en el futuro)
const userData = {
  name: "Usuario Ejemplo",
  email: "usuario@ejemplo.com",
  avatarUrl: "https://placehold.co/100x100.png",
  joinDate: "Enero 2024",
};

export default function PerfilPage() {
  const { favoriteSchools } = useFavorites();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Para asegurar que el código del lado del cliente se ejecute después del montaje
  }, []);

  const handleLogout = () => {
    alert("Funcionalidad de cerrar sesión en desarrollo.");
    // Aquí iría la lógica para cerrar sesión (ej. con NextAuth.js)
  };

  if (!mounted) {
    // Puedes mostrar un loader o null mientras se espera que el cliente se monte
    // para evitar hydration mismatch con localStorage
    return null; 
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-xl">
          <CardHeader className="text-center sm:text-left sm:flex sm:flex-row sm:items-center sm:gap-6">
            <Avatar className="h-24 w-24 mx-auto sm:mx-0 ring-4 ring-primary ring-offset-2">
              <AvatarImage src={userData.avatarUrl} alt={userData.name} data-ai-hint="person portrait" />
              <AvatarFallback>{userData.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="mt-4 sm:mt-0">
              <CardTitle className="font-headline text-3xl">{userData.name}</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">{userData.email}</CardDescription>
              <p className="text-sm text-muted-foreground mt-1">Miembro desde: {userData.joinDate}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-8 mt-6">
            <section>
              <h3 className="font-headline text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="text-primary h-6 w-6" /> Mis Escuelas Favoritas ({favoriteSchools.length})
              </h3>
              {favoriteSchools.length > 0 ? (
                <SchoolList schools={favoriteSchools as School[]} /> 
              ) : (
                <div className="text-center py-6 border rounded-lg bg-muted/50">
                    <Frown className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                    <p className="text-muted-foreground">Aún no has guardado ninguna escuela como favorita.</p>
                    <p className="text-sm text-muted-foreground mt-1">Explora las escuelas y usa el ícono de corazón <Heart className="inline h-4 w-4 text-primary/70" /> para guardarlas.</p>
                </div>
              )}
            </section>

            <section className="space-y-3">
              <h3 className="font-headline text-xl font-semibold mb-3 flex items-center gap-2">
                <Settings className="text-primary h-5 w-5" /> Configuración de la Cuenta
              </h3>
              <Button variant="outline" className="w-full sm:w-auto justify-start">
                <Edit3 className="mr-2 h-4 w-4" /> Editar Información Personal
              </Button>
              <Button variant="outline" className="w-full sm:w-auto justify-start">
                <ShieldCheck className="mr-2 h-4 w-4" /> Cambiar Contraseña
              </Button>
            </section>

            <div className="pt-6 border-t">
              <Button variant="destructive" onClick={handleLogout} className="w-full sm:w-auto">
                <LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 text-center">
        <p className="font-body">&copy; {new Date().getFullYear()} Deporte Encuentra. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
