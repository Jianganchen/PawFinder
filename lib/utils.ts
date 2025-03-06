import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function artificialDelay(delayTime: number) {
  // Artificially delay a response for debugging purposes.

  console.log("Fetching data...");
  await new Promise((resolve) => setTimeout(resolve, delayTime));
}
