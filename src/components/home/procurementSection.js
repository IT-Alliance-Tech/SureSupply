'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'
import { motion, AnimatePresence } from 'framer-motion'
import { Outfit, Lato } from 'next/font/google'
import { useRouter } from 'next/navigation'

// ✅ Fonts
const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700'] })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

// ✅ Import images
import sectionBg from '../../../public/bg1p.png'
import cardBg from '../../../public/bgp.png'
import cardImg1 from '../../../public/dummyimg.png'
import cardImg2 from '../../../public/dummyimg.png'
import cardImg3 from '../../../public/dummyimg.png'
import cardImg4 from '../../../public/dummyimg.png'
import popupImg1 from '../../../public/dummy3.png'
import popupImg2 from '../../../public/dummy3.png'
import popupImg3 from '../../../public/dummy3.png'
import popupImg4 from '../../../public/dummy3.png'

// ✅ Procurement data array (for both cards + popups)
const procurementData = [
  {
    title: 'Realtime Pipeline',
    cardImg: cardImg1,
    popupImg: popupImg1,
    bullets: [
      'Every stakeholder sees live updates on order status, eliminating uncertainty.',
      'Transparent dashboards keep suppliers and customers aligned at every step.',
    ],
  },
  {
    title: 'Endless Services',
    cardImg: cardImg2,
    popupImg: popupImg2,
    bullets: [
      'Access all procurement services from a single unified platform.',
      'Streamline operations while keeping all stakeholders in sync.',
    ],
  },
  {
    title: 'Data at Your Fingertips',
    cardImg: cardImg3,
    popupImg: popupImg3,
    bullets: [
      'Quickly access all essential procurement data anytime, anywhere.',
      'Make informed decisions with real-time and accurate insights.',
    ],
  },
  {
    title: 'Simplified Collaboration',
    cardImg: cardImg4,
    popupImg: popupImg4,
    bullets: [
      'Collaborate seamlessly with internal and external teams.',
      'Share information and track progress effortlessly.',
    ],
  },
]

// ✅ Card component
const Card = ({ title, imgSrc, onClickPlus, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className={`relative rounded-2xl shadow-md p-5 flex flex-col justify-between overflow-hidden w-[200px] h-[250px] ${outfit.className}`}
    style={{
      backgroundImage: `url(${cardBg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-white/20 rounded-2xl pointer-events-none"></div>

    <div className="relative w-full h-40 flex items-center justify-center z-10">
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover rounded-md w-full h-full"
      />

      <motion.div
        whileHover={{ rotate: 90, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        onClick={onClickPlus}
        className="absolute top-2 right-2 w-6 h-6 bg-[#F05023] rounded-full flex items-center justify-center shadow-md cursor-pointer z-10"
      >
        <AddIcon className="text-white text-base" />
      </motion.div>
    </div>

    <div className="mt-4 z-10">
      <h4 className="text-sm font-semibold text-[#0A175C]">{title}</h4>
      <div className="mt-2 h-0.5 w-8 bg-[#F05023] rounded"></div>
    </div>
  </motion.div>
)

// ✅ Popup modal component
const PopupModal = ({ isOpen, onClose, imgSrc, title, bullets, isMobile }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        key="modal"
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/40"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={`relative bg-[#0A175C]/95 rounded-xl p-6 z-10 flex ${
            isMobile
              ? 'flex-col w-full max-w-sm h-auto'
              : 'flex-row w-[700px] h-[400px]'
          }`}
        >
          <div
            className={`relative bg-white rounded-lg flex items-center justify-center overflow-hidden ${
              isMobile ? 'w-full h-48 mb-4' : 'w-1/2 h-full'
            }`}
          >
            <Image src={imgSrc} alt={title} fill className="object-contain" />
          </div>

          <div
            className={`flex flex-col text-white ${
              isMobile ? 'w-full' : 'ml-6 w-1/2'
            } justify-start`}
          >
            <h3
              className={`font-extrabold text-[26px] text-[#F05023] mb-4 ${outfit.className}`}
            >
              {title}
            </h3>

            <ul
              className={`list-disc list-inside space-y-2 text-base leading-relaxed ${lato.className}`}
            >
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div
              className={`mt-auto flex ${
                isMobile ? 'justify-start mt-4' : 'justify-end mt-auto'
              }`}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="text-[#F05023] font-semibold hover:underline cursor-pointer"
              >
                Back &lt;
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

// ✅ Main component
export default function ProcurementSection() {
  const [openPopup, setOpenPopup] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleScrollToQuote = () => {
    router.push('#quoteForm')
  }

  return (
    <section
      className="w-full py-10 px-8 flex justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${sectionBg.src})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-[1200px] flex flex-col lg:flex-row gap-10 items-center lg:items-stretch z-10"
      >
        {/* Mobile heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`w-full lg:hidden mb-6 text-center ${outfit.className}`}
        >
          <h2 className="text-3xl font-extrabold text-[#0A175C] leading-tight">
            Simplifying Procurement, <br />
            <span>
              From <span className="text-[#F05023]">RFQ</span> to{' '}
              <span className="text-[#F05023]">Delivery</span>
            </span>
          </h2>
          <p className="mt-4 text-[#0A175C]">
            Navigate our comprehensive manufacturing journey from initial
            concept to final delivery.
          </p>
        </motion.div>

        {/* ✅ Cards grid (mapped) */}
        <div
          className={`w-full lg:w-11/20 mx-auto ${
            isMobile
              ? 'flex flex-col gap-8 mt-6'
              : 'grid grid-cols-3 grid-rows-2 gap-6'
          }`}
        >
          {procurementData.map((item, i) => {
            let positionClass = ''
            if (!isMobile) {
              switch (i) {
                case 0:
                  positionClass = 'col-start-1 row-start-1 relative top-35'
                  break
                case 1:
                  positionClass = 'col-start-2 row-start-1'
                  break
                case 2:
                  positionClass = 'col-start-2 row-start-2'
                  break
                case 3:
                  positionClass = 'col-start-3 row-span-2 flex items-center top-35'
                  break
              }
            } else {
              positionClass =
                i % 2 === 0
                  ? 'flex justify-start w-full ml-3'
                  : 'flex justify-end w-full mr-3'
            }

            return (
              <div key={i} className={positionClass}>
                <Card
                  title={item.title}
                  imgSrc={item.cardImg}
                  delay={i * 0.1}
                  onClickPlus={() => setOpenPopup(i)}
                />
              </div>
            )
          })}
        </div>

        {/* Right section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`lg:w-9/20 w-full hidden lg:flex flex-col justify-center ${outfit.className}`}
        >
          <h2 className="text-4xl font-extrabold text-[#0A175C] leading-tight">
            Simplifying Procurement, <br />
            <span>
              From <span className="text-[#F05023]">RFQ</span> to{' '}
              <span className="text-[#F05023]">Delivery</span>
            </span>
          </h2>

          <p className={`mt-6 text-[#0A175C] max-w-md ${lato.className}`}>
            Navigate our comprehensive manufacturing journey from initial
            concept to final delivery.
          </p>

          {/* ✅ Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToQuote}
            className="mt-8 bg-[#F05023] text-white px-6 py-3 rounded-lg shadow hover:shadow-md w-max font-outfit cursor-pointer"
          >
            Get Quote Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ✅ Popups (mapped) */}
      {procurementData.map((item, i) => (
        <PopupModal
          key={i}
          isOpen={openPopup === i}
          onClose={() => setOpenPopup(null)}
          imgSrc={item.popupImg}
          title={item.title}
          bullets={item.bullets}
          isMobile={isMobile}
        />
      ))}
    </section>
  )
}
