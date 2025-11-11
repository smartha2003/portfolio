"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Briefcase, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured);
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const nextProject = () => {
    const newIndex = (currentProjectIndex + 1) % featuredProjects.length;
    setCurrentProjectIndex(newIndex);
    // Scroll the container to show the new project
    if (containerRef.current) {
      const projectWidth = 384; // w-96 = 384px
      const gap = 32; // gap-8 = 32px
      const scrollPosition = newIndex * (projectWidth + gap);
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  };

  const prevProject = () => {
    const newIndex = (currentProjectIndex - 1 + featuredProjects.length) % featuredProjects.length;
    setCurrentProjectIndex(newIndex);
    // Scroll the container to show the new project
    if (containerRef.current) {
      const projectWidth = 384; // w-96 = 384px
      const gap = 32; // gap-8 = 32px
      const scrollPosition = newIndex * (projectWidth + gap);
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  };

  // Add scroll event listener to update current project index
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const projectWidth = 384; // w-96 = 384px
      const gap = 32; // gap-8 = 32px
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (projectWidth + gap));
      setCurrentProjectIndex(Math.min(newIndex, featuredProjects.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [featuredProjects.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <Section
        id="projects"
        title=""
        description=""
      >
        <div className="relative">
          {/* Header with navigation */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-bold text-ink mb-2">Selected Works</h2>
              <p className="text-muted">{String(currentProjectIndex + 1).padStart(2, '0')}/{String(featuredProjects.length).padStart(2, '0')}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="w-10 h-10 p-0" onClick={prevProject}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0" onClick={nextProject}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Horizontal scrollable projects */}
          <div ref={containerRef} className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`flex-shrink-0 w-96 ${index === currentProjectIndex ? 'opacity-100' : 'opacity-60'}`}
              >
                <div className="relative group">
                  {/* Project Image/Thumbnail */}
                  <div className="h-80 rounded-2xl overflow-hidden relative bg-slate-100">
                    {project.heroImage ? (
                      <Image src={project.heroImage} alt={project.title} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                        <div className="text-6xl font-bold text-primary/40">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Details Below */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-ink mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted mb-4 leading-relaxed">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted/30 text-muted text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* <div className="flex gap-4">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/project/${project.slug}`}>
                          View Details
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredProjects.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                  index === currentProjectIndex ? 'bg-ink' : 'bg-muted'
                }`}
                onClick={() => {
                  setCurrentProjectIndex(index);
                  if (containerRef.current) {
                    const projectWidth = 384; // w-96 = 384px
                    const gap = 32; // gap-8 = 32px
                    const scrollPosition = index * (projectWidth + gap);
                    containerRef.current.scrollTo({
                      left: scrollPosition,
                      behavior: "smooth"
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>

      </Section>


      {/* Work Experience */}
      <Section
        id="experience"
        title="Experience"
        description=""
      >
        <div className="grid grid-cols-1 gap-6">
          {/* Experience 01 - UniqueHuman */}
          <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xl font-light text-muted">01</span>
              <p className="text-sm text-muted">Present</p>
            </div>
            <div className="mb-3">
              <h3 className="text-lg font-bold text-ink mb-1">Stealth Startup</h3>
              <p className="text-base font-medium text-ink">Founding Applied AI Engineer</p>
            </div>
            <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
              Building an AI-powered health insights platform using LangGraph orchestration and vector search. 
              Developing an iOS app with HealthKit integration to detect and analyze personalized health patterns.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco Bay Area</span>
              </div>
            </div>
          </Card>

          {/* Experience 02 - Machine Learning Researcher */}
          <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xl font-light text-muted">02</span>
              <p className="text-sm text-muted">2024 - Present</p>
            </div>
            <div className="mb-3">
              <h3 className="text-lg font-bold text-ink mb-1">EpiCenter for Disease Dynamics</h3>
              <p className="text-base font-medium text-ink">Machine Learning Researcher</p>
            </div>
            <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
              WildAlert: Built Moving Avg, Isolation Forest, Autoencoder time-series APIs; tests+validation, metrics; 
              Hugging Face Spaces/Gradio; modeled results in PostgreSQL.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Research</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Davis, CA</span>
              </div>
            </div>
          </Card>

          {/* Experience 03 - Founding Full-Stack Engineer */}
          <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xl font-light text-muted">03</span>
              <p className="text-sm text-muted">2025</p>
            </div>
            <div className="mb-3">
              <h3 className="text-lg font-bold text-ink mb-1">Inquisito</h3>
              <p className="text-base font-medium text-ink">Founding Full-Stack Engineer</p>
            </div>
            <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
              ASEEC Lab — Computing Research Lab. Agentic RAG for FDA device compliance; 
              generates submission-ready 510(k) documents.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Part-time</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Davis, CA</span>
              </div>
            </div>
          </Card>

          {/* Experience 04 - Coding Instructor */}
          <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xl font-light text-muted">04</span>
              <p className="text-sm text-muted">2025</p>
            </div>
            <div className="mb-3">
              <h3 className="text-lg font-bold text-ink mb-1">Coding4Youth Inc</h3>
              <p className="text-base font-medium text-ink">Coding Instructor</p>
            </div>
            <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
              Taught Python & Scratch to ages 10–12; differentiated instruction. Project-based lessons; 
              mentored students to ship projects and build problem-solving & confidence.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Part-time</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco Bay Area</span>
              </div>
            </div>
          </Card>

          {/* Additional Experience Cards - Hidden by default */}
          {showAllExperience && (
            <>
              {/* Experience 05 - Software Engineer at GBCS Group */}
              <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xl font-light text-muted">05</span>
                  <p className="text-sm text-muted">2024 - 2025</p>
                </div>
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-ink mb-1">GBCS Group</h3>
                  <p className="text-base font-medium text-ink">Software Engineer</p>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  VOOP - Built the automated client management system.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>Internship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Remote</span>
                  </div>
                </div>
              </Card>

              {/* Experience 06 - Software Engineer at Truckpedia */}
              <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xl font-light text-muted">06</span>
                  <p className="text-sm text-muted">2023</p>
                </div>
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-ink mb-1">Truckpedia</h3>
                  <p className="text-base font-medium text-ink">Software Engineer</p>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  Built a React Native app for managing trucks and package delivery.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>Part-time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Remote</span>
                  </div>
                </div>
              </Card>

              {/* Experience 07 - Machine Learning Researcher with DSLD */}
              <Card className="p-4 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xl font-light text-muted">07</span>
                  <p className="text-sm text-muted">2023</p>
                </div>
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-ink mb-1">DSLD</h3>
                  <p className="text-base font-medium text-ink">Machine Learning Researcher</p>
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm">
                  University of California Davis, California, United States · Hybrid. Contributed to dsld R package (CRAN) 
                  enabling accessible bias detection/mitigation.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>Research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Davis, CA · Hybrid</span>
                  </div>
                </div>
              </Card>
            </>
          )}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => setShowAllExperience(!showAllExperience)}
            variant="outline"
            className="flex items-center gap-2"
          >
            {showAllExperience ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                View More Experience
              </>
            )}
          </Button>
        </div>
      </Section>

      {/* Leadership & Impact */}
      <Section
        title="Leadership & Impact"
        description="Driving innovation and building communities in tech."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-left">
            {/* GDSC Image */}
            <div className="w-96 h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
          <Image
                src="/portfolio/GDSC.JPG"
                alt="GDSC Leadership"
                width={384}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">Mentored 80+ Developers</h3>
            <p className="text-muted-foreground">As VP of Tech at GDSC, led a cohort that shipped <strong>40+ real-world projects</strong> across all levels.</p>
          </div>

          <div className="text-left">
            {/* HackDavis Image */}
            <div className="w-96 h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
          <Image
                src="/portfolio/HackDavis2025.jpeg"
                alt="HackDavis 2025 Winner"
                width={384}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">Won Best Use of Auth0</h3>
            <p className="text-muted-foreground">At HackDavis, built AggiePantry, a CV-powered system recognized for <strong>customer automation</strong>.</p>
          </div>

          <div className="text-left">
            {/* CS Tutoring Image */}
            <div className="w-96 h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
          <Image
                src="/portfolio/CSTutoring.jpeg"
                alt="CS Tutoring Club"
                width={384}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">Scaled a 200+ Tutor Network</h3>
            <p className="text-muted-foreground">As VP of Marketing for the CS Tutoring Club, grew engagement by <strong>96% in 3 months</strong>.</p>
          </div>
        </div>
      </Section>



      {/* Contact */}
      <Section
        id="contact"
        title="Let's build something meaningful"
        description="I reply quickly with concrete next steps."
      >
        <div className="max-w-4xl">
          <p className="text-lg text-muted-foreground mb-8">
            Have a project in mind? Let&apos;s discuss how we can build something that makes an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="mailto:shubhadam2003@gmail.com">
                Get in Touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://docs.google.com/document/d/1LYjWbwZSab7f8I53uoPxq0WrN3xKnO4mv5IJhgcRlYQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                View Resume
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}