"use client";

import { getDogsBySearch, getDogsById } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchResult } from "@/lib/definitions";
import { Dog } from "@/lib/definitions";
import { DogCard } from "./dog-card";
import { GridDisplay } from "./grid-display";
import { PaginationRow } from "./pagination-row";
import { DogResultSkeleton } from "./skeletons";
// import { NoDogFound } from "./no-dog-found";

export function DogResults({
  currentPage,
  currentBreed,
  currentSort,
  currentZipcode,
}: {
  currentPage: number;
  currentBreed: string | undefined;
  currentSort: string;
  currentZipcode: string | undefined;
}) {
  const router = useRouter();
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [noDogFound, setNoDogFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        setIsLoading(true);

        const data: SearchResult = await getDogsBySearch({
          currentPage: currentPage,
          size: 25,
          breed: currentBreed,
          sort: currentSort,
          zipCode: currentZipcode,
        });
        if (!data) throw new Error("Not Authenticated");

        // if (data.total === 0) {
        //   setNoDogFound(true);
        // }

        const response = await getDogsById(data.resultIds);
        if (!response) throw new Error("error getting result dog ids");

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
  }, [router, currentPage, currentBreed, currentSort, currentZipcode]);

  if (isLoading) return <DogResultSkeleton />;

  // if (noDogFound) return <NoDogFound />;

  return (
    <div className="flex flex-col justify-center">
      <GridDisplay>
        {dogs.map((dog: Dog, index: number) => (
          <div key={index}>
            <DogCard dogProps={dog} isReadOnly={false} />
          </div>
        ))}
      </GridDisplay>
      <div className="py-3" />
      <PaginationRow />
    </div>
  );
}
