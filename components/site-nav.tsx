import { Download } from "lucide-react";
import { profile } from "@/lib/content";

const links = [
  { label: "Work", href: "#work" },
  { label: "Proof", href: "#proof" },
  { label: "Skills", href: "#skills" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

export function SiteNav() {
  return (
    <header className="site-nav">
      <a className="nav-brand" href="#top" aria-label="Back to top">
        PS
      </a>
      <nav aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav-resume" href={profile.resume} download>
        <Download size={16} aria-hidden="true" />
        Resume
      </a>
    </header>
  );
}
