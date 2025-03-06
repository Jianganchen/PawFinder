"use client";

import { getAllDogsByPageNumber, getDogsById } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchResult } from "@/lib/definitions";
import { Dog } from "@/lib/definitions";
import { DogCard } from "./dog-card";
import { GridDisplay } from "./grid-display";
import { PaginationRow } from "./pagination-row";
import { DogResultSkeleton } from "./skeletons";

export function DogResults({ currentPage }: { currentPage: number }) {
  const router = useRouter();
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        setIsLoading(true);

        const data: SearchResult = await getAllDogsByPageNumber(currentPage);
        if (!data) throw new Error("Not Authenticated");

        const response = await getDogsById(data.resultIds);
        if (!response) throw new Error("No dogs found");
        const dogs: Dog[] = await response.json();

        setDogs(dogs);
      } catch (error) {
        console.log(error);
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDogs();
  }, [router, currentPage]);

  if (isLoading) return <DogResultSkeleton />;

  return (
    <div className="flex flex-col justify-center">
      <GridDisplay>
        {dogs.map((dog: Dog, index: number) => (
          <div key={index}>
            <DogCard {...dog} />
          </div>
        ))}
      </GridDisplay>
      <div className="py-3" />
      <PaginationRow />
    </div>
  );
}
