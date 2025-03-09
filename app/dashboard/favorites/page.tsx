"use client";

import { useFavoriteDogs } from "@/components/context/favorite-dogs-provider";
import { DogCard } from "@/components/dog-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { generateMatch, getDogsById } from "@/lib/api";
import { Dog, MatchResult } from "@/lib/definitions";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const { favoriteDogs } = useFavoriteDogs();
  const favoriteDogsIDs: string[] = favoriteDogs.map((dog) => dog.id);
  const [bestDog, setBestDog] = useState<Dog | null>(null);

  const handleGenerateMatch = async () => {
    try {
      const matchResult: MatchResult = await generateMatch(favoriteDogsIDs);

      if (!matchResult) {
        toast.error("Error generating a match");
        throw new Error("Error generating a match");
      }

      const bestDog = await getDogsById([matchResult.match]);

      if (!bestDog) {
        throw new Error("Error converting best dog id to object");
      }

      const dog = await bestDog.json();

      setBestDog(dog[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>We have a Match!</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          We just found a great match for you!
        </DialogDescription>
        <div className="flex justify-center">
          {bestDog && <DogCard dogProps={bestDog} isReadOnly={true} />}
        </div>
      </DialogContent>
      <div className="container mx-auto p-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold mb-6">Your Favorite Dogs ❤️</h1>
          <DialogTrigger asChild>
            <Button
              size="lg"
              variant="outline"
              className="text-base"
              onClick={handleGenerateMatch}
            >
              Match!
            </Button>
          </DialogTrigger>
        </div>
        {favoriteDogs.length === 0 ? (
          <p className="text-gray-600">
            No favorite dogs yet. Start liking some!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteDogs.map((dog) => (
              <DogCard key={dog.id} dogProps={dog} isReadOnly={false} />
            ))}
          </div>
        )}
      </div>
    </Dialog>
  );
}
