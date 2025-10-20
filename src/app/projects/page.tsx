"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

const filterTags = [
  "All",
  "AI",
  "Full-stack",
  "Mobile",
  "Health",
  "Civic",
  "Computer Vision",
  "Backend",
  "Compliance",
  "Healthcare",
  "ML",
  "Python",
  "Data Science",
  "Food Tech",
  "LangChain"
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

    // Filter by tag
    if (selectedTag !== "All") {
      filtered = filtered.filter(project =>
        project.tags.includes(selectedTag) || project.stack.includes(selectedTag)
      );
    }

    return filtered;
  }, [searchQuery, selectedTag]);

  return (
    <div className="min-h-screen pt-16">
      <Section
        title="All Projects"
        description="A comprehensive view of my work across AI, full-stack development, and product design."
      >
        {/* Search and Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative mb-8 max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects, technologies, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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
          <div className="text-center text-muted-foreground mb-8">
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
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-2">Looking for my best work?</h3>
              <p className="text-muted-foreground mb-4">
                Check out my featured projects on the homepage for a curated selection.
              </p>
              <Button asChild>
                <a href="/#projects">View Featured Projects</a>
              </Button>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
