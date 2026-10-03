import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { PortfolioSkills } from "@/components/portfolio-skills";
import { PortfolioPublications, type ResearchPublication } from "@/components/portfolio-publications";
import motionResults from "../assets/motion-results.png.asset.json";
import irisResults from "../assets/iris-results.png.asset.json";

import resumeAsset from "../assets/neeraj-resume.pdf.asset.json";
import carrerosVideo from "../assets/carreros.mp4.asset.json";
import traceVideo from "../assets/trace.mp4.asset.json";
import valiVideo from "../assets/vali.mp4.asset.json";
import skyyardVideo from "../assets/skyyard.mp4.asset.json";
import microsoftCert from "../assets/microsoft-learn.pdf.asset.json";
import oracleCert from "../assets/oracle-certificate.pdf.asset.json";
import ericssonLogo from "../assets/ericsson.svg.asset.json";
import ludayLogo from "../assets/luday.png.asset.json";
import ubloxLogo from "../assets/ublox.svg.asset.json";
import bthLogo from "../assets/bth.svg.asset.json";
import jntukLogo from "../assets/jntuk.png.asset.json";
import githubLogo from "../assets/github.png.asset.json";
import linkedinLogo from "../assets/linkedin.svg.asset.json";
import hackerrankLogo from "../assets/hackerrank.png.asset.json";
import microsoftBadge from "../assets/microsoft-badge.png.asset.json";
import oracleBadge from "../assets/oracle-badge.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neeraj Bala — Full-Stack AI Engineer" },
      { name: "description", content: "Selected software, AI and cloud engineering work, experience and a professional recommendation for Neeraj Bala in Stockholm." },
      { property: "og:title", content: "Neeraj Bala — Full-Stack AI Engineer" },
      { property: "og:description", content: "Project demonstrations, client work and engineering experience by Neeraj Bala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const experience = [
  { dates: "2025", company: "Ericsson", role: "DevOps & Test Developer Intern", detail: "Built GitLab CI/CD pipelines and automated hardware-dependent software testing with Docker, C# and LabVIEW.", logo: ericssonLogo.url, focus: "DevOps · Test automation" },
  { dates: "2022—23", company: "U-Blox", role: "Machine Learning Intern", detail: "Evaluated anomaly detection models on routing data using Python, Power BI and Tableau.", logo: ubloxLogo.url, focus: "Machine learning · Data" },
  { dates: "2024", company: "Luday SE", role: "Full Stack Developer Intern", detail: "Helped ship a production MVP; API improvements reduced data latency by 25% and review practices reduced post-release bugs by 30%.", logo: ludayLogo.url, focus: "Full-stack development" },
  { dates: "2026—Now", company: "Freelance", role: "Full-Stack AI Engineer", detail: "Shipped an e-commerce platform and AI inventory workflow; now developing real-time yard management software.", focus: "Client work · Product delivery" },
];

const caseStudies = [
  { type: "Client work · Live at valistudio.se", title: "VALI Studio — e-commerce platform", detail: "A production storefront for a Swedish beauty store with ~1,000 in-stock products from 22+ brands. AI search and a shade finder up front; a 16-tab admin with an AI invoice pipeline that cross-checks supplier invoices with two models. Stripe checkout on Supabase — built solo, from schema to deploy.", tags: ["React 19", "Stripe", "Supabase", "AI invoices"], video: valiVideo.url, featured: true },
  { type: "Client work · Live at skyyard-yms.vercel.app", title: "SkyYard — yard management system", detail: "Tracks every truck from gate arrival to dock to exit across six role-based interfaces — guard, hostler, admin, superadmin, carrier and driver. Live Mapbox map, drag-and-drop dock scheduling, kiosk check-in and Socket.IO updates. 176/176 tests passing.", tags: ["React 19", "Mapbox", "Socket.IO", "Express"], video: skyyardVideo.url, featured: true },
  { type: "Personal project", title: "CareerOS — AI job search platform", detail: "EU/Sweden-focused job search automation: discovers roles from 350+ sources, scores them against your profile with LLMs, writes tailored resumes and cover letters, then auto-applies through real ATS forms with a human-in-the-loop confirm step.", tags: ["Next.js 15", "FastAPI", "Celery", "Playwright"], video: carrerosVideo.url },
  { type: "Personal project", title: "Job Tracker", detail: "Upload a JD and CVs; AI extracts company, role and location, and a cover-letter tool fills a LaTeX template, compiles it to PDF and saves the application only after approval. Flask, Neon Postgres and Google Drive, deployed on Render.", tags: ["Flask", "PostgreSQL", "LLM", "LaTeX"], video: traceVideo.url },
];

const certifications = [
  { title: "Microsoft Certified: SQL AI Developer Associate", issuer: "Microsoft", dates: "Earned Sep 2026 · Expires Oct 2027", href: microsoftCert.url, badge: microsoftBadge.url },
  { title: "OCI 2025 Certified Generative AI Professional", issuer: "Oracle", dates: "Earned Oct 2025", href: oracleCert.url, badge: oracleBadge.url },
];

const publications: ResearchPublication[] = [
  {
    title: "Adapting MotionBERT for Sports Motion Analysis: Extraction, Comparison, and Generation of Continuous Poses",
    degree: "Master’s thesis", year: "2026",
    summary: "Adapted a pretrained motion transformer to 654 clips across five sports. Built a skeleton-remapping pipeline and evaluated pose accuracy, movement continuity and biomechanical indicators.",
    finding: "98.1% lower pose error than the zero-shot baseline; 75.6% lower than biGRU. High-frequency jitter remains a limitation, and the system is not a medical diagnostic tool.",
    methods: ["MotionBERT", "SportsPose", "3D pose estimation", "Temporal evaluation"],
    attribution: "Neeraj Bala · Supervisor: Shahryar Eivazzadeh · 106 pages",
    href: "https://urn.kb.se/resolve?urn=urn:nbn:se:bth-30070",
    reportUrl: "https://www.diva-portal.org/smash/get/diva2:2082510/FULLTEXT01.pdf",
    image: motionResults.url,
    imageAlt: "Pose reconstruction error: zero-shot MotionBERT 0.9670, random-init DSTformer 0.9064, biGRU 0.0747, fine-tuned MotionBERT 0.0187.",
    caption: "Reconstruction comparison, redrawn from thesis Table 5.3. MPJPE is reported in torso-normalised units; lower is better.",
  },
  {
    title: "Comparative Analysis of Machine Learning Algorithms for Biometric Iris Recognition Systems",
    degree: "Bachelor’s thesis", year: "2023",
    summary: "Compared CNN, SVM and SVM with Hamming distance for biometric iris recognition, combining a literature review with experiments on iris images and a 60/20/20 train–test–validation split.",
    finding: "CNN achieved 98.7% accuracy, compared with 86% for SVM and 80% for SVM with Hamming distance, on the evaluated dataset.",
    methods: ["Computer vision", "CNN", "SVM", "Feature extraction"],
    attribution: "Neeraj Bala & Vishnu Kiran Dabbara · Supervisor: Suejb Memeti",
    href: "https://urn.kb.se/resolve?urn=urn:nbn:se:bth-25200",
    reportUrl: "https://www.diva-portal.org/smash/get/diva2:1784630/FULLTEXT02",
    image: irisResults.url,
    imageAlt: "Iris recognition accuracy: CNN 98.7%, SVM 86%, SVM with Hamming distance 80%.",
    caption: "Algorithm comparison, redrawn from thesis Table 5.3. These are the report’s experimental results, not a general benchmark.",
  },
];

function Portfolio() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => setProgress((window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="portfolio-v2 min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
        <nav className="nav-pill flex w-full max-w-6xl items-center justify-between px-5 py-2.5">
          <a href="#top" className="text-sm font-semibold tracking-tight">Neeraj Bala</a>
          <div className="hidden items-center gap-6 text-[13px] font-medium text-muted-foreground sm:flex">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#proof" className="hover:text-foreground transition-colors">Proof</a>
            <a href="#education" className="hover:text-foreground transition-colors">Education</a>
          </div>
          <a href="mailto:neerajnani211@gmail.com" className="link-sweep text-sm font-medium">Contact <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 lg:px-10">

        <section className="reveal is-visible">
          <span className="availability"><span /> Open to engineering roles</span>
          <h1 className="mt-6 text-[clamp(2.2rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight">Neeraj Bala</h1>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">Full-Stack AI Engineer · M.Sc. Computer Science · Stockholm</p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
            <a href="#work" className="link-sweep">See my work <ArrowDown size={14} /></a>
            <a href={resumeAsset.url} download="Neeraj_Bala_Resume.pdf" className="link-sweep">Résumé <Download size={14} /></a>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground"><MapPin size={14} /> Stockholm, Sweden</span>
          </div>
        </section>

        <section id="work" className="mt-20 scroll-mt-28 sm:mt-28">
          <div data-reveal className="reveal flex items-end justify-between border-b border-border pb-5">
            <h2 className="text-xl font-semibold tracking-tight">Selected work</h2>
            <span className="section-label">01 — Case studies</span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {caseStudies.map((project, i) => (
              <CaseCard key={project.title} project={project} index={i} side={i % 2 === 0 ? "left" : "right"} />
            ))}
          </div>
        </section>

        <section id="experience" className="mt-24 scroll-mt-28 sm:mt-32">
          <div data-reveal className="reveal flex items-end justify-between border-b border-border pb-5">
            <h2 className="text-xl font-semibold">Experience</h2>
            <span className="section-label">02 — Internships & freelance</span>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {experience.map((item, i) => (
              <article key={item.company} data-reveal style={{ transitionDelay: `${i * 70}ms` }} className="card-soft reveal flex min-h-60 flex-col p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-card p-2">
                    {"logo" in item && item.logo ? <img src={item.logo} alt={`${item.company} logo`} className="h-full w-full object-contain" loading="lazy" /> : <span className="text-base font-semibold text-primary">NB</span>}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{item.dates}</span>
                </div>
                <div className="mt-5">
                  <p className="section-label">{item.focus}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.company}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground">{item.role}</p>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="proof" className="mt-24 scroll-mt-28 sm:mt-32">
          <div data-reveal className="reveal flex flex-wrap items-end justify-between gap-2 border-b border-border pb-5">
            <h2 className="text-xl font-semibold tracking-tight">Professional proof</h2>
            <span className="section-label">03 — Profiles & recommendation</span>
          </div>
          <div className="mt-8">
            <div data-reveal className="reveal">
              <h3 className="section-label">Profiles</h3>
              <div className="mt-4 grid gap-x-10 divide-y divide-border md:grid-cols-3 md:divide-y-0">
                <ProfileLink logo={githubLogo.url} title="GitHub" detail="Source code and selected repositories" href="https://github.com/Grounder211" />
                <ProfileLink logo={linkedinLogo.url} title="LinkedIn" detail="Experience and professional network" href="https://www.linkedin.com/in/balaneeraj/" />
                <ProfileLink logo={hackerrankLogo.url} title="HackerRank" detail="Coding profile and problem solving" href="https://www.hackerrank.com/profile/NeerajBala" />
              </div>
            </div>
          </div>
          <div data-reveal className="reveal mt-10 border-t border-border pt-8">
            <h3 className="section-label">Recommendation</h3>
            <blockquote className="mt-5 max-w-3xl border-l-2 border-primary pl-5 sm:pl-7">
              <p className="text-base leading-relaxed text-foreground sm:text-lg">“Neeraj is a hard working guy. He's honest about what he can and can't and would do anything to find answers to things he didn't know.”</p>
              <footer className="mt-5 text-sm">
                <span className="font-semibold">Hari Vigneswaran</span>
                <span className="mt-1 block text-muted-foreground">Senior Product Manager, IoT & Cybersecurity · Managed Neeraj directly · January 19, 2026</span>
              </footer>
            </blockquote>
          </div>
        </section>

        <section id="education" className="mt-24 scroll-mt-28 sm:mt-32">
          <div data-reveal className="reveal flex items-end justify-between border-b border-border pb-5">
            <h2 className="text-xl font-semibold tracking-tight">Education & technical depth</h2>
            <span className="section-label">04 — Study & toolkit</span>
          </div>
          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div data-reveal className="reveal card-soft p-7">
              <div className="timeline">
                <Education degree="M.Sc. Computer Science" school="Blekinge Institute of Technology, Sweden" dates="2024—2026" detail="Thesis: Adapting MotionBERT for Sports Motion Analysis." logo={bthLogo.url} />
                <Education degree="B.Tech. Computer Science" school="Blekinge Institute of Technology, Sweden" dates="2022—2024" logo={bthLogo.url} />
                <Education degree="B.Tech. Computer Science & Engineering" school="JNTU Kakinada, India" dates="2018—2022" logo={jntukLogo.url} />
              </div>
            </div>
            <PortfolioSkills />
          </div>
          <PortfolioPublications publications={publications} />
        </section>

        <section id="certifications" className="mt-24 scroll-mt-28 sm:mt-32">
          <div data-reveal className="reveal flex items-end justify-between border-b border-border pb-5">
            <h2 className="text-xl font-semibold tracking-tight">Certifications</h2>
            <span className="section-label">05 — Verified credentials</span>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <a key={cert.title} href={cert.href} target="_blank" rel="noreferrer" data-reveal style={{ transitionDelay: `${i * 90}ms` }} className={`cert-card block p-6 ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}>
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-md border border-border bg-card p-1.5"><img src={cert.badge} alt={`${cert.issuer} certification badge`} loading="lazy" className="h-full w-full object-contain" /></span>
                  <span className="cert-badge">Verified</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-snug">{cert.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{cert.issuer} · {cert.dates}</p>
                <span className="link-sweep mt-4 text-xs font-medium">View certificate <ArrowUpRight size={12} /></span>
              </a>
            ))}
          </div>
        </section>

        <section data-reveal className="card-soft reveal mt-24 p-10 text-center sm:mt-32 sm:p-14">
          <p className="section-label">Let’s work together</p>
          <h2 className="mx-auto mt-4 max-w-md text-2xl font-semibold leading-snug tracking-tight">Looking for an engineer who can connect AI research to real products?</h2>
          <a href="mailto:neerajnani211@gmail.com" className="link-sweep mt-7 inline-flex items-center gap-2 text-lg font-medium">neerajnani211@gmail.com <ArrowUpRight size={16} /></a>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8 lg:px-10">
          <span>© 2026 Neeraj Bala</span>
          <span>Stockholm, Sweden · +46 760 469 175</span>
        </div>
      </footer>
    </div>
  );
}

function CaseCard({ project, index, side = "left" }: { project: typeof caseStudies[number]; index: number; side?: "left" | "right" }) {
  return (
    <article data-reveal style={{ transitionDelay: `${(index % 2) * 90}ms` }} className={`group ${side === "left" ? "reveal-left" : "reveal-right"}`}>
      <div className="card-soft overflow-hidden">
        <div className="video-frame">
          {"video" in project && project.video ? (
            <video src={project.video} controls preload="metadata" playsInline className="h-full w-full object-cover" />
          ) : (
            <div className={`video-art video-art-${index}`}><span>{String(index + 1).padStart(2, "0")}</span></div>
          )}
        </div>
        <div className="p-6 sm:p-7">
          <p className="section-label">{project.type}</p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.detail}</p>
          <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}</div>
        </div>
      </div>
    </article>
  );
}

function ProfileLink({ logo, title, detail, href }: { logo: string; title: string; detail: string; href?: string }) {
  const content = <><span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-card p-2"><img src={logo} alt={`${title} logo`} loading="lazy" className="h-full w-full object-contain" /></span><span className="min-w-0 flex-1"><strong className="block text-sm">{title}</strong><span className="text-xs text-muted-foreground">{detail}</span></span>{href && <ArrowUpRight size={15} className="shrink-0" />}</>;
  return href ? <a className="row-link" href={href} target="_blank" rel="noreferrer">{content}</a> : <div className="row-link opacity-60">{content}</div>;
}
function Education({ degree, school, dates, detail, logo }: { degree: string; school: string; dates: string; detail?: string; logo: string }) { return <div className="timeline-item grid grid-cols-[1fr_auto] gap-3"><div className="flex min-w-0 items-start gap-3"><span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-card p-1"><img src={logo} alt={`${school} logo`} loading="lazy" className={`h-full w-full object-contain ${logo === bthLogo.url ? "brightness-0" : ""}`} /></span><div><h3 className="text-sm font-semibold">{degree}</h3><p className="mt-1 text-sm text-muted-foreground">{school}</p>{detail && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{detail}</p>}</div></div><span className="font-mono text-[11px] text-muted-foreground">{dates}</span></div>; }
