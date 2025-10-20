import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { designCaseStudies } from "@/lib/design";

interface DesignPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return designCaseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: DesignPageProps): Promise<Metadata> {
  const caseStudy = designCaseStudies.find((c) => c.slug === params.slug);
  
  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} - Design Case Study`,
    description: `Design case study: ${caseStudy.challenge}`,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.challenge,
      images: [caseStudy.cover],
    },
  };
}

export default function DesignCaseStudyPage({ params }: DesignPageProps) {
  const caseStudy = designCaseStudies.find((c) => c.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  const currentIndex = designCaseStudies.findIndex((c) => c.slug === params.slug);
  const prevCaseStudy = currentIndex > 0 ? designCaseStudies[currentIndex - 1] : null;
  const nextCaseStudy = currentIndex < designCaseStudies.length - 1 ? designCaseStudies[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/design">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Design Work
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {caseStudy.year && (
                    <Badge variant="secondary">
                      <Calendar className="w-3 h-3 mr-1" />
                      {caseStudy.year}
                    </Badge>
                  )}
                  <Badge className="bg-gradient-to-r from-accent to-primary">
                    {caseStudy.role}
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {caseStudy.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {caseStudy.context}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {caseStudy.tools.map((tool) => (
                    <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="relative">
                <Image
                  src={caseStudy.cover}
                  alt={caseStudy.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Challenge */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-danger/10 rounded-lg flex items-center justify-center">
                        <Target className="h-4 w-4 text-danger" />
                      </div>
                      Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </CardContent>
                </Card>

                {/* Approach */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary">🎯</span>
                      </div>
                      Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {caseStudy.approach.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary text-sm font-semibold">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Outcome */}
                {caseStudy.outcome && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-success" />
                        </div>
                        Outcome
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-success font-semibold text-lg">
                        {caseStudy.outcome}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Gallery */}
                {caseStudy.gallery && caseStudy.gallery.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Process & Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {caseStudy.gallery.map((image, index) => (
                          <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                              src={image}
                              alt={`${caseStudy.title} process ${index + 1}`}
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
                {/* Role & Context */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Role & Context
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Role</h4>
                      <p className="text-sm">{caseStudy.role}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Context</h4>
                      <p className="text-sm">{caseStudy.context}</p>
                    </div>
                    {caseStudy.year && (
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">Year</h4>
                        <p className="text-sm">{caseStudy.year}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Tools Used */}
                <Card>
                  <CardHeader>
                    <CardTitle>Tools Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
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
              {prevCaseStudy ? (
                <Button asChild className="w-full sm:w-auto btn-gradient-outline">
                  <Link href={`/design/${prevCaseStudy.slug}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {prevCaseStudy.title}
                  </Link>
                </Button>
              ) : (
                <div />
              )}

              <Button asChild className="btn-gradient-accent">
                <Link href="/design">All Design Work</Link>
              </Button>

              {nextCaseStudy ? (
                <Button asChild className="w-full sm:w-auto btn-gradient-outline">
                  <Link href={`/design/${nextCaseStudy.slug}`}>
                    {nextCaseStudy.title}
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
