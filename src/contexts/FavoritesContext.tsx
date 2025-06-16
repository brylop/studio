
'use client';

import type { School } from '@/types';
import type { ReactNode, Dispatch, SetStateAction} from 'react';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface FavoritesContextType {
  favoriteSchools: School[];
  addFavorite: (school: School) => void;
  removeFavorite: (schoolId: string) => void;
  isFavorite: (schoolId: string) => boolean;
  setFavoriteSchools: Dispatch<SetStateAction<School[]>>; // Exposed for testing or advanced scenarios
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const FAVORITES_STORAGE_KEY = 'deporteEncuentraFavorites';

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteSchools, setFavoriteSchools] = useState<School[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // To prevent hydration mismatch

  useEffect(() => {
    // Load favorites from localStorage only on the client side
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (storedFavorites) {
        setFavoriteSchools(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to load favorites from localStorage", error);
      // Initialize with empty array if parsing fails or localStorage is not available
      setFavoriteSchools([]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Save favorites to localStorage whenever they change, only on client side and after initial load
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteSchools));
      } catch (error) {
        console.error("Failed to save favorites to localStorage", error);
      }
    }
  }, [favoriteSchools, isLoaded]);

  const addFavorite = (school: School) => {
    setFavoriteSchools((prevFavorites) => {
      if (!prevFavorites.find(fav => fav.id === school.id)) {
        return [...prevFavorites, school];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (schoolId: string) => {
    setFavoriteSchools((prevFavorites) => prevFavorites.filter((school) => school.id !== schoolId));
  };

  const isFavorite = (schoolId: string) => {
    return favoriteSchools.some((school) => school.id === schoolId);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteSchools, addFavorite, removeFavorite, isFavorite, setFavoriteSchools }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
