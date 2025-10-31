// components/CapabilitiesContent.js

import main1 from "../../public/dummy3.png";
import sub1 from "../../public/dummy3.png";
import sub2 from "../../public/dummy3.png";
import sub3 from "../../public/dummy3.png";
import sub4 from "../../public/dummy3.png";
import sub5 from "../../public/dummy3.png";

export const categories = [
  // ==============================
  // 🏭 CASTING
  // ==============================
  {
    id: "casting",
    title: "Casting",
    img: main1,
    content: `
      <h2 class="text-2xl font-semibold text-[#0A175C] mb-4">
        Your Trusted Partner for Precision Casting Solutions
      </h2>
      <p class="text-gray-700 text-base leading-relaxed mb-4">
        Our casting division is a hub where innovation seamlessly merges with meticulous execution. 
        We leverage cutting-edge engineering methodologies, profound metallurgical expertise, and advanced manufacturing processes 
        to consistently deliver components that meet and exceed the most stringent quality standards.
      </p>

      <h3 class="text-xl font-semibold text-[#0A175C] mb-3">
        From Concept to Completion: Our Comprehensive End-to-End Solutions
      </h3>
      <p class="text-gray-700 text-base leading-relaxed mb-4">
        We offer a complete suite of services encompassing the entire casting lifecycle—from concept to finished product. 
        Our simulations, pattern design, and precision finishing ensure optimal performance and cost-effectiveness.
      </p>

      <h3 class="text-xl font-semibold text-[#0A175C] mb-3">
        More Than Just Parts: We Engineer Integrated Solutions
      </h3>
      <p class="text-gray-700 text-base leading-relaxed">
        We go beyond manufacturing parts—we engineer complete solutions that integrate seamlessly into your systems, 
        reducing downtime, optimizing performance, and ensuring total reliability.
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
    <h2 class="text-2xl font-semibold text-[#0A175C] mb-4">
      Excellence in Forging Solutions for High-Performance Components
    </h2>
    <p class="text-gray-700 text-base leading-relaxed mb-4">
      SureSupply’s Forging Division delivers precision-engineered components that combine superior strength, durability, and structural integrity. 
      Utilizing advanced forging technologies, we produce parts that meet stringent industry requirements for performance, safety, and reliability.
    </p>

    <h3 class="text-xl font-semibold text-[#0A175C] mb-3">
      End-to-End Forging Capabilities
    </h3>
    <p class="text-gray-700 text-base leading-relaxed mb-4">
      Our capabilities span the entire production cycle—from material selection and billet preparation to heat treatment and machining. 
      Each process is controlled to ensure consistent quality, optimal grain flow, and excellent mechanical properties.
    </p>

    <h3 class="text-xl font-semibold text-[#0A175C] mb-3">
      Engineered Strength, Guaranteed Quality
    </h3>
    <p class="text-gray-700 text-base leading-relaxed">
      SureSupply’s forging expertise ensures products that perform under the most demanding conditions. 
      Every component is engineered to deliver precision, performance, and long service life.
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

];

export default categories;
