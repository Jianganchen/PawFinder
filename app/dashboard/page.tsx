import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { DogResults } from "@/components/dog-results";

export default async function Dashboard(props: {
  searchParams?: Promise<{
    page?: string;
    breed?: string;
    sort?: string;
    zipcode?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const currentBreed = searchParams?.breed || undefined;
  const currentSort = searchParams?.sort || "breed:asc";
  const currentZipcode = searchParams?.zipcode || undefined;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <DogResults
        currentPage={currentPage}
        currentBreed={currentBreed}
        currentSort={currentSort}
        currentZipcode={currentZipcode}
      />
    </div>
  );
}
