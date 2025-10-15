"use client";

import Image from "next/image";
import RoadmapImg from "../../../public/roadmap.png"; // background roadmap
import Step1Img from "../../../public/d1.png"; // step 1 image
import Step2Img from "../../../public/d1.png"; // step 2 image
import Step3Img from "../../../public/d1.png"; // step 3 image
import Step4Img from "../../../public/d1.png"; // step 4 image
import Step5Img from "../../../public/d1.png"; // step 5 image
import Step6Img from "../../../public/d1.png"; // step 6 image

export default function HowSureSupplyHeading() {
  return (
    <section className="bg-[#0B1444] text-white py-28 relative">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold">
          How <span className="text-orange-500">Sure Supply</span> Works
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 mt-4 text-base md:text-lg max-w-3xl mx-auto">
          {`Navigate our comprehensive manufacturing journey from initial concept to final delivery.`}
        </p>

        {/* Roadmap */}
        <div className="mt-12 relative w-full max-w-[900px] mx-auto h-[500px] md:h-[600px] lg:h-[700px]">
          {/* Background roadmap */}
          <Image
            src={RoadmapImg}
            alt="Roadmap"
            className="object-contain"
            fill
            priority
          />

          {/* Step 1 - Customer request initiation */}
          <div className="absolute top-[10%] -left-10 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white flex flex-col items-center justify-center text-center text-[10px] md:text-xs font-semibold text-black">
            <Image src={Step1Img} alt="Step 1" className="object-cover" fill />
            <span className="absolute z-10 px-2 text-black">
              {`Customer request initiation`}
            </span>
          </div>

          {/* Step 1 description */}
          {/* Step 1 description with vertical line + dot */}
<div className="absolute top-[calc(10%+08rem)] left-[-4.5rem] flex flex-col items-center text-center w-40">
  {/* Vertical Line + Dot */}
  <div className="flex flex-col items-center mb-1">
    <div className="w-[2px] h-20 bg-white"></div> {/* vertical line */}
    <div className="w-2 h-2 bg-white rounded-full mt-1"></div> {/* dot at the bottom */}
  </div>

  {/* Description Text */}
  <div>
    <p className="font-semibold text-lg text-white">Customer request initiation</p>
    <p className="text-gray-300 text-xs max-w-[180px] mx-auto">
      {`Detailed project requirements and specifications gathering.`}
    </p>
  </div>
</div>


          {/* Step 2 - Engineering support */}
          <div className="absolute top-[22%] left-[13%] w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white flex flex-col items-center justify-center text-center text-[10px] md:text-xs font-semibold text-black">
            <Image src={Step2Img} alt="Step 2" className="object-cover" fill />
            <span className="absolute z-10 px-2 text-black">
              {`Engineering support`}
            </span>
          </div>

          {/* Step 2 description */}
          {/* Step 2 description with |_ connector above the circle */}
<div className="absolute top-[10%] left-[25%] flex flex-col items-center text-center w-40">
  {/* Description Text */}
  <div className="mb-1">
    <p className="font-semibold text-sm text-white">Engineering support</p>
    <p className="text-gray-300 text-xs max-w-[180px] mx-auto">
      {`Technical consultation and design optimization.`}
    </p>
  </div>

  {/* Connector |_ */}
  <div className=" top-[10%] left-[10%] flex flex-col items-center">
    {/* Vertical line */}
    <div className="w-[2px] h-12 bg-white mb-1"></div>
    {/* Horizontal line */}
    <div className="h-[2px] w-12 bg-white"></div>
  </div>
</div>


          {/* Step 3 - Strategic supplier matching */}
          <div className="absolute top-[35%] left-[40%] w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white flex flex-col items-center justify-center text-center text-[10px] md:text-xs font-semibold text-black">
            <Image src={Step3Img} alt="Step 3" className="object-cover" fill />
            <span className="absolute z-10 px-2 text-black">
             {` Strategic supplier matching`}
            </span>
          </div>

          {/* Step 3 description */}
          <div className="absolute top-[40%] left-[58%] text-left text-white flex items-center gap-2">
            <div className="relative flex items-center">
              <div className="w-12 h-[2px] bg-white"></div>
              <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
            </div>
            <div>
              <p className="font-semibold text-sm">Strategic supplier matching</p>
              <p className="text-gray-300 text-xs max-w-[180px]">
                {`Identifying optimal manufacturing partners.`}
              </p>
            </div>
          </div>

          {/* Step 4 - Production Planning */}
          <div className="absolute top-[58%] left-[45%] w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white flex flex-col items-center justify-center text-center text-[10px] md:text-xs font-semibold text-black">
            <Image src={Step4Img} alt="Step 4" className="object-cover" fill />
            <span className="absolute z-10 px-2 text-black">
              {`Production Planning`}
            </span>
          </div>

          {/* Step 4 description */}
          <div className="absolute top-[63%] left-[15%] text-right text-white flex items-center gap-2">
  {/* Description Text */}
  <div>
    <p className="font-semibold text-sm">Strategic supplier matching</p>
    <p className="text-gray-300 text-xs max-w-[180px]">
      {`Identifying optimal manufacturing partners.`}
    </p>
  </div>

  {/* Connector (line + dot) */}
  <div className="relative flex items-center">
    <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
    <div className="w-15 h-[2px] bg-white"></div>
    
  </div>
</div>


          {/* Step 5 - Quality Checking */}
          <div className="absolute top-[58%] left-[69%] w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white flex flex-col items-center justify-center text-center text-[10px] md:text-xs font-semibold text-black">
            <Image src={Step5Img} alt="Step 5" className="object-cover" fill />
            <span className="absolute z-10 px-2 text-black">
              {`Quality Checking`}
            </span>
          </div>

          {/* Step 5 description */}
          <div className="absolute top-[66%] left-[83%] text-left text-white flex items-center gap-2">
            <div className="relative flex items-center">
              <div className="w-12 h-[2px] bg-white"></div>
              <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
            </div>
            <div>
              <p className="font-semibold text-sm">Quality Checking</p>
              <p className="text-gray-300 text-xs max-w-[180px]">
                {`Refining designs for efficient production.`}
              </p>
            </div>
          </div>

          {/* Step 6 - Delivery & After Sales Service */}
          <div className="absolute top-[75%] left-[90%] w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white flex flex-col items-center justify-center text-center text-[10px] md:text-xs font-semibold text-black">
            <Image src={Step6Img} alt="Step 6" className="object-cover" fill />
            <span className="absolute z-10 px-2 text-black">
              {`Delivery & After Sales Service`}
            </span>
          </div>

          {/* Step 6 description */}
          <div className="absolute top-[83%] left-[65%] text-left text-white flex items-center gap-2">
            <div className="relative flex items-center">
              <div className="w-12 h-[2px] bg-white"></div>
              <div className="w-2 h-2 bg-white rounded-full ml-1"></div>
            </div>
            <div>
              <p className="font-semibold text-sm">
                {`Delivery & After Sales Service`}
              </p>
              <p className="text-gray-300 text-xs max-w-[200px]">
               {` Innovative prototyping and iterative design processes.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
