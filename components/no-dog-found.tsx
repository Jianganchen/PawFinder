import Link from "next/link";
import { Button } from "./ui/button";

export function NoDogFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen pb-50">
      <img width={200} src="/dog-not-found.jpg" alt="No Dog Found" />
      <h2 className="pt-4">Oooops...Looks like we found 0 dogs here</h2>
      <div className="flex flex-row pt-4 items-center">
        <h2>Please try again with another filter!</h2>
      </div>
    </div>
  );
}
