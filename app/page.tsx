import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DogResults } from "@/components/dog-results";

export default async function Home(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  // const [dogs, setDogs] = useState<Dog[]>([]);
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <h2>This is Home page</h2>
      <DogResults currentPage={currentPage} />
    </div>
  );
}
