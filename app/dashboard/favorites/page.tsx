"use client";

import { useFavoriteDogs } from "@/components/context/favorite-dogs-provider";
import { DogCard } from "@/components/dog-card";

export default function Page() {
  const { favoriteDogs } = useFavoriteDogs();
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Favorite Dogs ❤️</h1>
      {favoriteDogs.length === 0 ? (
        <p className="text-gray-600">
          No favorite dogs yet. Start liking some!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteDogs.map((dog) => (
            <DogCard key={dog.id} {...dog} />
          ))}
        </div>
      )}
    </div>
  );
}
