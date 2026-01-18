"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20"
            >
              <Image
                src="/portfolio/avatar.png"
                alt="Shubhada Martha"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </Link>

          {/* Hamburger menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 p-0 flex items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center"
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center"
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Navigation Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-16 right-8 bg-white/80 backdrop-blur-md border border-white/20 rounded-lg shadow-lg py-2 min-w-[200px]"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-2">
              <Link
                href="https://docs.google.com/document/d/1LYjWbwZSab7f8I53uoPxq0WrN3xKnO4mv5IJhgcRlYQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-primary hover:bg-primary/10 transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
