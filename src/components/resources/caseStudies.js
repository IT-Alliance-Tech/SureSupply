import Image from "next/image";
import case1 from "../../../public/resources/dummyr1.png";
import case2 from "../../../public/resources/dummyr1.png";
import case3 from "../../../public/resources/dummyr1.png";
import case4 from "../../../public/resources/dummyr1.png";
import case5 from "../../../public/resources/dummyr1.png";
import case6 from "../../../public/resources/dummyr1.png";

const caseStudies = [
  {
    id: 1,
    title: "Streamlining Procurement with Smarter Workflows",
    image: case1,
    link: "#",
  },
  {
    id: 2,
    title: "Reducing Delivery Delays Through Efficient Logistics",
    image: case2,
    link: "#",
  },
  {
    id: 3,
    title: "Building Transparency Between Buyers and Suppliers",
    image: case3,
    link: "#",
  },
  {
    id: 4,
    title: "Driving Cost Savings with Smarter Purchasing Strategies",
    image: case4,
    link: "#",
  },
  {
    id: 5,
    title: "Digitally Transforming Traditional Supply Chains",
    image: case5,
    link: "#",
  },
  {
    id: 6,
    title: "Connecting Businesses Through Seamless Collaboration",
    image: case6,
    link: "#",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold font-outfit text-gray-900 mb-12">
          <span className="text-[#0A175C]">CASE</span>{" "}
          <span className="text-[#F05023]">STUDIES</span>
        </h2>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="aspect-square w-full mb-5 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-base font-semibold font-outfit text-[#0A175C] mb-2">
                {study.title}
              </h3>
              <a
                href={study.link}
                className="text-base text-orange-500 font-medium font-outfit inline-flex items-center gap-1 hover:underline"
              >
                Read More <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
