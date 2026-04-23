"use client"
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, Variants } from 'motion/react'
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1656821991452-648b8312a30b?auto=compress&cs=tinysrgb&w=1200',
    eyebrow: 'Elegance Redefined',
    title: 'The Art of Gifting',
    subtitle: 'LUXURY • BESPOKE • TIMELESS',
    button: 'EXPLORE COLLECTIONS'
  },
  {
    image: 'https://images.unsplash.com/photo-1656821991475-86b1b2ba3c32?auto=compress&cs=tinysrgb&w=1200',
    eyebrow: 'Exquisite Corporate',
    title: 'Collections',
    subtitle: 'PREMIUM • PROFESSIONAL • UNIQUE',
    button: 'VIEW CORPORATE'
  },
  {
    image: 'https://images.pexels.com/photos/32498681/pexels-photo-32498681.jpeg?auto=compress&cs=tinysrgb&w=1200',
    eyebrow: 'Celebrate Every',
    title: 'Moment',
    subtitle: 'FESTIVE • GOLDEN • EXCLUSIVE',
    button: 'VIEW LUXURY'
  },
  {
    image: 'https://images.pexels.com/photos/28769884/pexels-photo-28769884.jpeg?auto=compress&cs=tinysrgb&w=1200',
    eyebrow: 'Traditional',
    title: 'Heritage',
    subtitle: 'DIWALI • FESTIVE • JOYFUL',
    button: 'DISCOVER FESTIVE'
  }
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 1.1,
    transition: { type: 'spring', stiffness: 300, damping: 30 } as const
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 } as const,
      opacity: { duration: 0.8 },
      scale: { duration: 1.5, ease: 'easeOut' }
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 } as const,
      opacity: { duration: 0.4 }
    }
  })
} as const

  return (
    <section
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Background Images with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slides[current].image}')`,
            }}
          />
        </AnimatePresence>
      </div>
      
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" aria-hidden="true" />

      {/* Slider Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-30 group"
      >
        <ChevronLeft size={40} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-30 group"
      >
        <ChevronRight size={40} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
      </button>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex justify-end">
        <div className="max-w-xl text-right flex flex-col items-center lg:items-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center lg:items-end"
            >
              <span className="text-white text-sm lg:text-lg tracking-[0.2em] font-light mb-2 uppercase">
                {slides[current].eyebrow}
              </span>
              <h1 className="font-script text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-6">
                {slides[current].title}
              </h1>
              
              <div className="overflow-hidden mb-10 w-full lg:w-auto">
                <motion.p 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-white/90 text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium text-center lg:text-right border-t border-b border-white/20 py-4 px-6 whitespace-nowrap bg-black/5 backdrop-blur-sm"
                >
                  {slides[current].subtitle}
                </motion.p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollTo('#collections')}
                  className="px-12 py-4 border border-white text-white text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-500 font-medium bg-black/10 backdrop-blur-md"
                >
                  {slides[current].button}
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1)
              setCurrent(i)
            }}
            className={`transition-all duration-500 rounded-full h-1.5 ${
              i === current ? 'w-8 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors cursor-pointer bg-transparent border-none hidden lg:block z-30"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  )
}


