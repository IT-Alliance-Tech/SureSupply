"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ====== IMAGES ====== */
import bannerImg from "../../../public/bannerC.png"; // Banner Image
import catImg1 from "../../../public/solutions/dummy1.png";
import catImg2 from "../../../public/solutions/dummy1.png";
import catImg3 from "../../../public/solutions/dummy1.png";
import catImg4 from "../../../public/solutions/dummy1.png";
import catImg5 from "../../../public/solutions/dummy1.png";
import catImg6 from "../../../public/solutions/dummy1.png"; // Pressure category
import catImg7 from "../../../public/solutions/dummy1.png"; // Production/Review category
import postBgImg from "../../../public/bannerC.png";

/* ====== ICONS ====== */
import pointIcon from "../../../public/solutions/icon.svg";
import whyIcon from "../../../public/solutions/icon6.svg";
import highPressureIcon from "../../../public/solutions/icon1.svg";
import lowPressureIcon from "../../../public/solutions/icon2.svg";
import coldChamberIcon from "../../../public/solutions/icon3.svg";
import hotChamberIcon from "../../../public/solutions/icon4.svg";

export default function CapabilitiesContent() {
  const categories = [
    {
      id: "capabilities",
      title: "Capabilities",
      subtitle: "Capabilities of die casting services",
      content:
        "Sure Supply delivers high-quality die cast parts with exceptional accuracy and consistency. Our team ensures fast lead times and scalable production to meet the demands of both prototyping and full-scale manufacturing. We combine advanced technology with experienced operators to deliver parts that exceed expectations. From design review to finished components, every stage is optimized for efficiency and quality. Customers rely on us for precision, reliability, and innovative solutions that save time and cost.",
      img: catImg1,
    },
    {
      id: "processes",
      title: "Processes",
      subtitle: "Manufacturing & process capabilities",
      content:
        "Our manufacturing capabilities cover die-casting, CNC machining, welding, finishing, and full BOM services. Each process is designed to produce ready-to-assemble parts with full traceability and stringent process controls. We prioritize efficiency, quality, and flexibility to adapt to diverse project requirements. This ensures every component meets client specifications while maintaining competitive lead times. By integrating multiple processes under one roof, we simplify production workflows and reduce potential errors.",
      img: catImg2,
    },
    {
      id: "post-casting",
      title: "Post Casting",
      subtitle: "Inspection, finishing & assembly",
      content:
        "Post-casting operations at Sure Supply include automated inspection, deburring, secondary machining, and assembly. Our goal is to minimize lead times while maximizing first-pass yield. Each part undergoes detailed quality checks to ensure it meets exact tolerances. By integrating post-processing in-house, we maintain full control over production quality. Customers benefit from parts that are ready for immediate use or assembly, reducing downstream costs and delays.",
      img: catImg3,
    },
    {
      id: "standards",
      title: "Standards",
      subtitle: "Quality systems & certifications",
      content:
        "Our operations adhere to ISO 9001:2015 standards and follow industry best practices for repeatable quality and traceability. Every process is monitored to ensure compliance with client requirements. Documentation, certifications, and traceability are maintained throughout production. These systems allow us to deliver consistent results across all projects. Our clients trust us for compliance, quality assurance, and reliable delivery every time.",
      img: catImg4,
    },
    {
      id: "prototype",
      title: "Prototype",
      subtitle: "Rapid prototyping & tooling",
      content:
        "From early prototypes to pilot runs, Sure Supply helps validate designs quickly and efficiently. Low-volume tooling and rapid iterations ensure smooth production scaling. Our prototyping team collaborates closely with clients to refine designs and identify manufacturability improvements. Rapid prototyping reduces time-to-market while minimizing risk. Each prototype is tested for functionality and quality, ensuring readiness for full-scale production. This approach accelerates development without compromising precision or reliability.",
      img: catImg5,
    },
    {
      id: "pressure",
      title: "Pressure",
      subtitle: "Pressure capabilities",
      content:
        "Our high and low-pressure die casting processes ensure precision, consistency, and optimal mechanical properties across all components. Pressure parameters are carefully monitored to guarantee the best results for each part.",
      img: catImg6,
    },
    {
      id: "production",
      title: "Production",
      subtitle: "Production planning & scalability",
      content:
        "We manage full-scale production efficiently, with scalable processes to meet varying order volumes. Our production workflow ensures timely delivery without compromising quality or consistency.",
      img: catImg7,
    },
    {
      id: "review",
      title: "Review",
      subtitle: "Design & quality review",
      content:
        "Every design and finished component undergoes rigorous review to ensure compliance with specifications and customer expectations. Continuous feedback loops maintain high quality and process improvements.",
      img: catImg7,
    },
  ];

  const [active, setActive] = useState(categories[0].id);

// On first load — read URL hash (#processes) and set active accordingly
useEffect(() => {
  if (typeof window === "undefined") return;
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const found = categories.find((c) => c.id === hash);
  if (found) {
    setActive(found.id);
    // optional immediate scroll of the content area (covered below)
  }
}, []); // run once on mount

  const activeObj = categories.find((c) => c.id === active);

  const contentRef = useRef(null);

  // Scroll to top when category changes
  useEffect(() => {
  if (!contentRef.current) return;
  // Smooth scroll top of the content area
  contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
}, [active]);


  const whyChoosePoints = [
    "Tolerances as tight as ±0.003″",
    "Lead times as fast as 10–15 days for samples",
    "Over 4,000 material & finishing combinations",
    "Full-BOM services including CNC, welding, assembly",
    "Backed by ISO 9001:2015 certified quality management",
    "Certified alloys: Aluminum (ADC12, A380, A383, A390), Zinc (Zamak 3, Zamak 5), Magnesium (AZ91D)",
  ];

  const dieCastingTypes = [
    {
      icon: highPressureIcon,
      title: "High Pressure",
      description:
        "Ensures fine detail and dimensional accuracy, ideal for large-volume production.",
    },
    {
      icon: lowPressureIcon,
      title: "Low Pressure",
      description:
        "Provides superior mechanical properties and consistent wall thickness.",
    },
    {
      icon: coldChamberIcon,
      title: "Cold Chamber",
      description:
        "Suitable for aluminum and magnesium alloys requiring high strength.",
    },
    {
      icon: hotChamberIcon,
      title: "Hot Chamber",
      description:
        "Ideal for zinc and magnesium alloys with faster production cycles.",
    },
  ];

  return (
    <section className="flex flex-col font-outfit">
      {/* ================= HERO/BANNER SECTION ================= */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={bannerImg}
          alt="Capabilities Banner"
          fill
          priority
          className="object-cover object-left absolute inset-0 -z-10"
        />
        <div className="text-left text-white z-10 px-6 lg:px-24">
          <h1 className="text-[48px] font-bold tracking-wide mb-4 leading-tight">
            OUR <span className="text-white">CAPABILITIES</span>
          </h1>
          <div className="text-base font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#F05023]">/</span>
            <span className="text-[#F05023]">Our Capabilities</span>
          </div>
        </div>
      </section>

      {/* ================= MAIN CAPABILITIES CONTENT ================= */}
      <section className="bg-white py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-8 items-start">
            {/* Sidebar */}
            <aside className="col-span-1">
              <div className="p-4 bg-white rounded-2xl shadow-lg">
                <div className="bg-[#F05023] text-white px-3 py-2 rounded-md font-semibold mb-4">
                  Capabilities Category
                </div>
                <nav className="flex flex-col space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActive(cat.id)}
                      className={`flex items-center text-[#0A175C] justify-between w-full text-left px-3 py-3 rounded-md transition-all ${
                        active === cat.id
                          ? "bg-[#FFF8F6] border border-[#F05023] text-[#F05023] font-semibold"
                          : "hover:bg-[#F05023] hover:text-white"
                      }`}
                    >
                      <span className="text-sm">{cat.title}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          active === cat.id ? "rotate-90 text-[#F05023]" : "text-[#F05023]"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main
              id={activeObj.id}             // <-- add this if you want scrollIntoView to find it
              ref={contentRef}
              className="col-span-1 md:col-span-1 flex flex-col gap-12 overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 150px)" }}
            >
              {/* Active Image */}
              <div className="w-full relative h-[360px] flex-shrink-0">
                <Image
                  src={activeObj.img}
                  alt={activeObj.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Active Text */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A175C]">
                  {activeObj.title.toUpperCase()}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                  {activeObj.content}
                </p>
              </div>

              {/* ================= WHY CHOOSE SECTION ================= */}
              <section>
                <h4 className="text-[30px] font-bold text-[#0A175C] mb-4">
                  WHY CHOOSE <span className="text-[#F05023]">SURE SUPPLY</span>
                </h4>
                <div className="flex flex-col gap-3 text-[18px] text-[#0A175C]">
                  {whyChoosePoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center shrink-0">
                        <Image src={pointIcon} alt="point icon" width={24} height={24} />
                      </div>
                      <div className="text-[#0A175C]">{point}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ================= DIE CASTING TYPES ================= */}
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dieCastingTypes.map((type, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0E1B4D] text-white rounded-2xl p-6 flex flex-col items-start shadow-lg"
                  >
                    <Image src={type.icon} alt={type.title} width={48} height={48} className="mb-4" />
                    <h3 className="text-[18px] font-semibold mb-1">{type.title}</h3>
                    <p className="text-gray-300 text-sm">{type.description}</p>
                  </div>
                ))}
              </section>

              {/* ================= POST CASTING & RELIABLE QUALITY ================= */}
              <section className="space-y-12">
                <div
                  className="relative text-white p-10 rounded-2xl shadow-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${postBgImg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-6">
                      Post <span className="font-bold text-white">Casting</span>
                    </h3>
                    <ul className="space-y-4 text-gray-200">
                      <li className="flex items-start gap-3">
                        <Image src={whyIcon} alt="icon" width={20} height={20} />
                        <p>CNC Machining (5-axis, Wire EDM, Graphite Machining)</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Image src={whyIcon} alt="icon" width={20} height={20} />
                        <p>Assembly Services: Welding, installation, and component integration</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Image src={whyIcon} alt="icon" width={20} height={20} />
                        <p>3D Scanning & Reverse Engineering for validation and refinement</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <Image src={whyIcon} alt="icon" width={20} height={20} />
                        <p>
                          {`Surface Finishing Options:`}{" "}
                          <span className="font-semibold">Anodizing, Powder</span> Coating, Chem
                          {`Film, Plating (Nickel, Copper, Gold, Silver, Titanium Blue, Cadmium),
                          Tumbling, Polishing`}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-[30px] font-semibold mb-4">
                    <span className="text-[#0A175C] font-bold">RELIABLE</span>
                    <span className="text-[#F15A29] font-bold">DIE CASTING QUALITY</span>
                  </h2>

                  <p className="text-[#0A175C] leading-relaxed mb-8">
                    {`At Sure Supply, we follow the highest global standards to ensure reliability and
                    consistency in every die cast part. Our facilities are ISO 9001:2015 certified,
                    guaranteeing strict quality management throughout the production cycle. We adhere
                    to defined surface roughness specifications (Ra, Rz) for precision finishing and
                    conduct rigorous inspection and testing procedures, including CMM, X-Ray,
                    salt-spray, and hardness testing. All materials are RoHS compliant, with detailed
                    composition reports provided for transparency. To maintain complete quality
                    assurance, every order is delivered with a comprehensive inspection report.`}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="w-auto border border-[#F15A29] text-[#F15A29] px-2 py-2 rounded-md text-sm font-medium hover:bg-[#F15A29] hover:text-white transition-all">
                      Download Cosmetic Standards PDF
                    </button>
                    <button className="w-auto border border-[#F15A29] text-[#F15A29] px-3 py-2 rounded-md text-sm font-medium hover:bg-[#F15A29] hover:text-white transition-all">
                      Access Supplier’s Handbook
                    </button>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </section>
  );
}
