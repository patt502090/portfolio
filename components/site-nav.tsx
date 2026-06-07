import { Download } from "lucide-react";
import { profile } from "@/lib/content";

const links = [
  { label: "Engineering Records", href: "#work" },
  { label: "Public Proof", href: "#proof" },
  { label: "Competency Index", href: "#skills" },
  { label: "Evidence Repository", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

export function SiteNav() {
  return (
    <header className="site-header">
      <div className="agency-strip">
        <span>Engineering Portfolio Record</span>
        <span>Prince of Songkla University</span>
      </div>
      <div className="site-masthead">
        <a className="nav-brand" href="#top" aria-label="Back to top">
          PS
        </a>
        <div>
          <p>Computer Engineering Portfolio Record</p>
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
        </div>
        <a className="nav-resume" href={profile.resume} download>
          <Download size={15} aria-hidden="true" />
          Resume PDF
        </a>
      </div>
      <nav className="site-tabs" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
