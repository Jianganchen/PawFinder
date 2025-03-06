"use client";

import { useRouter } from "next/navigation";
import { Dog } from "@/lib/definitions";
import { useEffect, useState } from "react";
import { getAllDogs } from "@/lib/api";

export default function Home() {
  const router = useRouter();
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const data = await getAllDogs();
        if (!data) throw new Error("Not Authenticated");
        console.log(data);
        // setDogs(data);
      } catch (error) {
        router.push("/login");
      }
    };

    fetchDogs();
  }, [router]);

  return (
    <div>
      <h2>This is Home page</h2>
    </div>
  );
}
