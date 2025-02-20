import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoIosStar } from "react-icons/io";

export function CarouselSize() {
  const testimonials = [
    {
      id: 1,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
      image: "https://c.animaapp.com/KuHfoC88/img/ellipse-4@2x.png",
    },
    {
      id: 2,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
      image: "https://c.animaapp.com/KuHfoC88/img/ellipse-4@2x.png",
    },
    {
      id: 3,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
      image: "https://c.animaapp.com/KuHfoC88/img/ellipse-4@2x.png",
    },
    {
      id: 4,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
      image: "https://c.animaapp.com/KuHfoC88/img/ellipse-4@2x.png",
    },
    {
      id: 5,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
      image: "https://c.animaapp.com/KuHfoC88/img/ellipse-4@2x.png",
    },
  ];

  return (
    <section className="py-16 px-4 w-full max-w-6xl mx-auto bg-[#f6ede1] flex flex-col items-center">
        <h2 className="text-3xl font-bold text-neutral-900 text-center mb-8">What our users say</h2>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[1234px] mx-auto px-4"
      >
        <CarouselContent>
          {testimonials.map((msg, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="w-full h-full shadow-[0px_7px_8px_#00000040]">
                  <CardContent className="flex flex-col justify-evenly p-6 ">
                    <img
                      className="w-14 h-14 object-cover mx-auto "
                      alt="Ellipse"
                      src={msg.image}
                    />
                    <p className="text-[15px] text-neutral-800 text-center leading-6 font-poppins mt-4">
                      {msg.text}
                    </p>
                    <div className="flex justify-center space-x-1 mt-4">
                      {Array.from({ length: msg.rating }).map((_, i) => (
                        <IoIosStar
                          key={i}
                          className="w-7 h-7 text-[#E7E94F]"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-x-5 -translate-y-1/2 bg-[#d37f36] text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center z-10" />
        <CarouselNext className="absolute right-0 top-1/2 transform translate-x-5 -translate-y-1/2 bg-[#d37f36] text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center z-10" />
      </Carousel>
    </section>
  );
}