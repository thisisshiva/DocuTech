import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
      image: "https://via.placeholder.com/40", // Replace with actual user image
    },
    {
      id: 2,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
      image: "https://via.placeholder.com/40", // Replace with actual user image
    },
    {
      id: 3,
      text: "Create contracts, agreements & forms in seconds using advanced AI technology",
      rating: 5,
      image: "https://via.placeholder.com/40", // Replace with actual user image
    },
  ];

  return (
    <section className="py-16 bg-[#f6ede1] flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-neutral-900 text-center mb-8">
        What our users say
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-5xl px-4">
        <Carousel className="w-full">
          <CarouselContent className="flex items-center">
            {testimonials.map((item) => (
              <CarouselItem key={item.id} className="basis-1/3 p-2">
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-4">
                  {/* User Image */}
                  <img src={item.image} alt="User" className="w-12 h-12 rounded-full border-2 border-white" />
                  
                  {/* Testimonial Text */}
                  <p className="text-lg text-neutral-800">{item.text}</p>

                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#d37f36] text-white rounded-full shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#d37f36] text-white rounded-full shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </Carousel>
      </div>
    </section>
  );
};
