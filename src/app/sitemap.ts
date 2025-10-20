import { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'
import { designCaseStudies } from '@/lib/design'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shubhadamartha.dev'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/design`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Design case study pages
  const designPages = designCaseStudies.map((caseStudy) => ({
    url: `${baseUrl}/design/${caseStudy.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...projectPages, ...designPages]
}
