"use client";

import { motion } from "framer-motion";
import { DesignCard } from "@/components/DesignCard";
import { Section } from "@/components/Section";
import { designCaseStudies } from "@/lib/design";

export default function DesignPage() {
  return (
    <div className="min-h-screen pt-16">
      <Section
        title="Design & Product Work"
        description="User journeys, onboarding flows, and high-fidelity systems that improve adoption and user experience."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {designCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <DesignCard caseStudy={caseStudy} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Interested in my technical work?</h3>
            <p className="text-muted-foreground mb-4">
              Check out my full-stack projects and AI implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 btn-gradient-primary rounded-lg font-medium transition-all duration-300"
              >
                View All Projects
              </motion.a>
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 btn-gradient-outline rounded-lg font-medium transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
