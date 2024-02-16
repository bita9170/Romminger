import Footer from "@/components/Footer";
import React from "react";

const HomePageEng = ({ params }: any) => {
  return (
    <div className="hero">
      <div className="carousel w-screen h-screen">
        <div id="item1" className="carousel-item w-full">
          <div className="caption">
            diese website befindet sich im Aufbau. <br />
            hier entsteht für Sie: <br />
            www.rr-sondermetalle.com
          </div>
          <img
            src="https://picsum.photos/seed/picsum/1920/1080"
            className="w-full object-cover"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://picsum.photos/id/237/1920/1000"
            className="w-full object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://picsum.photos/id/1/1920/1080"
            className="w-full object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://picsum.photos/id/2/1920/1080"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center text-center absolute top-1/2 -translate-y-1/2 right-5 gap-2 ">
        <a
          href="#item1"
          className="border border-white bg-secondary rounded-full w-3 h-3 hover:bg-primary"
        ></a>
        <a
          href="#item2"
          className="border border-white bg-secondary rounded-full w-3 h-3 hover:bg-primary"
        ></a>
        <a
          href="#item3"
          className="border border-white bg-secondary rounded-full w-3 h-3 hover:bg-primary"
        ></a>
        <a
          href="#item4"
          className="border border-white bg-secondary rounded-full w-3 h-3 hover:bg-primary"
        ></a>
      </div>
    </div>
  );
};

export default HomePageEng;
