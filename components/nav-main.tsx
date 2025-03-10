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
import { states } from "@/lib/definitions";
import { Button } from "./ui/button";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Slider } from "@/components/ui/slider";

const sortFields = ["breed", "name", "age"];

const zipcodeRegex = /^(\d{5})?$/;

export function NavMain({ breeds }: { breeds: Breeds }) {
  const [breedSelection, setBreedSelection] = useState<string>("");
  const [stateSelection, setStateSelection] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [sortFieldSelection, setSortFieldSelection] =
    useState<sortField>("breed");
  const [zipcode, setZipcode] = useState<string>("");
  const [toggleSortAscend, setToggleSortAscend] = useState<boolean>(false);
  const [selectAge, setSelectAge] = useState<[number, number]>([0, 25]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const currentPage = searchParams.get("sort") || "";

  const createQueryURL = (
    currentBreed: string,
    currentState: string,
    currentCity: string,
    toggleSortAscend: boolean,
    sortFieldSelection: sortField,
    zipcode: string,
    selectAge: [number, number]
  ) => {
    const params = new URLSearchParams(searchParams);
    currentBreed && params.set("breed", currentBreed);
    currentState && params.set("state", currentState);
    currentCity && params.set("city", currentCity);
    const sortQuery = toggleSortAscend ? "desc" : "asc";
    params.set("sort", `${sortFieldSelection}:${sortQuery}`);
    zipcode && params.set("zipcode", zipcode);
    params.set("ageMin", selectAge[0].toString());
    params.set("ageMax", selectAge[1].toString());

    return `${pathname}?${params.toString()}`;
  };

  const createEmptyQueryURL = () => {
    return "/dashboard";
  };

  const handleClearFilter = () => {
    setBreedSelection("");
    setSortFieldSelection("breed");
    setZipcode("");
    setToggleSortAscend(false);
    setSelectAge([0, 25]);
    setCity("");
    setStateSelection("");
  };

  return (
    <SidebarGroup>
      <SidebarMenu className="items-center gap-4">
        {/* Breed Selection */}
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

        {/* State Selection */}
        <p className="font-medium">State:</p>
        <Select value={stateSelection} onValueChange={setStateSelection}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a state" />
          </SelectTrigger>
          <SelectContent>
            {states.map((state, index) => (
              <SelectItem key={index} value={state.value}>
                {state.value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* City Input */}
        <p className="font-medium">City:</p>
        <Input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {/* Zipcode Input */}
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

        {/* Age range Slider */}
        <p className="font-medium">Age range:</p>
        <Slider
          defaultValue={[0, 25]}
          value={selectAge}
          onValueChange={(value) => setSelectAge([value[0], value[1]])}
          max={25}
        />
        <p className="mt-2 text-sm text-gray-500">
          Selected age range:
          <span className="ml-1 font-semibold text-gray-900 dark:text-gray-50">
            {selectAge[0]}~{selectAge[1]}
          </span>
        </p>

        {/* Sorting Field */}
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

        {/* Sort Direction */}
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
              stateSelection,
              city,
              toggleSortAscend,
              sortFieldSelection,
              zipcode,
              selectAge
            )}
          >
            <Button variant="outline">Apply Filter</Button>
          </Link>
          <Link href={createEmptyQueryURL()}>
            <Button variant="outline" onClick={handleClearFilter}>
              Clear Filter
            </Button>
          </Link>
        </div>
      </SidebarMenu>
    </SidebarGroup>
  );
}
