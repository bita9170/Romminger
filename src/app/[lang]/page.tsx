import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/Footer";

import React from "react";
import side1 from "@/images/IMG_5345.jpg";
// import side2 from "@/images/1ee7cecb584c1f7ecc0431fe3303330c.jpg";
import side3 from "@/images/Bänder.jpg";
import side4 from "@/images/IMG_5345.jpg";
import Image from "next/image";
import Rohr from "@/images/Rohr.jpg";
import Bleche from "@/images/Bleche.jpg";
import test4 from "@/images/IMG_5346.jpg";
import bleche2 from "@/images/12345.jpg";

const HomePageEng = ({ params }: any) => {
  return (
    <div className="hero">
      <div className="caption">
        diese Webseite befindet sich im Aufbau <br />
        Hier entsteht für Sie: <br />
        www.rr-sondermetaalle.com
      </div>
      <Carousel className="-z-10">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={side1} alt="" loading="lazy" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={side3} alt="" loading="lazy" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={Rohr} alt="" loading="lazy" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={Bleche} alt="" loading="lazy" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={test4} alt="" loading="lazy" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={side4} alt="" loading="lazy" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Image src={bleche2} alt="" loading="lazy" />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};

export default HomePageEng;
