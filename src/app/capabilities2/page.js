"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ====== IMAGES ====== */
import bannerImg from "../../../public/bannerC.png";
import main1 from "../../../public/dummy3.png";
import main2 from "../../../public/dummy3.png";

/* Subcategory images */
import sub1 from "../../../public/dummy3.png";
import sub2 from "../../../public/dummy3.png";
import sub3 from "../../../public/dummy3.png";
import sub4 from "../../../public/dummy3.png";
import sub5 from "../../../public/dummy3.png";
import sub6 from "../../../public/dummy3.png";
import sub7 from "../../../public/dummy3.png";
import sub8 from "../../../public/dummy3.png";
import sub9 from "../../../public/dummy3.png";
import sub10 from "../../../public/dummy3.png";

/* ICONS */
import pointIcon from "../../../public/icon.svg";

export default function CapabilitiesPage() {
  const contentRef = useRef(null);

  const categories = [
    {
      id: "casting",
      title: "Casting",
      img: main1,
      content: `
        <h2 class="text-2xl font-semibold text-[#0A175C] mb-4">
          Our Trusted Partner for Precision Casting Solutions
        </h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Our casting division is where innovation meets execution. We combine cutting-edge engineering,
          deep metallurgical knowledge, and advanced manufacturing to deliver components that consistently
          meet the highest quality standards.
        </p>
        <h3 class="text-xl font-semibold text-[#0A175C] mb-3">
          From Concept to Completion: Our End-to-End Solutions
        </h3>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          We handle everything from initial design and pattern development to advanced simulations, meticulous finishing,
          and thorough inspection. Every casting method is carefully chosen based on your project's unique requirements —
          considering geometry, mechanical strength, desired surface finish, and cost-effectiveness — to guarantee optimal
          performance for every application.
        </p>
        <h3 class="text-xl font-semibold text-[#0A175C] mb-3">
          More Than Just Parts: We Engineer Solutions
        </h3>
        <p class="text-gray-700 text-base leading-relaxed">
          We don't just manufacture parts; we engineer comprehensive solutions. From your first design consultation
          to the final inspection, we ensure your components seamlessly integrate into your production line, empowering your success.
        </p>
      `,
      subs: [
        {
          id: "casting-high",
          title: "High Pressure Die Casting (HPDC)",
          img: sub1,
          content:
            "High-Pressure Die Casting stands as our premier manufacturing method for the most demanding applications, offering an unparalleled combination of speed, precision, and the ability to produce components of exceptional quality. This sophisticated process involves the rapid injection of molten metal into a meticulously engineered, robust steel die under immense pressure, typically ranging from 700 to 2500 bar . This high-pressure injection ensures that the molten metal completely fills even the most intricate cavities of the die before solidifying, leading to components with superior structural integrity and highly accurate dimensions",
          advantages: [
            { title: "Exceptional Accuracy:", desc: "Our HPDC process delivers components with remarkable dimensional accuracy and tight tolerances, often eliminating the need for subsequent machining. This streamlines manufacturing, reduces costs, and ensures precise fit and function." },
            { title: "Superior Surface Finish", desc: " HPDC parts boast an excellent, ready-to-use surface finish, requiring minimal to no post-processing for aesthetics. This enhances visual appeal and product quality, especially for coated or painted applications." },
            { title: "Thin-Wall Expertise:", desc: "We excel in creating intricate, thin-walled components without compromising strength. This is crucial for lightweighting in automotive and aerospace, offering greater design freedom and complex geometries." },
            { title: "High Production Volumes and Cost-Effectiveness:", desc: "HPDC is ideal for mass production due to rapid cycle times and durable dies. This efficiency, combined with reduced material waste and minimal post-processing, makes it a highly cost-effective solution." },
            { title: "Enhanced Mechanical Properties:", desc: "The rapid solidification inherent in HPDC results in a fine-grained microstructure, leading to superior strength-to-weight ratios and improved mechanical properties, crucial for high-performance applications." },
            
          ],
          expertise: [
            "Large Part Capability: We produce aluminum and zinc alloy HPDC parts up to 20 kg, meeting a wide range of industrial needs.",
            "Integrated Tooling: Our in-house capabilities include multi-cavity die design and precise tool manufacturing, ensuring optimal performance and longevity.",
            "Advanced Automation: Our automated die casting cells feature robotic metal pouring for consistent quality, increased efficiency, and reduced human error.",
            "Superior Part Integrity: We utilize advanced die temperature control and vacuum-assisted systems to minimize porosity and enhance the structural integrity of your components.",
            "Complete Post-Casting Services: Beyond casting, we offer a full suite of services including precise trimming, advanced CNC machining, various surface treatments, and rigorous leak testing to deliver ready-to-use parts.",
          ],
        },
        {
          id: "casting-low",
          title: "Low Pressure Casting",
          img: sub2,
          content:
            "Suresupply specializes in Low-Pressure Die Casting (LPDC), a sophisticated manufacturing process that ensures high-quality components for demanding applications. LPDC minimizes turbulence and gas porosity through a controlled, low-pressure mold filling, resulting in superior metallurgical integrity, fine-grained microstructures, and enhanced strength and ductility. This method also allows for complex geometries, tight tolerances, and excellent surface finishes, often reducing the need for post-casting machining. Suresupply's LPDC capabilities produce lighter, thinner-walled components without compromising mechanical properties, benefiting industries like automotive, aerospace, industrial machinery, and consumer goods. We are committed to partnering with clients to create high-performance components from innovative designs.",
          advantages: [
            { title: "Superior Metallurgical Integrity", desc: "Our controlled low-pressure filling minimizes porosity and turbulence, yielding castings with fine grain, fewer defects, and enhanced strength, ductility, and fatigue resistance for critical applications." },
            { title: "Excellent Surface Finish & Dimensional Accuracy", desc: "Gentle, consistent filling and controlled solidification produce exceptional surface finishes and tight tolerances, often eliminating post-casting machining and saving costs." },
            { title: "Complex Geometries & Thin Walls", desc: "Our LPDC allows intricate designs, including thin walls, without compromising mechanical properties, offering design freedom and lightweight part production." },
             { title: "Optimized Material Yield & Cost-Effectiveness", desc: "Efficient, controlled filling ensures high material yield and low scrap, combined with minimal secondary machining, making our LPDC a highly cost-effective solution." },
              { title: "Versatility for Demanding Applications:", desc: "Our LPDC is ideal for critical components in automotive (wheels, engine blocks), aerospace, industrial, and consumer goods sectors, where quality, performance, and reliability are paramount." },
          ],
          expertise: [
            "Automated Pressure Control: Ensures consistent, high-quality castings with superior mechanical properties and surface finish.",
            "Process Simulation and Solidification Analysis: Optimizes design, predicts defects, and refines molds to save time and cost.",
            "Inline Degassing and Filtration Systems: Provides cleaner, stronger, and more reliable parts with enhanced fatigue resistance.",
             "Process Automation: Increases productivity, reduces cycle times, and ensures consistent quality.",
              "Comprehensive Quality Assurance: Heat treatment, X-ray inspection, and dimensional validation ensure defect-free, high-performance components.",
          ],
        },
        {
          id: "casting-cold",
          title: "Gravity Die Casting (GDC)",
          img: sub3,
          content:
            "Suresupply offers Gravity Die Casting (GDC), also known as Permanent Mold Casting, as a cost-efficient and high-quality solution for medium-volume production. This process uses gravity to fill reusable molds, typically with non-ferrous alloys like aluminum, resulting in parts with excellent mechanical properties, improved surface finish, enhanced dimensional accuracy, and reduced porosity. GDC balances the tooling costs of pressure die casting and the slower cycle times of sand casting, making it economical for medium volumes. Suresupply's GDC capabilities include design flexibility, material versatility, and environmental benefits due to reusable molds. Their process is meticulously managed from design to delivery, utilizing advanced facilities and a skilled team for mold design, alloy selection, process optimization, and rigorous quality control. Suresupply aims to provide high-performance, cost-effective solutions for various industries.",
          advantages: [
            { title: "Optimized for Medium-Volume Production: ", desc: "GDC bridges the gap between low-volume sand casting and high-volume pressure die casting. It’s the perfect choice when you require consistent quality and performance for production runs that don't justify the higher tooling costs of pressure die casting, yet demand more precision than sand casting can offer." },
            { title: "Enhanced Mechanical Strength:", desc: " GDC produces components with significantly improved mechanical properties. The controlled solidification process leads to a finer grain structure, resulting in parts that are stronger, more durable, and better able to withstand demanding operational environments." },
            { title: "Superior Dimensional Consistency:", desc: "Achieve tighter tolerances and exceptional part-to-part uniformity with our GDC process. The robust, permanent molds resist deformation, ensuring that each component precisely matches your specifications, reducing the need for costly post-machining and improving assembly efficiency." },
            { title: "Cost-Effective Quality:", desc: "While offering significant advantages in strength and consistency, GDC remains a cost-effective manufacturing method for the right applications. Its efficient cycle times and reduced scrap rates contribute to a competitive overall cost per part, delivering excellent value for your investment." },
            { title: "Design Flexibility and Material Versatility: ", desc: "GDC offers considerable design freedom, allowing for complex geometries and intricate features. We work with a wide range of non-ferrous alloys, including various grades of aluminum and copper, enabling us to select the optimal material for your specific application's performance requirements." },
          ],
          expertise: [
            "Advanced Alloy Castings: Specializing in aluminum, copper, and brass, we deliver components with superior strength, conductivity, and corrosion resistance.",
            "Versatile Casting Processes: We offer both manual and semi-automatic tilt-pour setups, optimizing production for various volumes and complexities.",
            "Versatile Casting Processes: We offer both manual and semi-automatic tilt-pour setups, optimizing production for various volumes and complexities.",
            "Controlled Cooling for Optimal Performance: Advanced controlled cooling methods (water channels, air jets) precisely manage solidification, minimizing defects and enhancing mechanical properties for consistent quality.",
            "Comprehensive Post-Casting Services: We offer precision machining, shot blasting, rigorous pressure testing, and various finishing options, simplifying your supply chain for ready-to-use components.",
          ],
        },
        {
          id: "casting-hot",
          title: "Investment Casting (Lost Wax Process)",
          img: sub4,
          content:
            "Suresupply specializes in Investment Casting, a precise manufacturing process for creating intricate and detailed components with tight tolerances and superior surface finishes. The process involves creating a wax pattern, coating it with ceramic to form a mold, melting away the wax, pouring molten metal into the mold, and then breaking away the ceramic to reveal the cast component. This technique is suitable for complex geometries and is used in various industries like aerospace, medical, automotive, and industrial. Benefits of choosing Suresupply include exceptional detail and complexity, superior surface finish, tight tolerances, wide material versatility, and cost-effectiveness for complex parts. Suresupply is dedicated to providing high-quality, reliable components through its advanced Investment Casting capabilities.",
          advantages: [
            { title: "Unrivaled Precision", desc: "Achieve intricate designs and geometries that are often impossible with other manufacturing methods. Our process ensures consistent dimensional accuracy, reducing the need for costly post-machining." },
            { title: "Exceptional Surface Finish", desc: "Investment casting delivers a remarkably smooth surface finish, minimizing additional finishing operations and enhancing the aesthetic appeal and functionality of your components." },
            { title: "Broad Material Versatility", desc: "We work with a diverse range of high-performance metals, including: Stainless Steel (superior corrosion resistance and strength), Alloy Steel (hardness, toughness, and wear resistance) and Superalloys (extreme temperature and stress conditions)" },
            { title: "Optimized Performance", desc: "The inherent precision of investment casting results in components that consistently meet the highest standards of quality and performance, reducing failure rates and extending product lifecycles." },
            { title: "Cost-Effectiveness for Complex Parts", desc: "While offering high precision, investment casting can be highly cost-effective for producing complex parts, especially those that would require extensive machining if manufactured by other methods. This reduces material waste and labor costs." },
          ],
          expertise: [
            "Aerospace: Manufacturing critical components for aircraft engines, structural parts, and control systems where precision and reliability are paramount.",
            "Valves: Producing intricate valve bodies, impellers, and other fluid control components for industrial, oil & gas, and process engineering sectors.",
            "Medical Instruments: Creating highly precise and sterile components for surgical tools, implants, and diagnostic equipment, adhering to stringent industry standards.",
            "Automotive: Developing complex engine components, turbocharger parts, and other critical elements for high-performance and specialty vehicles.",
            "General Industrial: Fabricating custom parts for machinery, robotics, and other industrial equipment requiring durability and precision.",
          ],
        },
        {
          id: "casting-precision",
          title: "Precision Casting",
          img: sub5,
          content:
            "Precision casting ensures complex geometry production with superior accuracy and minimal post-processing.",
          advantages: [
            { title: "Complex Shapes", desc: "Accurate reproduction of intricate details." },
            { title: "Smooth Surface", desc: "Reduced need for finishing operations." },
            { title: "Dimensional Accuracy", desc: "Perfect for critical components." },
          ],
          expertise: [
            "Expertise in thin-wall casting.",
            "Custom gating systems for precision fill.",
            "In-house simulation for mold optimization.",
          ],
        },
      ],
    },
    {
      id: "processes",
      title: "Processes",
      img: main2,
      content:
        "Our process portfolio includes CNC machining, welding, finishing, and in-line inspection. We combine automation and advanced tooling to ensure accuracy and efficiency.",
      subs: [
        {
          id: "process-cnc",
          title: "CNC Machining",
          img: sub6,
          content: "Multi-axis CNC machining for tight tolerances and complex geometries.",
          advantages: [
            { title: "High Precision", desc: "Achieves tight tolerances for complex parts." },
            { title: "Smooth Finish", desc: "Excellent surface quality." },
            { title: "Repeatable Accuracy", desc: "Consistent results across batches." },
          ],
          expertise: [
            "CNC 3, 4 & 5-axis machining centers.",
            "In-process inspection systems.",
            "Expert operators for custom machining.",
          ],
        },
        {
          id: "process-finishing",
          title: "Surface Finishing",
          img: sub7,
          content:
            "Surface finishing enhances durability and appearance through anodizing, coating, or polishing.",
          advantages: [
            { title: "Corrosion Resistance", desc: "Improves longevity of parts." },
            { title: "Aesthetic Appeal", desc: "Polished, consistent visual quality." },
            { title: "Functional Protection", desc: "Resists wear and environmental impact." },
          ],
          expertise: [
            "Powder coating and anodizing lines.",
            "Quality checks for uniformity and color tone.",
            "Surface inspection and finish validation.",
          ],
        },
        {
          id: "process-welding",
          title: "Welding Process",
          img: sub8,
          content:
            "Welding ensures robust structural joints and seamless integration between components.",
          advantages: [
            { title: "Strong Joints", desc: "High mechanical strength." },
            { title: "Precise Control", desc: "Minimized heat distortion." },
            { title: "Versatile Process", desc: "Compatible with various alloys." },
          ],
          expertise: [
            "MIG, TIG, and robotic welding setups.",
            "Certified operators for consistent quality.",
            "Comprehensive inspection after welding.",
          ],
        },
        {
          id: "process-inspection",
          title: "Inspection Process",
          img: sub9,
          content:
            "Rigorous inspection ensures every part meets global standards with CMM and NDT testing.",
          advantages: [
            { title: "100% Accuracy", desc: "Dimensional validation for all parts." },
            { title: "Defect Detection", desc: "CMM, X-ray, and visual checks." },
            { title: "Quality Assurance", desc: "Meets ISO 9001:2015 compliance." },
          ],
          expertise: [
            "In-house CMM & NDT testing.",
            "Material composition verification.",
            "Detailed inspection reports per batch.",
          ],
        },
        {
          id: "process-assembly",
          title: "Assembly Services",
          img: sub10,
          content:
            "End-to-end assembly services ensure smooth integration and delivery-ready components.",
          advantages: [
            { title: "Efficiency", desc: "Streamlined workflow and reduced lead time." },
            { title: "Consistency", desc: "Precision alignment and torque control." },
            { title: "Traceability", desc: "Full BOM and production tracking." },
          ],
          expertise: [
            "Sub-assembly integration.",
            "Fixture-based quality checks.",
            "Lean production methods for reliability.",
          ],
        },
      ],
    },
  ];

  const [activeMain, setActiveMain] = useState(categories[0].id);
  const [openMain, setOpenMain] = useState(categories[0].id);
  const [activeSub, setActiveSub] = useState(null);

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [activeMain, activeSub]);

  const activeMainObj = categories.find((c) => c.id === activeMain);
  const activeSubObj = activeMainObj?.subs.find((s) => s.id === activeSub);

  /* ====== SUBCATEGORY LAYOUT ====== */
  const renderSubcategoryContent = (mainItem, subItem) => (
    <div className="flex flex-col gap-10">
      {/* IMAGE */}
      <div className="relative w-full h-[360px] rounded-2xl overflow-hidden">
        <Image src={subItem.img} alt={subItem.title} fill className="object-cover rounded-2xl" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">{subItem.title}</h2>
        </div>
      </div>

      {/* PARAGRAPH */}
      <p className="text-gray-700 text-base leading-relaxed">{subItem.content}</p>

      {/* KEY ADVANTAGES */}
      <section className="py-10 px-6">
  <h3 className="text-[16px] font-semibold text-[#0A175C] mb-6 text-center">Key Advantages</h3>
  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
    {subItem.advantages.map((adv, i) => (
      <div
        key={i}
        className="bg-[#0A175C] text-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
      >
        <h4 className="text-[16px] font-bold text-[#F05023] mb-2">{adv.title}</h4>
        <p className="text-[16px] text-gray-200">{adv.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* OUR EXPERTISE */}
      <section>
  <h3 className="text-[18px] font-bold text-[#0A175C] mb-5">Our Expertise</h3>

  <div className="bg-[#F9F9F9] border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
    <ul className="space-y-3">
      {subItem.expertise.map((point, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-[#0A175C] text-[16px] leading-relaxed hover:translate-x-[2px] transition-transform duration-200"
        >
          <Image
            src={pointIcon}
            alt="point"
            width={18}
            height={18}
            className="mt-1"
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
</section>


      {/* RELIABLE DIE CASTING QUALITY */}
      <section className="bg-[#F7FAFF] border border-[#E1E8F0] rounded-2xl py-16 px-8 shadow-md mt-10">
  <h2 className="text-[30px] font-semibold mb-6 text-left">
    <span className="text-[#0A175C] font-bold">RELIABLE </span>
    <span className="text-[#F15A29] font-bold">DIE CASTING QUALITY</span>
  </h2>

  <p className="text-[#0A175C] leading-relaxed mb-10 text-left max-w-4xl mx-auto text-[16px]">
    At Sure Supply, we follow the highest global standards to ensure reliability and consistency in every die cast part. 
    Our facilities are ISO 9001:2015 certified, guaranteeing strict quality management throughout the production cycle. 
    We adhere to defined surface roughness specifications (Ra, Rz) for precision finishing and conduct rigorous inspection 
    and testing procedures, including CMM, X-Ray, salt-spray, and hardness testing.
  </p>

  <div className="flex flex-wrap justify-left gap-6">
    <button className="border border-[#F15A29] text-[#F15A29] px-4 py-3 rounded-md text-sm font-medium hover:bg-[#F15A29] hover:text-white transition-all duration-300">
      Download Cosmetic Standards PDF
    </button>
    <button className="border border-[#F15A29] text-[#F15A29] px-4 py-3 rounded-md text-sm font-medium hover:bg-[#F15A29] hover:text-white transition-all duration-300">
      Access Supplier’s Handbook
    </button>
  </div>
</section>

    </div>
  );

  /* ====== MAIN CATEGORY ====== */
  const renderMainContent = (item) => (
    <div className="flex flex-col gap-6 group transition-all duration-500">
  {/* Image with hover zoom + glow */}
  <div className="relative h-[360px] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
    <Image
      src={item.img}
      alt={item.title}
      fill
      className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
    />
  </div>

  {/* Title with subtle underline on hover */}
  <h3 className="text-[40px] font-bold text-[#0A175C] relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#F05023] after:transition-all after:duration-500 group-hover:after:w-full">
    {item.title}
  </h3>

  {/* Content with soft color and fade */}
  <div
    className="text-[16px] leading-relaxed text-[#1A2A6C] space-y-4 transition-all duration-300 group-hover:text-[#0A175C]"
    dangerouslySetInnerHTML={{ __html: item.content }}
  ></div>
</div>


  );

  return (
    <section className="flex flex-col font-outfit">
      {/* HERO */}
      <section className="relative w-full min-h-[620px] flex items-center justify-center overflow-hidden pt-[100px] pb-[60px]">
        <Image src={bannerImg} alt="Capabilities Banner" fill priority className="object-cover object-left absolute inset-0 -z-10" />
        <div className="relative text-left text-white z-10 px-6 lg:px-24 max-w-[1200px]">
          <h1 className="text-[42px] sm:text-[48px] font-bold tracking-wide mb-4 leading-tight drop-shadow-md">
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

      {/* MAIN SECTION */}
      <section className="bg-white py-10 lg:py-16">
        <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-[2.7fr_7.3fr] gap-8 items-start">
            {/* SIDEBAR */}
           <aside className="hidden lg:block col-span-1">
  <div className="p-4 bg-white rounded-2xl shadow-lg">
    <div className="bg-[#F05023] text-white px-3 py-2 rounded-md font-semibold mb-4">
      Capabilities Category
    </div>
    <nav className="flex flex-col space-y-1">
      {categories.map((cat) => (
        <div key={cat.id}>
          {/* MAIN CATEGORY BUTTON */}
          <button
            onClick={() =>
              setOpenMain(openMain === cat.id ? null : cat.id) // toggle open/close
            }
            className={`flex items-center justify-between w-full text-left px-3 py-3 rounded-md transition-all ${
              activeMain === cat.id && !activeSub
                ? "bg-[#FFF8F6] border border-[#F05023] text-[#F05023] font-semibold"
                : "hover:bg-[#F05023] hover:text-white text-[#0A175C]"
            }`}
          >
            <span className="text-sm">{cat.title}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${
                openMain === cat.id ? "rotate-90 text-[#F05023]" : "text-[#F05023]"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* SUBCATEGORY DROPDOWN */}
          {openMain === cat.id && (
            <div className="ml-4 mt-2 flex flex-col space-y-1">
              {cat.subs.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => {
                    setActiveMain(cat.id);
                    setActiveSub(sub.id);
                  }}
                  className={`text-sm text-left px-3 py-2 rounded-md transition-all ${
                    activeSub === sub.id
                      ? "bg-[#F05023] text-white font-medium"
                      : "hover:bg-[#F05023] hover:text-white text-[#0A175C]"
                  }`}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  </div>
</aside>


            {/* CONTENT */}
            <main
              ref={contentRef}
              className="col-span-1 flex flex-col gap-10 overflow-y-auto pr-2"
              style={{ maxHeight: "calc(100vh - 150px)" }}
            >
              {activeSub && activeMainObj && activeSubObj
                ? renderSubcategoryContent(activeMainObj, activeSubObj)
                : renderMainContent(activeMainObj)}
            </main>
          </div>
        </div>
      </section>
    </section>
  );
}
