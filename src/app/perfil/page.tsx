
'use client';

import { AppHeader } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Edit3, LogOut, Heart, Settings, ShieldCheck } from 'lucide-react';
import React from 'react';

// Simulación de datos de usuario
const userData = {
  name: "Usuario Ejemplo",
  email: "usuario@ejemplo.com",
  avatarUrl: "https://placehold.co/100x100.png",
  joinDate: "Enero 2024",
  favoriteSchoolsCount: 3,
};

export default function PerfilPage() {
  const handleLogout = () => {
    alert("Funcionalidad de cerrar sesión en desarrollo.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 py-12">
        <Card className="w-full max-w-3xl mx-auto shadow-xl">
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
              <h3 className="font-headline text-xl font-semibold mb-3 flex items-center gap-2">
                <Heart className="text-primary h-5 w-5" /> Mis Escuelas Favoritas
              </h3>
              {userData.favoriteSchoolsCount > 0 ? (
                <p>Tienes {userData.favoriteSchoolsCount} escuelas guardadas como favoritas. <Button variant="link" size="sm">Ver favoritas</Button></p>
              ) : (
                <p className="text-muted-foreground">Aún no has guardado ninguna escuela como favorita.</p>
              )}
              {/* Aquí iría la lista de escuelas favoritas */}
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
              {/* Más opciones de configuración */}
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
