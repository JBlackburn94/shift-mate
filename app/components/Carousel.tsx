"use client";
import { useEffect } from "react";
import { StarIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Review from "./Review";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 4000 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla bg-sm-blue w-[90%] m-10 mx-auto" ref={emblaRef}>
      <div className="embla__container h-56 w-full text-white cursor-grab active:cursor-grabbing select-none">
        <Review
          name="Tisa Mary Femenga"
          review="Very professional, friendly and arrived on time."
        />
        <Review
          name="Mike"
          review="Young strong man who works hard, cant ask more, got it done in no
            time. Thanks very much."
        />
        <Review
          name="Annmarie Douglas"
          review="Very professional, friendly and arrived on time."
        />
        <Review
          name="Liru Cheng"
          review="Thanks Aaron, for being able to carry my luggage with ease, it was just awesome."
        />
      </div>
    </div>
  );
}
