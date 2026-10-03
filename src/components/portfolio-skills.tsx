import { BrainCircuit, Cloud, Code2, Database, ArrowUpRight } from "lucide-react";

const skillGroups = [
  { title: "AI engineering", icon: BrainCircuit, skills: ["Python", "AI agents", "RAG", "Vector databases", "FastAPI"], proof: "CareerOS · AI search & automation", href: "#work" },
  { title: "Full-stack development", icon: Code2, skills: ["TypeScript", "React", "Next.js", "Express", "Socket.IO"], proof: "VALI Studio · SkyYard", href: "#work" },
  { title: "Cloud & delivery", icon: Cloud, skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD"], proof: "Ericsson · CI/CD & test automation", href: "#experience" },
  { title: "Data & quality", icon: Database, skills: ["SQL", "PostgreSQL", "MySQL", "Supabase", "Playwright"], proof: "Job Tracker · CareerOS", href: "#work" },
];

export function PortfolioSkills() {
  return (
    <div data-reveal className="reveal min-w-0 lg:pl-5" id="skills">
      <div className="flex items-baseline justify-between gap-3 border-b border-border pb-4">
        <h3 className="text-base font-semibold">Technical skills</h3>
        <span className="section-label">Applied toolkit</span>
      </div>
      <div className="divide-y divide-border">
        {skillGroups.map(({ title, icon: Icon, skills, proof, href }) => (
          <div key={title} className="skill-row py-5">
            <div className="flex items-center gap-2.5">
              <Icon size={17} className="shrink-0 text-primary" aria-hidden="true" />
              <h4 className="text-sm font-semibold">{title}</h4>
            </div>
            <ul className="skill-list mt-3 flex flex-wrap gap-x-3 gap-y-2" aria-label={title}>
              {skills.map((skill) => <li key={skill} className="text-[13px] leading-relaxed">{skill}</li>)}
            </ul>
            <a href={href} className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary">{proof}<ArrowUpRight size={12} aria-hidden="true" /></a>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-4">
        <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground">Also worked with</span> · C++ · .NET · Angular · Flask · Celery</p>
      </div>
    </div>
  );
}