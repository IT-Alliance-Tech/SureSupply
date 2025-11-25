"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();

  const handleScrollToVendorForm = () => {
    // Step 1: Update query param
    router.replace("/?type=vendor", { scroll: false });

    // Step 2: Scroll instantly to the top
    window.scrollTo({ top: 0, behavior: "instant" });

    // Step 3: Smooth scroll to the form after a delay
    setTimeout(() => {
      const formEl = document.getElementById("quoteForm");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 350);
  };

  return (
    <section className="bg-white py-20 px-6 sm:px-12 flex justify-center items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative backdrop-blur-xl bg-white/40 border border-gray-300/40 text-[#0A175C] rounded-3xl shadow-2xl p-10 sm:p-14 max-w-3xl w-full text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold font-outfit mb-4">
          Become a <span className="text-[#F05023]">SureSupply Partner</span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-700 font-lato mb-8">
          {`Let’s build something remarkable — together.`}
        </p>

        <p className="text-base sm:text-lg text-gray-600 font-lato mb-10">
          Fill out the form below to start your onboarding journey.
        </p>

        <motion.button
          onClick={handleScrollToVendorForm}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-[#F05023] hover:bg-[#d9461f] text-white font-semibold px-8 py-3 rounded-full shadow-lg font-outfit cursor-pointer"
        >
          Apply to Join Supplier Network
        </motion.button>
      </motion.div>
    </section>
  );
}
