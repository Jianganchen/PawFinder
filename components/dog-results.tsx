"use client";

import { getAllDogsByPageNumber, getDogsById } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchResult } from "@/lib/definitions";
import { Dog } from "@/lib/definitions";
import { DogCard } from "./dog-card";
import { GridDisplay } from "./grid-display";

export function DogResults({ currentPage }: { currentPage: number }) {
  const router = useRouter();
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const data: SearchResult = await getAllDogsByPageNumber(currentPage);
        if (!data) throw new Error("Not Authenticated");

        const response = await getDogsById(data.resultIds);
        if (!response) throw new Error("No dogs found");
        const dogs: Dog[] = await response.json();

        setDogs(dogs);
      } catch (error) {
        console.log(error);
        router.push("/login");
      }
    };

    fetchDogs();
  }, [router, currentPage]);
  return (
    <div>
      <GridDisplay>
        {dogs.map((dog: Dog, index: number) => (
          <div key={index}>
            <DogCard {...dog} />
          </div>
        ))}
      </GridDisplay>
    </div>
  );
}
