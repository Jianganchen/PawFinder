import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Navbar */}
      <nav className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="flex flex-row">
          <div className=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center">
            <img src="/favicon.ico" alt="icon" className="size-8" />
          </div>
          <div className="flex flex-row gap-0 leading-none ml-2">
            <span className="font-bold text-4xl font-sans">Paw</span>
            <span className="font-bold text-4xl font-sans text-[#d99e82]">
              Finder
            </span>
          </div>
        </div>
        <Link href="/login">
          <Button className="text-base" size="lg" variant="outline">
            Login
          </Button>
        </Link>
      </nav>

      {/* ✅ Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className=" ml-auto mr-40">
          <div className="flex flex-row gap-0 leading-none ml-2">
            <span className="font-bold text-7xl font-sans text-[#d99e82]">
              Find&nbsp;
            </span>
            <span className="font-bold text-7xl font-sans">Your New</span>
          </div>
          <div className="flex flex-row gap-0 leading-none ml-2">
            <span className="font-bold text-7xl font-sans text-black">
              Paw&nbsp;
            </span>
            <span className="font-bold text-7xl font-sans">Friend Today</span>
          </div>
          <p className="ml-3 mt-4 text-lg text-gray-200">
            Thousands of pets looking for a loving home.
          </p>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section className="py-16 bg-white text-center text-black">
        <h3 className="text-3xl font-semibold text-black">
          Find Your Best Friend Today
        </h3>
        <div className="pt-5">
          <Link href="/login">
            <Button className="text-base" size="lg" variant="outline">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="py-6 text-center text-gray-600">
        &copy; 2025 PetFinder - All Rights Reserved
      </footer>
    </div>
  );
}
