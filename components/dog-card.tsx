import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dog } from "@/lib/definitions";
import { Heart } from "lucide-react";

export function DogCard(dogProps: Dog) {
  return (
    <Card className="w-[300px] overflow-hidden p-0">
      <CardContent className="grid p-0">
        <div className="relative">
          <Button
            className="absolute z-10 top-1 right-1 rounded-full"
            variant="secondary"
          >
            <Heart className="w-6 h-6 text-red-500" />
          </Button>
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
            {dogProps.breed} | Age: {dogProps.age}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end"></CardFooter>
    </Card>
  );
}
