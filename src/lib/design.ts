import { CaseStudy } from "./types";

export const designCaseStudies: CaseStudy[] = [
  {
    slug: "uh-onboarding",
    title: "iOS Onboarding Redesign",
    role: "Product Designer / Design Engineer",
    context: "UniqueHuman",
    challenge: "Permission drop-offs during HealthKit connect; unclear value proposition; too many steps.",
    approach: [
      "Heuristic review of existing flow",
      "Flow simplification and progressive disclosure",
      "Permission education screens",
      "Microcopy optimization for trust and clarity",
      "Visual guide for HealthKit permissions"
    ],
    outcome: "+22% completion; −35% activation time",
    cover: "/images/design/onboarding/cover.png",
    gallery: [
      "/images/design/onboarding/flow.png",
      "/images/design/onboarding/wireframes.png",
      "/images/design/onboarding/hifi-1.png",
      "/images/design/onboarding/hifi-2.png",
      "/images/design/onboarding/before-after.png"
    ],
    tools: ["Figma", "SwiftUI", "Principle"],
    year: "2025",
  },
  {
    slug: "pantry-dashboard",
    title: "Volunteer Dashboard Design",
    role: "UX Designer / Frontend Developer",
    context: "Aggie Pantry",
    challenge: "Volunteers needed better tools to manage inventory and track donations efficiently.",
    approach: [
      "User research with pantry volunteers",
      "Information architecture redesign",
      "Data visualization for inventory trends",
      "Mobile-first responsive design",
      "Accessibility considerations for diverse users"
    ],
    outcome: "Improved volunteer efficiency; better inventory tracking",
    cover: "/images/design/pantry-dashboard/cover.png",
    gallery: [
      "/images/design/pantry-dashboard/user-flow.png",
      "/images/design/pantry-dashboard/wireframes.png",
      "/images/design/pantry-dashboard/dashboard.png",
      "/images/design/pantry-dashboard/mobile.png"
    ],
    tools: ["Figma", "React", "Chart.js"],
    year: "2025",
  },
  {
    slug: "ai-interface-patterns",
    title: "AI Interface Design Patterns",
    role: "Design Engineer",
    context: "Personal Research",
    challenge: "Designing intuitive interfaces for AI-powered applications requires new interaction patterns.",
    approach: [
      "Research on AI interaction patterns",
      "Component library for AI interfaces",
      "Loading states and feedback design",
      "Error handling and edge cases",
      "Accessibility for AI features"
    ],
    outcome: "Reusable component library; improved user confidence in AI features",
    cover: "/images/design/ai-patterns/cover.png",
    gallery: [
      "/images/design/ai-patterns/patterns.png",
      "/images/design/ai-patterns/components.png",
      "/images/design/ai-patterns/states.png"
    ],
    tools: ["Figma", "React", "Storybook"],
    year: "2024",
  },
];
