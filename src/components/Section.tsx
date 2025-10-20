"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-24 ${className}`}
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || eyebrow || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-left mb-12 lg:mb-16"
        >
            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-sm font-medium text-primary mb-2 uppercase tracking-wider"
              >
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-lg text-muted-foreground max-w-3xl"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
