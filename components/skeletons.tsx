import { DogCardSkeleton } from "./dog-card";
import { GridDisplay } from "./grid-display";

export function DogResultSkeleton() {
  return (
    <div className="flex flex-col justify-center">
      <GridDisplay>
        {Array.from({ length: 25 }).map((_, index) => (
          <div key={index}>
            <DogCardSkeleton />
          </div>
        ))}
      </GridDisplay>
      <div className="py-3" />
    </div>
  );
}
