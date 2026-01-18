"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact" | "detailed";
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isCompact = variant === "compact";
  // const isDetailed = variant === "detailed";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col group hover:shadow-lg transition-shadow duration-300 pt-0 px-0">
        {/* Hero Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-xl">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {project.year && (
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-white/90 text-black">
                <Calendar className="w-3 h-3 mr-1" />
                {project.year}
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.summary}
          </p>
        </CardHeader>

        <CardContent className="flex-1 pb-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, isCompact ? 3 : 6).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stack Icons (simplified for now) */}
          {!isCompact && (
            <div className="flex flex-wrap gap-1 mb-4">
              {project.stack.slice(0, 6).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          {/* Impact */}
          {project.impact && !isCompact && (
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Impact:</strong> {project.impact}
            </div>
          )}
        </CardContent>

        <CardFooter className="pt-0">
          <div className="flex gap-2 w-full">
            {/* <Button asChild className="flex-1">
              <Link href={`/project/${project.slug}`}>
                Details
              </Link>
            </Button> */}
            {project.repo && (
              <Button variant="outline" size="sm" asChild>
                <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
            )}
            {project.live && (
              <Button variant="outline" size="sm" asChild>
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
