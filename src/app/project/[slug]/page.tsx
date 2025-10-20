import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Award, Presentation, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { projects } from "@/lib/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Shubhada Martha`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.heroImage],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {project.year && (
                    <Badge variant="secondary">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </Badge>
                  )}
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-primary to-accent">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.repo && (
                    <Button asChild className="btn-gradient-outline">
                      <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.live && (
                    <Button asChild className="btn-gradient-primary">
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Problem */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-danger/10 rounded-lg flex items-center justify-center">
                        <span className="text-danger">⚠️</span>
                      </div>
                      Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </CardContent>
                </Card>

                {/* Solution */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                        <span className="text-success">💡</span>
                      </div>
                      Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </CardContent>
                </Card>

                {/* Impact */}
                {project.impact && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.impact}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Gallery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.gallery.map((image, index) => (
                          <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${index + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Role */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Role
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {project.role}
                    </p>
                  </CardContent>
                </Card>

                {/* Tech Stack */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tech Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {project.slug === "aggie-pantry" ? (
                      <>
                        {/* Pitch Deck */}
                        {project.repo && (
                          <Button asChild className="w-full justify-start btn-gradient-outline">
                            <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                              <Presentation className="mr-2 h-4 w-4" />
                              Pitch Deck
                            </Link>
                          </Button>
                        )}
                        {/* Devpost */}
                        <Button asChild className="w-full justify-start btn-gradient-outline">
                          <Link href="https://devpost.com/software/the-aggie-pantry" target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            Devpost
                          </Link>
                        </Button>
                        {/* Live Demo */}
                        {project.live && (
                          <Button asChild className="w-full justify-start btn-gradient-primary">
                            <Link href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Link>
                          </Button>
                        )}
                      </>
                    ) : (
                      <>
                        {project.repo && (
                          <Button asChild className="w-full justify-start btn-gradient-outline">
                            <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              View Source Code
                            </Link>
                          </Button>
                        )}
                        {project.live && (
                          <Button asChild className="w-full justify-start btn-gradient-primary">
                            <Link href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Link>
                          </Button>
                        )}
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {prevProject ? (
                <Button asChild className="w-full sm:w-auto btn-gradient-outline">
                  <Link href={`/project/${prevProject.slug}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {prevProject.title}
                  </Link>
                </Button>
              ) : (
                <div />
              )}

              <Button asChild className="btn-gradient-accent">
                <Link href="/projects">All Projects</Link>
              </Button>

              {nextProject ? (
                <Button asChild className="w-full sm:w-auto btn-gradient-outline">
                  <Link href={`/project/${nextProject.slug}`}>
                    {nextProject.title}
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Link>
                </Button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
