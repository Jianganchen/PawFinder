import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </header>
          <div className="flex flex-col items-center gap-4 p-4 pt-30">
            <img width={500} src="/404.png" alt="404" />
            <Button variant="outline">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
