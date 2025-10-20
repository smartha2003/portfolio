"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudy } from "@/lib/types";

interface DesignCardProps {
  caseStudy: CaseStudy;
}

export function DesignCard({ caseStudy }: DesignCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Cover Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <Image
            src={caseStudy.cover}
            alt={caseStudy.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Overlay Content */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-2">
              {caseStudy.year && (
                <Badge variant="secondary" className="bg-white/90 text-black">
                  <Calendar className="w-3 h-3 mr-1" />
                  {caseStudy.year}
                </Badge>
              )}
              <Badge variant="outline" className="bg-white/90 text-black border-white/50">
                {caseStudy.role}
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {caseStudy.title}
            </h3>
            <p className="text-white/90 text-sm">
              {caseStudy.context}
            </p>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Challenge */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
              <p className="text-sm text-muted-foreground">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Outcome */}
            {caseStudy.outcome && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                <p className="text-sm text-success font-medium">
                  {caseStudy.outcome}
                </p>
              </div>
            )}

            {/* Tools */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">Tools</h4>
              <div className="flex flex-wrap gap-1">
                {caseStudy.tools.map((tool) => (
                  <Badge key={tool} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            {/* <Button asChild className="w-full group-hover:bg-primary-600 transition-colors">
              <Link href={`/design/${caseStudy.slug}`}>
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
