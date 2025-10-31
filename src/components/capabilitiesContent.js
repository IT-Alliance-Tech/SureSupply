// components/CapabilitiesContent.js

import main1 from "../../public/dummy3.png";
import main2 from "../../public/dummy3.png";
import sub1 from "../../public/dummy3.png";
import sub2 from "../../public/dummy3.png";
import sub3 from "../../public/dummy3.png";
import sub4 from "../../public/dummy3.png";
import sub5 from "../../public/dummy3.png";
import sub6 from "../../public/dummy3.png";
import sub7 from "../../public/dummy3.png";
import sub8 from "../../public/dummy3.png";
import sub9 from "../../public/dummy3.png";
import sub10 from "../../public/dummy3.png";

const categories = [
  // ==============================
  // 🏭 CASTING
  // ==============================
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
          "High-Pressure Die Casting stands as our premier manufacturing method for the most demanding applications, offering an unparalleled combination of speed, precision, and the ability to produce components of exceptional quality. This sophisticated process involves the rapid injection of molten metal into a meticulously engineered, robust steel die under immense pressure, typically ranging from 700 to 2500 bar. This high-pressure injection ensures that the molten metal completely fills even the most intricate cavities of the die before solidifying, leading to components with superior structural integrity and highly accurate dimensions.",
        advantages: [
          { title: "Exceptional Accuracy:", desc: "Our HPDC process delivers components with remarkable dimensional accuracy and tight tolerances, often eliminating the need for subsequent machining." },
          { title: "Superior Surface Finish", desc: "HPDC parts boast an excellent, ready-to-use surface finish, requiring minimal to no post-processing for aesthetics." },
          { title: "Thin-Wall Expertise:", desc: "We excel in creating intricate, thin-walled components without compromising strength." },
          { title: "High Production Volumes and Cost-Effectiveness:", desc: "Ideal for mass production due to rapid cycle times and durable dies, making it a cost-effective solution." },
          { title: "Enhanced Mechanical Properties:", desc: "Rapid solidification results in fine-grained microstructure, ensuring superior strength-to-weight ratios." },
        ],
        expertise: [
          "Large Part Capability: We produce aluminum and zinc alloy HPDC parts up to 20 kg.",
          "Integrated Tooling: Multi-cavity die design and precise tool manufacturing.",
          "Advanced Automation: Robotic pouring ensures consistent quality and efficiency.",
          "Superior Part Integrity: Vacuum-assisted systems minimize porosity.",
          "Complete Post-Casting Services: Trimming, CNC machining, surface treatments, and testing.",
        ],
      },
      {
        id: "casting-low",
        title: "Low Pressure Casting",
        img: sub2,
        content:
          "Suresupply specializes in Low-Pressure Die Casting (LPDC), a sophisticated process ensuring high-quality components with superior metallurgical integrity and excellent mechanical strength.",
        advantages: [
          { title: "Superior Metallurgical Integrity", desc: "Controlled low-pressure filling minimizes porosity and turbulence, yielding castings with enhanced strength and fatigue resistance." },
          { title: "Excellent Surface Finish & Dimensional Accuracy", desc: "Gentle, consistent filling produces exceptional surface finishes and tight tolerances." },
          { title: "Complex Geometries & Thin Walls", desc: "Allows intricate designs including thin walls without compromising strength." },
          { title: "Optimized Material Yield & Cost-Effectiveness", desc: "Efficient filling ensures high yield and minimal scrap." },
          { title: "Versatility for Demanding Applications:", desc: "Ideal for automotive, aerospace, and industrial sectors." },
        ],
        expertise: [
          "Automated Pressure Control for consistency.",
          "Process Simulation to predict and reduce defects.",
          "Inline Degassing for cleaner castings.",
          "Process Automation for productivity.",
          "Comprehensive Quality Assurance with heat treatment and X-ray inspection.",
        ],
      },
      {
        id: "casting-cold",
        title: "Gravity Die Casting (GDC)",
        img: sub3,
        content:
          "Suresupply offers Gravity Die Casting (GDC) — a cost-efficient and high-quality solution for medium-volume production using reusable molds for superior consistency and finish.",
        advantages: [
          { title: "Optimized for Medium-Volume Production:", desc: "Bridges the gap between sand and pressure die casting." },
          { title: "Enhanced Mechanical Strength:", desc: "Controlled solidification refines grain structure and durability." },
          { title: "Superior Dimensional Consistency:", desc: "Permanent molds ensure precision and repeatability." },
          { title: "Cost-Effective Quality:", desc: "Efficient cycle times and reduced scrap ensure value." },
          { title: "Design Flexibility and Material Versatility:", desc: "Supports complex geometries and wide alloy options." },
        ],
        expertise: [
          "Advanced Alloy Castings in aluminum and copper.",
          "Manual and semi-automatic tilt-pour setups.",
          "Controlled Cooling for optimal performance.",
          "Precision Machining and finishing.",
        ],
      },
      {
        id: "casting-hot",
        title: "Investment Casting (Lost Wax Process)",
        img: sub4,
        content:
          "Investment Casting enables intricate, detailed components with superior surface finishes and tight tolerances across aerospace, medical, and automotive industries.",
        advantages: [
          { title: "Unrivaled Precision", desc: "Supports intricate designs impossible by other methods." },
          { title: "Exceptional Surface Finish", desc: "Smooth surface finish with minimal post-processing." },
          { title: "Broad Material Versatility", desc: "Supports stainless steel, alloy steel, and superalloys." },
          { title: "Optimized Performance", desc: "Ensures consistent quality and reduced failure rates." },
          { title: "Cost-Effectiveness for Complex Parts", desc: "Ideal for complex parts needing less machining." },
        ],
        expertise: [
          "Aerospace components like turbine blades.",
          "Medical implants and surgical tools.",
          "Automotive turbo parts and housings.",
          "Industrial machinery and control components.",
        ],
      },
      {
        id: "casting-precision",
        title: "Sand Casting",
        img: sub5,
        content:
          "Suresupply specializes in sand casting — a versatile, cost-effective method suitable for small to large components across automotive, aerospace, and heavy machinery industries.",
        advantages: [
          { title: "Unmatched Versatility", desc: "Supports a wide range of part sizes and materials." },
          { title: "Economical Production", desc: "Low tooling costs for high-quality components." },
          { title: "Design Freedom", desc: "Flexible for design modifications and custom shapes." },
          { title: "Broad Material Compatibility", desc: "Works with all ferrous and non-ferrous alloys." },
          { title: "Ability to Produce Large Components:", desc: "Ideal for heavy-duty parts difficult to cast otherwise." },
        ],
        expertise: [
          "Advanced Molding Facilities with green sand and shell setups.",
          "In-House Tooling for faster production.",
          "Foundries handling 0.5 kg to 500 kg castings.",
          "Integrated Quality Assurance from heat treatment to inspection.",
          "Precision Finishing with CNC and surface treatments.",
        ],
      },
    ],
  },

  // ==============================
  // ⚙️ FORGING
  // ==============================
  {
    id: "processes",
    title: "Forging",
    img: main2,
    content: `
      <p class="mb-4">
        At <strong>Suresupply</strong>, our forging division represents the forefront of metallurgical innovation — combining precision, strength, and cutting-edge forming technology.
      </p>
      <p class="mb-4">
        We produce high-performance, defect-free components engineered for demanding industries like aerospace, automotive, and power generation.
      </p>
      <p>
        Our advanced forging processes refine grain structures to enhance tensile strength, ductility, and fatigue resistance — delivering longer service life and reliability under extreme conditions.
      </p>
    `,
    subs: [
      {
        id: "process-cnc",
        title: "Open Die Forging",
        img: sub6,
        content:
          "Open die forging ensures superior structural integrity and grain flow for large, custom components like shafts and rings used in aerospace and power industries.",
        advantages: [
          { title: "Ideal for Large & Custom Components", desc: "Perfect for large or custom components like shafts and blocks." },
          { title: "Superior Internal Grain Structure", desc: "Refines grain flow for exceptional mechanical properties." },
          { title: "Cost-Effective for Low Volumes", desc: "Simple tooling and design flexibility reduce cost." },
          { title: "Enhanced Material Integrity", desc: "Removes internal defects for maximum reliability." },
          { title: "Versatility Across Materials", desc: "Supports carbon steel, alloy steel, and superalloys." },
        ],
        expertise: [
          "Heavy-Duty Forging with precision hydraulic presses.",
          "Ultrasonic and magnetic inspection.",
          "Heat treatment and machining solutions.",
        ],
      },
      {
        id: "process-finishing",
        title: "Closed Die Forging",
        img: sub7,
        content:
          "Precision closed die forging creates high-strength, near-net-shape parts for automotive, aerospace, and defense applications.",
        advantages: [
          { title: "Enhanced Strength & Durability", desc: "Grain flow alignment improves performance." },
          { title: "High Dimensional Accuracy", desc: "Precision dies ensure repeatability." },
          { title: "Optimal Material Utilization", desc: "Near-net shapes reduce waste." },
          { title: "Superior Surface & Integrity", desc: "Produces defect-free dense parts." },
          { title: "Cost-Effective for Volume Production", desc: "Efficient for medium to high-volume runs." },
        ],
        expertise: [
          "Forgings up to 50 kg with tight tolerances.",
          "CAD/CAE die design and simulation.",
          "Flashless forging and surface finishing.",
        ],
      },
      {
        id: "process-welding",
        title: "Upset Forging",
        img: sub8,
        content:
          "Upset forging strengthens specific sections like flanges or shafts by controlled compression and enhanced grain flow.",
        advantages: [
          { title: "Superior Grain Flow & Strength", desc: "Boosts fatigue life and durability." },
          { title: "Reduced Material Waste", desc: "Minimizes flash for cost efficiency." },
          { title: "Ideal for Complex Geometries", desc: "Perfect for shafts and valves." },
          { title: "Excellent Surface & Accuracy", desc: "Delivers smooth surfaces and tight tolerances." },
          { title: "High-Volume Efficiency", desc: "Best for repetitive, high-speed production." },
        ],
        expertise: [
          "Automated upset forging for reliable parts.",
          "Heat treatment and finishing for quality assurance.",
          "In-house machining and surface finishing.",
        ],
      },
      {
        id: "process-inspection",
        title: "Rolled Forging (Ring Rolling)",
        img: sub9,
        content:
          "Ring rolling produces seamless rings with exceptional strength, reliability, and dimensional consistency — eliminating weld weak points.",
        advantages: [
          { title: "Optimized Grain Structure", desc: "Refined for superior strength and fatigue resistance." },
          { title: "Seamless Integrity", desc: "No weld defects for maximum durability." },
          { title: "Dimensional Accuracy", desc: "Uniform grain ensures minimal machining." },
          { title: "Cost-Effective Production", desc: "Reduces material waste and cost." },
          { title: "Material & Size Versatility", desc: "From small gears to large flanges." },
        ],
        expertise: [
          "Rings from 100 mm to 2000 mm.",
          "Alloy, carbon, and stainless steels supported.",
          "CNC finishing and ultrasonic testing.",
        ],
      },
      {
        id: "process-assembly",
        title: "Drop Forging",
        img: sub10,
        content:
          "Drop forging produces high-strength, fatigue-resistant components using precision hammers and dies for automotive and heavy industry applications.",
        advantages: [
          { title: "Unmatched Strength & Durability", desc: "Grain structure alignment enhances performance." },
          { title: "Superior Accuracy & Repeatability", desc: "Ensures consistent tolerances across runs." },
          { title: "Optimal Material Utilization", desc: "Reduces waste and saves cost." },
          { title: "Excellent Surface & Integrity", desc: "Delivers defect-free components." },
          { title: "Cost-Effective for High Volumes", desc: "Ideal for mass production runs." },
        ],
        expertise: [
          "Drop hammers up to 10,000 tons.",
          "In-house die design and maintenance.",
          "Precision machining and heat treatment.",
        ],
      },
    ],
  },
];

export default categories;
