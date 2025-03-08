"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Dog } from "@/lib/definitions";

interface FavoriteDogsContextType {
  favoriteDogs: Dog[];
  addToFavorites: (dog: Dog) => void;
  removeFromFavorites: (id: string) => void;
}

const FavoriteDogsContext = createContext<FavoriteDogsContextType | undefined>(
  undefined
);

export function useFavoriteDogs() {
  const context = useContext(FavoriteDogsContext);
  if (!context) {
    throw new Error(
      "useFavoriteDogs must be used within a FavoriteDogsProvider"
    );
  }
  return context;
}

export function FavoriteDogsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favoriteDogs, setFavoriteDogs] = useState<Dog[]>([]);

  useEffect(() => {
    const storedFavorites = sessionStorage.getItem("favoriteDogs");
    if (storedFavorites) {
      setFavoriteDogs(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("favoriteDogs", JSON.stringify(favoriteDogs));
  }, [favoriteDogs]);

  const addToFavorites = (dog: Dog) => {
    setFavoriteDogs((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === dog.id)) return prevFavorites;
      return [...prevFavorites, dog];
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavoriteDogs((prevFavorites) =>
      prevFavorites.filter((dog) => dog.id !== id)
    );
  };

  return (
    <FavoriteDogsContext.Provider
      value={{ favoriteDogs, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteDogsContext.Provider>
  );
}
