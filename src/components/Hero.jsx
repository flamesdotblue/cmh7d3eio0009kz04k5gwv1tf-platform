import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.15),transparent)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[30rem] bg-gradient-to-b from-sky-500/10 via-teal-400/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-8 items-center pt-10 md:pt-16">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
          >
            <Star className="h-3.5 w-3.5 text-yellow-400" />
            Tech • Interactive • Modern
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Building playful, modern, and secure web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-white/80 leading-relaxed max-w-prose"
          >
            I craft immersive UIs, security tools, and performant frontends. Explore my latest security utilities like XSS Hunter Pro and SQL Injector, and dive into interactive 3D web experiments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 flex items-center gap-3"
          >
            <a href="#projects" className="rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition">
              View Projects
            </a>
            <a href="#contact" className="rounded-lg border border-white/15 px-5 py-2.5 text-sm hover:bg-white/10 transition">
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-2xl overflow-hidden border border-white/10">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        </div>
      </div>
    </section>
  );
}
