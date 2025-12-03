// components/Hero.jsx
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: hero text */}
          <div className="lg:col-span-7">
            <div className="hero-glass p-8">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="font-site h1-mono text-4xl md:text-5xl lg:text-6xl text-warmgray-900"
              >
                Shrinikheathan <br /> Arunkumar
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="mt-4 font-site text-base md:text-lg text-warmgray-700 max-w-3xl"
              >
                Embedded systems. Connected devices. Real-time dashboards and engineering that feels alive.
              </motion.p>

              <div className="mt-6 flex items-center gap-4">
                <a href="#projects" className="btn btn-primary">View Work</a>
                <a href="/ShriniResumeFinal.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Resume</a>
              </div>
            </div>
          </div>

          {/* RIGHT: island card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="current-card"
            >
              <div className="flex flex-col gap-4">
                <div className="font-site text-warmgray-900 text-lg font-semibold">
                  So you made it here..
                </div>

                <div className="font-site text-warmgray-700 leading-relaxed">
                  Thank you. The machines I grew up admiring weren’t just tools were proof that precision, curiosity and audacity can shape 
                  entire industries. That’s the energy I bring into Automotive, Embedded Systems and IoT. I’m wired to understand how things 
                  move, why they move, and how to make them move better. Scroll down to know why I deserve it more than anyone else.
                </div>

                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
