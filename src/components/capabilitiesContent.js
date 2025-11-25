// components/CapabilitiesContent.js

import main1 from "../../public/dummy3.png";
import sub1 from "../../public/dummy3.png";
import sub2 from "../../public/dummy3.png";
import sub3 from "../../public/dummy3.png";
import sub4 from "../../public/dummy3.png";
import sub5 from "../../public/dummy3.png";
import main2 from "../../public/dummy3.png";
import sub6 from "../../public/dummy3.png";
import sub7 from "../../public/dummy3.png";
import sub8 from "../../public/dummy3.png";
import sub9 from "../../public/dummy3.png";
import sub10 from "../../public/dummy3.png";
import sub11 from "../../public/dummy3.png";
import main3 from "../../public/dummy3.png";
import sub12 from "../../public/dummy3.png";
import sub13 from "../../public/dummy3.png";
import sub14 from "../../public/dummy3.png";
import sub15 from "../../public/dummy3.png";
import sub16 from "../../public/dummy3.png";
import sub17 from "../../public/dummy3.png";
import main5 from "../../public/dummy3.png";
import sub21 from "../../public/dummy3.png";
import sub22 from "../../public/dummy3.png";
import sub23 from "../../public/dummy3.png";
import sub24 from "../../public/dummy3.png";
import sub25 from "../../public/dummy3.png";
import main6 from "../../public/dummy3.png";
import sub26 from "../../public/dummy3.png";
import sub27 from "../../public/dummy3.png";
import sub28 from "../../public/dummy3.png";
import sub29 from "../../public/dummy3.png";

export const categories = [
  // ==============================
  // 🏭 CASTING
  // ==============================
  {
    id: "casting",
    title: "Casting",
    img: main1,
    content: `
      <h2 class="text-2xl font-semibold text-[#F05023] mb-4">
  Your Trusted Partner for Precision Casting
</h2>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  Suresupply delivers high-quality cast components through advanced engineering, 
  metallurgical expertise, and precision manufacturing. 
  Every part is crafted to meet the highest standards of strength, accuracy, and reliability.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  From Concept to Completion
</h3>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  We manage the full casting lifecycle — from simulation and pattern design 
  to final finishing — ensuring performance, efficiency, and cost-effectiveness.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  Beyond Parts — Engineered Solutions
</h3>
<p class="text-gray-700 text-base leading-relaxed">
  More than manufacturing, we engineer integrated casting solutions 
  that enhance system performance, reduce downtime, and ensure long-term reliability.
</p>

    `,

    // QUALITY ASSURANCE
    qualityAssurance: {
      title: "Quality Assurance",
      description: `
        SureSupply prioritizes quality in its contract manufacturing, recognizing its importance in B2B partnerships. 
        Every casting process is meticulously validated in our in-house metallurgical lab equipped with advanced technology.
      `,
      points: [
        {
          title: "Spectrometer Analysis for Chemical Composition",
          desc: "We precisely analyze elemental makeup to guarantee adherence to specifications and performance."
        },
        {
          title: "Hardness, Tensile, and Impact Testing",
          desc: "Verifies the strength, durability, and resilience of castings under varied conditions."
        },
        {
          title: "Radiographic and Ultrasonic Inspection",
          desc: "Detects internal flaws, voids, and inconsistencies ensuring structural integrity."
        },
        {
          title: "Surface Roughness and Dimensional Validation",
          desc: "Inspects surface finishes and dimensional accuracy ensuring perfect fit and function."
        }
      ],
      beyondTesting: [
        {
          title: "Rigorous Process Audits",
          desc: "Ongoing audits throughout manufacturing to identify and correct any deviations."
        },
        {
          title: "Statistical Process Control (SPC) Monitoring",
          desc: "Advanced statistical tools continuously monitor process quality in real time."
        },
        {
          title: "PPAP Documentation",
          desc: "Comprehensive documentation ensures process capability and compliance."
        }
      ]
    },

    // ==============================
    // SUBCATEGORIES
    // ==============================
    subs: [
      // ------------------------------
      // 1️⃣ High Pressure Die Casting
      // ------------------------------
      {
        id: "casting-high",
        title: "High Pressure Die Casting (HPDC)",
        img: sub1,
        content:
          "High-Pressure Die Casting stands as our premier manufacturing method for the most demanding applications, offering an unparalleled combination of speed, precision, and the ability to produce components of exceptional quality. This sophisticated process involves the rapid injection of molten metal into a meticulously engineered, robust steel die under immense pressure, typically ranging from 700 to 2500 bar . This high-pressure injection ensures that the molten metal completely fills even the most intricate cavities of the die before solidifying, leading to components with superior structural integrity and highly accurate dimensions.",
        advantages: [
          {
            title: "Exceptional Accuracy",
            points: [
              "Delivers precise dimensions with minimal machining.",
              "Tight tolerances ensure consistent performance."
            ]
          },
          {
            title: "Superior Surface Finish",
            points: [
              "Provides smooth, ready-to-use surfaces.",
              "Enhances appearance and reduces finishing time."
            ]
          },
          {
            title: "Thin-Wall Expertise",
            points: [
              "Enables lightweight yet strong parts.",
              "Ideal for automotive and aerospace designs."
            ]
          },
          {
            title: "High Production Volumes",
            points: [
              "Rapid cycles suitable for mass production.",
              "Reduces material waste and overall cost."
            ]
          },
          {
            title: "Enhanced Mechanical Properties",
            points: [
              "Fine-grained structure boosts strength-to-weight ratio.",
              "Improves fatigue life for demanding uses."
            ]
          }
        ],
        expertise: [
  "Large-Part HPDC Capability: We produce aluminum and zinc alloy HPDC components up to 20 kg capacity, serving a wide range of industrial requirements.",
  "In-House Tooling & Die Design: Our team designs and manufactures multi-cavity dies internally, ensuring precision, repeatability, and long die life.",
  "Robotic Metal Pouring & Trimming: Automated cells guarantee uniform metal flow, consistent part quality, and reduced manual errors during trimming operations.",
  "Vacuum-Assisted Casting: Advanced vacuum systems reduce porosity, enhance density, and improve structural integrity for critical components.",
  "Complete Post-Casting Services: We provide CNC machining, surface finishing, and leak testing to deliver fully finished, production-ready parts."
]

      },

      // ------------------------------
      // 2️⃣ Low Pressure Die Casting
      // ------------------------------
      {
        id: "casting-low",
        title: "Low Pressure Die Casting (LPDC)",
        img: sub2,
        content:
          "SureSupply specializes in Low-Pressure Die Casting (LPDC), a sophisticated manufacturing process that ensures high-quality components for demanding applications. LPDC minimizes turbulence and gas porosity through a controlled, low-pressure mold filling, resulting in superior metallurgical integrity, fine-grained microstructures, and enhanced strength and ductility. This method also allows for complex geometries, tight tolerances, and excellent surface finishes, often reducing the need for post-casting machining. SureSupply's LPDC capabilities produce lighter, thinner-walled components without compromising mechanical properties, benefiting industries like automotive, aerospace, industrial machinery, and consumer goods. We are committed to partnering with clients to create high-performance components from innovative designs.",
        advantages: [
          {
            title: "Superior Metallurgical Integrity",
            points: [
              "Minimizes turbulence and porosity for strong structures.",
              "Ensures better fatigue and ductility performance."
            ]
          },
          {
            title: "Dimensional Accuracy",
            points: [
              "Controlled filling ensures tight tolerances.",
              "Reduces need for secondary machining."
            ]
          },
          {
            title: "Complex Geometry Support",
            points: [
              "Allows intricate thin-wall designs.",
              "Ideal for lightweight automotive components."
            ]
          },
          {
            title: "Cost-Effective Operation",
            points: [
              "Optimized material yield minimizes scrap.",
              "Ideal for medium-to-high production runs."
            ]
          },
          {
            title: "Versatile Industrial Use",
            points: [
              "Supports automotive, aerospace, and machinery parts.",
              "Ensures consistent, defect-free output."
            ]
          }
        ],
        expertise: [
  "Automated Pressure Control: Ensures consistent, high-quality castings with superior mechanical properties and surface finish.",
  "Process Simulation and Solidification Analysis: Optimizes design, predicts defects, and refines molds to save time and cost.",
  "Inline Degassing and Filtration Systems: Provides cleaner, stronger, and more reliable parts with enhanced fatigue resistance.",
  "Process Automation: Increases productivity, reduces cycle times, and ensures consistent quality.",
  "Comprehensive Quality Assurance: Heat treatment, X-ray inspection, and dimensional validation ensure defect-free, high-performance components."
]

      },

      // ------------------------------
      // 3️⃣ Gravity Die Casting
      // ------------------------------
      {
        id: "casting-gravity",
        title: "Gravity Die Casting (GDC)",
        img: sub3,
         content:
    "Gravity Die Casting uses gravity-fed metal flow for durable, consistent, and cost-effective medium-volume production. SureSupply offers Gravity Die Casting (GDC), also known as Permanent Mold Casting, as a cost-efficient and high-quality solution for medium-volume production. This process uses gravity to fill reusable molds, typically with non-ferrous alloys like aluminum, resulting in parts with excellent mechanical properties, improved surface finish, enhanced dimensional accuracy, and reduced porosity. GDC balances the tooling costs of pressure die casting and the slower cycle times of sand casting, making it economical for medium volumes. SureSupply's GDC capabilities include design flexibility, material versatility, and environmental benefits due to reusable molds. Their process is meticulously managed from design to delivery, utilizing advanced facilities and a skilled team for mold design, alloy selection, process optimization, and rigorous quality control. SureSupply aims to provide high-performance, cost-effective solutions for various industries.",

        advantages: [
          {
            title: "Medium-Volume Efficiency",
            points: [
              "Balances cost and precision between sand and die casting.",
              "Ensures consistent quality for medium runs."
            ]
          },
          {
            title: "Enhanced Strength",
            points: [
              "Controlled cooling refines grain structure.",
              "Improves mechanical durability and performance."
            ]
          },
          {
            title: "Dimensional Consistency",
            points: [
              "Reusable molds maintain tight tolerances.",
              "Minimizes machining and defects."
            ]
          },
          {
            title: "Economical Production",
            points: [
              "Efficient cycles lower cost per part.",
              "Reduced scrap rates enhance profitability."
            ]
          },
          {
            title: "Material Versatility",
            points: [
              "Works with aluminum, brass, and copper.",
              "Ideal for durable, corrosion-resistant parts."
            ]
          }
        ],
        expertise: [
  "Advanced Alloy Castings: Specializing in aluminum, copper, and brass, we deliver components with superior strength, conductivity, and corrosion resistance.",
  "Versatile Casting Processes: We offer both manual and semi-automatic tilt-pour setups, optimizing production for various volumes and complexities.",
  "Precision Die Design & Fabrication: Our in-house experts use cutting-edge software for high-precision die design and fabrication, ensuring accuracy, optimal material flow, and extended die life.",
  "Controlled Cooling for Optimal Performance: Advanced controlled cooling methods (water channels, air jets) precisely manage solidification, minimizing defects and enhancing mechanical properties for consistent quality.",
  "Comprehensive Post-Casting Services: We offer precision machining, shot blasting, rigorous pressure testing, and various finishing options, simplifying your supply chain for ready-to-use components."
]

      },

      // ------------------------------
      // 4️⃣ Investment Casting
      // ------------------------------
      {
        id: "casting-investment",
        title: "Investment Casting (Lost Wax Process)",
        img: sub4,
       content:
              "SureSupply specializes in Investment Casting, a precise manufacturing process for creating intricate and detailed components with tight tolerances and superior surface finishes. The process involves creating a wax pattern, coating it with ceramic to form a mold, melting away the wax, pouring molten metal into the mold, and then breaking away the ceramic to reveal the cast component. This technique is suitable for complex geometries and is used in various industries like aerospace, medical, automotive, and industrial. Benefits of choosing SureSupply include exceptional detail and complexity, superior surface finish, tight tolerances, wide material versatility, and cost-effectiveness for complex parts. SureSupply is dedicated to providing high-quality, reliable components through its advanced Investment Casting capabilities.",
        advantages: [
          {
            title: "Unrivaled Precision",
            points: [
              "Produces highly complex geometries with minimal machining.",
              "Achieves repeatable precision for critical components."
            ]
          },
          {
            title: "Smooth Surface Finish",
            points: [
              "Delivers fine, near-polished surfaces.",
              "Reduces post-finishing costs and lead times."
            ]
          },
          {
            title: "Material Versatility",
            points: [
              "Supports stainless steel, alloy steel, and superalloys.",
              "Handles extreme temperature and stress conditions."
            ]
          },
          {
            title: "Optimized Performance",
            points: [
              "Delivers consistent structural integrity and quality.",
              "Ensures long service life in harsh environments."
            ]
          },
          {
            title: "Cost-Effective for Complexity",
            points: [
              "Ideal for intricate, low-to-medium volume parts.",
              "Reduces machining time and material waste."
            ]
          }
        ],
        expertise: [
  "Precision Casting: Specializing in intricate, thin-wall castings up to 25 kg with exceptional detail and structural integrity.",
  "End-to-End Tooling: In-house wax pattern tooling design and manufacturing for seamless transitions and superior products.",
  "Advanced Production: State-of-the-art facilities with automated shell building, efficient dewaxing, and vacuum melting for superior material purity and quality.",
  "Comprehensive Finishing & Inspection: In-house heat treatment, machining, and NDT (MPI, DP, UT) for quality control, reduced lead times, and high performance.",
  "ISO-Certified Quality & Traceability: Strict process control and material traceability from raw material to finished product, ensuring peace of mind."
]

      },

      // ------------------------------
      // 5️⃣ Sand Casting
      // ------------------------------
      {
        id: "casting-sand",
        title: "Sand Casting",
        img: sub5,
         content:
    "SureSupply specializes in Sand Casting, a versatile and cost-effective manufacturing process. This method involves creating detailed sand molds around a pattern, allowing the production of diverse and complex components across industries. SureSupply handles projects of all complexities and scales, working with a wide array of ferrous and non-ferrous metals like iron, steel, aluminum, and various alloys. The process begins with precise pattern design, mold creation, molten metal pouring, and controlled solidification before the mold is broken away to reveal the casting. Post-processing such as machining and finishing ensures ready-to-use, high-performance components. Sand Casting offers key advantages including low tooling costs, flexibility for complex geometries, and the ability to produce large components with excellent mechanical properties—making it essential for industries such as automotive, aerospace, and heavy machinery.",
        advantages: [
          {
            title: "High Versatility",
            points: [
              "Suitable for small to heavy-duty components.",
              "Adapts to complex shapes and alloys easily."
            ]
          },
          {
            title: "Economical Production",
            points: [
              "Low tooling cost and quick setup.",
              "Ideal for small and medium-batch volumes."
            ]
          },
          {
            title: "Design Flexibility",
            points: [
              "Supports easy design modifications.",
              "Reduces dependency on permanent molds."
            ]
          },
          {
            title: "Material Compatibility",
            points: [
              "Casts both ferrous and non-ferrous metals.",
              "Ensures reliable mechanical performance."
            ]
          },
          {
            title: "Large Component Capability",
            points: [
              "Supports casting up to 500 kg.",
              "Perfect for industrial-scale manufacturing."
            ]
          }
        ],
        expertise: [
  "Advanced Molding Facilities: State-of-the-art green sand, resin-bonded, and shell molding facilities produce castings with superior surface finish, dimensional accuracy, and mechanical properties, ensuring optimal performance and cost-effectiveness.",
  "In-House Pattern & Core Box Manufacturing: Our dedicated in-house pattern and core box manufacturing capabilities, using wood, aluminum, or resin, ensure precise and durable tooling, reducing lead times and ensuring consistent quality.",
  "Versatile Casting Production: Our foundries handle a wide range of casting sizes and complexities, from 0.5 kg to 500 kg, delivering custom solutions across various industries.",
  "Integrated Quality Assurance: In-house fettling, heat treatment, and comprehensive dimensional inspection guarantee every casting meets exact specifications and industry standards, delivering reliable, high-performance components.",
  "Precision Finishing and Value-Added Services: We offer a full spectrum of precision finishing services, including advanced CNC machining, balancing, and various surface finishing options, for ready-to-assemble components. Partner with us for a complete manufacturing solution."
]

      }
    ]
  },
// ==============================
// ⚙️ FORGING
// ==============================
{
  id: "forging",
  title: "Forging",
  img: main1,
  content: `
    <h2 class="text-2xl font-semibold text-[#F05023] mb-4">
  Precision Forging for High-Performance Components
</h2>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  Suresupply delivers forged components with exceptional strength, durability, 
  and structural integrity. Using advanced forging technologies, 
  we meet the highest standards for performance, safety, and reliability.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  End-to-End Capabilities
</h3>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  From material selection and billet preparation to heat treatment and machining, 
  every stage is optimized to ensure consistent quality and superior mechanical properties.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  Engineered for Strength and Precision
</h3>
<p class="text-gray-700 text-base leading-relaxed">
  Each forged part is built to deliver lasting performance and reliability, 
  even in the most demanding applications.
</p>

  `,

  // QUALITY ASSURANCE
  qualityAssurance: {
    title: "Quality Assurance",
    description: `
      SureSupply’s quality systems ensure every forged part meets the highest standards of strength, reliability, and dimensional precision.
      Our in-house metallurgical testing and inspection facilities verify performance before dispatch.
    `,
    points: [
      {
        title: "Microstructure & Grain Flow Analysis",
        desc: "Ensures proper metal flow and mechanical integrity for fatigue-resistant performance."
      },
      {
        title: "Tensile, Impact & Hardness Testing",
        desc: "Validates material strength, ductility, and toughness for critical applications."
      },
      {
        title: "Ultrasonic & Magnetic Particle Inspection (UT & MPI)",
        desc: "Detects internal or surface defects, ensuring flawless integrity in every component."
      },
      {
        title: "Dimensional & Surface Inspection",
        desc: "Guarantees exact tolerances and precise surface finishes using advanced CMM and gauges."
      }
    ],
    beyondTesting: [
      {
        title: "Process Validation & Traceability",
        desc: "Every stage of forging is documented and traceable to ensure complete process transparency."
      },
      {
        title: "Heat Treatment Verification",
        desc: "Monitors temperature uniformity and hardness consistency to achieve the required mechanical properties."
      },
      {
        title: "Continuous Improvement Programs",
        desc: "Ongoing reviews enhance process capability, efficiency, and customer satisfaction."
      }
    ]
  },

  // ==============================
  // SUBCATEGORIES
  // ==============================
  subs: [
    // ------------------------------
    // 1️⃣ Open Die Forging
    // ------------------------------
    {
      id: "forging-open",
      title: "Open Die Forging",
      img: sub1,
      content:
        "Open Die Forging involves deforming heated metal between flat or contoured dies that do not completely enclose the material. This process is ideal for producing large, strong, and durable parts with superior mechanical properties. SureSupply’s open die capabilities ensure exceptional internal soundness, refined grain structure, and dimensional precision. This method is perfect for shafts, rings, and other heavy-duty industrial components.",
      advantages: [
    {
      title: "Ideal for Large & Custom Components",
      points: [
        "Perfect for large, custom, or one-off forged parts like shafts, rings, and blocks.",
        "Widely used in heavy machinery, power generation, and aerospace sectors."
      ]
    },
    {
      title: "Superior Internal Grain Structure",
      points: [
        "Refines grain flow and enhances mechanical strength and toughness.",
        "Eliminates internal voids for improved fatigue resistance and durability."
      ]
    },
    {
      title: "Cost-Effective for Low Volumes",
      points: [
        "Simpler tooling makes it suitable for low-volume and prototype production.",
        "Design modifications can be made easily without major retooling costs."
      ]
    },
    {
      title: "Enhanced Material Integrity",
      points: [
        "Densifies metal structure for high reliability and consistent performance.",
        "Ensures exceptional uniformity and quality for critical applications."
      ]
    },
    {
      title: "Versatile Material Compatibility",
      points: [
        "Supports carbon steel, alloy steel, stainless steel, and superalloys.",
        "Offers flexibility to meet specialized material and industry requirements."
      ]
    }
  ],
     expertise: [
  "Heavy-Duty Forging: Capable of producing forgings weighing several tons while meeting stringent industry standards.",
  "Diverse Material Capabilities: Expertise in carbon steel, alloy steel, stainless steel, and copper alloys for varied applications.",
  "Advanced Manufacturing Control: Computer-controlled hydraulic presses and manipulators ensure precision and consistency.",
  "Rigorous Quality Assurance: Employs ultrasonic and magnetic particle inspection for superior material integrity.",
  "Complete End-to-End Services: Includes in-house rough machining and heat treatment for ready-to-use components."
]

    },

    // ------------------------------
    // 2️⃣ Closed Die Forging
    // ------------------------------
    {
      id: "forging-closed",
      title: "Closed Die Forging (Impression Die)",
      img: sub2,
      content:
        "Closed Die Forging, or Impression Die Forging, uses pre-shaped dies to form near-net shape parts with exceptional repeatability. SureSupply’s closed die processes provide superior dimensional accuracy, material efficiency, and production consistency—ideal for automotive, defense, and industrial applications where strength and precision are critical.",
      advantages: [
  {
    title: "Enhanced Strength and Durability",
    points: [
      "Refines the metal’s grain structure to align with the part’s contours.",
      "Delivers superior tensile strength, fatigue resistance, and impact toughness."
    ]
  },
  {
    title: "Superior Dimensional Accuracy and Repeatability",
    points: [
      "Precisely machined die cavities ensure tight tolerances and accuracy.",
      "Reduces or eliminates the need for extensive post-machining."
    ]
  },
  {
    title: "Optimal Material Utilization",
    points: [
      "Enables near-net-shape or flashless forging to minimize material waste.",
      "Improves cost-efficiency and production sustainability."
    ]
  },
  {
    title: "Excellent Surface Finish and Part Integrity",
    points: [
      "Produces components with a dense, defect-free internal structure.",
      "Achieves superior surface finish and consistent material integrity."
    ]
  },
  {
    title: "Cost-Effectiveness for Medium to High Volumes",
    points: [
      "Higher tooling costs offset by faster production and less material waste.",
      "Ideal for mass production with reduced secondary machining needs."
    ]
  }
],
expertise: [
  "Precision Forgings: Crafting high-quality forgings up to 50 kg with exceptional dimensional accuracy and consistency.",
  "Advanced Die Design: Utilizing state-of-the-art CAD/CAE tools for precision die design, analysis, and process simulation.",
  "High-Performance Operations: Using high-speed friction screw and hydraulic presses to ensure efficient and accurate forging cycles.",
  "Innovative Forging Techniques: Specializing in flashless and near-net-shape forging to minimize material waste and reduce machining needs.",
  "Complete Finishing Solutions: Offering end-to-end post-forge services including trimming, machining, and surface finishing for production-ready components."
]

    },

    // ------------------------------
    // 3️⃣ Ring Rolling
    // ------------------------------
    {
      id: "forging-ring",
      title: "Ring Rolling",
      img: sub3,
      content:
        "Ring Rolling is a specialized forging process used to produce seamless rolled rings with exceptional strength, structural integrity, and material efficiency. SureSupply’s advanced ring rolling facilities manufacture rings for bearings, flanges, and gear components with precise dimensions and superior surface finish.",
      advantages: [
  {
    title: "Superior Grain Flow for Enhanced Strength",
    points: [
      "Reorients the metal's grain structure to align with the part’s geometry.",
      "Enhances tensile strength, fatigue resistance, and impact toughness for superior durability."
    ]
  },
  {
    title: "Reduced Material Waste",
    points: [
      "Focuses material where needed, minimizing flash and scrap generation.",
      "Achieves near-net-shape parts, reducing overall material and machining costs."
    ]
  },
  {
    title: "Ideal for Complex Geometries with Enlarged Sections",
    points: [
      "Perfect for parts with localized thickenings like heads, flanges, or valves.",
      "Maintains smaller shank diameters while ensuring precise, robust features."
    ]
  },
  {
    title: "Excellent Surface Finish and Dimensional Accuracy",
    points: [
      "Controlled metal flow delivers smooth surface finishes and tight tolerances.",
      "Reduces or eliminates the need for extensive post-machining."
    ]
  },
  {
    title: "Cost-Effectiveness for High-Volume Production",
    points: [
      "Offers fast cycle times once tooling is developed, ensuring repeatable quality.",
      "Highly economical for large-scale production of specialized components."
    ]
  }
],

      expertise: [
  "Advanced Upset Forging: Utilizing automated multi-station upset forging machines for robust and reliable components.",
  "High-Speed Forging Excellence: Specializing in high-speed forging processes for bolts, studs, and axles, ensuring rapid production without compromising quality.",
  "Optimized Grain Structure: Our consistent metal flow techniques guarantee improved grain structure, leading to enhanced material strength and durability.",
  "Integrated Finishing Solutions: Complete in-house facilities for thread rolling, precision machining, and advanced surface treatments.",
  "Rigorous Quality Assurance: Comprehensive heat treatment and mechanical property testing to ensure every product meets the highest performance standards."
]

    },

    // ------------------------------
    // 4️⃣ Precision Forging
    // ------------------------------
    {
      id: "forging-precision",
      title: "Precision Forging",
      img: sub4,
      content:
        "Precision Forging delivers near-net-shape parts with exceptional dimensional control and surface finish. This advanced process minimizes machining needs while enhancing mechanical strength and part consistency—ideal for aerospace, automotive, and defense applications demanding superior quality.",
      advantages: [
  {
    title: "Enhanced Strength and Durability",
    points: [
      "Continuous grain flow improves tensile strength and toughness.",
      "Ensures superior fatigue resistance for high-stress applications."
    ]
  },
  {
    title: "Seamless Structural Integrity",
    points: [
      "Eliminates weld joints and weak points for maximum reliability.",
      "Provides exceptional performance under demanding conditions."
    ]
  },
  {
    title: "Dimensional Accuracy and Consistency",
    points: [
      "Maintains tight tolerances and uniform grain structure.",
      "Reduces post-machining needs and ensures consistent performance."
    ]
  },
  {
    title: "Cost-Effective Production",
    points: [
      "Efficient material use minimizes waste and overall costs.",
      "Ideal for medium to high-volume ring manufacturing."
    ]
  },
  {
    title: "Material and Size Flexibility",
    points: [
      "Compatible with steel, stainless steel, aluminum, and nickel alloys.",
      "Covers a wide range—from small rings to large industrial flanges."
    ]
  }
],

      expertise: [
  "Seamless Rolled Rings: Precision-engineered rings from 100 mm to 2000 mm in diameter for superior performance.",
  "Diverse Material Selection: Expertise in carbon, alloy, stainless, and nickel-based steels to meet varied industrial needs.",
  "Advanced Rolling Technology: Utilizing state-of-the-art radial and axial ring rolling mills for exceptional accuracy and consistency.",
  "Rigorous Quality Assurance: Ensuring strength and reliability through controlled heat treatment and ultrasonic testing.",
  "Precision Finishing: Delivering final accuracy with advanced CNC machining for exact dimensions and smooth finishes."
]

    },

    // ------------------------------
    // 5️⃣ Cold Forging
    // ------------------------------
    {
      id: "forging-cold",
      title: "Cold Forging",
      img: sub5,
      content:
        "Cold Forging is a highly efficient, room-temperature forming process producing high-strength parts with excellent surface finish and dimensional accuracy. Ideal for automotive fasteners, shafts, and hardware, this eco-friendly method ensures superior mechanical performance with reduced energy usage.",
      advantages: [
  {
    title: "Unmatched Strength and Durability",
    points: [
      "Enhanced tensile strength, fatigue resistance, and impact toughness.",
      "Ensures long-lasting and highly reliable components."
    ]
  },
  {
    title: "Superior Dimensional Accuracy",
    points: [
      "Precision-engineered closed dies maintain tight tolerances.",
      "Reduces post-machining and ensures consistent repeatability."
    ]
  },
  {
    title: "Optimal Material Utilization",
    points: [
      "Near-net-shape forging minimizes waste and saves material.",
      "Improves production efficiency and lowers costs."
    ]
  },
  {
    title: "Excellent Surface Finish and Integrity",
    points: [
      "Produces parts with smooth surfaces and minimal internal defects.",
      "Delivers superior part integrity and appearance."
    ]
  },
  {
    title: "Cost-Effective Production",
    points: [
      "Ideal for medium to high-volume manufacturing.",
      "High throughput and reduced waste offset initial tooling costs."
    ]
  }
],

      expertise: [
  "Advanced Forging Power: Utilizing automated drop hammers with capacities up to 10,000 tons for robust and precise forging operations.",
  "Integrated Die Solutions: In-house die design, manufacturing, and maintenance facilities ensure optimal tool performance and efficiency.",
  "High-Volume Production: Specializing in the rapid and consistent production of critical components like crankshafts, connecting rods, and levers.",
  "Precision Temperature Control: Employing advanced monitoring systems for meticulously controlled forging temperatures, guaranteeing material integrity and product quality.",
  "Complete Finishing Services: Offering end-to-end solutions with expert heat treatment, shot blasting, and precision CNC finishing."
]

    }
  ]
},
// ==============================
// ⚙️ FABRICATION
// ==============================
{
  id: "fabrication",
  title: "Fabrication",
  img: main2,
  content: `
    <h2 class="text-2xl font-semibold text-[#F05023] mb-4">
  Advanced Fabrication for Precision Engineering
</h2>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  Suresupply delivers precision fabrication with cutting-edge technology and expert craftsmanship. 
  From sheet metal and structural components to complex assemblies, we ensure exceptional accuracy, 
  consistency, and performance across every project.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  End-to-End Capabilities
</h3>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  Our full-service fabrication includes laser, plasma, and waterjet cutting, precision welding, 
  and EDM processing — all optimized through automation and rigorous quality control.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  Built for Performance and Reliability
</h3>
<p class="text-gray-700 text-base leading-relaxed">
  Every component we produce is engineered for precision, repeatability, 
  and long-term reliability under the most demanding conditions.
</p>

  `,

  // QUALITY ASSURANCE
  qualityAssurance: {
    title: "Quality Assurance",
    description: `
      At Suresupply, quality is engineered into every process. 
      Our in-house validation systems, advanced metrology, and real-time process monitoring guarantee traceable, consistent, and repeatable outcomes across all fabrication disciplines.
    `,
    points: [
      {
        title: "Coordinate Measuring Machine (CMM) Verification",
        desc: "Automated dimensional inspection for complex geometries with micron-level accuracy."
      },
      {
        title: "Weld Penetration & Macro-Etch Testing",
        desc: "Ensures weld fusion integrity, geometry accuracy, and defect-free joints."
      },
      {
        title: "Surface Roughness & Flatness Validation",
        desc: "Confirms surface finish and planarity for sealing and assembly precision."
      },
      {
        title: "Comprehensive Mechanical Testing",
        desc: "Verifies tensile strength, hardness, impact resistance, and chemical composition."
      }
    ],
    beyondTesting: [
      {
        title: "Rigorous Process Audits",
        desc: "Frequent internal audits maintain consistency and eliminate deviations."
      },
      {
        title: "Statistical Process Control (SPC)",
        desc: "Monitors and stabilizes process variables for zero-defect manufacturing."
      },
      {
        title: "PPAP & Traceability",
        desc: "Comprehensive documentation ensures part compliance and production validation."
      }
    ]
  },

  // ==============================
  // SUBCATEGORIES
  // ==============================
  subs: [
    // ------------------------------
    // 1️⃣ Die Press Fabrication
    // ------------------------------
    {
      id: "fabrication-diepress",
      title: "Die Press Fabrication",
      img: sub6,
      content:
        "At Suresupply, our Die Press Fabrication process represents the foundation of precision sheet metal manufacturing. We combine advanced hydraulic and mechanical presses with state-of-the-art tooling to produce components that meet the most demanding dimensional and structural specifications. By employing progressive, compound, and deep-draw die setups, we ensure efficient, repeatable production across complex geometries and variable thicknesses.",
      advantages: [
  {
    title: "Precision & Repeatability",
    points: [
      "Hard tooling guarantees unmatched dimensional accuracy.",
      "Ensures consistent results even in complex, high-volume production."
    ]
  },
  {
    title: "Cost-Effective High Volume",
    points: [
      "Rapid cycle times make it ideal for mass production.",
      "Tooling cost is efficiently distributed across millions of components."
    ]
  },
  {
    title: "Superior Finish",
    points: [
      "Controlled stamping delivers clean edges and uniform quality.",
      "Often removes the need for additional finishing processes."
    ]
  },
  {
    title: "Complex Versatility",
    points: [
      "Supports progressive, compound, and transfer dies for multiple operations.",
      "Handles piercing, blanking, bending, and deep drawing with precision."
    ]
  },
  {
    title: "Material Efficiency",
    points: [
      "Optimized die design and automated nesting reduce material waste.",
      "Ensures maximum sheet utilization and lower cost per part."
    ]
  }
],

      expertise: [
  "Versatile Press Operations: Equipped with mechanical and hydraulic presses from 10 to 800 tons, handling varied part sizes and materials.",
  "Advanced Die Technology: Expertise in progressive, compound, and transfer dies for efficient, high-volume production.",
  "Comprehensive Stamping: Skilled in deep drawing, blanking, piercing, and controlled bending with precision and repeatability.",
  "Full-Service Die Management: Complete in-house lifecycle control—from CAD-based design to manufacturing and maintenance—for consistent quality.",
  "Integrated Post-Forming: Offering trimming, deburring, and surface finishing for ready-to-assemble components."
]


    },

    // ------------------------------
    // 2️⃣ Laser Cutting
    // ------------------------------
    {
      id: "fabrication-laser",
      title: "Laser Cutting",
      img: sub7,
      content:
        "Suresupply’s Laser Cutting systems deliver unmatched precision and speed through advanced fiber laser technology. This non-contact process achieves superior edge quality, minimal distortion, and extremely tight tolerances — perfect for complex profiles and high-volume production with consistent repeatability.",
      advantages: [
  {
    title: "Exceptional Cutting Depth",
    points: [
      "Handles diverse requirements with cutting capacity up to 25 mm thickness.",
      "Delivers uniform quality even on thicker materials."
    ]
  },
  {
    title: "Unrivaled Accuracy",
    points: [
      "Achieves complex geometries with ±0.1 mm precision tolerance.",
      "Ensures clean, burr-free edges for high-quality components."
    ]
  },
  {
    title: "Versatile Material Expertise",
    points: [
      "Processes stainless steel, mild steel, aluminum, and copper efficiently.",
      "Suitable for varied industrial and design applications."
    ]
  },
  {
    title: "Cost-Optimized Production",
    points: [
      "Automated nesting and smart material utilization minimize waste.",
      "Reduces overall production costs for high-volume runs."
    ]
  },
  {
    title: "Seamless Fabrication Prep",
    points: [
      "Provides accurate edge preparation ready for welding or assembly.",
      "Eliminates secondary finishing needs for faster turnaround."
    ]
  }
],

      expertise: [
  "Exceptional Cutting Depth: Handle diverse requirements with cutting capacity up to 25 mm thickness.",
  "Unrivaled Accuracy: Achieve complex geometries with high-precision cutting and a minimal ±0.1 mm tolerance.",
  "Versatile Material Expertise: Expertly process a full range of materials, including stainless steel, mild steel, aluminum, and copper.",
  "Cost-Optimized Production: Our automated nesting and material optimization processes guarantee minimal waste and lower production costs.",
  "Seamless Fabrication Prep: We provide precise edge preparation, making your components immediately ready for welding or final assembly."
]

    },

    // ------------------------------
    // 3️⃣ Plasma Cutting
    // ------------------------------
    {
      id: "fabrication-plasma",
      title: "Plasma Cutting",
      img: sub8,
      content:
        "Suresupply’s Plasma Cutting technology delivers high-speed, precise thermal cutting for conductive metals. Using high-velocity plasma jets, this method ensures clean cuts, tight tolerances, and minimal heat distortion — making it ideal for medium to heavy-gauge steel fabrication.",
     advantages: [
  {
    title: "Exceptional Speed",
    points: [
      "Operates at much faster travel speeds than oxy-fuel cutting.",
      "Reduces lead times significantly for repetitive or long straight cuts."
    ]
  },
  {
    title: "Cost-Effectiveness",
    points: [
      "High cutting speed and low consumable usage minimize production costs.",
      "Requires minimal post-processing, ideal for large-volume runs."
    ]
  },
  {
    title: "Reliable Accuracy",
    points: [
      "Controlled plasma arc ensures tight tolerances and excellent cut quality.",
      "Produces minimal heat-affected zones for precision fit-up in welding and assembly."
    ]
  },
  {
    title: "Material Versatility",
    points: [
      "Cuts any electrically conductive material, including carbon steel, stainless steel, aluminum, copper, and brass.",
      "Performs equally well across thin to thick material ranges."
    ]
  },
  {
    title: "Thick Plate Capability",
    points: [
      "Handles medium to heavy-gauge plates efficiently.",
      "Ideal for structural and heavy machinery component fabrication."
    ]
  }
],

      expertise: [
  "Heavy-Duty Capacity: CNC plasma cutting for materials up to 50 mm thickness.",
  "High-Speed Versatility: Rapid and efficient cutting for Mild Steel, Stainless Steel, and Aluminum.",
  "Unmatched Consistency: Automated Torch Height Control (ATHC) guarantees consistent quality and minimal material waste.",
  "Complex Geometry Expertise: Seamless ability to cut intricate contours and precise profiles.",
  "Full Post-Processing: Comprehensive services including grinding, edge finishing, and part marking to deliver ready-to-use components."
]

    },

    // ------------------------------
    // 4️⃣ Waterjet Cutting
    // ------------------------------
    {
      id: "fabrication-waterjet",
      title: "Waterjet Cutting",
      img: sub9,
      content:
        "Suresupply’s Waterjet Cutting process harnesses ultra-high-pressure water streams mixed with abrasive garnet to deliver cold, burr-free cutting across virtually any material. It eliminates thermal distortion, preserves structural integrity, and achieves exceptional precision and surface quality.",
      advantages: [
  {
    title: "Zero Heat-Affected Zone (HAZ) & Material Preservation",
    points: [
      "Cold-cutting process eliminates thermal stress, warping, and micro-cracking.",
      "Preserves the material’s structural integrity and metallurgical properties—ideal for heat-sensitive alloys and composites."
    ]
  },
  {
    title: "Ultimate Versatility Across All Materials",
    points: [
      "Processes virtually any material, including reflective metals, stainless steel, glass, stone, and composites.",
      "No tool changes required, ensuring seamless transitions between material types."
    ]
  },
  {
    title: "Exceptional Edge Quality & Minimal Post-Processing",
    points: [
      "Delivers smooth, clean, burr-free edges that often eliminate secondary finishing.",
      "Reduces total production time and cost with ready-to-use precision cuts."
    ]
  },
  {
    title: "Tight Tolerances and High Precision",
    points: [
      "Ultra-high-pressure stream with controlled abrasive mixing provides micron-level accuracy.",
      "Ideal for complex geometries requiring high dimensional precision."
    ]
  },
  {
    title: "Optimized Material Yield through Minimal Kerf",
    points: [
      "Fine, focused stream produces a narrow kerf for efficient material use.",
      "Maximizes nesting efficiency and reduces material waste."
    ]
  }
],

      expertise: [
  "Exceptional Material Thickness: Effortlessly cut metal and composite materials up to 150 mm thick.",
  "Unrivaled Accuracy: Achieve complex, intricate shapes with tight tolerances of just ±0.2 mm.",
  "Heat-Free Integrity (Cold Cutting): Our process eliminates the heat-affected zone (HAZ), preserving the material's properties and structural integrity.",
  "Sustainable and Efficient: An environmentally clean process that minimizes material waste, supporting your sustainability goals.",
  "Flexible Production Runs: Equipped to handle both rapid prototyping and low-volume production needs."
]

    },

    // ------------------------------
    // 5️⃣ EDM & Wire EDM
    // ------------------------------
    {
      id: "fabrication-edm",
      title: "EDM & Wire EDM",
      img: sub10,
      content:
        "At Suresupply, Electrical Discharge Machining (EDM) and Wire EDM redefine precision manufacturing. These non-contact, electrical erosion processes shape the hardest conductive materials into complex geometries with micron-level accuracy and superior surface finishes.",
      advantages: [
  {
    title: "Extreme Precision on Hard Materials",
    points: [
      "Machines the hardest conductive materials like steel, titanium, and carbide with micron-level accuracy.",
      "Enables production of complex geometries unattainable with conventional machining."
    ]
  },
  {
    title: "Zero Mechanical Stress & Burrs",
    points: [
      "Spark erosion process prevents mechanical stress, heat distortion, and burr formation.",
      "Preserves material integrity and reduces post-processing needs."
    ]
  },
  {
    title: "Intricate Geometry Creation",
    points: [
      "Excels in cutting tight radii, sharp corners, and intricate internal contours.",
      "Provides superior flexibility for molds, dies, and precision components."
    ]
  },
  {
    title: "Superior Surface Finish",
    points: [
      "Achieves surface finishes up to Ra 0.2 µm through controlled spark parameters.",
      "Often eliminates the need for grinding or polishing."
    ]
  },
  {
    title: "Cost-Effective for Complex Tooling",
    points: [
      "Creates near-perfect geometries in a single setup, reducing labor and machining time.",
      "Ideal for high-precision, low-volume manufacturing and toolmaking."
    ]
  }
],

     expertise: [
  "Advanced Wire EDM: Precision cutting up to 400 mm thickness for complex, high-tolerance components.",
  "High-Precision Tooling: Expert in durable, repeatable die and mold manufacturing.",
  "Superior Surface Finish: Achieves fine finishes up to Ra 0.2 µm for critical applications.",
  "Complex Geometry Machining: Accurately produces intricate contours and tight radii.",
  "Specialty Material Expertise: Skilled in machining tool steel, titanium, and carbide."
]


    },

    // ------------------------------
    // 6️⃣ Welding
    // ------------------------------
    {
      id: "fabrication-welding",
      title: "Welding",
      img: sub11,
      content:
        "Suresupply’s Welding Division combines advanced automation with metallurgical expertise to produce high-strength, defect-free welds across diverse materials. We specialize in MIG, TIG, Spot, and Arc welding processes for complex assemblies and precision structural fabrication.",
      advantages: [
  {
    title: "Superior Structural Integrity",
    points: [
      "Controlled process ensures molecular coalescence for a perfect, monolithic bond.",
      "Delivers maximum joint integrity, fatigue resistance, and reliability in critical applications."
    ]
  },
  {
    title: "Automated Precision & Consistency",
    points: [
      "Robotic welding guarantees precise bead placement and optimal heat control.",
      "Eliminates human variability, ensuring repeatable, high-quality welds across all production volumes."
    ]
  },
  {
    title: "Comprehensive Multi-Material Versatility",
    points: [
      "Expertise in MIG, TIG, Spot, and Arc processes for a wide range of materials.",
      "Capable of welding aluminum, stainless steel, and high-strength alloys with precision."
    ]
  },
  {
    title: "Integrated Assembly & Fixture Expertise",
    points: [
      "In-house fixture design ensures tight dimensional control and seamless fit-up.",
      "Efficiently manages complex assemblies for superior fabrication quality."
    ]
  },
  {
    title: "Rigorous Quality Validation",
    points: [
      "Each weld undergoes NDT and metallurgical testing for structural integrity.",
      "Ensures compliance with global standards and a defect-free final product."
    ]
  }
],

      expertise: [
  "Comprehensive Welding Capabilities: Advanced MIG, TIG, Spot, and Arc welding for diverse project needs.",
  "Automated Precision: Robotic systems ensure consistent speed, accuracy, and repeatability.",
  "Material Expertise: Skilled in welding aluminum, stainless steel, and high-strength alloys.",
  "Large Assembly Handling: In-house fixtures guarantee dimensional precision and fit-up quality.",
  "Assured Quality: In-house inspection, NDT, and metallurgical testing ensure structural integrity."
]

    }
  ]
},
// ==============================
// ⚙️ PLASTIC MODLDING
// ==============================
{
  id: "plastic-molding",
  title: "Plastic Molding",
  img: main3,
  content: `
    <h2 class="text-2xl font-semibold text-[#F05023] mb-4">
  Your Trusted Partner for Plastic Molding
</h2>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  Suresupply delivers precision-engineered polymer components through advanced injection molding 
  and polymer processing. Serving industries like automotive, consumer, medical, and industrial, 
  we ensure every part meets exacting standards for accuracy, finish, and durability.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  From Concept to Completion
</h3>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  We manage the full cycle — from design and mold prototyping to production and assembly — 
  streamlining your supply chain and reducing time-to-market.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  Beyond Parts — Engineered Polymer Solutions
</h3>
<p class="text-gray-700 text-base leading-relaxed">
  More than manufacturing, we engineer functional polymer systems tailored to your performance 
  and aesthetic needs — delivering durable, high-precision results every time.
</p>

  `,

  // ====================================
  // QUALITY ASSURANCE
  // ====================================
  qualityAssurance: {
    title: "Quality Assurance",
    description: `
      At Suresupply, Quality Assurance is the foundation of our plastic molding excellence. 
      We are committed to a zero-defect manufacturing culture, ensuring every molded part meets the most stringent global standards. 
      Our multi-layered quality system integrates dimensional validation, visual inspection, and performance testing for flawless outcomes.
    `,
    points: [
      {
        title: "Dimensional Verification",
        desc: "Using advanced 3D scanning and CMM systems, we ensure all critical dimensions are maintained within tight tolerances for perfect assembly fit and functionality."
      },
      {
        title: "Visual and Aesthetic Inspection",
        desc: "Controlled lighting inspections detect any surface imperfections. We ensure consistent gloss, color, and texture using spectrophotometers and gloss meters."
      },
      {
        title: "Functional Testing",
        desc: "Each molded part undergoes real-world functional assessments such as snap-fit testing, leak detection, and load evaluations for guaranteed reliability."
      },
      {
        title: "Mechanical Property Testing",
        desc: "Routine Melt Flow Index (MFI) and tensile tests confirm consistent viscosity, strength, and elasticity to meet engineering-grade performance specifications."
      }
    ],
    beyondTesting: [
      {
        title: "Rigorous Process Audits",
        desc: "Ongoing audits throughout the production cycle ensure continuous improvement and process consistency."
      },
      {
        title: "Statistical Process Control (SPC)",
        desc: "Advanced statistical monitoring maintains stable process variables, proactively preventing defects."
      },
      {
        title: "PPAP & Compliance Documentation",
        desc: "Comprehensive PPAP records provide proof of process capability, material traceability, and quality conformance."
      }
    ]
  },

  // ====================================
  // SUBCATEGORIES
  // ====================================
  subs: [
    // ------------------------------
    // 1️⃣ Injection Molding
    // ------------------------------
    {
      id: "plastic-injection",
      title: "Injection Molding",
      img: sub12,
      content:
        "Suresupply’s Injection Molding delivers exceptional precision and repeatability for complex plastic components. Our advanced systems enable high-volume, cost-effective production of intricate geometries using both thermoplastic and thermoset materials, ensuring optimal mechanical and aesthetic performance.",
      advantages: [
        {
          title: "Unmatched Precision & Repeatability",
          points: [
            "Micron-level dimensional accuracy across millions of cycles.",
            "Ensures seamless fitment for critical assemblies."
          ]
        },
        {
          title: "Cost-Effective High-Volume Production",
          points: [
            "Multi-cavity and automated systems achieve rapid cycle times.",
            "Ideal for mass production with fast tooling cost recovery."
          ]
        },
        {
          title: "Intricate Design Flexibility",
          points: [
            "Supports complex geometries, varied wall thicknesses, and insert molding.",
            "Allows integration of metal inserts for enhanced performance."
          ]
        },
        {
          title: "Superior Surface Finish",
          points: [
            "Polished mold cavities produce excellent finishes and visual appeal.",
            "Eliminates need for secondary finishing in most cases."
          ]
        },
        {
          title: "Broad Material Range",
          points: [
            "Processes a wide variety of thermoplastics and thermosets, including engineering-grade resins.",
            "Tailored to meet requirements for strength, heat resistance, and flexibility."
          ]
        }
      ],
      expertise: [
        "Machine Range: 80–800 tons for both small precision and large complex components.",
        "Advanced Molding Techniques: Multi-cavity, insert, and overmolding processes for integrated designs.",
        "Material Expertise: ABS, PP, Nylon, PC, PBT, and glass-filled polymers.",
        "Integrated Automation: Robotic part removal and inline quality control systems.",
        "Design Optimization: Mold flow simulation and DFM to minimize risk and enhance efficiency."
      ]
    },

    // ------------------------------
    // 2️⃣ Blow Molding
    // ------------------------------
    {
      id: "plastic-blow",
      title: "Blow Molding",
      img: sub13,
      content:
        "At Suresupply, Blow Molding is a core strength that enables the production of high-quality hollow plastic parts such as bottles, tanks, and reservoirs. Our expertise spans extrusion, injection, and stretch blow molding technologies, offering exceptional strength-to-weight ratios and design flexibility.",
      advantages: [
        {
          title: "High-Volume Cost Efficiency",
          points: [
            "Ideal for mass production of hollow parts with rapid cycle times.",
            "Lower tooling costs ensure economical scalability."
          ]
        },
        {
          title: "Superior Hollow Part Design",
          points: [
            "Easily creates complex hollow geometries with integrated handles and threads.",
            "Supports customized designs for diverse functional needs."
          ]
        },
        {
          title: "Lightweight & Durable",
          points: [
            "Excellent strength-to-weight ratio suitable for high-impact applications.",
            "Delivers long-lasting, resilient components."
          ]
        },
        {
          title: "Multi-Layer Co-Extrusion",
          points: [
            "Enables barrier layers for fuel tanks and food containers.",
            "Enhances chemical resistance and shelf life."
          ]
        },
        {
          title: "Material & Size Versatility",
          points: [
            "Processes HDPE, PET, PVC, and other engineering plastics.",
            "Suitable for parts from small bottles to large containers."
          ]
        }
      ],
      expertise: [
  "Precision Molding: Advanced Extrusion and Injection Blow Molding for complex, high-precision parts.",
  "High-Volume Production: Reliable manufacturing of containers and reservoirs with consistent quality.",
  "Multi-Layer Co-Extrusion: Superior barrier properties for enhanced product protection.",
  "Automated Quality Control: Trimming and leak testing for zero-defect assurance.",
  "Material Versatility: Expertise with HDPE, LDPE, PET, and PVC for diverse applications."
]


    },

    // ------------------------------
    // 3️⃣ Vacuum Forming
    // ------------------------------
    {
      id: "plastic-vacuum",
      title: "Vacuum Forming",
      img: sub14,
      content:
        "Suresupply’s Vacuum Forming service delivers large-format, cost-effective thermoplastic components through precise thermal forming. This technique produces durable parts with smooth finishes, ideal for enclosures, trays, and structural covers.",
      advantages: [
        {
          title: "Low-Cost Tooling & Fast Setup",
          points: [
            "Uses single-sided molds for economical tooling.",
            "Ideal for low to medium production volumes."
          ]
        },
        {
          title: "Perfect for Large & Deep-Drawn Parts",
          points: [
            "Capable of forming large, deep components cost-effectively.",
            "Suited for industrial panels, trays, and housings."
          ]
        },
        {
          title: "Rapid Prototyping",
          points: [
            "Simple tooling enables quick concept validation.",
            "Reduces lead time for new product introductions."
          ]
        },
        {
          title: "Versatile Material Options",
          points: [
            "Processes HIPS, ABS, PMMA, PETG, and Polycarbonate.",
            "Supports UV-stabilized and fire-rated materials."
          ]
        },
        {
          title: "Consistent Quality",
          points: [
            "Controlled heating and vacuum cycle ensure repeatable outcomes.",
            "Delivers consistent wall thickness and dimensional integrity."
          ]
        }
      ],
   expertise: [
  "Precision Forming: Handles sheets up to 6mm with exceptional dimensional accuracy.",
  "Rapid Production: Aluminum tooling enables quick prototyping and cost-efficient low-volume runs.",
  "Material Range: Skilled in HIPS, ABS, PMMA, PETG, and Polycarbonate for varied applications.",
  "Secondary Operations: Trimming, drilling, and assembly deliver complete, ready-to-use parts.",
  "Flexible Manufacturing: Fast mold change systems ensure shorter lead times and high efficiency."
]


    },

    // ------------------------------
    // 4️⃣ Compression Molding
    // ------------------------------
    {
      id: "plastic-compression",
      title: "Compression Molding",
      img: sub15,
      content:
        "Suresupply’s Compression Molding service specializes in high-performance, fiber-reinforced, and thermoset components that demand exceptional strength and dimensional stability. This process ensures optimal curing, precision, and material integrity for structural and electrical applications.",
      advantages: [
        {
          title: "Superior Material Integrity",
          points: [
            "High pressure and controlled curing deliver void-free, uniform parts.",
            "Ideal for high-strength composite and thermoset materials."
          ]
        },
        {
          title: "Excellent Dimensional Stability",
          points: [
            "Ensures consistent thickness, density, and structural uniformity.",
            "Perfect for performance-critical components."
          ]
        },
        {
          title: "Cost-Effective for Medium to High Volumes",
          points: [
            "Low scrap generation and reusable tooling reduce overall costs.",
            "Suited for repeatable production runs."
          ]
        },
        {
          title: "Material Versatility",
          points: [
            "Processes phenolic, epoxy, and fiber-reinforced composites.",
            "Offers superior heat and chemical resistance."
          ]
        },
        {
          title: "High-Capacity Production",
          points: [
            "Hydraulic presses up to 1000 tons handle large components.",
            "Supports precision molding for complex parts."
          ]
        }
      ],
      expertise: [
  "High-Capacity Pressing: Hydraulic systems up to 1000 tons for large and high-volume production.",
  "Advanced Materials: Expertise in phenolic, epoxy, and fiber-reinforced composites.",
  "Optimized Preparation: Preforming and preheating ensure uniform density and defect-free molding.",
  "Precision Control: Accurate temperature and pressure management for superior structural integrity.",
  "Complete Finishing: Post-curing and dimensional finishing deliver consistent, high-quality results."
]

    },

    // ------------------------------
    // 5️⃣ Extrusion Molding
    // ------------------------------
    {
      id: "plastic-extrusion",
      title: "Extrusion Molding",
      img: sub16,
      content:
        "Suresupply’s Extrusion Molding delivers high-efficiency continuous production of plastic profiles, pipes, and tubes with exceptional consistency. Our process ensures dimensional uniformity, material homogeneity, and superior surface finish.",
      advantages: [
        {
          title: "Continuous High-Volume Output",
          points: [
            "Ideal for long, consistent profiles such as pipes and seals.",
            "Ensures uninterrupted, cost-efficient production."
          ]
        },
        {
          title: "Exceptional Dimensional Consistency",
          points: [
            "Precision dies maintain tight tolerances along entire length.",
            "Ensures repeatable profile geometry and surface quality."
          ]
        },
        {
          title: "Cost-Effective Tooling",
          points: [
            "Simple die design reduces tooling investment.",
            "Fast setup accelerates production readiness."
          ]
        },
        {
          title: "Material Customization",
          points: [
            "Processes PVC, HDPE, PP, Nylon, and co-extruded blends.",
            "Supports multi-layer and multi-color combinations."
          ]
        },
        {
          title: "Enhanced Material Properties",
          points: [
            "Controlled extrusion yields consistent melt and mechanical strength.",
            "Produces smooth surfaces with minimal internal stress."
          ]
        }
      ],
      expertise: [
  "Integrated Processing: Inline sizing, cooling, and cutting ensure dimensional accuracy and high throughput.",
  "Material Flexibility: Capable of processing PVC, HDPE, PP, Nylon, and TPE for diverse industry needs.",
  "Co-Extrusion Expertise: Multi-layer and multi-color extrusion enhances both functionality and aesthetics.",
  "Post-Processing: Precision surface finishing, automated coiling, and packaging for ready-to-use delivery.",
  "Trusted Reliability: Consistent quality and performance backed by advanced extrusion technology."
]

    },

    // ------------------------------
    // 6️⃣ Reaction Injection Molding
    // ------------------------------
    {
      id: "plastic-rim",
      title: "Reaction Injection Molding (RIM)",
      img: sub17,
      content:
        "Suresupply’s Reaction Injection Molding (RIM) process enables the production of lightweight, durable polyurethane and composite components with intricate geometries. This low-pressure, high-efficiency technique provides excellent dimensional stability and surface quality for industrial and automotive applications.",
      advantages: [
        {
          title: "Complex Design Flexibility",
          points: [
            "Low-pressure process supports intricate geometries and large parts.",
            "Ideal for dashboards, bumpers, and protective enclosures."
          ]
        },
        {
          title: "Superior Material Properties",
          points: [
            "Produces tough, lightweight parts with excellent impact resistance.",
            "Delivers dimensional stability and chemical resistance."
          ]
        },
        {
          title: "Cost-Efficient Production",
          points: [
            "Low-pressure tooling reduces mold wear and maintenance costs.",
            "Ideal for both prototypes and low-to-medium volumes."
          ]
        },
        {
          title: "Aesthetic & Functional Finishes",
          points: [
            "Supports smooth, paintable surfaces and detailed texturing.",
            "Offers excellent adhesion for coatings and paints."
          ]
        },
        {
          title: "Rapid Cycle Time",
          points: [
            "Quick polymerization enables faster production cycles.",
            "Accelerates time-to-market for customized parts."
          ]
        }
      ],
      expertise: [
  "Advanced Material Systems: Specializing in Polyurethane, Epoxy, and Polyurea for diverse applications.",
  "Precision Mixing: Low-pressure metering ensures consistent, high-quality component output.",
  "Component Expertise: Manufacturing durable bumpers, dashboards, and protective enclosures.",
  "Versatile Finishing: Paintable surfaces, fine textures, and strong structural finishes available.",
  "Agile Production: Rapid prototyping and low-volume runs accelerate product development."
]

    }
  ]
},

{
  id: "machining",
  title: "Machining",
  img: main5,
  content: `
    <h2 class="text-2xl font-semibold text-[#F05023] mb-4">
  Your Trusted Partner for Precision Machining
</h2>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  Suresupply delivers precision-engineered parts with advanced CNC technology, skilled operators, 
  and strict quality control. From complex prototypes to large-scale production, we ensure accuracy, 
  consistency, and superior surface finish at every stage.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  From Concept to Completion
</h3>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  We handle the entire machining process — from design validation to final production — 
  using integrated CNC and automation systems for reliable, high-quality results every time.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  Beyond Parts — Engineered Solutions
</h3>
<p class="text-gray-700 text-base leading-relaxed">
  More than just fabrication, we engineer precision components that fit seamlessly 
  into your assemblies, enhancing performance and reliability.
</p>

  `,

  // ====================================
  // QUALITY ASSURANCE
  // ====================================
  qualityAssurance: {
    title: "Quality Assurance",
    description: `
      At Suresupply, Quality Assurance is integral to our machining excellence. Every part is validated for 
      dimensional accuracy, surface finish, and tolerance using advanced metrology and process control systems. 
      Our commitment to traceability and precision ensures zero-defect manufacturing for mission-critical components.
    `,
    points: [
      {
        title: "CMM Inspection",
        desc: "High-precision Coordinate Measuring Machines verify dimensional accuracy within microns."
      },
      {
        title: "Tool Calibration & Process Validation",
        desc: "Regular calibration and audits maintain consistent machining accuracy across production cycles."
      },
      {
        title: "Surface Roughness Testing",
        desc: "Precision-controlled surface finish checks ensure functional and aesthetic Ra values."
      },
      {
        title: "Material Traceability",
        desc: "Full traceability from raw material to finished component guarantees process accountability."
      }
    ],
    beyondTesting: [
      {
        title: "Process-Integrated Quality",
        desc: "Quality checks are embedded throughout machining — from setup to final inspection — ensuring zero deviations."
      },
      {
        title: "Operator Accountability",
        desc: "Highly skilled machinists conduct in-process checks to prevent defects and ensure consistency."
      },
      {
        title: "Precision Monitoring",
        desc: "Real-time SPC (Statistical Process Control) and tool wear tracking maintain dimensional accuracy."
      },
      {
        title: "Continuous Improvement",
        desc: "Kaizen-driven process optimization ensures sustained precision and efficiency."
      }
    ]
  },

  // ====================================
  // SUBCATEGORIES
  // ====================================
  subs: [
    // ------------------------------
    // 1️⃣ CNC Lathe Machining
    // ------------------------------
    {
      id: "machining-cnc-lathe",
      title: "CNC Lathe Machining",
      img: sub21,
      content:
        "At Suresupply, CNC Lathe Machining defines our precision promise. Utilizing advanced CNC technology, we produce flawless cylindrical, conical, and complex contoured components with exceptional accuracy. Our process ensures unmatched dimensional repeatability, superior finishes, and rapid throughput.",
      advantages: [
        {
          title: "Unmatched Dimensional Accuracy and Repeatability",
          points: [
            "Micron-level precision across high-volume runs.",
            "Guarantees perfect fitment and consistent quality."
          ]
        },
        {
          title: "Superior Surface Finish",
          points: [
            "Optimized tooling and rigid setups achieve mirror-like finishes.",
            "Often eliminates need for additional polishing."
          ]
        },
        {
          title: "Versatility in Material and Geometry",
          points: [
            "Capable of machining alloys, steels, brass, and aluminum.",
            "Handles complex internal/external features and threads."
          ]
        },
        {
          title: "High Efficiency and Rapid Throughput",
          points: [
            "Automated bar feeders and quick-change tooling minimize cycle time.",
            "Ideal for lights-out operation and large-scale production."
          ]
        },
        {
          title: "Complex Multi-Axis Capability",
          points: [
            "Multi-axis CNC lathes enable full machining in a single setup.",
            "Improves accuracy and eliminates secondary operations."
          ]
        }
      ],
      expertise: [
        "Precision Turning: Ferrous and non-ferrous materials machined to ultra-tight tolerances.",
        "Advanced Multi-Operation Capability: Single-setup turning, threading, and boring for efficiency.",
        "Diverse Product Range: Shafts, bushings, and custom components.",
        "Speed & Tolerance: Maintains ultra-high tolerance standards across high-speed runs."
      ]
    },

    // ------------------------------
    // 2️⃣ Multi-Axis VMC
    // ------------------------------
    {
      id: "machining-vmc",
      title: "Multi-Axis VMC (Vertical Machining Center)",
      img: sub22,
      content:
        "Suresupply’s Multi-Axis Vertical Machining Centers redefine precision through simultaneous 4 and 5-axis movement. These advanced systems enable complex contouring, deep cavity milling, and intricate drilling in one setup, ensuring unmatched accuracy and reduced production time.",
      advantages: [
        {
          title: "Single-Setup Manufacturing for Superior Accuracy",
          points: [
            "Eliminates re-fixturing and cumulative errors.",
            "Achieves superior geometric accuracy in minimal time."
          ]
        },
        {
          title: "Intricate Geometry and Undercut Capability",
          points: [
            "4 and 5-axis systems enable deep cavity and complex surface machining.",
            "Expands design flexibility and reduces manual intervention."
          ]
        },
        {
          title: "Flawless Surface Finish and Contouring",
          points: [
            "Optimal tool orientation ensures exceptional finish and contour precision.",
            "Reduces need for post-machining finishing operations."
          ]
        },
        {
          title: "Reduced Tooling and Fixturing Costs",
          points: [
            "Single-setup operation reduces custom jig and fixture expenses.",
            "Simplifies process flow for efficiency."
          ]
        },
        {
          title: "Optimized Cycle Time and Efficiency",
          points: [
            "Simultaneous movements and advanced tool paths shorten production cycles.",
            "Ideal for high-value precision components."
          ]
        }
      ],
    expertise: [
  "Advanced VMC Machining: Utilizing 3, 4, and 5-axis Vertical Machining Centers (VMC) for complex, high-precision component fabrication.",
  "High-Speed Material Processing: Specialized in rapid, efficient machining of challenging materials such as aluminum, steel, and advanced composites.",
  "Optimized Production Workflow: Seamless integration of CAD/CAM systems with sophisticated tool path optimization to ensure maximum efficiency and accuracy from design to production.",
  "Precision Tooling and Housing: Expertise in producing high-quality molds, dies, and custom precision housings for diverse industrial applications."
]

    },

    // ------------------------------
    // 3️⃣ Grinding
    // ------------------------------
    {
      id: "machining-grinding",
      title: "Grinding",
      img: sub23,
      content:
        "Suresupply’s Precision Grinding services ensure exceptional dimensional accuracy and superior surface finishes. Using cylindrical, surface, and centerless grinding, we achieve micrometer-level precision ideal for aerospace, automotive, and medical components.",
      advantages: [
        {
          title: "Extreme Dimensional Accuracy",
          points: [
            "Micron-level tolerances for critical assemblies.",
            "Essential for aerospace and high-performance parts."
          ]
        },
        {
          title: "Immaculate Surface Finish",
          points: [
            "Delivers low Ra values minimizing friction and wear.",
            "Enhances part life and functional performance."
          ]
        },
        {
          title: "Refinement of Hardened Materials",
          points: [
            "Corrects heat-treatment distortions for final precision.",
            "Retains material strength and hardness."
          ]
        },
        {
          title: "Geometric Control",
          points: [
            "Ensures superior flatness, roundness, and parallelism.",
            "Critical for sealing and rotating applications."
          ]
        },
        {
          title: "Cost-Effective for High Precision",
          points: [
            "Efficient finishing minimizes need for secondary polishing.",
            "Ideal for high-precision, medium-to-high volume runs."
          ]
        }
      ],
      expertise: [
  "Advanced Grinding: Expertise in surface, cylindrical, and centerless grinding for diverse applications.",
  "Dimensional Accuracy: Achieving ultra-high precision in flatness and roundness control for critical components.",
  "Superior Finishes: Delivering mirror-like, ultra-smooth finishes, even on the hardest materials.",
  "Comprehensive Support: Reliable partnership for both high-volume production and specialized tool room requirements."
]

    },

    // ------------------------------
    // 4️⃣ Gear Cutting
    // ------------------------------
    {
      id: "machining-gear-cutting",
      title: "Gear Cutting",
      img: sub24,
      content:
        "Our advanced Gear Cutting capabilities deliver high-precision tooth profiles with minimal backlash and vibration. Using CNC hobbing, shaping, and grinding, we produce gears that meet and exceed AGMA and ISO standards for accuracy and durability.",
      advantages: [
        {
          title: "Optimized Power Transmission",
          points: [
            "Precision tooth geometry ensures smooth, efficient motion.",
            "Minimizes noise, vibration, and power loss."
          ]
        },
        {
          title: "Exceptional Durability",
          points: [
            "Post-cutting grinding enhances strength and reduces stress points.",
            "Extends service life in demanding applications."
          ]
        },
        {
          title: "Global Standard Compliance",
          points: [
            "Meets AGMA, ISO, and DIN precision standards.",
            "Ensures interchangeability and reliability."
          ]
        },
        {
          title: "Versatility in Design and Material",
          points: [
            "Produces spur, helical, bevel, and worm gears.",
            "Works with steels, alloys, and engineering plastics."
          ]
        },
        {
          title: "High-Volume Repeatability",
          points: [
            "CNC automation ensures consistent, scalable production.",
            "Maintains accuracy over large runs."
          ]
        }
      ],
      expertise: [
  "Diverse Gear Types: We expertly manufacture Spur, Helical, Bevel, and Worm gears.",
  "Advanced Machining: Utilizing precision Hobbing, Shaping, and Broaching techniques.",
  "Quality & Durability: Offering professional Heat Treatment and highly accurate Tooth Grinding support.",
  "Rigorous Inspection: Guaranteeing quality with precise Inspection using state-of-the-art Profile and Lead Measurement tools."
]

    },

    // ------------------------------
    // 5️⃣ Super Finishing
    // ------------------------------
    {
      id: "machining-super-finishing",
      title: "Super Finishing",
      img: sub25,
      content:
        "Suresupply’s Super Finishing process perfects the final surface of critical components by eliminating micro-imperfections and enhancing performance characteristics such as fatigue strength, wear resistance, and lubrication retention.",
      advantages: [
        {
          title: "Reduced Friction and Wear",
          points: [
            "Achieves Ra values down to 0.05 µm.",
            "Minimizes friction, heat, and component wear."
          ]
        },
        {
          title: "Enhanced Fatigue Strength",
          points: [
            "Removes surface stress points, improving endurance.",
            "Increases component lifespan under cyclic loads."
          ]
        },
        {
          title: "Superior Sealing Capability",
          points: [
            "Creates ultra-flat surfaces for hydraulic and pneumatic sealing.",
            "Ensures minimal leakage and improved efficiency."
          ]
        },
        {
          title: "Improved Lubrication Retention",
          points: [
            "Plateau-like finishes enhance oil film formation.",
            "Optimizes hydrostatic and hydrodynamic lubrication."
          ]
        },
        {
          title: "Correction of Geometric Errors",
          points: [
            "Refines roundness, straightness, and dimensional accuracy.",
            "Ensures perfect final form."
          ]
        }
      ],
      expertise: [
  "Ultra-Fine Surface Finishes: Achieve exceptional smoothness with finishes down to Ra 0.05 µm.",
  "Enhanced Component Performance: Our finishing improves lubrication retention and ensures excellent dimensional stability, extending component life.",
  "Ideal for Critical Applications: Specializing in precision shafts, bearing races, and high-performance hydraulic parts.",
  "Flexible Production: Utilizing both cutting-edge automated and expert manual finishing setups to meet any volume or complexity requirement."
]

    }
  ]
},

{
  id: "rapid-prototyping",
  title: "Rapid Prototyping",
  img: main6,
  content: `
    <h2 class="text-2xl font-semibold text-[#F05023] mb-4">
  Your Trusted Partner for Rapid Prototyping
</h2>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  Suresupply turns ideas into reality with precision and speed. 
  Using advanced additive manufacturing, casting, and machining, 
  we create high-quality prototypes that validate design, test functionality, 
  and accelerate your path to production.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  From Concept to Completion
</h3>
<p class="text-gray-700 text-base leading-relaxed mb-4">
  We manage the entire prototyping process — from design intent 
  to functional, production-ready parts — ensuring accuracy, consistency, 
  and faster development cycles.
</p>

<h3 class="text-xl font-semibold text-[#F05023] mb-3">
  Beyond Parts — Integrated Solutions
</h3>
<p class="text-gray-700 text-base leading-relaxed">
  We deliver complete system-level prototypes, engineered for precision 
  and seamless fit within your final product.
</p>

  `,

  // ====================================
  // QUALITY ASSURANCE
  // ====================================
  qualityAssurance: {
    title: "Quality Assurance",
    description: `
      In Rapid Prototyping, we uphold the same uncompromising quality standards that define our production excellence. 
      Each prototype undergoes dimensional validation, structural integrity checks, and material consistency evaluation to ensure it accurately represents final production intent.
    `,
    points: [
      {
        title: "Surface Finish & Texture Validation",
        desc: "Layer resolution and post-processing checks ensure smooth, production-ready surfaces that reflect final product aesthetics."
      },
      {
        title: "Dimensional Accuracy Verification",
        desc: "3D scanning and digital comparison against CAD models guarantee precision fit and geometric accuracy."
      },
      {
        title: "Material Property Testing",
        desc: "Evaluation of tensile strength, hardness, and durability ensures prototypes meet functional performance standards."
      },
      {
        title: "Visual & Structural Inspection",
        desc: "Detailed inspection detects any layer adhesion issues, warping, or surface defects for flawless prototype quality."
      }
    ],
    beyondTesting: [
      {
        title: "Design-to-Print Accuracy",
        desc: "CAD data validation and build orientation optimization eliminate print errors and dimensional mismatches."
      },
      {
        title: "Layer-by-Layer Verification",
        desc: "Continuous process monitoring ensures consistent material deposition and structural uniformity."
      },
      {
        title: "Post-Processing Precision",
        desc: "Standardized sanding, coating, and finishing achieve production-representative results every time."
      },
      {
        title: "Feedback-Driven Refinement",
        desc: "Each prototype iteration refines print parameters and improves future production reliability."
      }
    ]
  },

  // ====================================
  // SUBCATEGORIES
  // ====================================
  subs: [
    // ------------------------------
    // 1️⃣ 3D Printing (Additive Manufacturing)
    // ------------------------------
    {
      id: "rapid-3dprinting",
      title: "3D Printing (Additive Manufacturing)",
      img: sub26,
      content:
        "Suresupply leads the industrial revolution with advanced 3D printing (Additive Manufacturing), creating intricate, functional, and lightweight parts directly from digital designs. By building components layer by layer, we achieve design freedom and complex internal structures that traditional methods cannot match. This technology enables rapid prototyping, customization, and sustainable production with minimal waste.",
      advantages: [
        {
          title: "Unparalleled Design Freedom and Complexity",
          points: [
            "Create intricate geometries, lattices, and organic shapes impossible with traditional manufacturing.",
            "Achieve lightweight yet highly functional components."
          ]
        },
        {
          title: "Accelerated Time-to-Market",
          points: [
            "Move rapidly from digital file to physical prototype or final part in hours or days.",
            "Facilitates quick design iteration and functional testing."
          ]
        },
        {
          title: "Minimal Material Waste (Sustainability)",
          points: [
            "Additive process deposits material only where needed, minimizing scrap.",
            "Optimizes material utilization and reduces cost."
          ]
        },
        {
          title: "On-Demand, Customized Production",
          points: [
            "Supports low-volume, personalized, or spare-part manufacturing without expensive tooling.",
            "Ideal for short runs and mass customization."
          ]
        },
        {
          title: "Part Consolidation and Simplification",
          points: [
            "Multiple components can be redesigned into a single complex printed part.",
            "Reduces assembly time and potential failure points."
          ]
        }
      ],
      expertise: [
        "Rapid Prototyping Excellence: Accelerated concept-to-model delivery for design validation.",
        "Diverse 3D Printing Technologies: FDM, SLA, and SLS systems for every complexity level.",
        "Comprehensive Material Selection: ABS, Nylon, PLA, PETG, and Resin for varied mechanical and aesthetic needs.",
        "Professional Finishing: Expert sanding, painting, and surface finishing for production-quality appearance."
      ]
    },

    // ------------------------------
    // 2️⃣ Metal 3D Printing
    // ------------------------------
    {
      id: "rapid-metalprinting",
      title: "Metal 3D Printing",
      img: sub27,
      content:
        "Suresupply’s Metal Additive Manufacturing (MAM) delivers fully functional, end-use metal parts that rival or exceed traditionally manufactured components. Our process enables complex internal geometries, lattice structures, and integrated features with superior mechanical performance and minimal material waste. This technology revolutionizes how critical components are designed and manufactured across aerospace, automotive, and tooling industries.",
      advantages: [
        {
          title: "Unmatched Strength-to-Weight Ratio",
          points: [
            "Creates lightweight lattice and topology-optimized designs with exceptional structural integrity.",
            "Delivers strength equal to or greater than cast or forged parts."
          ]
        },
        {
          title: "Consolidation of Multi-Part Assemblies",
          points: [
            "Redesigns multiple components into a single, integrated printed part.",
            "Eliminates welding, fastening, and reduces labor and defect risks."
          ]
        },
        {
          title: "Customization and On-Demand Tooling",
          points: [
            "Ideal for low-volume, high-performance parts and tooling inserts with conformal cooling channels.",
            "Reduces lead times and cost of conventional molds or dies."
          ]
        },
        {
          title: "High-Performance Material Capability",
          points: [
            "Processes advanced alloys like Titanium, Inconel, Aluminum, and Stainless Steel.",
            "Enables production of high-precision aerospace and energy components."
          ]
        },
        {
          title: "Integrated Functional Features",
          points: [
            "Incorporates conformal cooling or internal channels for superior thermal management.",
            "Improves cycle times and enhances part quality in downstream molding processes."
          ]
        }
      ],
      expertise: [
        "Diverse Material Portfolio: Stainless Steel, Aluminum, Titanium, and Inconel for high-performance applications.",
        "Near-Net Shape Precision: Produces parts requiring minimal post-machining and reduced lead time.",
        "Industry-Ready Solutions: Tailored for aerospace, automotive, and tooling industries demanding precision and performance."
      ]
    },

    // ------------------------------
    // 3️⃣ Vacuum Casting
    // ------------------------------
    {
      id: "rapid-vacuum",
      title: "Vacuum Casting",
      img: sub28,
      content:
        "Suresupply’s Vacuum Casting provides high-quality, production-like parts quickly and affordably, ideal for small to medium batch production. Using silicone molds from a master model, this process replicates fine details, smooth finishes, and material properties close to final production standards — making it a premium alternative to 3D printing for select applications.",
      advantages: [
        {
          title: "Functional and Mechanical Testing",
          points: [
            "Produces engineering-grade polyurethane parts mimicking final material properties.",
            "Enables accurate stress, fit, and functional validation."
          ]
        },
        {
          title: "Aesthetic and Ergonomic Evaluation",
          points: [
            "Delivers parts with production-like finishes for realistic design reviews.",
            "Supports paint, texture, and color evaluation for CMF assessments."
          ]
        },
        {
          title: "Low-Volume Market Entry (Pilot Runs)",
          points: [
            "Ideal for short-run launches, investor samples, or early market testing.",
            "Bridges the gap between prototype and mass production."
          ]
        },
        {
          title: "High-Quality Marketing Samples",
          points: [
            "Creates near-production-quality samples for presentations and stakeholder demonstrations.",
            "Enhances confidence in product design and readiness."
          ]
        },
        {
          title: "Versatility in Material Mimicry",
          points: [
            "Uses polyurethane resins to replicate varying hardness and flexibility levels.",
            "Accurately simulates final production materials."
          ]
        }
      ],
      expertise: [
        "Precision Silicone Tooling: Durable, accurate molds crafted directly from master patterns.",
        "Versatile Polyurethane Casting: Wide range of durometers and finishes for exact material replication.",
        "Exceptional Finish & Consistency: High-quality, consistent color and texture replication.",
        "Speed & Efficiency: Cost-effective short lead-time production for rapid product launches."
      ]
    },

    // ------------------------------
    // 4️⃣ CNC Pattern Making
    // ------------------------------
    {
      id: "rapid-cncpattern",
      title: "CNC Pattern Making",
      img: sub29,
      content:
        "Suresupply’s CNC Pattern Making service ensures unmatched precision and repeatability in master pattern creation — the foundation of superior casting and molding. Our advanced 3- and 5-axis CNC technology guarantees accuracy, consistency, and optimal surface finish for flawless downstream manufacturing.",
      advantages: [
        {
          title: "Unmatched Sub-Millimeter Accuracy",
          points: [
            "Achieves high-fidelity geometry directly from CAD data using multi-axis CNC machining.",
            "Eliminates rework and ensures perfect dimensional accuracy."
          ]
        },
        {
          title: "Perfect Repeatability and Consistency",
          points: [
            "Digital file-to-part manufacturing ensures zero variation across production runs.",
            "Critical for high-volume, uniform production."
          ]
        },
        {
          title: "Mastery of Complex Geometries",
          points: [
            "Effortlessly handles intricate curves, deep pockets, and variable wall thicknesses.",
            "Ideal for sophisticated pattern designs with tight parting lines."
          ]
        },
        {
          title: "Superior Surface Finish for Mold Readiness",
          points: [
            "Delivers burr-free surfaces, minimizing manual polishing needs.",
            "Ensures smoother cavity surfaces and enhanced final product finish."
          ]
        },
        {
          title: "Accelerated Lead Times and Cost Efficiency",
          points: [
            "Reduces manual finishing time while ensuring first-time accuracy.",
            "Shortens design-to-production cycle and lowers tooling cost."
          ]
        }
      ],
      expertise: [
        "Advanced Pattern Manufacturing: Expertise in wood, aluminum, and resin patterns tailored for diverse applications.",
        "Ultra-High Precision Machining: Equipped with 3- and 5-axis CNC routers for complex geometries and tight tolerances.",
        "Seamless Digital Integration: Direct CAD/CAM integration ensures precise dimensional replication.",
        "Finished for Performance: Includes expert texturing, polishing, and mold preparation for production readiness."
      ]
    }
  ]
}, 



{
  id: "quality-certification",
  title: "Quality & Certification",
  img: main6,

  content: `
    <h2 class="text-2xl font-semibold text-[#F05023] mb-4">
      Excellence by Design, Reliability by Process
    </h2>
    <p class="text-gray-700 text-base leading-relaxed mb-4">
      Quality for us isn’t an endpoint — it’s woven into every step of our process. 
      From concept to delivery, every decision, component, and collaboration is guided by precision and reliability. 
      We treat quality as a culture, not a checkpoint.
    </p>
    <p class="text-gray-700 text-base leading-relaxed mb-4">
      Our system integrates proven methodologies like <strong>Lean</strong>, <strong>Six Sigma</strong>, 
      <strong>Kaizen</strong>, and <strong>TQM</strong>, driving continuous improvement and operational excellence 
      across every process.
    </p>
  `,

  // ==========================
  // QUALITY PRINCIPLES / CARDS
  // ==========================
  cards: [
    {
      title: "Continuous Process Improvement",
      desc: "We apply Lean and Kaizen principles to eliminate waste and improve efficiency through regular audits, Gemba walks, and root-cause analysis."
    },
    {
      title: "Data-Driven Quality Management",
      desc: "Six Sigma and DMAIC frameworks help us maintain process stability and deliver measurable, lasting improvements."
    },
    {
      title: "Standardized Procedures",
      desc: "All operations follow clear SOPs and process maps to ensure consistency, traceability, and compliance with ISO and IATF standards."
    },
    {
      title: "Certification & Validation",
      desc: "Our processes are verified by NABL-certified labs and third-party auditors, ensuring transparency and trust in every report."
    }
  ],

  // ==========================
  // WHAT WE OFFER
  // ==========================
  offerings: {
    title: "What We Offer",
    description: `
      Our quality systems ensure precision, traceability, and continuous improvement across all operations.
    `,
    list: [
      "Process Capability & Statistical Process Control (SPC).",
      "Lean & Six Sigma Implementation Support.",
      "FMEA, Control Plan, and Risk Analysis Development.",
      "Training in Kaizen, 8D, and Problem Solving.",
      "Digital Quality Dashboards & Analytics.",
      "Vendor Qualification & Improvement Programs."
    ]
  },

  // ==========================
  // OUR COMMITMENT
  // ==========================
  commitment: {
    title: "Our Commitment",
    description: `
      True quality is confidence — in our products, our processes, and our people. 
      Through certified systems and a culture of improvement, we ensure every outcome reflects our philosophy: 
      <strong>“Excellence by Design, Reliability by Process.”</strong>
    `
  }
},

{
  id: "supply-chain",
  title: "World-Class Supply Chain",
  img: main6, // your image import
  content: `
    <p>
      At Suresupply, our World-Class Supply Chain is the backbone of reliable delivery and operational excellence. Powered by integrated technology and strategic partnerships, we ensure seamless coordination from raw material sourcing to final product dispatch. Our data-driven systems and global vendor network enable agility, transparency, and cost efficiency across every stage of production.
    </p>
  `,
  supplyChain: {
    title: "World-Class Supply Chain",
    description:
      "Powered by integrated technology and strategic partnerships, our data-driven operations ensure agility, transparency, and cost efficiency across every stage of production.",
    features: [
      {
        title: "Smart ERP Integration",
        desc: "End-to-end digital tracking of material flow, inventory, and logistics for real-time visibility.",
      },
      {
        title: "Vendor Management System",
        desc: "Centralized platform for supplier qualification, audits, and performance analytics.",
      },
      {
        title: "AI-Driven Forecasting",
        desc: "Predictive tools optimize inventory levels and procurement planning for on-time delivery.",
      },
      {
        title: "Digital Traceability",
        desc: "QR-based product tracking ensures transparency and accountability across the chain.",
      },
    ],

    // 🌍 New section: Beyond Logistics
    beyondLogistics: {
      title: "Beyond Logistics: A Culture of Operational Excellence",
      description:
        "Our culture of excellence extends beyond logistics — driving collaboration, efficiency, and sustainability across our supply network.",
      highlights: [
        {
          title: "Collaborative Partnerships",
          desc: "Long-term relationships with trusted global suppliers for consistency and mutual growth.",
          icon: "Handshake",
        },
        {
          title: "Zero-Delay Commitment",
          desc: "Streamlined workflows and JIT (Just-In-Time) systems minimize downtime and enhance responsiveness.",
          icon: "Clock",
        },
        {
          title: "Sustainability Focus",
          desc: "Eco-conscious sourcing and optimized transport routes reduce carbon footprint and material waste.",
          icon: "Leaf",
        },
        {
          title: "Continuous Process Optimization",
          desc: "Data analytics and feedback loops drive ongoing improvements in cost, speed, and reliability.",
          icon: "TrendingUp",
        },
      ],
    },
  },
}

];

export default categories;
