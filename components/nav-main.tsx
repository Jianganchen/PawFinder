"use client";

import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Breeds, sortField } from "@/lib/definitions";
import { Button } from "./ui/button";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

const sortFields = ["breed", "name", "age"];

export function NavMain({ breeds }: { breeds: Breeds }) {
  const [breedSelection, setBreedSelection] = useState<string>("");
  const [sortFieldSelection, setSortFieldSelection] =
    useState<sortField>("breed");
  const [toggleSortAscend, setToggleSortAscend] = useState<boolean>(true);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const currentPage = searchParams.get("sort") || "";

  const createQueryURL = (
    currentBreed: string,
    toggleSortAscend: boolean,
    sortFieldSelection: sortField
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set("breed", currentBreed);
    const sortQuery = toggleSortAscend ? "asc" : "desc";
    params.set("sort", `${sortFieldSelection}:${sortQuery}`);

    return `${pathname}?${params.toString()}`;
  };

  // useEffect(() => {
  //   console.log(sortFieldSelection);
  // }, [sortFieldSelection]);

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
        <Select
          value={sortFieldSelection}
          onValueChange={(value: sortField) => setSortFieldSelection(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a sort field" />
          </SelectTrigger>
          <SelectContent>
            {sortFields.map((field, index) => (
              <SelectItem key={index} value={field}>
                {field}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex justify-between w-full px-3">
          <Label htmlFor="toggleSort">sort ascend</Label>
          <Switch
            id="toggleSort"
            checked={toggleSortAscend}
            onCheckedChange={() => setToggleSortAscend((prev) => !prev)}
          />
          <Label htmlFor="toggleSort">sort descend</Label>
        </div>
        <div className="flex flex-row justify-between w-full">
          <Link
            href={createQueryURL(
              breedSelection,
              toggleSortAscend,
              sortFieldSelection
            )}
          >
            <Button variant="outline">Apply Filter</Button>
          </Link>
          <Button variant="outline">Clear Filter</Button>
        </div>
      </SidebarMenu>
    </SidebarGroup>
  );
}
