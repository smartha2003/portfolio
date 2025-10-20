import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/smartha2003",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/shubhada-martha/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:shubhadam2003@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-ink mb-2">
              Shubhada Martha
            </h3>
            <p className="text-sm text-muted">
              Full-Stack & Agentic AI Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 text-muted hover:text-primary transition-colors duration-200"
              >
                <link.icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted">
            © {currentYear} Shubhada Martha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
