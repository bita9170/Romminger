import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const HomePageEng = ({ params }: any) => {
  unstable_setRequestLocale(params.local);
  const t = useTranslations("home");
  return (
    <div className="hero">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-10 mt-10 text-4xl font-extrabold tracking-tight leading-none text-gray-700 md:text-5xl lg:text-4xl">
            {t("hero-title")}
          </h1>

          <div className="flex flex-col mb-8 lg:mb-14 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href={`/${params.local}/about`}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              {t("hero-button-text")}
            </Link>
          </div>
          <div className="px-4 mx-auto text-center">
            <span className="font-semibold text-gray-400 uppercase">
              {t("hero-material")}
            </span>
            <div className="flex flex-wrap justify-center items-center mt-6 text-gray-500 sm:justify-between px-6 md:px-0">
              <Carousel
                opts={{
                  align: "center",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/4"
                    >
                      <Image
                        src={`/materials/${index + 1}.jpg`}
                        alt=""
                        width="500"
                        height="500"
                        className="border-2 border-primary rounded-md"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className=" md:hidden" />
                <CarouselNext className=" md:hidden"/>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageEng;
