import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dog } from "@/lib/definitions";

export function DogCard(dogProps: Dog) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{dogProps.name}</CardTitle>
        <CardDescription>age: {dogProps.age}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <img
            src={dogProps.img}
            alt={dogProps.name}
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline">Adopt</Button>
      </CardFooter>
    </Card>
  );
}
