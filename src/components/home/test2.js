"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import banner from "../../../public/Banner1.png"

const WhyChooseUs = () => {
  const points = [
    {
      id: 1,
      image: banner,
      title: "Top Quality Service",
      description:
        "We deliver only the best, ensuring customer satisfaction and long-term trust.",
    },
    {
      id: 2,
      image: "/images/expert.png",
      title: "Expert Professionals",
      description:
        "Our team consists of industry experts with years of experience and innovation.",
    },
    {
      id: 3,
      image: "/images/support.png",
      title: "24/7 Support",
      description:
        "We’re available round the clock to support you whenever you need us.",
    },
    {
      id: 4,
      image: "/images/value.png",
      title: "Value for Money",
      description:
        "Get the highest quality services at competitive and transparent prices.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    beforeChange: (current, next) => setActiveIndex(next),
    centerMode: false, // centerMode doesn't work vertically
  };

  // Scroll slider to keep the active slide in the middle
  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const slidesToShow = 3;
      slider.slickGoTo(activeIndex - 1 >= 0 ? activeIndex - 1 : points.length - 1);
    }
  }, [activeIndex]);

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center min-h-[90vh] bg-gray-50 px-6 md:px-12 py-10">
      {/* LEFT - Vertical Slider */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-[80%] max-w-[400px]">
          <Slider ref={sliderRef} {...settings}>
            {points.map((point, index) => (
              <div
                key={point.id}
                className={`flex flex-col items-center justify-center transition-transform duration-500 ${
                  index === activeIndex
                    ? "scale-110 opacity-100 z-10"
                    : "scale-90 opacity-60 z-0"
                }`}
              >
                <div className="w-48 h-48 relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-gray-800 text-center">
                  {point.title}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* RIGHT - Description */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {points[activeIndex]?.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
