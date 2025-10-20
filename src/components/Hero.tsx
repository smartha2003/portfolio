"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  // const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-28 bg-white">

      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.2fr] gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05, ease: "easeOut" }}
            className="text-2xl font-bold text-ink mb-2"
          >
            Shubhada Martha
          </motion.h2>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.1, ease: "easeOut" }}
            className="text-sm font-medium text-primary mb-4 uppercase tracking-wider"
          >
            FULL-STACK & AGENTIC AI ENGINEER
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight tracking-tight"
          >
            Designing and building products that matter.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.3, ease: "easeOut" }}
            className="text-lg text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            I build because I love building — the process of turning a blank page into something real fuels me. I start with the problem, make it exist first, and keep improving it until it&apos;s something people truly love to use. My products blend AI, design, and engineering to solve real challenges and push beyond what already exists.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white border-0 shadow-sm">
              <Link href="#projects">
                View Core Projects
              </Link>
            </Button>
            <Link 
              href="/about" 
              className="text-ink hover:text-primary inline-flex items-center gap-1 transition-colors duration-200"
            >
              More about me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Proof Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.5, ease: "easeOut" }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-muted mb-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>20+ users onboarded via TestFlight</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>8+ production websites built and deployed</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:justify-start items-center gap-6"
          >
            <Link
              href="https://github.com/smartha2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shubhada-martha/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:shubhadam2003@gmail.com"
              className="p-3 bg-white border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/me.jpeg"
                alt="Shubhada Martha"
                fill
                className="rounded-xl object-cover border border-border bg-white shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

