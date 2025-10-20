"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Heart, Code, Lightbulb, Users, Award, Coffee, Music, Camera, BookOpen } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-36 pb-0">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl text-ink leading-tight">
              <span className="font-bold">The Story Behind My Work</span> — and Why I'm Passionate About Creating
            </h1>
          </motion.div>
        </div>
      </Section>

      {/* Bento Style Image Grid */}
      <Section className="pt-2 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {/* Large image - SF (left) */}
            <div className="md:col-span-2 md:row-span-2">
              <div className="relative w-full h-96 md:h-[30rem] rounded-2xl overflow-hidden border border-border">
                <Image src="/SF.jpeg" alt="San Francisco" fill className="object-cover" />
              </div>
            </div>

            {/* Right side - Portrait (spans both rows) */}
            <div className="md:col-span-2 md:row-span-2">
              <div className="relative w-full h-96 md:h-[30rem] rounded-2xl overflow-hidden border border-border">
                <Image src="/me2.jpg" alt="Portrait" fill className="object-cover" />
                <div className="absolute inset-0 bg-white/10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Main Content with Recognition Sidebar */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a builder at heart someone who loves creating things from the ground up and turning ambitious ideas into products that make a real difference. My work sits at the intersection of engineering, design, and AI, and I'm passionate about building tools that are both technically powerful and deeply human.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've moved around quite a bit growing up across cities, countries, and chapters and that constant change has shaped how I see the world. It taught me to adapt quickly, stay curious, and find excitement in the unknown. Each new place pushed me to step out of my comfort zone, meet new people, and discover different versions of myself a mindset I carry into everything I build.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I see life and product-building the same way: a series of levels where every experiment, failure, and iteration adds up to something meaningful. Whether it's architecting intelligent systems, designing delightful user experiences, or scaling a product from prototype to launch, I care deeply about creating technology that people truly love to use.
              </p>

              {/* Beyond the Work */}
              <div className="pt-8">
                <h2 className="text-2xl font-bold text-ink mb-4">Beyond the Work</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Outside of work, I'm usually chasing new experiences — exploring a new trail, building vision boards on Pinterest, or losing track of time at the beach with my favorite playlist. I love art, nature, and anything that blends creativity with curiosity. Music is my constant companion, and I believe some of the best ideas come from long walks, cold breezes, and quiet moments under the stars.
                </p>
                
              </div>
            </motion.div>
            
            {/* Recognition Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >

              {/* Recognition Section */}
              <div>
                <h3 className="text-lg font-bold text-ink mb-4 uppercase tracking-wider">Recognition</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Best Use of Auth0</span>
                    <span className="text-xs text-muted">HackDavis '25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Best in Leveraging of Data/Computation</span>
                    <span className="text-xs text-muted">AIFS '23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Dean's Honors List</span>
                    <span className="text-xs text-muted">UC Davis '23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Architectural Drafting Regionals Silver</span>
                    <span className="text-xs text-muted">SkillsUSA '21</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Dean's Honors List</span>
                    <span className="text-xs text-muted">UC Davis '21</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Connect Award</span>
                    <span className="text-xs text-muted">FTC Robotics '20</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Engineering Technology Regionals Bronze</span>
                    <span className="text-xs text-muted">SkillsUSA '20</span>
                  </div>
                </div>
              </div>

              {/* Hobbies */}
              <div>
                <h3 className="text-lg font-bold text-ink mb-4 uppercase tracking-wider">Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Art</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Design</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Music</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Pinterest</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Vision boards</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Nature walks</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Beach</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Stargazing</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Traveling</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Adventures</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Journaling</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Cooking</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Matcha</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Deep conversations</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Playlists</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Exploring</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Running</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Sunset watching</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Creativity</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">Storytelling</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-ink mb-6">Let's Build Something Together</h2>
            <p className="text-lg text-muted mb-8 max-w-2xl">
              Have a project in mind? I'd love to hear about it and see how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button asChild size="lg">
                <Link href="/#contact">
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#projects">
                  View My Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
