import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dog } from "@/lib/definitions";
import { Heart } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { useFavoriteDogs } from "./context/favorite-dogs-provider";
import { toast } from "react-hot-toast";

export function DogCard({
  dogProps,
  isReadOnly,
}: {
  dogProps: Dog;
  isReadOnly: boolean;
}) {
  const { favoriteDogs, addToFavorites, removeFromFavorites } =
    useFavoriteDogs();
  const isFavorite = favoriteDogs.some((fav) => fav.id === dogProps.id);

  const handleToggleLikeDog = () => {
    if (isFavorite) {
      toast(`Removed ${dogProps.name} from favorites.`, { duration: 1000 });
      removeFromFavorites(dogProps.id);
    } else {
      toast(`Added ${dogProps.name} to favorites! `, {
        icon: "🐶",
        duration: 1000,
      });
      addToFavorites(dogProps);
    }
  };

  return (
    <Card className="min-w-[250px] max-w-[340px] h-[300px] overflow-hidden p-0">
      <CardContent className="grid p-0">
        <div className="relative">
          {!isReadOnly && (
            <Button
              className="absolute z-10 top-1 right-1 rounded-full"
              variant="secondary"
              onClick={handleToggleLikeDog}
            >
              <Heart
                className={`w-6 h-6 text-red-300 ${
                  isFavorite && "fill-red-300"
                }`}
              />
            </Button>
          )}
          <img
            src={dogProps.img}
            alt={dogProps.name}
            className="w-full h-[200px] object-cover"
          />
        </div>
        <div className="text-center p-4 space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            {dogProps.name}
          </h3>
          <p className="text-sm text-gray-500">
            {dogProps.breed} | Age: {dogProps.age} | {dogProps.zip_code}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end"></CardFooter>
    </Card>
  );
}

export function DogCardSkeleton() {
  return (
    <Card className="min-w-[250px] h-[300px] overflow-hidden p-0">
      <CardContent className="grid p-0">
        <div className="relative">
          <Skeleton className="w-full h-[200px] object-cover rounded-none" />
        </div>
        <div className="flex flex-col items-center pt-6 p-4 space-y-4">
          <Skeleton className="h-5 w-[100px]" />
          <Skeleton className="h-4 w-[120px]" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end"></CardFooter>
    </Card>
  );
}
