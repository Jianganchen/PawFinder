import { DogResults } from "@/components/dog-results";

export default async function Dashboard(props: {
  searchParams?: Promise<{
    page?: string;
    breed?: string;
    sort?: string;
    zipcode?: string;
    ageMin?: string;
    ageMax?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const currentBreed = searchParams?.breed || undefined;
  const currentSort = searchParams?.sort || "breed:asc";
  const currentZipcode = searchParams?.zipcode || undefined;
  const currentAgeMin = Number(searchParams?.ageMin) || undefined;
  const currentAgeMax = Number(searchParams?.ageMax) || undefined;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <DogResults
        currentPage={currentPage}
        currentBreed={currentBreed}
        currentSort={currentSort}
        currentZipcode={currentZipcode}
        currentAgeMin={currentAgeMin}
        currentAgeMax={currentAgeMax}
      />
    </div>
  );
}
