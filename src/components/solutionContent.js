// ===== MAIN SOLUTION IMAGES =====
import solutionImg1 from "../../public/solutions/dummy1.png";
import solutionImg2 from "../../public/solutions/dummy1.png";
import solutionImg3 from "../../public/solutions/dummy1.png";
import solutionImg4 from "../../public/solutions/dummy1.png";
import solutionImg5 from "../../public/solutions/dummy1.png";

// ===== SUB IMAGES FOR "WHAT WE OFFER" =====
import sub1 from "../../public/solutions/dummy1.png";
import sub2 from "../../public/solutions/dummy1.png";
import sub3 from "../../public/solutions/dummy1.png";
import sub4 from "../../public/solutions/dummy1.png";

// ===== MAIN SOLUTIONS =====
export const solutions = [
  {
    id: 1,
    title: "End-to-End Manufacturing",
    image: solutionImg1,
    shortDesc:
      "SureSupply offers complete product realization — from concept design to large-scale production. We combine advanced engineering, proven supplier partnerships, and robust project management to deliver components that meet the highest standards of quality, cost, and precision.",
    whatWeOffer: [
      {
        img: sub1,
        title: "Design for Manufacturability (DFM)",
        desc: "Expert support to refine your designs for optimal cost, performance, and ease of production.",
      },
      {
        img: sub2,
        title: "Prototype to Production Transition",
        desc: "Rapid prototyping, pilot runs, and scalable mass production with full process validation.",
      },
      {
        img: sub3,
        title: "Multi-Process Expertise",
        desc: "Access to CNC machining, molding, casting, fabrication, finishing, and assembly — all under one platform.",
      },
      {
        img: sub4,
        title: "Lifecycle Ownership",
        desc: "End-to-end traceability and accountability from RFQ to delivery, ensuring consistent outcomes across batches.",
      },
    ],
  },
  {
    id: 2,
    title: "Inventory Management",
    image: solutionImg2,
    shortDesc:
      "We help you maintain a resilient and lean supply chain with intelligent inventory systems tailored to your production dynamics. Our goal is to reduce idle capital, prevent shortages, and ensure materials and components are always available when needed.",
    whatWeOffer: [
      {
        img: sub1,
        title: "Just-in-Time & Kanban Systems",
        desc: "Delivery synchronized with your production schedules to minimize inventory holding and maximize efficiency.",
      },
      {
        img: sub2,
        title: "Vendor Managed Inventory (VMI)",
        desc: "Automated replenishment based on real-time consumption and forecast data.",
      },
      {
        img: sub3,
        title: "Safety & Buffer Stock Programs",
        desc: "Strategic stocking for critical or high-turnover components to ensure continuity in production.",
      },
      {
        img: sub4,
        title: "Smart Inventory Tracking",
        desc: "Digitally monitored stock levels with batch traceability, shelf-life monitoring, and location mapping.",
      },
    ],
  },
  {
    id: 3,
    title: "Logistics & Delivery",
    image: solutionImg3,
    shortDesc:
      "SureSupply ensures every shipment arrives on time, intact, and optimized for cost and reliability. Our logistics ecosystem integrates technology, planning, and partnerships to guarantee seamless movement of materials — from supplier to your production floor, anywhere in the world.",
    whatWeOffer: [
      {
        img: sub1,
        title: "Global Delivery Network",
        desc: "Established logistics channels for domestic and international distribution with end-to-end reliability.",
      },
      {
        img: sub2,
        title: "Engineered Packaging Solutions",
        desc: "Custom-designed packaging for mechanical, electronic, and delicate components ensuring zero damage in transit.",
      },
      {
        img: sub3,
        title: "Optimized Freight Planning",
        desc: "Multi-mode transport options (air, sea, surface) with route and cost optimization for time-sensitive deliveries.",
      },
      {
        img: sub4,
        title: "Real-Time Shipment Visibility",
        desc: "Tracking dashboards, proactive updates, and proof-of-delivery confirmations for complete transparency.",
      },
    ],
  },
  {
    id: 4,
    title: "Quality Assurance",
    image: solutionImg4,
    shortDesc:
      "At SureSupply, quality isn’t an inspection step — it’s a mindset embedded into every process. We combine in-house precision testing, supplier audits, and certified third-party validation to ensure each component meets or exceeds your specifications.",
    whatWeOffer: [
      {
        img: sub1,
        title: "Advanced Metrology Capabilities",
        desc: "3D CMM measurement, surface finish testing, profile measurement, and dimensional validation.",
      },
      {
        img: sub2,
        title: "Material & Reliability Testing",
        desc: "Tensile, hardness, and chemical composition tests through accredited third-party labs.",
      },
      {
        img: sub3,
        title: "Supplier Quality Framework",
        desc: "Regular process audits, PPAP submissions, and statistical process control (SPC) monitoring.",
      },
      {
        img: sub4,
        title: "Zero-Defect Manufacturing Culture",
        desc: "Root cause analysis, FMEA reviews, and continuous improvement initiatives built into every project.",
      },
    ],
  },
  {
    id: 5,
    title: "Project Management Support",
    image: solutionImg5,
    shortDesc:
      "We go beyond manufacturing coordination — we provide full-cycle project management that integrates engineering, procurement, quality, and logistics into one cohesive flow. Each project is monitored through defined KPIs to ensure delivery on time, within cost, and to specification.",
    whatWeOffer: [
      {
        img: sub1,
        title: "Dedicated Project Managers",
        desc: "Single point of contact managing suppliers, schedules, and communication for total accountability.",
      },
      {
        img: sub2,
        title: "Comprehensive Planning & Reporting",
        desc: "Gantt-based timelines, progress dashboards, and regular milestone tracking.",
      },
      {
        img: sub3,
        title: "Cross-Functional Expertise",
        desc: "Integration of engineering, quality, supply chain, and commercial teams for end-to-end control.",
      },
      {
        img: sub4,
        title: "Continuous Performance Reviews",
        desc: "Periodic reviews on cost, delivery, and quality metrics with proactive risk mitigation strategies.",
      },
    ],
  },
];

// ===== ADVANCED ENGINEERING SERVICES =====
export const advancedServices = [
  {
    title: "New Product Development (NPD)",
    desc: "We convert your concept into a manufacturable product with cost, quality, and performance optimization.",
    points: [
      "3D modeling and simulation-based validation.",
      "Prototype to production transition.",
      "Supplier identification and tool development.",
    ],
  },
  {
    title: "Design for Manufacturing (DFM)",
    desc: "We ensure your designs are production-ready and cost-effective from day one.",
    points: [
      "Feasibility analysis and tolerance optimization.",
      "Process flow and tooling validation.",
      "Feedback loop between design and production teams.",
    ],
  },
  {
    title: "Reverse Engineering",
    desc: "We recreate precision components from samples or worn-out parts.",
    points: [
      "3D scanning and CAD model generation.",
      "Material and performance benchmarking.",
      "Design improvement for durability and manufacturability.",
    ],
  },
  {
    title: "Consulting & Technical Advisory",
    desc: "We help optimize your product, process, and sourcing strategy.",
    points: [
      "Vendor and cost benchmarking.",
      "Process improvement and lean implementation.",
      "Global sourcing support and risk mitigation.",
    ],
  },
];
