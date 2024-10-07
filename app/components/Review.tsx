import { StarIcon } from "lucide-react";
import ReviewProps from "../types/types";

export default function Review({ name, review }: ReviewProps) {
  return (
    <div className="embla__slide flex flex-col justify-center items-center text-center gap-4">
      <h3 className="font-bold">{name}</h3>
      <span className="flex gap-1">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </span>
      <p className="w-3/4">{review}</p>
    </div>
  );
}
