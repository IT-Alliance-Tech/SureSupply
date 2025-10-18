'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'

// ✅ Import individual images for each card
import cardImg1 from '../../../public/dummyimg.png'
import cardImg2 from '../../../public/dummyimg.png'
import cardImg3 from '../../../public/dummyimg.png'
import cardImg4 from '../../../public/dummyimg.png'

// ✅ Import section and card background images
import sectionBg from '../../../public/bg1p.png'
import cardBg from '../../../public/bgp.png'

// ✅ Import pop-up images
import popupImg1 from '../../../public/dummy3.png'
import popupImg2 from '../../../public/dummy3.png'
import popupImg3 from '../../../public/dummy3.png'
import popupImg4 from '../../../public/dummy3.png'

const Card = ({ title, imgSrc, onClickPlus }) => (
  <div
    className="relative rounded-2xl shadow-md p-5 flex flex-col justify-between overflow-hidden w-[200px] h-[250px]"
    style={{
      backgroundImage: `url(${cardBg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-white/20 rounded-2xl pointer-events-none"></div>

    {/* Image section */}
    <div className="relative w-full h-50 flex items-center justify-center z-10">
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover rounded-md w-full h-full"
      />

      {/* Orange circular + button */}
      <div
        onClick={onClickPlus}
        className="absolute top-0 right-2 w-6 h-6 bg-[#F05023] rounded-full flex items-center justify-center shadow-md hover:bg-[#F05023] cursor-pointer z-10"
      >
        <AddIcon className="text-white text-base" />
      </div>
    </div>

    {/* Title section */}
    <div className="mt-4 z-10">
      <h4 className="text-sm font-medium text-[#0A175C]">{title}</h4>
      <div className="mt-2 h-0.5 w-8 bg-[#F05023] rounded"></div>
    </div>
  </div>
)

const PopupModal = ({ isOpen, onBack, imgSrc, title, bullets, isMobile }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-start z-50 p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" onClick={onBack}></div>

      {/* Modal box */}
      <div
        className={`relative bg-[#0A175C]/90 rounded-lg p-6 z-10 flex ${
          isMobile ? 'flex-col w-full max-w-sm h-auto' : 'flex-row w-[700px] h-[400px]'
        }`}
      >
        {/* Left / Top image */}
        <div
          className={`relative bg-white rounded flex items-center justify-center p-4 ${
            isMobile ? 'w-full h-48 mb-4' : 'w-1/2 h-full'
          }`}
        >
          <Image src={imgSrc} alt={title} fill className="object-contain" />
        </div>

        {/* Right / Bottom content */}
        <div
          className={`flex flex-col text-white ${
            isMobile ? 'w-full' : 'ml-4 w-1/2'
          } justify-start pt-0`}
        >
          <div className={`${isMobile ? '' : 'pt-8'}`}>
            <h3 className="font-extrabold text-[28px] text-[#F05023] mb-4">{title}</h3>
            <ul className="list-disc list-inside space-y-2 text-base text-[18px]">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          {/* Back button */}
          <div className={`mt-auto flex ${isMobile ? 'justify-start mt-4' : 'justify-end mt-auto'}`}>
            <button
              onClick={onBack}
              className="text-[#F05023] font-semibold hover:underline"
            >
              Back &lt;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProcurementSection = () => {
  const [openPopup, setOpenPopup] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const popupData = [
    {
      img: popupImg1,
      title: "Realtime Pipeline",
      bullets: [
        "Every stakeholder sees live updates on order status, eliminating uncertainty.",
        "Transparent dashboards keep suppliers and customers aligned at every step."
      ],
    },
    {
      img: popupImg2,
      title: "Endless services",
      bullets: [
        "Access all procurement services from a single unified platform.",
        "Streamline operations while keeping all stakeholders in sync."
      ],
    },
    {
      img: popupImg3,
      title: "Data at your fingertips",
      bullets: [
        "Quickly access all essential procurement data anytime, anywhere.",
        "Make informed decisions with real-time and accurate insights."
      ],
    },
    {
      img: popupImg4,
      title: "Simplified Collaboration",
      bullets: [
        "Collaborate seamlessly with internal and external teams.",
        "Share information and track progress effortlessly."
      ],
    },
  ]

  return (
    <section
      className={`w-full py-10 px-8 flex justify-center bg-cover bg-center relative ${
        isMobile ? 'flex-col items-center' : ''
      }`}
      style={{ backgroundImage: `url(${sectionBg.src})` }}
    >
      <div className="relative max-w-[1200px] w-full flex flex-col lg:flex-row gap-10 items-center lg:items-stretch z-10">
        {/* Mobile Heading */}
        <div className="w-full lg:hidden mb-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#0A175C] leading-tight">
           {` Simplifying Procurement,`} <br />
            <span>
              From <span className="text-[#F05023]">RFQ</span> to{' '}
              <span className="text-[#F05023]">Delivery</span>
            </span>
          </h2>
          <p className="mt-4 text-[#0A175C]">
           {` Navigate our comprehensive manufacturing journey from initial concept to final delivery.`}
          </p>
        </div>

        {/* Cards */}
        <div
          className={`lg:w-11/20 w-full ${
            isMobile
              ? 'flex flex-col gap-8 mt-6'
              : 'grid grid-cols-3 grid-rows-2 gap-6'
          }`}
        >
          {/* Card 1 - left */}
          <div className={`${isMobile ? 'flex justify-start w-full ml-3' : 'col-start-1 row-start-1 relative top-33'}`}>
            <Card
              title={popupData[0].title}
              imgSrc={cardImg1}
              onClickPlus={() => setOpenPopup(0)}
            />
          </div>

          {/* Card 2 - right */}
          <div className={`${isMobile ? 'flex justify-end w-full mr-3' : 'col-start-2 row-start-1'}`}>
            <Card
              title={popupData[1].title}
              imgSrc={cardImg2}
              onClickPlus={() => setOpenPopup(1)}
            />
          </div>

          {/* Card 3 - left */}
          <div className={`${isMobile ? 'flex justify-start w-full ml-3' : 'col-start-2 row-start-2'}`}>
            <Card
              title={popupData[2].title}
              imgSrc={cardImg3}
              onClickPlus={() => setOpenPopup(2)}
            />
          </div>

          {/* Card 4 - right */}
          <div className={`${isMobile ? 'flex justify-end w-full mr-3' : 'col-start-3 row-span-2 flex items-center'}`}>
            <Card
              title={popupData[3].title}
              imgSrc={cardImg4}
              onClickPlus={() => setOpenPopup(3)}
            />
          </div>
        </div>

        {/* Desktop Right Side (unchanged) */}
        <div className="lg:w-9/20 w-full hidden lg:flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-[#0A175C] leading-tight">
            Simplifying Procurement, <br />
            <span>
              From <span className="text-[#F05023]">RFQ</span> to{' '}
              <span className="text-[#F05023]">Delivery</span>
            </span>
          </h2>

          <p className="mt-6 text-[#0A175C] max-w-md">
           {` Navigate our comprehensive manufacturing journey from initial concept to final delivery.`}
          </p>

          <button className="mt-8 bg-[#F05023] text-white px-6 py-3 rounded-lg shadow hover:shadow-md w-max">
           {` Get Quote Now`}
          </button>
        </div>
      </div>

      {/* Popups */}
      {popupData.map((p, i) => (
        <PopupModal
          key={i}
          isOpen={openPopup === i}
          onBack={() => setOpenPopup(null)}
          imgSrc={p.img}
          title={p.title}
          bullets={p.bullets}
          isMobile={isMobile}
        />
      ))}
    </section>
  )
}

export default ProcurementSection
