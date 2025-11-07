'use client';

import heroImg from '../../../public/bannerC.png';

export default function AboutHero() {
  return (
    <section
      className="relative bg-gray-50 py-40 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Empowering Manufacturers Across India
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md">
          Connecting you to growth, efficiency, and trusted partners.
        </p>

        {/* CTA Button */}
        <a
          href="#about-details"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
           Learn More About Us
        </a>
      </div>
    </section>
  );
}
