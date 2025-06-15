import { Trophy } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="bg-primary text-primary-foreground py-6 shadow-md">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <Trophy className="h-10 w-10 sm:h-12 sm:w-12" />
          <div>
            <h1 className="text-3xl sm:text-4xl font-headline font-bold">Deporte Encuentra</h1>
            <p className="text-sm sm:text-base opacity-90 font-body">Tu guía de escuelas deportivas en Colombia</p>
          </div>
        </div>
        {/* Navigation items can be added here if needed */}
      </div>
    </header>
  );
}
