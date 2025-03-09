"use client";

import { useFavoriteDogs } from "@/components/context/favorite-dogs-provider";
import { DogCard } from "@/components/dog-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { generateMatch, getDogsById } from "@/lib/api";
import { Dog, MatchResult } from "@/lib/definitions";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";
import { GridDisplay } from "@/components/grid-display";

export default function Page() {
  const { width, height } = useWindowSize();

  const { favoriteDogs } = useFavoriteDogs();
  const favoriteDogsIDs: string[] = favoriteDogs.map((dog) => dog.id);
  const [bestDog, setBestDog] = useState<Dog | null>(null);

  const [error, setError] = useState<boolean>(false);
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    if (bestDog) {
      setIsMatch(true);
      setTimeout(() => setIsMatch(false), 4000);
    }
  }, [bestDog]);

  const handleGenerateMatch = async () => {
    try {
      const matchResult: MatchResult = await generateMatch(favoriteDogsIDs);

      if (!matchResult) {
        setError(true);
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
      {isMatch && (
        <Confetti
          width={width!}
          height={height!}
          numberOfPieces={300}
          initialVelocityX={10}
          gravity={1}
        />
      )}
      <DialogContent>
        {error ? (
          <>
            <DialogHeader>
              <DialogTitle>Failed to generate a Match</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              You need to like some dogs to find a match!
            </DialogDescription>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>We have a Match!</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              We just found a great match for you!
            </DialogDescription>
            <div className="flex justify-center">
              {bestDog && <DogCard dogProps={bestDog} isReadOnly={true} />}
            </div>
            <DialogClose asChild>
              <div className="pt-3 ">
                <Button type="submit" size="lg" variant="outline">
                  Great!
                </Button>
              </div>
            </DialogClose>
          </>
        )}
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
          <GridDisplay>
            {favoriteDogs.map((dog) => (
              <DogCard key={dog.id} dogProps={dog} isReadOnly={false} />
            ))}
          </GridDisplay>
        )}
      </div>
    </Dialog>
  );
}
