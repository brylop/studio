
import Link from 'next/link';
import { Trophy, UserCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AppHeader() {
  return (
    <header className="bg-primary text-primary-foreground py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <Link href="/" className="flex items-center gap-3 mb-4 sm:mb-0 hover:opacity-90 transition-opacity">
          <Trophy className="h-10 w-10 sm:h-12 sm:w-12" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-headline font-bold">Deporte Encuentra</h1>
            <p className="text-sm sm:text-base opacity-90 font-body">Tu guía de escuelas deportivas en Colombia</p>
          </div>
        </Link>
        
        <nav className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80">
            <Link href="/login">Iniciar Sesión</Link>
          </Button>
          <Button variant="secondary" asChild className="hover:opacity-90">
            <Link href="/registro">Registrarse</Link>
          </Button>
          <Button variant="outline" size="icon" asChild className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/perfil" aria-label="Mi Perfil">
              <UserCircle2 className="h-5 w-5" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
