"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

const filterTags = [
  "All",
  "Artificial Intelligence",
  "Machine Learning",
  "Full Stack",
  "HealthTech",
  "Applied ML",
  "LLM Applications",
  "Python",
  "Backend Development"
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.stack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by tag with mappings for user-friendly filter names
    if (selectedTag !== "All") {
      filtered = filtered.filter(project => {
        const tagLower = selectedTag.toLowerCase();
        const projectTagsLower = project.tags.map(t => t.toLowerCase());
        const projectStackLower = project.stack.map(s => s.toLowerCase());
        
        // Map filter tags to actual project tags/stack
        if (selectedTag === "Artificial Intelligence") {
          return projectTagsLower.includes("ai") || projectStackLower.some(s => s.includes("ai") || s.includes("intelligence"));
        }
        if (selectedTag === "Machine Learning") {
          return projectTagsLower.includes("ml") || projectStackLower.some(s => s.includes("machine learning") || s.includes("ml"));
        }
        if (selectedTag === "Full Stack") {
          return projectTagsLower.some(t => t.includes("full") && t.includes("stack")) || 
                 projectTagsLower.includes("full-stack") ||
                 projectTagsLower.includes("fullstack");
        }
        if (selectedTag === "HealthTech") {
          return projectTagsLower.some(t => t.includes("health")) || 
                 project.summary.toLowerCase().includes("health") ||
                 project.stack.some(s => s.toLowerCase().includes("health"));
        }
        if (selectedTag === "Applied ML") {
          return projectTagsLower.includes("ml") || projectTagsLower.includes("ai") ||
                 projectStackLower.some(s => s.includes("machine learning") || s.includes("tensorflow") || s.includes("scikit"));
        }
        if (selectedTag === "LLM Applications") {
          return projectTagsLower.includes("langchain") || projectStackLower.includes("langchain") ||
                 project.summary.toLowerCase().includes("llm") || project.summary.toLowerCase().includes("langchain");
        }
        if (selectedTag === "Python") {
          return projectStackLower.includes("python");
        }
        if (selectedTag === "Backend Development") {
          return projectStackLower.some(s => s.includes("backend") || s.includes("node") || s.includes("django") || 
                 s.includes("express") || s.includes("fastapi") || s.includes("api"));
        }
        
        // Fallback to exact match
        return projectTagsLower.includes(tagLower) || projectStackLower.includes(tagLower);
      });
    }

    return filtered;
  }, [searchQuery, selectedTag]);

  return (
    <div className="min-h-screen pt-16">
      <Section
        title=""
        description=""
      >
        {/* Search and Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative mb-6 max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects, technologies, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11"
            />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {filterTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className="transition-all duration-200"
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-muted mb-8">
            Showing {filteredProjects.length} of {projects.length} projects
            {searchQuery && ` for "${searchQuery}"`}
            {selectedTag !== "All" && ` in ${selectedTag}`}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} variant="default" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedTag("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Featured Projects CTA */}
        {filteredProjects.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-white border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-2">Looking for my best work?</h3>
              <p className="text-muted-foreground mb-4">
                Check out my featured projects on the homepage for a curated selection.
              </p>
              <Button asChild>
                <Link href="/#projects">View Featured Projects</Link>
              </Button>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
