"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";


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
          title: "Sand Casting",
          img: sub5,
          content:
            "Suresupply specializes in sand casting, a versatile and cost-effective manufacturing process. This method, which involves creating detailed sand molds around a pattern, allows them to produce a diverse range of components for various industries. They handle projects of all complexities and scales, working with a wide array of ferrous and non-ferrous metals like iron, steel, aluminum, and various alloys. The process starts with designing a pattern, creating a sand mold, pouring molten metal, and then breaking away the mold to reveal the casting, which undergoes further processing. Sand casting offers advantages such as low tooling costs and the ability to produce complex geometries and large components with excellent mechanical properties, making it essential for industries like automotive, aerospace, and heavy machinery. Suresupply's commitment to advanced technology and quality ensures its leadership in providing reliable, high-performance cast components.",
          advantages: [
            { title: "Unmatched Versatility", desc: "From intricate, small-batch components demanding exceptional detail to robust, heavy-duty parts engineered for significant loads, our sand casting process adapts to your exact specifications." },
            { title: "Economical Production", desc: "Sand casting stands out as one of the most budget-friendly casting methods, particularly beneficial for businesses seeking to optimize production costs without compromising on quality or performance." },
            { title: "Design Freedom", desc: "We embrace design innovation. Our sand casting process allows for flexible design modifications, enabling us to collaborate closely with your engineering teams to refine and perfect component geometries" },
            { title: "Broad Material Compatibility", desc: " We work with an extensive range of materials, including almost all ferrous and non-ferrous alloys. This broad compatibility ensures we can select the optimal material for your specific application, guaranteeing durability and peak performance." },
            { title: "Ability to Produce Large Components:", desc: "Sand casting is exceptionally well-suited for manufacturing very large and heavy components that would be challenging or impossible to produce with other casting methods. " },
          ],
          expertise: [
  "Advanced Molding Facilities: State-of-the-art green sand, resin-bonded, and shell molding setups deliver high-quality castings with excellent finish and accuracy.",
  "In-House Tooling: Our in-house pattern and core box manufacturing ensures precision, durability, and shorter lead times.",
  "Versatile Production: Foundries handle castings from 0.5 kg to 500 kg, supporting diverse industrial requirements.",
  "Integrated Quality Assurance: In-house fettling, heat treatment, and inspection ensure every casting meets strict standards.",
  "Precision Finishing: From CNC machining to surface finishing, we deliver ready-to-assemble, high-performance components.",
]

        },
      ],
    },
    {
  id: "processes",
  title: "Forging",
  img: main2,
  content: `
    <p class="mb-4">
      At <strong>Suresupply</strong>, our forging division represents the forefront of metallurgical innovation — combining precision, strength, and cutting-edge forming technology. We produce high-performance, defect-free components engineered for demanding industries like aerospace, automotive, and power generation.
    </p>
    <p class="mb-4">
      Our advanced forging processes refine grain structures to enhance tensile strength, ductility, and fatigue resistance — delivering longer service life and reliability under extreme conditions.
    </p>
    <p class="mb-4">
      We offer end-to-end solutions, from CAD/CAM-based die design and billet preparation to open-die, closed-die, and impression die forging. Post-forging, our heat treatment and precision machining ensure exact tolerances and superior surface finish.
    </p>
    <p>
      More than a manufacturer, we are your engineering partner — providing integrated, ready-to-use solutions that minimize downtime and maximize performance.
    </p>
  `,
      subs: [
        {
          id: "process-cnc",
          title: "Open Die Forging",
          img: sub6,
          content: "At Suresupply, our open die forging process is designed for precision, strength, and reliability. By shaping heated metal between open-faced dies, we achieve superior structural integrity, optimized grain flow, and exceptional mechanical performance.  This method is ideal for producing large, high-strength components such as shafts, rings, blocks, and discs used in heavy machinery, aerospace, and power generation.  We work with a wide range of steels and alloys, tailoring each forging to meet exact performance and durability requirements.",
          advantages: [
            { title: "Ideal for Large & Custom Components", desc: "Open die forging shapes heated metal using flat dies, making it ideal for large or custom components like shafts, rings, and blocks used in heavy machinery, power generation, and aerospace." },
            { title: " Superior Internal Grain Structure & Mechanical Properties", desc: "Open die forging’s controlled deformation refines grain flow, removes internal defects, and enhances strength, toughness, and fatigue resistance — ensuring reliability for components under extreme stress." },
            { title: "Cost-Effective for Low Volumes & Prototypes", desc: "Open die forging is ideal for prototypes and large or specialized parts, offering cost savings through simple tooling and flexibility for design changes without major retooling costs." },
             { title: " Enhanced Material Integrity and Reliability", desc: "Open die forging thoroughly works the metal to remove internal defects and achieve full densification, resulting in parts with superior structural integrity and uniform properties — essential for critical, high-reliability applications." },
              { title: " Versatility Across Material Types", desc: "Open die forging offers exceptional versatility, accommodating a wide range of materials including carbon steel, alloy steel, stainless steel, and superalloys. Its adaptability makes it ideal for industries requiring specialized materials and high-performance components." },
          ],
          expertise: [
    "Heavy-Duty Forging for large, high-strength components.",
    "Material versatility — carbon steel, alloy steel, stainless, and copper alloys.",
    "Precision forming with computer-controlled hydraulic presses.",
    "Ultrasonic and magnetic particle inspection for superior integrity.",
    "End-to-end solutions including heat treatment and rough machining.",
    "CNC 3, 4 & 5-axis machining centers for complex geometries.",
    "In-process inspection and expert machining support."
  ],
        },
        {
          id: "process-finishing",
          title: "Closed Die Forging",
          img: sub7,
          content:
            "At SureSupply, we specialize in precision Closed Die Forging — a process that combines advanced engineering with exceptional control. Using multi-part dies with pre-cut cavities, heated metal billets are pressed under immense force to achieve exact shapes and dimensions. This method ensures superior grain flow alignment, resulting in components with outstanding strength, fatigue resistance, and dimensional accuracy. Our closed die forgings serve critical applications across automotive, aerospace, and defense industries — where reliability and precision are non-negotiable.",
          advantages: [
  {
    title: "Enhanced Strength & Durability",
    desc: "Refined grain flow increases tensile strength, fatigue resistance, and toughness for high-performance applications.",
  },
  {
    title: "High Dimensional Accuracy",
    desc: "Precisely machined dies ensure tight tolerances, consistent repeatability, and reduced need for post-machining.",
  },
  {
    title: "Optimal Material Utilization",
    desc: "Near-net-shape forging minimizes waste and reduces overall production costs.",
  },
  {
    title: "Superior Surface & Integrity",
    desc: "Produces dense, defect-free parts with excellent surface finish and uniform structure.",
  },
  {
    title: "Cost-Effective for Volume Production",
    desc: "Ideal for medium to high-volume runs due to high efficiency and minimal rework requirements.",
  },
],

          expertise: [
  "Precision forgings up to 50 kg with exceptional dimensional accuracy.",
  "Advanced die design using CAD/CAE tools for precise simulation and optimization.",
  "High-speed friction screw and hydraulic presses for efficient, consistent production.",
  "Flashless and near-net-shape forging techniques to minimize waste and rework.",
  "Complete finishing solutions including machining, trimming, and surface finishing.",
],

        },
        {
          id: "process-welding",
          title: "Upset Forging",
          img: sub8,
          content:
            "At Suresupply, we leverage the advanced technique of Upset Forging as a cornerstone of our manufacturing process. This sophisticated method is absolutely crucial for the creation of high-strength, meticulously shaped metal components that meet the most rigorous industry standards. Our process begins with the careful heating of specialized metal stock to a precisely controlled temperature. Once heated, the metal is subjected to expert compression, a process that strategically increases its cross-sectional area in specific regions. This controlled deformation, known as upsetting, allows us to achieve superior material properties, including enhanced grain flow and improved resistance to fatigue and impact. ",
          advantages: [
  {
    title: "Superior Grain Flow & Strength",
    desc: "Enhanced grain alignment boosts tensile strength, impact resistance, and fatigue life for long-lasting performance.",
  },
  {
    title: "Reduced Material Waste",
    desc: "Near-net-shape forging minimizes flash and scrap, optimizing material use and lowering production costs.",
  },
  {
    title: "Ideal for Complex Geometries",
    desc: "Perfect for parts with flanges, heads, or thickened sections like shafts and valves requiring high precision.",
  },
  {
    title: "Excellent Surface & Accuracy",
    desc: "Controlled deformation delivers smooth surfaces and tight tolerances, reducing post-machining needs.",
  },
  {
    title: "High-Volume Efficiency",
    desc: "Rapid cycle times and repeatable results make upset forging highly cost-effective for mass production.",
  },
],

          expertise: [
  "Automated multi-station upset forging machines for strong, reliable components.",
  "High-speed forging for bolts, studs, and axles ensuring precision and efficiency.",
  "Optimized grain flow techniques enhancing material strength and durability.",
  "In-house thread rolling, machining, and advanced surface finishing capabilities.",
  "Comprehensive heat treatment and mechanical testing for consistent quality assurance.",
],

        },
        {
          id: "process-inspection",
          title: "Rolled Forging (Ring Rolling)",
          img: sub9,
          content:
            "At SureSupply, our expertise in Ring Rolling (Rolled Forging) enables the production of high-performance seamless rings for critical applications. This process precisely shapes a preformed ring between specialized dies, expanding its diameter and refining its grain structure. The result is exceptional strength, uniformity, and dimensional accuracy. Unlike welded or cut rings, our rolled forgings eliminate weak points, ensuring superior fatigue resistance and reliability—making them ideal for demanding industrial applications.",
          advantages: [
  { 
    title: "Optimized Grain Structure", 
    desc: "Rolled forging refines grain flow for superior strength, impact toughness, and fatigue resistance." 
  },
  { 
    title: "Seamless Integrity", 
    desc: "Eliminates weak points and weld defects for unmatched reliability under demanding conditions." 
  },
  { 
    title: "Dimensional Accuracy", 
    desc: "Delivers tight tolerances and uniform grain structure, minimizing post-machining needs." 
  },
  { 
    title: "Cost-Effective Production", 
    desc: "Efficient material use and reduced waste make it ideal for medium to high-volume runs." 
  },
  { 
    title: "Material & Size Versatility", 
    desc: "Compatible with ferrous and non-ferrous alloys, from small gear blanks to large flanges." 
  },
],

          expertise: [
  "Seamless Rolled Rings: Precision-engineered from 100 mm to 2000 mm for superior performance.",
  "Diverse Material Selection: Carbon, alloy, stainless, and nickel-based steels for varied applications.",
  "Advanced Rolling Technology: Radial and axial mills ensure exceptional quality and consistency.",
  "Rigorous Quality Assurance: Controlled heat treatment and ultrasonic testing for material integrity.",
  "Precision Finishing: Advanced CNC machining ensures exact final dimensions.",
  "In-house CMM & NDT testing for accuracy and reliability.",
  "Material composition verification and certification.",
  "Detailed inspection reports provided for every batch.",
],

        },
        {
          id: "process-assembly",
          title: "Drop Forging",
          img: sub10,
          content:
            "At SureSupply, we excel in advanced drop forging technology, producing high-performance components with unmatched strength and precision. Through controlled deformation using high-tonnage hammers and presses, we refine and align the metal’s grain structure to the part’s geometry, enhancing mechanical properties and fatigue resistance. Our process ensures superior dimensional accuracy, excellent surface finish, and consistency across large production runs. With cutting-edge equipment, metallurgical expertise, and stringent quality checks, we deliver reliable forged parts for the automotive, railway, and heavy industrial sectors.",
          advantages: [
  {
    title: "Unmatched Strength & Durability",
    desc: "Drop forging aligns the metal’s grain structure for superior tensile strength, fatigue resistance, and impact toughness, ensuring exceptional reliability in demanding applications.",
  },
  {
    title: "Superior Accuracy & Repeatability",
    desc: "Precision-engineered closed dies deliver tight tolerances and consistent dimensions, minimizing post-machining and ensuring seamless assembly integration.",
  },
  {
    title: "Optimal Material Utilization",
    desc: "Near-net-shape forging minimizes waste and optimizes material use, reducing costs while maintaining high-quality production standards.",
  },
  {
    title: "Excellent Surface & Integrity",
    desc: "Controlled metal flow ensures a smooth finish and defect-free structure, enhancing part integrity and long-term durability.",
  },
  {
    title: "Cost-Effective for High Volumes",
    desc: "High production rates, reduced waste, and minimal secondary machining make drop forging ideal for medium to large-scale production runs.",
  },
],

          expertise: [
  "Advanced drop hammers up to 10,000 tons for precise, high-strength forging.",
  "In-house die design and maintenance for optimal tool efficiency.",
  "High-volume production of critical parts like crankshafts and rods.",
  "Precision temperature control ensuring material integrity and consistency.",
  "End-to-end finishing with heat treatment, shot blasting, and CNC machining.",
],

        },
      ],
    },
  ];

  const [activeMain, setActiveMain] = useState(categories[0].id);
  const [openMain, setOpenMain] = useState(categories[0]?.id || null);
  const [activeSub, setActiveSub] = useState(null);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const toggleDrawer = (open) => {
  setMobileMenuOpen(open);
};



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
  <h3 className="text-[40px] font-semibold text-[#0A175C] mb-6 text-center">Key Advantages</h3>
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
  <h3 className="text-[40px] font-bold text-[#0A175C] mb-5 text-center">Our Expertise</h3>

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
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden pt-[100px] pb-[60px]">
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
      {/* MOBILE MENU BUTTON */}
<div className="flex items-center justify-between mb-4 lg:hidden">
<Button
  variant="outlined"
  onClick={() => toggleDrawer(true)}
  sx={{
    borderColor: "#F05023",
    color: "#F05023",
    textTransform: "none",
    fontFamily: "Outfit, sans-serif",
    fontWeight: 500,
  }}
>
  Menu
</Button>
</div>


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
            onClick={() => {
              if (openMain === cat.id) {
                // Collapse dropdown but keep content visible
                setOpenMain(null);
                setActiveMain(cat.id);
                setActiveSub(null);
              } else {
                // Open dropdown and show content
                setOpenMain(cat.id);
                setActiveMain(cat.id);
                setActiveSub(null);
              }
            }}
            className={`flex items-center justify-between w-full text-left px-3 py-3 rounded-md transition-all ${
              activeMain === cat.id && !activeSub
                ? "bg-[#FFF8F6] border border-[#F05023] text-[#F05023] font-semibold"
                : "hover:bg-[#F05023] hover:text-white text-[#0A175C]"
            }`}
          >
            <span className="text-sm">{cat.title}</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
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
            <div className="ml-4 mt-2 flex flex-col space-y-1 animate-fadeIn">
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
  <Drawer anchor="left" open={mobileMenuOpen} onClose={() => toggleDrawer(false)}>
  <Box sx={{ width: 280 }} role="presentation">
    <List>
      {categories.map((cat) => (
        <div key={cat.id}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setActiveMain(cat.id);
                setActiveSub(null);
                toggleDrawer(false)();
              }}
            >
              <ListItemText
                primary={cat.title}
                sx={{ color: "#F05023", fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>

          {/* Subcategories */}
          {cat.subs.map((sub) => (
            <ListItem
              key={sub.id}
              sx={{ pl: 4 }}
              disablePadding
              onClick={() => {
                setActiveMain(cat.id);
                setActiveSub(sub.id);
                toggleDrawer(false)();
              }}
            >
              <ListItemButton>
                <ListItemText primary={sub.title} sx={{ color: "#0A175C" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </div>
      ))}
    </List>
  </Box>
</Drawer>

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
