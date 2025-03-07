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
import { Input } from "./ui/input";

const sortFields = ["breed", "name", "age"];

const zipcodeRegex = /^(\d{5})?$/;

export function NavMain({ breeds }: { breeds: Breeds }) {
  const [breedSelection, setBreedSelection] = useState<string>("");
  const [sortFieldSelection, setSortFieldSelection] =
    useState<sortField>("breed");
  const [zipcode, setZipcode] = useState<string>("");
  const [toggleSortAscend, setToggleSortAscend] = useState<boolean>(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const currentPage = searchParams.get("sort") || "";

  const createQueryURL = (
    currentBreed: string,
    toggleSortAscend: boolean,
    sortFieldSelection: sortField,
    zipcode: string
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set("breed", currentBreed);
    const sortQuery = toggleSortAscend ? "desc" : "asc";
    params.set("sort", `${sortFieldSelection}:${sortQuery}`);
    params.set("zipcode", zipcode);

    return `${pathname}?${params.toString()}`;
  };

  // useEffect(() => {
  //   console.log(zipcode);
  // }, [zipcode]);

  return (
    <SidebarGroup>
      <SidebarMenu className="items-center gap-4">
        <p className="font-medium">Breed:</p>
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
        <p className="font-medium">Zip-code:</p>
        <Input
          type="text"
          placeholder="Enter a zip-code"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
        {!zipcodeRegex.test(zipcode) && (
          <p className="text-red-500 -mt-2 mr-auto text-sm ml-2">
            Invalid zipcode
          </p>
        )}
        <p className="font-medium">Sort through:</p>

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
        <p className="font-medium">Sort direction:</p>

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
              sortFieldSelection,
              zipcode
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
