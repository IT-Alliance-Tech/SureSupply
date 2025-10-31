// components/solutionContent.js

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
      "From concept to mass production — we manage the entire lifecycle with flexibility, precision, and speed.",
    whatWeOffer: [
      {
        img: sub1,
        title: "Multi-Process Manufacturing",
        desc: "Casting, forging, machining, molding, and more — all under one network. (Linked with Capabilities section)",
      },
      {
        img: sub2,
        title: "Tooling & Fixture Development",
        desc: "Custom tooling support to enhance production accuracy and reduce lead time.",
      },
      {
        img: sub3,
        title: "Flexible Batch Sizes",
        desc: "From prototype quantities to large-scale production batches.",
      },
      {
        img: sub4,
        title: "Vendor Development",
        desc: "Sourcing and managing partners for cost-efficient manufacturing.",
      },
    ],
  },
  {
    id: 2,
    title: "Inventory Management",
    image: solutionImg2,
    shortDesc:
      "Optimized and lean supply chain management ensuring uninterrupted production flow.",
    whatWeOffer: [
      {
        img: sub1,
        title: "JIT & VMI Programs",
        desc: "Just-in-Time and Vendor Managed Inventory for lean operations.",
      },
      {
        img: sub2,
        title: "Real-Time Tracking",
        desc: "Monitor stock levels and movement with warehouse management systems.",
      },
      {
        img: sub3,
        title: "Strategic Stocking",
        desc: "Stock planning for domestic and export requirements.",
      },
      {
        img: sub4,
        title: "Packaging & Barcoding",
        desc: "Customized packaging and barcoding for easy identification.",
      },
    ],
  },
  {
    id: 3,
    title: "Logistics & Delivery",
    image: solutionImg3,
    shortDesc:
      "We handle global logistics for timely, cost-optimized, and safe product delivery.",
    whatWeOffer: [
      {
        img: sub1,
        title: "Domestic & Export Logistics",
        desc: "Seamless coordination for global shipping.",
      },
      {
        img: sub2,
        title: "Consolidated Shipments",
        desc: "Multi-location dispatch and freight optimization.",
      },
      {
        img: sub3,
        title: "Freight Optimization",
        desc: "Smart packaging and route planning to reduce cost.",
      },
      {
        img: sub4,
        title: "Tracking & Documentation",
        desc: "Transparent updates and complete export compliance.",
      },
    ],
  },
  {
    id: 4,
    title: "Quality Assurance",
    image: solutionImg4,
    shortDesc:
      "Every part is inspected and certified to meet the highest industry standards.",
    whatWeOffer: [
      {
        img: sub1,
        title: "Comprehensive Testing",
        desc: "Dimensional, metallurgical, and performance testing with NABL certification.",
      },
      {
        img: sub2,
        title: "Global Quality Standards",
        desc: "PPAP, FMEA, and SPC compliance documentation.",
      },
      {
        img: sub3,
        title: "Continuous Improvement",
        desc: "Root cause analysis and CAPA-driven improvements.",
      },
      {
        img: sub4,
        title: "Third-Party Verification",
        desc: "Independent audits and lab tests to ensure reliability.",
      },
    ],
  },
  {
    id: 5,
    title: "Project Management Support",
    image: solutionImg5,
    shortDesc:
      "Dedicated project coordination ensuring delivery, cost, and quality targets are met efficiently.",
    whatWeOffer: [
      {
        img: sub1,
        title: "Dedicated Project Leads",
        desc: "One point of contact for every client project.",
      },
      {
        img: sub2,
        title: "Real-Time Tracking",
        desc: "Milestone-based progress visibility and status reports.",
      },
      {
        img: sub3,
        title: "Cross-Team Collaboration",
        desc: "Smooth coordination between design, production, and QA teams.",
      },
      {
        img: sub4,
        title: "Change Management",
        desc: "Managing technical updates and documentation during project lifecycle.",
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
