"use client";

import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Breeds } from "@/lib/definitions";
import { Button } from "./ui/button";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export function NavMain({ breeds }: { breeds: Breeds }) {
  const [breedSelection, setBreedSelection] = useState<string>("");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const currentPage = searchParams.get("sort") || "";

  const createBreedURL = (currentBreed: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("breed", currentBreed);
    // console.log("Pathname:", pathname);
    // console.log("currentBreed:", currentBreed);

    return `${pathname}?${params.toString()}`;
  };

  // useEffect(() => {
  //   console.log(breedSelection);
  // }, [breedSelection]);

  return (
    <SidebarGroup>
      <SidebarMenu className="items-center gap-4">
        <Select value={breedSelection} onValueChange={setBreedSelection}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a breed" />
          </SelectTrigger>
          <SelectContent>
            {breeds.map((breed, index) => (
              <SelectItem key={index} value={breed}>
                {breed}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex flex-row justify-between w-full">
          <Link href={createBreedURL(breedSelection)}>
            <Button variant="outline">Apply Filter</Button>
          </Link>
          <Button variant="outline">Clear Filter</Button>
        </div>
      </SidebarMenu>
    </SidebarGroup>
  );
}
