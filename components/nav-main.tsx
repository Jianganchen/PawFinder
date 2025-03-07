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

export function NavMain({ breeds }: { breeds: Breeds }) {
  const [breedSelection, setBreedSelection] = useState<string>("");

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
          <Button variant="outline">Apply Filter</Button>
          <Button variant="outline">Clear Filter</Button>
        </div>
      </SidebarMenu>
    </SidebarGroup>
  );
}
