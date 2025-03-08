import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DogResults } from "@/components/dog-results";

export default async function Home(props: {
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
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <DogResults
              currentPage={currentPage}
              currentBreed={currentBreed}
              currentSort={currentSort}
              currentZipcode={currentZipcode}
            />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
